import { WindowsHeroSection } from "@/components/windows/WindowsHeroSection";
import { WindowsProductSection } from "@/components/windows/WindowsProductSection";
import { WindowsComparisonSection } from "@/components/windows/WindowsComparisonSection";
import { WindowsFAQSection } from "@/components/windows/WindowsFAQSection";
import type { Metadata } from "next";
import type { Product } from "@/types/vietlicense";
import productsData from "@/data/products.json";

const windowsProducts: Product[] = productsData.products
  .filter(
    (product) =>
      /windows/i.test(product.category) || /windows/i.test(product.subcategory)
  )
  .sort((a, b) => {
    const aOrder = typeof a.displayOrder === "number" ? a.displayOrder : Number.MAX_SAFE_INTEGER;
    const bOrder = typeof b.displayOrder === "number" ? b.displayOrder : Number.MAX_SAFE_INTEGER;
    if (aOrder !== bOrder) return aOrder - bOrder;
    return a.name.localeCompare(b.name);
  })
  .map((product) => ({
    slug: product.slug,
    name: product.name,
    group: product.category,
    form: product.subcategory,
    availability: "in_stock",
    thumbnail: product.thumbnail || "",
    pills: product.cardBadges || [],
    price: {
      retailLabel: product.price?.retailLabel || "",
      retailValue: product.price?.retailValue || "",
      bulkLabel: product.price?.bulkLabel,
      bulkValue: product.price?.bulkValue,
    },
    includes: product.listDescription ? [product.listDescription] : [],
    description: product.listDescription || "",
    href: `/san-pham/${product.slug}`,
  }));

export default function WindowsPage() {
  return (
    <main className="min-h-screen">
      <WindowsHeroSection />
      <WindowsProductSection products={windowsProducts} />
      <WindowsComparisonSection />
      <WindowsFAQSection />
    </main>
  );
}
