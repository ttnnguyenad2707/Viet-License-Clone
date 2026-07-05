import Image from "next/image";
import Link from "next/link";
import { StarIcon } from "./icons";
import type { Product } from "@/types/vietlicense";

type ProductCardProps = {
  product: Product;
};

export function ProductCard({ product }: ProductCardProps) {
  return (
    <article className="card flex flex-col rounded-[18px] border border-border bg-white text-foreground transition-shadow duration-500" style={{ boxShadow: "rgba(20, 40, 70, 0.4) 0px 8px 24px -16px" }}>
      <div className="thumb relative h-64 w-full overflow-hidden">
        <div className="pills absolute left-4 top-4 flex flex-wrap gap-2">
          {product.pills.map((pill) => (
            <span
              key={pill}
              className={`rounded-full bg-white/80 px-3 py-1 text-xs font-medium text-foreground backdrop-blur ${pill.toLowerCase().includes("best") ? "best-seller" : ""}`}
            >
              {pill === "Best seller" && <StarIcon className="mr-1 inline h-3.5 w-3.5 text-yellow-500" />}
              {pill}
            </span>
          ))}
        </div>
        <Image src={product.thumbnail} alt={product.name} fill className="object-contain p-6" />
      </div>

      <div className="body flex flex-1 flex-col gap-3 p-5">
        <h3 className="text-base font-semibold leading-snug">{product.name}</h3>
        <p className="text-xs text-muted-foreground">{product.description}</p>
        <ul className="space-y-2 text-xs text-muted-foreground">
          {product.includes.slice(0, 3).map((item) => (
            <li key={item} className="flex gap-2">
              <span className="check-icon mt-0.5 h-4 w-4 shrink-0" />
              <span>{item}</span>
            </li>
          ))}
        </ul>

        <div className="mt-auto space-y-1">
          <p className="text-xs text-muted-foreground">{product.price.retailLabel}</p>
          <p className="text-lg font-semibold">{product.price.retailValue}</p>
          {product.price.bulkLabel && product.price.bulkValue && (
            <p className="text-xs text-muted-foreground">
              {product.price.bulkLabel} <span className="font-medium text-foreground">{product.price.bulkValue}</span>
            </p>
          )}
        </div>

        <div className="flex flex-wrap items-center gap-2 pt-2">
          <Link href={product.href} className="btn btn-zalo btn-sm">
            Chốt qua Zalo
          </Link>
          <Link href={product.href} className="btn btn-light btn-sm">
            Xem chi tiết
          </Link>
        </div>
      </div>
    </article>
  );
}
