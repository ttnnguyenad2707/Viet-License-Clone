"use client";

import { useState, useCallback } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { IProduct } from "@/models/Product";

interface ProductFormProps {
  product?: Partial<IProduct>;
  mode: "create" | "edit";
  productId?: string;
}

function parseLines(value: string): string[] {
  return value
    .split("\n")
    .map((line) => line.trim())
    .filter(Boolean);
}

function parseKeyValueLines(value: string): Array<{ [key: string]: string }> {
  return parseLines(value).map((line) => {
    const parts = line.split(",").map((p) => p.trim());
    if (parts.length >= 2) {
      return { label: parts[0], value: parts[1] };
    }
    return { label: parts[0] || "", value: "" };
  });
}

function parseImageLines(value: string): Array<{ src: string; alt: string; caption: string }> {
  return parseLines(value).map((line) => {
    const parts = line.split(",").map((p) => p.trim());
    return {
      src: parts[0] || "",
      alt: parts[1] || "",
      caption: parts[2] || "",
    };
  });
}

function parseBadgeLines(value: string): Array<{ label: string; variant: string }> {
  return parseLines(value).map((line) => {
    const parts = line.split(",").map((p) => p.trim());
    return {
      label: parts[0] || "",
      variant: parts[1] || "",
    };
  });
}

function parseHighlightLines(value: string): Array<{ icon: string; text: string }> {
  return parseLines(value).map((line) => {
    const parts = line.split(",").map((p) => p.trim());
    return {
      icon: parts[0] || "",
      text: parts[1] || "",
    };
  });
}

function serializeLines(arr: string[]): string {
  return arr.join("\n");
}

function serializeKeyValue(arr: Array<{ label: string; value: string }>): string {
  return arr.map((item) => `${item.label},${item.value}`).join("\n");
}

function serializeImages(arr: Array<{ src: string; alt: string; caption: string }>): string {
  return arr.map((item) => `${item.src},${item.alt},${item.caption}`).join("\n");
}

function serializeBadges(arr: Array<{ label: string; variant: string }>): string {
  return arr.map((item) => `${item.label},${item.variant}`).join("\n");
}

function serializeHighlights(arr: Array<{ icon: string; text: string }>): string {
  return arr.map((item) => `${item.icon},${item.text}`).join("\n");
}

interface FieldGroupProps {
  title: string;
  children: React.ReactNode;
}

function FieldGroup({ title, children }: FieldGroupProps) {
  return (
    <div className="rounded-lg border p-4">
      <h3 className="mb-4 text-lg font-semibold">{title}</h3>
      <div className="space-y-4">{children}</div>
    </div>
  );
}

interface FieldProps {
  label: string;
  children: React.ReactNode;
  hint?: string;
}

function Field({ label, children, hint }: FieldProps) {
  return (
    <div className="space-y-1">
      <label className="block text-sm font-medium">{label}</label>
      {children}
      {hint && <p className="text-xs text-muted-foreground">{hint}</p>}
    </div>
  );
}

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  error?: string;
}

function Input({ error, className, ...props }: InputProps) {
  return (
    <div>
      <input
        className={`w-full rounded-md border bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 ${
          error ? "border-destructive" : "border-input"
        } ${className || ""}`}
        {...props}
      />
      {error && <p className="mt-1 text-xs text-destructive">{error}</p>}
    </div>
  );
}

interface TextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  error?: string;
}

function Textarea({ error, className, ...props }: TextareaProps) {
  return (
    <div>
      <textarea
        className={`w-full rounded-md border bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 font-mono ${
          error ? "border-destructive" : "border-input"
        } ${className || ""}`}
        rows={4}
        {...props}
      />
      {error && <p className="mt-1 text-xs text-destructive">{error}</p>}
    </div>
  );
}

interface SelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
  error?: string;
}

function Select({ error, className, children, ...props }: SelectProps) {
  return (
    <div>
      <select
        className={`w-full rounded-md border bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 ${
          error ? "border-destructive" : "border-input"
        } ${className || ""}`}
        {...props}
      >
        {children}
      </select>
      {error && <p className="mt-1 text-xs text-destructive">{error}</p>}
    </div>
  );
}

export function ProductForm({ product, mode, productId }: ProductFormProps) {
  const router = useRouter();
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  // Basic
  const [id, setId] = useState(product?.id || "");
  const [slug, setSlug] = useState(product?.slug || "");
  const [name, setName] = useState(product?.name || "");
  const [category, setCategory] = useState(product?.category || "");
  const [subcategory, setSubcategory] = useState(product?.subcategory || "");
  const [shortDescription, setShortDescription] = useState(product?.shortDescription || "");

  // Pricing
  const [retailPrice, setRetailPrice] = useState(
    product?.price?.retail !== null && product?.price?.retail !== undefined
      ? String(product.price.retail)
      : ""
  );
  const [retailLabel, setRetailLabel] = useState(product?.price?.retailLabel || "");
  const [bulkPrice, setBulkPrice] = useState(
    product?.price?.bulk !== null && product?.price?.bulk !== undefined
      ? String(product.price.bulk)
      : ""
  );
  const [bulkLabel, setBulkLabel] = useState(product?.price?.bulkLabel || "");
  const [bulkMinQty, setBulkMinQty] = useState(
    product?.price?.bulkMinQty !== null && product?.price?.bulkMinQty !== undefined
      ? String(product.price.bulkMinQty)
      : ""
  );
  const [bulkNote, setBulkNote] = useState(product?.price?.bulkNote || "");
  const [vatNote, setVatNote] = useState(product?.price?.vatNote || "");
  const [largeQtyNote, setLargeQtyNote] = useState(product?.price?.largeQtyNote || "");
  const [originalPrice, setOriginalPrice] = useState(
    product?.originalPrice !== null && product?.originalPrice !== undefined
      ? String(product.originalPrice)
      : ""
  );
  const [currency, setCurrency] = useState(product?.currency || "VND");

  // Media
  const [badges, setBadges] = useState(serializeBadges(product?.badges || []));
  const [images, setImages] = useState(serializeImages(product?.images || []));
  const [thumbnail, setThumbnail] = useState(product?.thumbnail || "");

  // License
  const [licenseType, setLicenseType] = useState(product?.licenseType || "");
  const [activationType, setActivationType] = useState(product?.activationType || "");

  // Delivery
  const [deliveryForm, setDeliveryForm] = useState(product?.deliveryType?.form || "");
  const [physicalItems, setPhysicalItems] = useState(
    serializeLines(product?.deliveryType?.physicalItems || [])
  );
  const [digitalItems, setDigitalItems] = useState(
    serializeLines(product?.deliveryType?.digitalItems || [])
  );
  const [deliveryNotes, setDeliveryNotes] = useState(
    serializeLines(product?.deliveryType?.notes || [])
  );

  // Warranty
  const [warrantyDuration, setWarrantyDuration] = useState(
    product?.warranty?.duration || ""
  );
  const [transferable, setTransferable] = useState<string>(
    product?.warranty?.transferable === true
      ? "true"
      : product?.warranty?.transferable === false
      ? "false"
      : ""
  );
  const [transferNote, setTransferNote] = useState(product?.warranty?.transferNote || "");

  // Support
  const [installGuide, setInstallGuide] = useState<string>(
    product?.support?.installGuide === true
      ? "true"
      : product?.support?.installGuide === false
      ? "false"
      : ""
  );
  const [activationHelp, setActivationHelp] = useState<string>(
    product?.support?.activationHelp === true
      ? "true"
      : product?.support?.activationHelp === false
      ? "false"
      : ""
  );
  const [upgradeConsult, setUpgradeConsult] = useState<string>(
    product?.support?.upgradeConsult === true
      ? "true"
      : product?.support?.upgradeConsult === false
      ? "false"
      : ""
  );
  const [supportChannels, setSupportChannels] = useState(
    serializeLines(product?.support?.channels || [])
  );
  const [supportDetails, setSupportDetails] = useState(
    serializeLines(product?.support?.details || [])
  );

  // Content
  const [suitableFor, setSuitableFor] = useState(
    serializeLines(product?.suitableFor || [])
  );
  const [highlights, setHighlights] = useState(
    serializeHighlights(product?.highlights || [])
  );
  const [descriptionSections, setDescriptionSections] = useState(
    product?.descriptionSections ? JSON.stringify(product.descriptionSections, null, 2) : "[]"
  );
  const [specifications, setSpecifications] = useState(
    product?.specifications ? JSON.stringify(product.specifications, null, 2) : "[]"
  );
  const [faqs, setFaqs] = useState(
    product?.faqs ? JSON.stringify(product.faqs, null, 2) : "[]"
  );

  // SEO
  const [seo, setSeo] = useState(
    product?.seo ? JSON.stringify(product.seo, null, 2) : '{"title":"","description":"","keywords":""}'
  );

  // CTA
  const [cta, setCta] = useState(
    product?.cta ? JSON.stringify(product.cta, null, 2) : ""
  );

  // Display
  const [isFeatured, setIsFeatured] = useState(product?.isFeatured || false);
  const [displayOrder, setDisplayOrder] = useState(
    product?.displayOrder !== null && product?.displayOrder !== undefined
      ? String(product.displayOrder)
      : ""
  );
  const [listTitle, setListTitle] = useState(product?.listTitle || "");
  const [listDescription, setListDescription] = useState(product?.listDescription || "");
  const [cardBadges, setCardBadges] = useState(
    serializeLines(product?.cardBadges || [])
  );
  const [relatedProductSlugs, setRelatedProductSlugs] = useState(
    serializeLines(product?.relatedProductSlugs || [])
  );

  function parseBoolean(value: string): boolean | null {
    if (value === "true") return true;
    if (value === "false") return false;
    return null;
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSubmitting(true);
    setError(null);

    try {
      const payload: Record<string, unknown> = {
        id: id || slug,
        slug,
        name,
        category,
        subcategory,
        shortDescription,
        price: {
          retail: retailPrice ? Number(retailPrice) : null,
          retailLabel,
          bulk: bulkPrice ? Number(bulkPrice) : null,
          bulkLabel,
          bulkMinQty: bulkMinQty ? Number(bulkMinQty) : null,
          bulkNote,
          vatNote,
          largeQtyNote,
        },
        originalPrice: originalPrice ? Number(originalPrice) : null,
        currency,
        badges: parseBadgeLines(badges),
        images: parseImageLines(images),
        thumbnail,
        licenseType,
        activationType,
        deliveryType: {
          form: deliveryForm,
          physicalItems: parseLines(physicalItems),
          digitalItems: parseLines(digitalItems),
          notes: parseLines(deliveryNotes),
        },
        warranty: {
          duration: warrantyDuration,
          transferable: parseBoolean(transferable),
          transferNote,
        },
        support: {
          installGuide: parseBoolean(installGuide),
          activationHelp: parseBoolean(activationHelp),
          upgradeConsult: parseBoolean(upgradeConsult),
          channels: parseLines(supportChannels),
          details: parseLines(supportDetails),
        },
        suitableFor: parseLines(suitableFor),
        highlights: parseHighlightLines(highlights),
        descriptionSections: JSON.parse(descriptionSections || "[]"),
        specifications: JSON.parse(specifications || "[]"),
        faqs: JSON.parse(faqs || "[]"),
        seo: JSON.parse(seo || "{}"),
        cta: cta ? JSON.parse(cta) : undefined,
        isFeatured,
        displayOrder: displayOrder ? Number(displayOrder) : null,
        listTitle,
        listDescription,
        cardBadges: parseLines(cardBadges),
        relatedProductSlugs: parseLines(relatedProductSlugs),
      };

      const url =
        mode === "edit" && productId
          ? `/api/admin/products/${productId}`
          : "/api/admin/products";
      const method = mode === "edit" ? "PUT" : "POST";

      const res = await fetch(url, {
        method,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const data = await res.json();

      if (data.success) {
        router.push("/admin/products");
      } else {
        setError(data.error || "Failed to save product");
      }
    } catch (err) {
      setError(err instanceof Error ? err.message : "Invalid JSON input");
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {error && (
        <div className="rounded-lg border border-destructive/50 bg-destructive/10 px-4 py-3 text-destructive">
          {error}
        </div>
      )}

      {/* Basic */}
      <FieldGroup title="Basic">
        <Field label="Slug *" hint="Unique identifier, used in URL">
          <Input
            value={slug}
            onChange={(e) => setSlug(e.target.value)}
            placeholder="e.g. windows-11-pro-fpp"
            required
          />
        </Field>
        <Field label="Name *">
          <Input
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="e.g. Windows 11 Pro FPP"
            required
          />
        </Field>
        <Field label="Category *">
          <Input
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            placeholder="e.g. windows, office, antivirus"
            required
          />
        </Field>
        <Field label="Subcategory">
          <Input
            value={subcategory}
            onChange={(e) => setSubcategory(e.target.value)}
            placeholder="e.g. professional, home"
          />
        </Field>
        <Field label="Short Description">
          <Textarea
            value={shortDescription}
            onChange={(e) => setShortDescription(e.target.value)}
            placeholder="Brief description for listings"
            rows={2}
          />
        </Field>
      </FieldGroup>

      {/* Pricing */}
      <FieldGroup title="Pricing">
        <div className="grid grid-cols-2 gap-4">
          <Field label="Retail Price">
            <Input
              type="number"
              value={retailPrice}
              onChange={(e) => setRetailPrice(e.target.value)}
              placeholder="0"
            />
          </Field>
          <Field label="Retail Label">
            <Input
              value={retailLabel}
              onChange={(e) => setRetailLabel(e.target.value)}
              placeholder="e.g. Key Only, USB Box"
            />
          </Field>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <Field label="Bulk Price">
            <Input
              type="number"
              value={bulkPrice}
              onChange={(e) => setBulkPrice(e.target.value)}
              placeholder="0"
            />
          </Field>
          <Field label="Bulk Label">
            <Input
              value={bulkLabel}
              onChange={(e) => setBulkLabel(e.target.value)}
              placeholder="e.g. Per License"
            />
          </Field>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <Field label="Bulk Min Qty">
            <Input
              type="number"
              value={bulkMinQty}
              onChange={(e) => setBulkMinQty(e.target.value)}
              placeholder="5"
            />
          </Field>
          <Field label="Currency">
            <Input
              value={currency}
              onChange={(e) => setCurrency(e.target.value)}
              placeholder="VND"
            />
          </Field>
        </div>
        <Field label="Bulk Note">
          <Input
            value={bulkNote}
            onChange={(e) => setBulkNote(e.target.value)}
            placeholder="e.g. For 10+ licenses"
          />
        </Field>
        <Field label="VAT Note">
          <Input
            value={vatNote}
            onChange={(e) => setVatNote(e.target.value)}
            placeholder="e.g. Price including 10% VAT"
          />
        </Field>
        <Field label="Large Qty Note">
          <Input
            value={largeQtyNote}
            onChange={(e) => setLargeQtyNote(e.target.value)}
            placeholder="e.g. Contact for 50+ units"
          />
        </Field>
        <Field label="Original Price">
          <Input
            type="number"
            value={originalPrice}
            onChange={(e) => setOriginalPrice(e.target.value)}
            placeholder="0"
          />
        </Field>
      </FieldGroup>

      {/* Media */}
      <FieldGroup title="Media">
        <Field label="Badges" hint="Format: label,variant per line">
          <Textarea
            value={badges}
            onChange={(e) => setBadges(e.target.value)}
            placeholder={"Best Seller,default\nNew Arrival,secondary"}
            rows={3}
          />
        </Field>
        <Field label="Images" hint="Format: src,alt,caption per line">
          <Textarea
            value={images}
            onChange={(e) => setImages(e.target.value)}
            placeholder={"/images/product1.jpg,Windows 11 Pro,USB Box\n/images/product2.jpg,Digital Key,Download"}
            rows={4}
          />
        </Field>
        <Field label="Thumbnail">
          <Input
            value={thumbnail}
            onChange={(e) => setThumbnail(e.target.value)}
            placeholder="/images/thumbnail.jpg"
          />
        </Field>
      </FieldGroup>

      {/* License */}
      <FieldGroup title="License">
        <Field label="License Type">
          <Input
            value={licenseType}
            onChange={(e) => setLicenseType(e.target.value)}
            placeholder="e.g. Retail, OEM, Volume"
          />
        </Field>
        <Field label="Activation Type">
          <Input
            value={activationType}
            onChange={(e) => setActivationType(e.target.value)}
            placeholder="e.g. FPP, OEM, MAK"
          />
        </Field>
      </FieldGroup>

      {/* Delivery */}
      <FieldGroup title="Delivery">
        <Field label="Delivery Form">
          <Select value={deliveryForm} onChange={(e) => setDeliveryForm(e.target.value)}>
            <option value="">Select...</option>
            <option value="digital">Digital</option>
            <option value="physical">Physical</option>
            <option value="both">Both</option>
          </Select>
        </Field>
        <Field label="Physical Items" hint="One per line">
          <Textarea
            value={physicalItems}
            onChange={(e) => setPhysicalItems(e.target.value)}
            placeholder={"USB Drive\nLicense Card"}
            rows={3}
          />
        </Field>
        <Field label="Digital Items" hint="One per line">
          <Textarea
            value={digitalItems}
            onChange={(e) => setDigitalItems(e.target.value)}
            placeholder={"Product Key\nDownload Link"}
            rows={3}
          />
        </Field>
        <Field label="Delivery Notes" hint="One per line">
          <Textarea
            value={deliveryNotes}
            onChange={(e) => setDeliveryNotes(e.target.value)}
            placeholder={"Delivery within 24h\nEmail confirmation"}
            rows={3}
          />
        </Field>
      </FieldGroup>

      {/* Warranty */}
      <FieldGroup title="Warranty">
        <Field label="Duration">
          <Input
            value={warrantyDuration}
            onChange={(e) => setWarrantyDuration(e.target.value)}
            placeholder="e.g. Lifetime, 1 Year"
          />
        </Field>
        <Field label="Transferable">
          <Select value={transferable} onChange={(e) => setTransferable(e.target.value)}>
            <option value="">Not specified</option>
            <option value="true">Yes</option>
            <option value="false">No</option>
          </Select>
        </Field>
        <Field label="Transfer Note">
          <Input
            value={transferNote}
            onChange={(e) => setTransferNote(e.target.value)}
            placeholder="e.g. Can be transferred to new device"
          />
        </Field>
      </FieldGroup>

      {/* Support */}
      <FieldGroup title="Support">
        <div className="grid grid-cols-3 gap-4">
          <Field label="Install Guide">
            <Select value={installGuide} onChange={(e) => setInstallGuide(e.target.value)}>
              <option value="">Not specified</option>
              <option value="true">Yes</option>
              <option value="false">No</option>
            </Select>
          </Field>
          <Field label="Activation Help">
            <Select value={activationHelp} onChange={(e) => setActivationHelp(e.target.value)}>
              <option value="">Not specified</option>
              <option value="true">Yes</option>
              <option value="false">No</option>
            </Select>
          </Field>
          <Field label="Upgrade Consult">
            <Select value={upgradeConsult} onChange={(e) => setUpgradeConsult(e.target.value)}>
              <option value="">Not specified</option>
              <option value="true">Yes</option>
              <option value="false">No</option>
            </Select>
          </Field>
        </div>
        <Field label="Support Channels" hint="One per line">
          <Textarea
            value={supportChannels}
            onChange={(e) => setSupportChannels(e.target.value)}
            placeholder={"Phone: 1900-xxxx\nEmail: support@example.com"}
            rows={3}
          />
        </Field>
        <Field label="Support Details" hint="One per line">
          <Textarea
            value={supportDetails}
            onChange={(e) => setSupportDetails(e.target.value)}
            placeholder={"24/7 Technical Support\nRemote Installation"}
            rows={3}
          />
        </Field>
      </FieldGroup>

      {/* Content */}
      <FieldGroup title="Content">
        <Field label="Suitable For" hint="One per line">
          <Textarea
            value={suitableFor}
            onChange={(e) => setSuitableFor(e.target.value)}
            placeholder={"Small Business\nHome Office\nRemote Workers"}
            rows={3}
          />
        </Field>
        <Field label="Highlights" hint="Format: icon,text per line">
          <Textarea
            value={highlights}
            onChange={(e) => setHighlights(e.target.value)}
            placeholder={"CheckCircle,Instant Delivery\nShield,Lifetime License\nDownload,Official Download"}
            rows={4}
          />
        </Field>
        <Field label="Description Sections" hint="JSON array">
          <Textarea
            value={descriptionSections}
            onChange={(e) => setDescriptionSections(e.target.value)}
            rows={8}
          />
        </Field>
        <Field label="Specifications" hint="JSON array">
          <Textarea
            value={specifications}
            onChange={(e) => setSpecifications(e.target.value)}
            rows={6}
          />
        </Field>
        <Field label="FAQs" hint="JSON array">
          <Textarea
            value={faqs}
            onChange={(e) => setFaqs(e.target.value)}
            rows={6}
          />
        </Field>
      </FieldGroup>

      {/* SEO */}
      <FieldGroup title="SEO">
        <Field label="SEO Data" hint="JSON object">
          <Textarea
            value={seo}
            onChange={(e) => setSeo(e.target.value)}
            rows={4}
          />
        </Field>
      </FieldGroup>

      {/* CTA */}
      <FieldGroup title="CTA">
        <Field label="CTA Data" hint="JSON object (optional)">
          <Textarea
            value={cta}
            onChange={(e) => setCta(e.target.value)}
            rows={6}
          />
        </Field>
      </FieldGroup>

      {/* Display */}
      <FieldGroup title="Display">
        <Field label="Featured">
          <Select value={String(isFeatured)} onChange={(e) => setIsFeatured(e.target.value === "true")}>
            <option value="false">No</option>
            <option value="true">Yes</option>
          </Select>
        </Field>
        <Field label="Display Order">
          <Input
            type="number"
            value={displayOrder}
            onChange={(e) => setDisplayOrder(e.target.value)}
            placeholder="0"
          />
        </Field>
        <Field label="List Title">
          <Input
            value={listTitle}
            onChange={(e) => setListTitle(e.target.value)}
            placeholder="Short title for product listings"
          />
        </Field>
        <Field label="List Description">
          <Textarea
            value={listDescription}
            onChange={(e) => setListDescription(e.target.value)}
            placeholder="Short description for product listings"
            rows={2}
          />
        </Field>
        <Field label="Card Badges" hint="One per line">
          <Textarea
            value={cardBadges}
            onChange={(e) => setCardBadges(e.target.value)}
            placeholder={"Best Seller\nVAT Included"}
            rows={3}
          />
        </Field>
        <Field label="Related Product Slugs" hint="One per line">
          <Textarea
            value={relatedProductSlugs}
            onChange={(e) => setRelatedProductSlugs(e.target.value)}
            placeholder={"windows-11-pro-fpp\nwindows-11-home-fpp"}
            rows={3}
          />
        </Field>
      </FieldGroup>

      <div className="flex items-center gap-4">
        <Button type="submit" disabled={submitting}>
          {submitting ? "Saving..." : mode === "edit" ? "Update Product" : "Create Product"}
        </Button>
        <Button
          type="button"
          variant="outline"
          onClick={() => router.push("/admin/products")}
        >
          Cancel
        </Button>
      </div>
    </form>
  );
}
