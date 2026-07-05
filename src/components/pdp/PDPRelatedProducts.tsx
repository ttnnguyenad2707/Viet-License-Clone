import Link from "next/link";
import type { Product } from "@/types/product";

type PDPRelatedProductsProps = {
  products: Pick<Product, "slug" | "name" | "category" | "shortDescription" | "price" | "badges" | "deliveryType">[];
};

export function PDPRelatedProducts({ products }: PDPRelatedProductsProps) {
  if (!products || products.length === 0) return null;

  return (
    <section className="bg-white py-16">
      <div className="mx-auto max-w-[1440px] px-4">
        <div className="mb-8">
          <h2 className="display text-2xl font-semibold tracking-tight text-foreground">
            Sản phẩm liên quan
          </h2>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {products.map((product) => (
            <Link
              key={product.slug}
              href={`/san-pham/${product.slug}`}
              className="card group flex flex-col p-4 transition-transform hover:-translate-y-0.5"
            >
              {/* Badges */}
              <div className="mb-3 flex flex-wrap gap-1">
                {product.badges?.slice(0, 3).map((badge) => (
                  <span
                    key={badge.label}
                    className={`rounded-full px-2 py-0.5 text-xs font-semibold ${
                      badge.variant === "primary"
                        ? "bg-[#0068ff] text-white"
                        : "bg-secondary text-muted-foreground"
                    }`}
                  >
                    {badge.label}
                  </span>
                ))}
              </div>

              {/* Name */}
              <h3 className="text-sm font-semibold text-foreground group-hover:text-[#0068ff] transition-colors line-clamp-2 mb-2">
                {product.name}
              </h3>

              {/* Description */}
              {product.shortDescription && (
                <p className="text-xs text-muted-foreground line-clamp-2 mb-3 flex-1">
                  {product.shortDescription}
                </p>
              )}

              {/* Delivery form */}
              {product.deliveryType?.form && (
                <p className="text-xs text-muted-foreground mb-2">
                  {product.deliveryType.form}
                </p>
              )}

              {/* Price */}
              {product.price && (
                <div className="mt-auto border-t border-border pt-3">
                  <p className="text-base font-bold text-foreground">
                    {product.price.retailLabel}
                  </p>
                  {product.price.bulkLabel && (
                    <p className="text-xs text-[#0068ff]">
                      {product.price.bulkNote} {product.price.bulkLabel}
                    </p>
                  )}
                </div>
              )}
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
