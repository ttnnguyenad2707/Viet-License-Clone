import { OfficeHeroSection } from "@/components/office/OfficeHeroSection";
import { OfficeProductSection } from "@/components/office/OfficeProductSection";
import { OfficeInfoSection } from "@/components/office/OfficeInfoSection";
import { OfficeFAQSection } from "@/components/office/OfficeFAQSection";
import type { Metadata } from "next";
import type { Product } from "@/types/vietlicense";
import productsData from "@/data/products.json";

const officeProducts: Product[] = productsData.products
  .filter(
    (product) =>
      /office|microsoft 365/i.test(product.category) ||
      /office|microsoft 365/i.test(product.subcategory)
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

export default function OfficePage() {
  return (
    <main className="min-h-screen">
      <OfficeHeroSection />
      <OfficeProductSection products={officeProducts} />
      <OfficeInfoSection />
      <OfficeFAQSection />
    </main>
  );
}
