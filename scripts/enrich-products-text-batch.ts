#!/usr/bin/env tsx

import * as fs from "fs";
import * as path from "path";
import mongoose from "mongoose";
import connectDB from "../src/lib/mongodb";
import Product from "../src/models/Product";

const SOURCE_URL = "https://vietlicense.org/san-pham";
const DELAY_MS_MIN = 1000;
const DELAY_MS_MAX = 2000;

interface ParsedData {
  name?: string;
  category?: string;
  subcategory?: string;
  shortDescription?: string;
  currency?: string;
  badges?: Array<{ label: string; variant: string }>;
  licenseType?: string;
  activationType?: string;
  deliveryType?: {
    form: string;
    physicalItems: string[];
    digitalItems: string[];
    notes: string[];
  };
  warranty?: {
    duration: string;
    transferable: boolean | null;
    transferNote: string;
  };
  support?: {
    installGuide: boolean | null;
    activationHelp: boolean | null;
    upgradeConsult: boolean | null;
    channels: string[];
    details: string[];
  };
  suitableFor?: string[];
  highlights?: Array<{ icon: string; text: string }>;
  descriptionSections?: Array<{
    title: string;
    content: string;
    bullets?: string[];
    specTable?: Array<{ label: string; value: string }>;
  }>;
  specifications?: Array<{ label: string; value: string }>;
  faqs?: Array<{ question: string; answer: string }>;
  relatedProductSlugs?: string[];
  seo?: { title: string; description: string; keywords: string };
  cta?: {
    primary: { label: string; href: string; channel: string };
    secondary: { label: string; href: string; channel: string };
    contacts: Array<{ channel: string; name: string; href: string }>;
    trustBadges: string[];
  };
  price?: {
    retail: number | null;
    retailLabel: string;
    bulk: number | null;
    bulkLabel: string;
    bulkMinQty: number | null;
    bulkNote: string;
    vatNote: string;
    largeQtyNote: string;
  };
  listDescription?: string;
  cardBadges?: string[];
}

function isEmpty(value: unknown): boolean {
  if (value === null || value === undefined) return true;
  if (typeof value === "string") return value.trim() === "";
  if (Array.isArray(value)) return value.length === 0;
  if (typeof value === "object") return Object.keys(value as object).length === 0;
  return false;
}

function hasContent(value: unknown): boolean {
  return !isEmpty(value);
}

function cleanText(text: string | undefined | null): string {
  if (!text) return "";
  return text.replace(/\s+/g, " ").trim();
}

function extractPriceNumber(text: string | undefined | null): number | null {
  if (!text) return null;
  const cleaned = text.replace(/[^\d]/g, "");
  const num = parseInt(cleaned, 10);
  return isNaN(num) ? null : num;
}

async function fetchPDP(slug: string): Promise<string | null> {
  const url = `${SOURCE_URL}/${slug}`;
  try {
    const res = await fetch(url, {
      headers: {
        "User-Agent":
          "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36",
      },
    });
    if (!res.ok) {
      return null;
    }
    return await res.text();
  } catch {
    return null;
  }
}

async function parsePDPWithRetry(slug: string): Promise<ParsedData> {
  const html = await fetchPDP(slug);
  if (!html) return {};

  const { load } = await import("cheerio");
  const $ = load(html);
  const data: ParsedData = {};

  const h1 = cleanText($("h1").first().text());
  if (h1) data.name = h1;

  const shortDescMeta = cleanText($('meta[name="description"]').attr("content"));
  if (shortDescMeta && shortDescMeta.length > 10) {
    data.shortDescription = shortDescMeta.slice(0, 500);
  }

  const breadcrumb = $(".breadcrumb, nav[aria-label], [class*='breadcrumb']").text();
  const crumbs = breadcrumb
    .split(/\s*>\s*|\s*\/\s*/)
    .map((c) => cleanText(c))
    .filter(Boolean);
  if (crumbs.length >= 2) {
    data.category = crumbs[crumbs.length - 2];
    data.subcategory = crumbs[crumbs.length - 1];
  }

  const licenseEl = $("[class*='license'], [class*='type']").filter((_, el) => {
    const txt = $(el).text();
    return (
      txt.toLowerCase().includes("fpp") ||
      txt.toLowerCase().includes("oem") ||
      txt.toLowerCase().includes("volume")
    );
  });
  const licenseText = cleanText(licenseEl.first().text());
  if (licenseText) data.licenseType = licenseText;

  const activationEl = $(
    "[class*='activation'], [class*='key'], [class*='product-key']"
  ).first();
  const activationText = cleanText(activationEl.text());
  if (activationText) data.activationType = activationText;

  const priceSelectors = [
    '[class*="price"]',
    '[class*="gia"]',
    ".product-price",
    ".amount",
  ];
  let priceRaw = "";
  for (const sel of priceSelectors) {
    const el = $(sel).first();
    const text = cleanText(el.text());
    if (text && /\d/.test(text)) {
      priceRaw = text;
      break;
    }
  }

  if (priceRaw) {
    data.price = {
      retail: extractPriceNumber(priceRaw),
      retailLabel: priceRaw,
      bulk: null,
      bulkLabel: "",
      bulkMinQty: null,
      bulkNote: "",
      vatNote: "",
      largeQtyNote: "",
    };
  }

  data.currency = "VND";

  const deliverySelectors = [
    "[class*='delivery']",
    "[class*='shipping']",
    "[class*='form']",
  ];
  for (const sel of deliverySelectors) {
    const el = $(sel).first();
    const text = cleanText(el.text());
    if (text && text.length > 1) {
      data.deliveryType = {
        form: text.slice(0, 100),
        physicalItems: [],
        digitalItems: [],
        notes: [],
      };
      break;
    }
  }

  const warrantySelectors = ["[class*='warranty']", "[class*='han']", "[class*='bh']"];
  for (const sel of warrantySelectors) {
    const el = $(sel).first();
    const text = cleanText(el.text());
    if (text && text.length > 1) {
      const isTransferable =
        text.toLowerCase().includes("chuyển") ||
        text.toLowerCase().includes("đổi");
      data.warranty = {
        duration: text.slice(0, 100),
        transferable: isTransferable ? true : null,
        transferNote: "",
      };
      break;
    }
  }

  data.support = {
    installGuide: null,
    activationHelp: null,
    upgradeConsult: null,
    channels: [],
    details: [],
  };

  const suitableEl = $(
    "[class*='suitable'], [class*='phu-hue'], [class*='target']"
  ).first();
  const suitableText = cleanText(suitableEl.text());
  if (suitableText) {
    data.suitableFor = suitableText
      .split(/[,;.\n]/)
      .map((s) => cleanText(s))
      .filter(Boolean);
  }

  const checkItems = $(
    "[class*='check'], [class*='feature'], [class*='benefit']"
  ).find("li, span, div");
  const highlights: Array<{ icon: string; text: string }> = [];
  checkItems.each((_, el) => {
    const text = cleanText($(el).text());
    if (text && text.length > 3 && text.length < 200) {
      highlights.push({ icon: "check", text });
    }
  });
  if (highlights.length > 0) data.highlights = highlights.slice(0, 10);

  const descriptionSections: ParsedData["descriptionSections"] = [];
  $("section, div[class*='section'], div[class*='content']").each((_, el) => {
    const titleEl = $(el).find("h2, h3, h4").first();
    const title = cleanText(titleEl.text());
    if (!title) return;

    const bullets: string[] = [];
    $(el)
      .find("li, p")
      .each((_, p) => {
        const bullet = cleanText($(p).text());
        if (bullet && bullet.length > 5 && bullet.length < 500) {
          bullets.push(bullet);
        }
      });

    if (bullets.length > 0) {
      descriptionSections.push({
        title,
        content: "",
        bullets: bullets.slice(0, 10),
      });
    }
  });
  if (descriptionSections.length > 0)
    data.descriptionSections = descriptionSections;

  const specs: Array<{ label: string; value: string }> = [];
  $("table, [class*='spec']").each((_, table) => {
    $(table)
      .find("tr")
      .each((_, tr) => {
        const tds = $(tr).find("td, th");
        if (tds.length >= 2) {
          const label = cleanText(tds.eq(0).text());
          const value = cleanText(tds.eq(1).text());
          if (label && value) {
            specs.push({ label, value });
          }
        }
      });
  });
  if (specs.length > 0) data.specifications = specs;

  const faqs: Array<{ question: string; answer: string }> = [];
  $("[class*='faq'], [class*='question']").each((_, el) => {
    const q = cleanText($(el).find("h3, h4, .question").first().text());
    const a = cleanText($(el).find("p, .answer").first().text());
    if (q) {
      faqs.push({ question: q, answer: a || "" });
    }
  });
  if (faqs.length > 0) data.faqs = faqs;

  const seoTitle = cleanText(
    $('meta[property="og:title"]').attr("content") || $("title").text()
  );
  const seoDesc = cleanText($('meta[name="description"]').attr("content") || "");
  const seoKeywords = cleanText($('meta[name="keywords"]').attr("content") || "");
  if (seoTitle || seoDesc) {
    data.seo = {
      title: seoTitle || "",
      description: seoDesc,
      keywords: seoKeywords,
    };
  }

  const primaryBtn = $("a[href*='zalo'], a[href*='zalo.me']").first();
  const secondaryBtn = $("a[href*='tel:'], a[href*='phone']").first();
  const contacts: Array<{ channel: string; name: string; href: string }> = [];

  $("a[href*='zalo']").each((_, el) => {
    const href = $(el).attr("href") || "";
    contacts.push({
      channel: "zalo",
      name: cleanText($(el).text()) || "Zalo",
      href,
    });
  });
  $("a[href*='facebook']").each((_, el) => {
    const href = $(el).attr("href") || "";
    contacts.push({
      channel: "facebook",
      name: cleanText($(el).text()) || "Facebook",
      href,
    });
  });
  $("a[href^='tel:']").each((_, el) => {
    const href = $(el).attr("href") || "";
    contacts.push({
      channel: "phone",
      name: cleanText($(el).text()) || "Hotline",
      href,
    });
  });

  if (primaryBtn.length || secondaryBtn.length || contacts.length) {
    data.cta = {
      primary: {
        label: cleanText(primaryBtn.text()) || "Chốt đơn qua Zalo",
        href: primaryBtn.attr("href") || "https://zalo.me/0382520281",
        channel: "zalo",
      },
      secondary: {
        label: cleanText(secondaryBtn.text()) || "Gọi hotline",
        href: secondaryBtn.attr("href") || "tel:0382520281",
        channel: "phone",
      },
      contacts,
      trustBadges: [],
    };
  }

  const badges: Array<{ label: string; variant: string }> = [];
  $("[class*='badge'], [class*='tag'], [class*='label']").each((_, el) => {
    const text = cleanText($(el).text());
    if (text && text.length > 1 && text.length < 50) {
      badges.push({ label: text, variant: "default" });
    }
  });
  if (badges.length > 0) data.badges = badges.slice(0, 8);

  const cardBadges: string[] = [];
  $("[class*='card'] [class*='badge']").each((_, el) => {
    const text = cleanText($(el).text());
    if (text && text.length > 1) {
      cardBadges.push(text);
    }
  });
  if (cardBadges.length > 0) data.cardBadges = cardBadges.slice(0, 5);

  return data;
}

interface EnrichResult {
  slug: string;
  url: string;
  updated: string[];
  skipped: string[];
  error?: string;
  status: "success" | "skipped" | "failed";
}

async function enrichProduct(
  slug: string
): Promise<EnrichResult> {
  const url = `${SOURCE_URL}/${slug}`;
  const result: EnrichResult = {
    slug,
    url,
    updated: [],
    skipped: [],
    status: "failed",
  };

  const html = await fetchPDP(slug);
  if (!html) {
    result.error = "404 or fetch error";
    return result;
  }

  const parsed = await parsePDPWithRetry(slug);

  await connectDB();

  const product = await Product.findOne({ slug });
  if (!product) {
    result.error = "Product not found in DB";
    return result;
  }

  const updateOps: Record<string, unknown> = {};

  const textFields = [
    "name", "category", "subcategory", "shortDescription", "currency",
    "licenseType", "activationType", "listDescription",
  ];

  const objectFields = ["deliveryType", "warranty", "support"];

  const arrayFields = [
    "suitableFor", "highlights", "badges", "cardBadges", "relatedProductSlugs",
  ];

  const nestedFields = ["descriptionSections", "specifications", "faqs"];

  for (const field of textFields) {
    const extracted = (parsed as unknown as Record<string, unknown>)[field];
    const current = (product as unknown as Record<string, unknown>)[field];
    if (hasContent(extracted) && isEmpty(current)) {
      updateOps[field] = extracted;
      result.updated.push(field);
    } else if (hasContent(extracted) && hasContent(current)) {
      result.skipped.push(`${field} (has content)`);
    } else {
      result.skipped.push(`${field} (no data)`);
    }
  }

  for (const field of objectFields) {
    const extracted = (parsed as unknown as Record<string, unknown>)[field] as Record<string, unknown> | undefined;
    const current = (product as unknown as Record<string, unknown>)[field] as Record<string, unknown> | undefined;

    if (extracted && typeof extracted === "object") {
      const merged: Record<string, unknown> = { ...(current || {}) };
      let didUpdate = false;

      for (const key of Object.keys(extracted)) {
        const ev = extracted[key];
        const cv = current?.[key];
        if (hasContent(ev) && isEmpty(cv)) {
          merged[key] = ev;
          didUpdate = true;
        }
      }

      if (didUpdate) {
        updateOps[field] = merged;
        result.updated.push(`${field} (partial)`);
      } else {
        result.skipped.push(`${field} (no update)`);
      }
    } else {
      result.skipped.push(`${field} (no data)`);
    }
  }

  for (const field of arrayFields) {
    const extracted = (parsed as unknown as Record<string, unknown>)[field] as unknown[] | undefined;
    const current = (product as unknown as Record<string, unknown>)[field] as unknown[] | undefined;
    if (Array.isArray(extracted) && extracted.length > 0 && (!Array.isArray(current) || current.length === 0)) {
      updateOps[field] = extracted;
      result.updated.push(field);
    } else if (Array.isArray(extracted) && extracted.length > 0) {
      result.skipped.push(`${field} (has content)`);
    } else {
      result.skipped.push(`${field} (no data)`);
    }
  }

  for (const field of nestedFields) {
    const extracted = (parsed as unknown as Record<string, unknown>)[field] as unknown[] | undefined;
    const current = (product as unknown as Record<string, unknown>)[field] as unknown[] | undefined;
    if (Array.isArray(extracted) && extracted.length > 0 && (!Array.isArray(current) || current.length === 0)) {
      updateOps[field] = extracted;
      result.updated.push(field);
    } else if (Array.isArray(extracted) && extracted.length > 0) {
      result.skipped.push(`${field} (has content)`);
    } else {
      result.skipped.push(`${field} (no data)`);
    }
  }

  const extractedSeo = (await parsed).seo;
  const currentSeo = (product as unknown as Record<string, unknown>).seo as Record<string, string> | undefined;
  if (extractedSeo && typeof extractedSeo === "object") {
    const seoMerged: Record<string, string> = { ...(currentSeo || {}) };
    let didUpdateSeo = false;
    for (const key of ["title", "description", "keywords"] as const) {
      if (extractedSeo[key] && !currentSeo?.[key]) {
        seoMerged[key] = extractedSeo[key];
        didUpdateSeo = true;
      }
    }
    if (didUpdateSeo) {
      updateOps.seo = seoMerged;
      result.updated.push("seo (partial)");
    } else {
      result.skipped.push("seo (no update)");
    }
  } else {
    result.skipped.push("seo (no data)");
  }

  const extractedCta = (await parsed).cta;
  const currentCta = (product as unknown as Record<string, unknown>).cta as Record<string, unknown> | undefined;
  if (extractedCta && typeof extractedCta === "object") {
    const ctaMerged: Record<string, unknown> = { ...(currentCta || {}) };
    let didUpdateCta = false;

    if (extractedCta.primary && typeof extractedCta.primary === "object") {
      const cp = currentCta?.primary as Record<string, string> | undefined;
      if (!cp?.href) {
        ctaMerged.primary = extractedCta.primary;
        didUpdateCta = true;
      }
    }
    if (extractedCta.secondary && typeof extractedCta.secondary === "object") {
      const cs = currentCta?.secondary as Record<string, string> | undefined;
      if (!cs?.href) {
        ctaMerged.secondary = extractedCta.secondary;
        didUpdateCta = true;
      }
    }
    if (Array.isArray(extractedCta.contacts) && extractedCta.contacts.length > 0) {
      const cc = currentCta?.contacts as unknown[] | undefined;
      if (!Array.isArray(cc) || cc.length === 0) {
        ctaMerged.contacts = extractedCta.contacts;
        didUpdateCta = true;
      }
    }
    if (Array.isArray(extractedCta.trustBadges) && extractedCta.trustBadges.length > 0) {
      const ctb = currentCta?.trustBadges as string[] | undefined;
      if (!Array.isArray(ctb) || ctb.length === 0) {
        ctaMerged.trustBadges = extractedCta.trustBadges;
        didUpdateCta = true;
      }
    }

    if (didUpdateCta) {
      updateOps.cta = ctaMerged;
      result.updated.push("cta (partial)");
    } else {
      result.skipped.push("cta (no update)");
    }
  } else {
    result.skipped.push("cta (no data)");
  }

  const extractedPrice = (await parsed).price;
  const currentPrice = (product as unknown as Record<string, unknown>).price as Record<string, unknown> | undefined;
  if (extractedPrice && typeof extractedPrice === "object") {
    const priceMerged: Record<string, unknown> = { ...(currentPrice || {}) };
    let didUpdatePrice = false;
    if (extractedPrice.retail && !currentPrice?.retail) {
      priceMerged.retail = extractedPrice.retail;
      priceMerged.retailLabel = extractedPrice.retailLabel;
      didUpdatePrice = true;
    }
    if (extractedPrice.vatNote && !currentPrice?.vatNote) {
      priceMerged.vatNote = extractedPrice.vatNote;
      didUpdatePrice = true;
    }
    if (extractedPrice.largeQtyNote && !currentPrice?.largeQtyNote) {
      priceMerged.largeQtyNote = extractedPrice.largeQtyNote;
      didUpdatePrice = true;
    }
    if (didUpdatePrice) {
      updateOps.price = priceMerged;
      result.updated.push("price (partial)");
    } else {
      result.skipped.push("price (no update)");
    }
  } else {
    result.skipped.push("price (no data)");
  }

  if (result.updated.length > 0) {
    await Product.findByIdAndUpdate(product._id, { $set: updateOps });
    result.status = "success";
  } else {
    result.status = "skipped";
  }

  return result;
}

async function sleep(min: number, max: number) {
  const ms = Math.floor(Math.random() * (max - min + 1)) + min;
  await new Promise((r) => setTimeout(r, ms));
}

async function main() {
  const productsPath = path.resolve(__dirname, "../src/data/products.json");

  if (!fs.existsSync(productsPath)) {
    console.error(`products.json not found at ${productsPath}`);
    process.exit(1);
  }

  const data = JSON.parse(fs.readFileSync(productsPath, "utf-8"));
  const slugs = (data.products as Array<{ slug: string }>).map((p) => p.slug);

  console.log(`\n=== Batch Enrich Products ===`);
  console.log(`Total products: ${slugs.length}`);
  console.log(`Source: ${SOURCE_URL}`);
  console.log("===========================\n");

  const results: EnrichResult[] = [];
  let successCount = 0;
  let skippedCount = 0;
  let failedCount = 0;

  for (let i = 0; i < slugs.length; i++) {
    const slug = slugs[i];
    console.log(`[${i + 1}/${slugs.length}] Processing: ${slug}`);
    console.log(`  URL: ${SOURCE_URL}/${slug}`);

    try {
      const result = await enrichProduct(slug);
      results.push(result);

      if (result.status === "success") {
        successCount++;
        console.log(`  Status: SUCCESS`);
        console.log(`  Updated: ${result.updated.join(", ") || "none"}`);
        console.log(`  Skipped: ${result.skipped.join(", ") || "none"}`);
      } else if (result.status === "skipped") {
        skippedCount++;
        console.log(`  Status: SKIPPED (no updates needed)`);
        console.log(`  Skipped: ${result.skipped.join(", ") || "none"}`);
      } else {
        failedCount++;
        console.log(`  Status: FAILED`);
        console.log(`  Error: ${result.error || "unknown"}`);
      }
    } catch (err) {
      failedCount++;
      const errorMsg = err instanceof Error ? err.message : String(err);
      console.error(`  Error: ${errorMsg}`);
      results.push({
        slug,
        url: `${SOURCE_URL}/${slug}`,
        updated: [],
        skipped: [],
        error: errorMsg,
        status: "failed",
      });
    }

    // Delay between requests
    if (i < slugs.length - 1) {
      await sleep(DELAY_MS_MIN, DELAY_MS_MAX);
    }
  }

  console.log(`\n=== Summary ===`);
  console.log(`Total: ${slugs.length}`);
  console.log(`Success: ${successCount}`);
  console.log(`Skipped: ${skippedCount}`);
  console.log(`Failed: ${failedCount}`);

  const failed = results.filter((r) => r.status === "failed");
  if (failed.length > 0) {
    console.log(`\nFailed slugs:`);
    for (const f of failed) {
      console.log(`  - ${f.slug}: ${f.error}`);
    }
  }

  await mongoose.disconnect();
  process.exit(failedCount > 0 ? 1 : 0);
}

main().catch(async (err) => {
  console.error("Unhandled error:", err);
  await mongoose.disconnect().catch(() => {});
  process.exit(1);
});
