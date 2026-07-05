import mongoose, { Schema } from "mongoose";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const MONGODB_URI = process.env.MONGODB_URI;

if (!MONGODB_URI) {
  console.error("Missing MONGODB_URI environment variable");
  process.exit(1);
}

const productSchema = new mongoose.Schema(
  {
    id: { type: String, required: true, unique: true },
    slug: { type: String, required: true, unique: true, index: true },
    name: { type: String, required: true },
    category: { type: String, required: true, index: true },
    subcategory: { type: String, default: "" },
    shortDescription: { type: String, default: "" },
    price: {
      retail: { type: Schema.Types.Mixed, default: null },
      retailLabel: { type: String, default: "" },
      bulk: { type: Schema.Types.Mixed, default: null },
      bulkLabel: { type: String, default: "" },
      bulkMinQty: { type: Schema.Types.Mixed, default: null },
      bulkNote: { type: String, default: "" },
      vatNote: { type: String, default: "" },
      largeQtyNote: { type: String, default: "" },
    },
    originalPrice: { type: Schema.Types.Mixed, default: null },
    currency: { type: String, default: "" },
    badges: [
      {
        label: { type: String, default: "" },
        variant: { type: String, default: "" },
      },
    ],
    images: [
      {
        src: { type: String, default: "" },
        alt: { type: String, default: "" },
        caption: { type: String, default: "" },
      },
    ],
    thumbnail: { type: String, default: "" },
    licenseType: { type: String, default: "" },
    activationType: { type: String, default: "" },
    deliveryType: {
      form: { type: String, default: "" },
      physicalItems: [{ type: String }],
      digitalItems: [{ type: String }],
      notes: [{ type: String }],
    },
    warranty: {
      duration: { type: String, default: "" },
      transferable: { type: Schema.Types.Mixed, default: null },
      transferNote: { type: String, default: "" },
    },
    support: {
      installGuide: { type: Schema.Types.Mixed, default: null },
      activationHelp: { type: Schema.Types.Mixed, default: null },
      upgradeConsult: { type: Schema.Types.Mixed, default: null },
      channels: [{ type: String }],
      details: [{ type: String }],
    },
    suitableFor: [{ type: String }],
    highlights: [
      {
        icon: { type: String, default: "" },
        text: { type: String, default: "" },
      },
    ],
    descriptionSections: [
      {
        title: { type: String, default: "" },
        content: { type: String, default: "" },
        bullets: [{ type: String }],
        specTable: [
          {
            label: { type: String, default: "" },
            value: { type: String, default: "" },
          },
        ],
      },
    ],
    specifications: [
      {
        label: { type: String, default: "" },
        value: { type: String, default: "" },
      },
    ],
    faqs: [
      {
        question: { type: String, default: "" },
        answer: { type: String, default: "" },
      },
    ],
    relatedProductSlugs: [{ type: String }],
    seo: {
      title: { type: String, default: "" },
      description: { type: String, default: "" },
      keywords: { type: String, default: "" },
    },
    cta: {
      primary: {
        label: { type: String, default: "" },
        href: { type: String, default: "" },
        channel: { type: String, default: "" },
      },
      secondary: {
        label: { type: String, default: "" },
        href: { type: String, default: "" },
        channel: { type: String, default: "" },
      },
      contacts: [
        {
          channel: { type: String, default: "" },
          name: { type: String, default: "" },
          href: { type: String, default: "" },
        },
      ],
      trustBadges: [{ type: String }],
    },
    isFeatured: { type: Boolean, default: false },
    displayOrder: { type: Schema.Types.Mixed, default: null },
    listTitle: { type: String, default: "" },
    listDescription: { type: String, default: "" },
    cardBadges: [{ type: String }],
  },
  {
    timestamps: true,
  }
);

const Product = mongoose.model("Product", productSchema);

async function seed() {
  try {
    console.log("Connecting to MongoDB...");
    await mongoose.connect(MONGODB_URI!);
    console.log("Connected to MongoDB\n");

    const dataPath = path.resolve(__dirname, "../src/data/products.filled.json");
    const rawData = fs.readFileSync(dataPath, "utf-8");
    const { products } = JSON.parse(rawData);

    console.log(`Found ${products.length} products in products.filled.json\n`);

    let inserted = 0;
    let updated = 0;

    for (const product of products) {
      const result = await Product.updateOne(
        { slug: product.slug },
        { $set: product },
        { upsert: true }
      );

      if (result.upsertedCount > 0) {
        inserted++;
      } else if (result.modifiedCount > 0) {
        updated++;
      }
    }

    console.log("----------------------------------------");
    console.log(`Products inserted: ${inserted}`);
    console.log(`Products updated: ${updated}`);
    console.log(`Total processed:  ${inserted + updated}`);
    console.log("----------------------------------------\n");

    console.log("Seeding completed successfully!");
  } catch (error) {
    console.error("Seeding failed:", error);
    process.exit(1);
  } finally {
    await mongoose.disconnect();
  }
}

seed();
