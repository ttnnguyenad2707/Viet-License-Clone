import Link from "next/link";
import type { Product } from "@/types/product";

type PriceCTAProps = {
  product: Pick<Product, "price" | "warranty" | "cta">;
};

export function PDPPriceCTA({ product }: PriceCTAProps) {
  const { price, warranty, cta } = product;

  return (
    <div className="space-y-5">
      {/* Prices */}
      <div className="space-y-1">
        <div className="flex items-baseline gap-2">
          <span className="text-3xl font-bold text-foreground">
            {price.retailLabel}
          </span>
          <span className="text-sm text-muted-foreground">Giá lẻ</span>
        </div>
        {price.bulk != null && (
          <div className="flex items-baseline gap-2">
            <span className="text-xl font-semibold text-[#0068ff]">
              {price.bulkLabel}
            </span>
            <span className="text-sm text-muted-foreground">
              {price.bulkNote}
            </span>
          </div>
        )}
      </div>

      {/* Meta badges */}
      <div className="flex flex-wrap gap-2 text-xs text-muted-foreground">
        {warranty && (
          <>
            <span className="rounded-full bg-secondary px-3 py-1">
              HSD: {warranty.duration}
            </span>
            <span className="rounded-full bg-secondary px-3 py-1">
              Đổi máy: {warranty.transferable ? "OK" : "Không"}
            </span>
          </>
        )}
      </div>

      {/* Large qty note */}
      {price.largeQtyNote && (
        <p className="text-xs text-muted-foreground">{price.largeQtyNote}</p>
      )}

      {/* CTA buttons */}
      {cta && (
        <div className="flex flex-wrap gap-3">
          {cta.primary && (
            <Link
              href={cta.primary.href}
              className="btn btn-zalo"
              target={cta.primary.href.startsWith("http") ? "_blank" : undefined}
              rel="noopener noreferrer"
            >
              {cta.primary.channel === "zalo" && "Z"}
              {cta.primary.label}
            </Link>
          )}
          {cta.secondary && (
            <Link
              href={cta.secondary.href}
              className="btn btn-light"
            >
              {cta.secondary.label}
            </Link>
          )}
        </div>
      )}

      {/* Trust badges */}
      {cta?.trustBadges && cta.trustBadges.length > 0 && (
        <div className="flex flex-wrap gap-x-4 gap-y-1 text-xs text-muted-foreground">
          {cta.trustBadges.map((badge) => (
            <span key={badge} className="flex items-center gap-1.5">
              <span className="text-green-500">✔</span>
              {badge}
            </span>
          ))}
        </div>
      )}
    </div>
  );
}
