import type { Product } from "@/types/product";
import productsData from "@/data/products.json";

export function getAllProducts(): Product[] {
  return productsData.products as Product[];
}

export function getProduct(slug: string): Product | undefined {
  return (productsData.products as Product[]).find((p) => p.slug === slug);
}

export function getAllSlugs(): string[] {
  return productsData.products.map((p) => p.slug);
}

export function getRelatedProducts(slugs: string[]): Product[] {
  return slugs
    .map((slug) => getProduct(slug))
    .filter((p): p is Product => p !== undefined);
}
