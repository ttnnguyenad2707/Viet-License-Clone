"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import Image from "next/image";
import type { Product } from "@/types/vietlicense";
import { StarIcon } from "@/components/icons";
import { ProductCard } from "../ProductCard";

type WindowsProductSectionProps = {
  products: Product[];
};

const filterOptions = [
  { id: "all", label: "Tất cả" },
  { id: "fullbox", label: "Fullbox" },
  { id: "no-box", label: "No Box" },
  { id: "usb", label: "USB" },
  { id: "dvd", label: "DVD" },
  { id: "fpp", label: "FPP" },
  { id: "server", label: "Server" },
  { id: "digital", label: "Digital License" },
  { id: "sql", label: "SQL" },
];

export function WindowsProductSection({ products }: WindowsProductSectionProps) {
  const [activeFilter, setActiveFilter] = useState("all");

  const displayProducts = useMemo(() => {
    if (activeFilter === "all") return products;
    return products.filter((p) => {
      const tags = (p.pills ?? []).map((s: string) => s.toLowerCase());
      if (activeFilter === "fullbox") return tags.some((t: string) => t.includes("fullbox") && !t.includes("usb"));
      if (activeFilter === "no-box") return tags.some((t: string) => t.includes("no box"));
      if (activeFilter === "usb") return tags.some((t: string) => t.includes("usb"));
      if (activeFilter === "dvd") return tags.some((t: string) => t.includes("dvd"));
      if (activeFilter === "fpp") return tags.some((t: string) => t.includes("fpp"));
      if (activeFilter === "server") return tags.some((t: string) => t.includes("server"));
      if (activeFilter === "digital") return tags.some((t: string) => t.includes("digital"));
      if (activeFilter === "sql") return tags.some((t: string) => t.includes("sql"));
      return true;
    });
  }, [products, activeFilter]);

  return (
    <section id="san-pham" className="bg-background py-16">
      <div className="mx-auto max-w-[1440px] px-4">
        <div className="mb-8 flex flex-wrap items-center gap-2">
          {filterOptions.map((opt) => (
            <button
              key={opt.id}
              type="button"
              onClick={() => setActiveFilter(opt.id)}
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
