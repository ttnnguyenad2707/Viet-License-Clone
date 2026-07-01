import { OfficeHeroSection } from "@/components/office/OfficeHeroSection";
import { OfficeProductSection } from "@/components/office/OfficeProductSection";
import { OfficeInfoSection } from "@/components/office/OfficeInfoSection";
import { OfficeFAQSection } from "@/components/office/OfficeFAQSection";
import { connectDB } from "@/lib/mongodb";
import Product from "@/models/Product";
import type { Product as ProductType } from "@/types/vietlicense";

export const dynamic = "force-dynamic";

async function getOfficeProducts(): Promise<ProductType[]> {
  await connectDB();
  const products = await Product.find({
    category: { $in: ["office", "microsoft-365"] },
  })
    .sort({ displayOrder: 1 })
    .lean();

  return products.map((product) => ({
    slug: product.slug,
    name: product.name,
    group: product.category,
    form: product.subcategory,
    availability: "in_stock" as const,
    thumbnail: product.thumbnail || "",
    pills: product.cardBadges || [],
    price: {
      retailLabel: product.price?.retailLabel || "",
      retailValue: String(product.price?.retail || ""),
      bulkLabel: product.price?.bulkLabel,
      bulkValue: product.price?.bulk ? String(product.price.bulk) : undefined,
    },
    includes: product.listDescription ? [product.listDescription] : [],
    description: product.listDescription || "",
    href: `/san-pham/${product.slug}`,
  }));
}

export default async function OfficePage() {
  const officeProducts = await getOfficeProducts();

  return (
    <main className="min-h-screen">
      <OfficeHeroSection />
      <OfficeProductSection products={officeProducts} />
      <OfficeInfoSection />
      <OfficeFAQSection />
    </main>
  );
}
