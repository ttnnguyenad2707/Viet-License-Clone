import { WindowsHeroSection } from "@/components/windows/WindowsHeroSection";
import { WindowsProductSection } from "@/components/windows/WindowsProductSection";
import { WindowsComparisonSection } from "@/components/windows/WindowsComparisonSection";
import { WindowsFAQSection } from "@/components/windows/WindowsFAQSection";
import { connectDB } from "@/lib/mongodb";
import Product from "@/models/Product";
import type { Product as ProductType } from "@/types/vietlicense";

export const dynamic = "force-dynamic";

async function getWindowsProducts(): Promise<ProductType[]> {
  await connectDB();
  const products = await Product.find({
    $or: [
      { category: { $regex: /^windows$/i } },
      { subcategory: { $regex: /windows/i } },
    ],
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

export default async function WindowsPage() {
  const windowsProducts = await getWindowsProducts();

  return (
    <main className="min-h-screen">
      <WindowsHeroSection />
      <WindowsProductSection products={windowsProducts} />
      <WindowsComparisonSection />
      <WindowsFAQSection />
    </main>
  );
}
