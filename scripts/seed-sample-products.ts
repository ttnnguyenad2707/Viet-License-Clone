import { connectDB } from "../src/lib/mongodb";
import Product from "../src/models/Product";
import productsData from "../src/data/products.json";

interface ProductData {
  id: string;
  slug: string;
  name: string;
  category: string;
  subcategory?: string;
  shortDescription?: string;
  price: {
    retail?: number;
    retailLabel?: string;
    bulk?: number;
    bulkLabel?: string;
    bulkMinQty?: number;
    bulkNote?: string;
    vatNote?: string;
    largeQtyNote?: string;
  };
  currency?: string;
  badges?: Array<{ label: string; variant: string }>;
  images?: Array<{ src: string; alt: string; caption: string }>;
  thumbnail?: string;
  licenseType?: string;
  activationType?: string;
  deliveryType?: {
    form?: string;
    physicalItems?: string[];
    digitalItems?: string[];
    notes?: string[];
  };
  warranty?: {
    duration?: string;
    transferable?: boolean;
    transferNote?: string;
  };
  support?: {
    installGuide?: boolean;
    activationHelp?: boolean;
    upgradeConsult?: boolean;
    channels?: string[];
    details?: string[];
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
  seo?: {
    title?: string;
    description?: string;
    keywords?: string;
  };
  cta?: {
    primary?: { label: string; href: string; channel: string };
    secondary?: { label: string; href: string; channel: string };
    contacts?: Array<{ channel: string; name: string; href: string }>;
    trustBadges?: string[];
  };
  isFeatured?: boolean;
  displayOrder?: number;
  listTitle?: string;
  listDescription?: string;
  cardBadges?: string[];
}

const TARGET_SLUGS = [
  "windows-10-11-home-pro-fpp-usb-fullbox",
  "office-2021-pro-plus-fullbox",
];

async function seedSampleProducts() {
  console.log("Starting seed sample products...\n");

  await connectDB();

  const allProducts = productsData.products as ProductData[];
  const targetProducts = allProducts.filter((p) => TARGET_SLUGS.includes(p.slug));

  if (targetProducts.length === 0) {
    console.log("No products found with target slugs:", TARGET_SLUGS);
    process.exit(1);
  }

  console.log(`Found ${targetProducts.length} products to seed:\n`);

  let insertedCount = 0;
  let updatedCount = 0;

  for (const product of targetProducts) {
    const existingProduct = await Product.findOne({ slug: product.slug });

    if (existingProduct) {
      await Product.updateOne({ slug: product.slug }, { $set: product });
      console.log(`  [UPDATED] ${product.slug}`);
      updatedCount++;
    } else {
      await Product.create(product);
      console.log(`  [INSERTED] ${product.slug}`);
      insertedCount++;
    }
  }

  console.log("\n=== Summary ===");
  console.log(`Total processed: ${targetProducts.length}`);
  console.log(`Inserted: ${insertedCount}`);
  console.log(`Updated: ${updatedCount}`);

  await (await import("mongoose")).default.disconnect();
  console.log("\nDone!");
}

seedSampleProducts().catch((error) => {
  console.error("Error seeding products:", error);
  process.exit(1);
});
