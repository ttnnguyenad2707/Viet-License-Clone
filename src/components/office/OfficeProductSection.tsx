"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import Image from "next/image";
import type { Product } from "@/types/vietlicense";
import { StarIcon } from "@/components/icons";

type OfficeProductSectionProps = {
  products: Product[];
};

const filterOptions = [
  { id: "all", label: "Tất cả" },
  { id: "bind", label: "Bind account" },
  { id: "fullbox", label: "Fullbox" },
  { id: "no-box", label: "No Box" },
  { id: "m365", label: "Microsoft 365" },
];

const m365SubOptions = [
  { id: "all", label: "Tất cả" },
  { id: "basic", label: "Business Basic" },
  { id: "standard", label: "Business Standard" },
  { id: "premium", label: "Business Premium" },
];

export function OfficeProductSection({ products }: OfficeProductSectionProps) {
  const [activeFilter, setActiveFilter] = useState("all");
  const [activeM365, setActiveM365] = useState("all");

  const filtered = useMemo(() => {
    return products.filter((p) => {
      if (activeFilter === "all") return true;
      if (activeFilter === "m365") {
        return p.group === "office" && (p.name.includes("Microsoft 365"));
      }
      return p.form.toLowerCase().includes(activeFilter.replace("-", " "));
    });
  }, [products, activeFilter]);

  const displayProducts = useMemo(() => {
    if (activeFilter !== "m365") return filtered;
    if (activeM365 === "all") return filtered;
    return filtered.filter((p) => {
      const name = p.name.toLowerCase();
      if (activeM365 === "basic") return name.includes("basic");
      if (activeM365 === "standard") return name.includes("standard");
      if (activeM365 === "premium") return name.includes("premium");
      return true;
    });
  }, [filtered, activeFilter, activeM365]);

  return (
    <section className="bg-background py-16">
      <div className="mx-auto max-w-[1440px] px-4">
        <div className="mb-8 flex flex-wrap items-center gap-3">
          {filterOptions.map((opt) => (
            <button
              key={opt.id}
              type="button"
              onClick={() => {
                setActiveFilter(opt.id);
                setActiveM365("all");
              }}
              className={`rounded-full px-4 py-2 text-sm font-medium transition-colors ${
                activeFilter === opt.id
                  ? "bg-[#0068ff] text-white"
                  : "bg-white text-foreground border border-border hover:bg-muted"
              }`}
            >
              {opt.label}
            </button>
          ))}
        </div>

        {activeFilter === "m365" && (
          <div className="mb-6 flex flex-wrap items-center gap-2">
            {m365SubOptions.map((opt) => (
              <button
                key={opt.id}
                type="button"
                onClick={() => setActiveM365(opt.id)}
                className={`rounded-full px-3 py-1.5 text-xs font-medium transition-colors ${
                  activeM365 === opt.id
                    ? "bg-[#0068ff] text-white"
                    : "bg-white text-muted-foreground border border-border hover:bg-muted"
                }`}
              >
                {opt.label}
              </button>
            ))}
          </div>
        )}

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {displayProducts.map((product) => (
            <article
              key={product.slug}
              className="card flex flex-col rounded-[18px] border border-border bg-white text-foreground"
            >
              <Link href={product.href} className="absolute inset-0 z-10" aria-label={`Xem chi tiết ${product.name}`} />
              <div className="thumb relative h-64 w-full overflow-hidden">
                <div className="pills absolute left-4 top-4 flex flex-wrap gap-2">
                  {product.pills.map((pill) => (
                    <span
                      key={pill}
                      className={`rounded-full bg-white/80 px-3 py-1 text-xs font-medium text-foreground backdrop-blur ${
                        pill.toLowerCase().includes("best") ? "best-seller" : ""
                      }`}
                    >
                      {pill === "Best seller" && (
                        <StarIcon className="mr-1 inline h-3.5 w-3.5 text-yellow-500" />
                      )}
                      {pill}
                    </span>
                  ))}
                </div>
                <Image
                  src={product.thumbnail}
                  alt={product.name}
                  fill
                  className="object-contain p-6"
                />
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
                      {product.price.bulkLabel}{" "}
                      <span className="font-medium text-foreground">{product.price.bulkValue}</span>
                    </p>
                  )}
                </div>
                <div className="flex flex-wrap items-center gap-2 pt-2">
                  <Link href={product.href} className="btn btn-zalo btn-sm" onClick={(e) => e.stopPropagation()}>
                    Chốt qua Zalo
                  </Link>
                  <Link href={product.href} className="btn btn-light btn-sm" onClick={(e) => e.stopPropagation()}>
                    Xem chi tiết
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>

        <p className="mt-8 text-center text-sm text-muted-foreground">
          Khách hàng lấy &gt;30 bản vui lòng inbox VietLicense để được báo giá riêng.
        </p>
      </div>
    </section>
  );
}
