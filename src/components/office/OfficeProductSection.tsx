"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import Image from "next/image";
import type { Product } from "@/types/vietlicense";
import { StarIcon } from "@/components/icons";
import { ProductCard } from "../ProductCard";

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
            <ProductCard key={product.slug} product={product} />
          ))}
        </div>

        <p className="mt-8 text-center text-sm text-muted-foreground">
          Khách hàng lấy &gt;30 bản vui lòng inbox VietLicense để được báo giá riêng.
        </p>
      </div>
    </section>
  );
}
