"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import type { CompareRow } from "@/types/vietlicense";
import Image from "next/image";

type CompareEvidenceTableProps = {
  rows: CompareRow[];
};

type FilterCategory = "all" | "very-low" | "vat-bulk" | "retail";

const filterCategories: { key: FilterCategory; label: string; count: number }[] = [
  { key: "all", label: "All", count: 20 },
  { key: "very-low", label: "Giá rất thấp", count: 5 },
  { key: "vat-bulk", label: "VAT/Sỉ", count: 10 },
  { key: "retail", label: "Retail", count: 5 },
];

const signalStyles: Record<string, { bg: string; text: string }> = {
  "Thấp hơn, thiếu hồ sơ": { bg: "bg-red-50", text: "text-red-700" },
  "Cao hơn VietLicense": { bg: "bg-amber-50", text: "text-amber-700" },
  "Cần kiểm điều kiện": { bg: "bg-blue-50", text: "text-blue-700" },
  "Benchmark đối tác": { bg: "bg-purple-50", text: "text-purple-700" },
  "Retail cao": { bg: "bg-gray-100", text: "text-gray-700" },
};

const getCategoryFilter = (row: CompareRow): FilterCategory => {
  if (["Niềm Vui Nhỏ", "Marketplace Shopee mẫu", "VOZ / KeyNgon", "BotayIT", "WebBanQuyen low-price listings"].includes(row.competitor)) {
    return "very-low";
  }
  if (["H2ShopTech", "ITSO / Tin Học Nguyễn Tài", "WinBanQuyen BIG SOFT", "ShopBanQuyen / BQ Digital", "FPS Vietnam", "SoftVN", "Mắt Bão", "Adtimin", "CellphoneS", "MSO.vn", "Pacisoft"].includes(row.competitor)) {
    return "vat-bulk";
  }
  return "retail";
};

export function CompareEvidenceTable({ rows }: CompareEvidenceTableProps) {
  const [activeFilter, setActiveFilter] = useState<FilterCategory>("all");

  const filteredRows = useMemo(() => {
    if (activeFilter === "all") return rows;
    return rows.filter((row) => getCategoryFilter(row) === activeFilter);
  }, [rows, activeFilter]);

  const counts: Record<FilterCategory, number> = useMemo(() => ({
    all: rows.length,
    "very-low": rows.filter((r) => getCategoryFilter(r) === "very-low").length,
    "vat-bulk": rows.filter((r) => getCategoryFilter(r) === "vat-bulk").length,
    retail: rows.filter((r) => getCategoryFilter(r) === "retail").length,
  }), [rows]);

  return (
    <section id="bang-bang-chung" className="bg-background py-12">
      <div className="mx-auto max-w-[1440px] px-4">
        <div className="mb-6 flex flex-wrap items-center gap-2">
          {filterCategories.map((cat) => (
            <button
              key={cat.key}
              type="button"
              onClick={() => setActiveFilter(cat.key)}
              className={`inline-flex items-center gap-1.5 rounded-full px-4 py-2 text-sm font-medium transition-colors ${
                activeFilter === cat.key
                  ? "bg-[#0e1014] text-white"
                  : "bg-white text-muted-foreground border border-border hover:bg-muted"
              }`}
            >
              {cat.label} <span className={activeFilter === cat.key ? "text-white/70" : "text-muted-foreground"}>{counts[cat.key]}</span>
            </button>
          ))}
        </div>

        <div className="overflow-hidden rounded-2xl border border-border bg-white">
          <div className="overflow-x-auto">
            <table className="w-full min-w-[900px]">
              <thead>
                <tr className="border-b border-border bg-muted/50">
                  <th className="px-4 py-3 text-left text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                    STT
                  </th>
                  <th className="px-4 py-3 text-left text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                    Nguồn
                  </th>
                  <th className="px-4 py-3 text-left text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                    Sản phẩm
                  </th>
                  <th className="px-4 py-3 text-left text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                    Giá họ
                  </th>
                  <th className="px-4 py-3 text-left text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                    VietLicense
                  </th>
                  <th className="px-4 py-3 text-left text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                    SKU
                  </th>
                  <th className="px-4 py-3 text-left text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                    Tín hiệu
                  </th>
                  <th className="px-4 py-3 text-left text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                    Nguồn
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border">
                {filteredRows.map((row, index) => {
                  const signalStyle = signalStyles[row.signal] || { bg: "bg-gray-50", text: "text-gray-700" };
                  const category = getCategoryFilter(row);
                  const categoryColors: Record<FilterCategory, { bg: string; text: string; dot: string }> = {
                    all: { bg: "bg-gray-50", text: "text-gray-600", dot: "bg-gray-400" },
                    "very-low": { bg: "bg-red-50", text: "text-red-700", dot: "bg-red-500" },
                    "vat-bulk": { bg: "bg-amber-50", text: "text-amber-700", dot: "bg-amber-500" },
                    retail: { bg: "bg-emerald-50", text: "text-emerald-700", dot: "bg-emerald-500" },
                  };
                  const catStyle = categoryColors[category];
                  
                  return (
                    <tr key={row.competitor} className="group hover:bg-muted/30 transition-colors">
                      <td className="px-4 py-3 text-sm text-muted-foreground">
                        {index + 1}
                      </td>
                      <td className="px-4 py-3">
                        <div className="flex items-center gap-2">
                          <div className="flex items-center justify-center" style={{
                            background: '#fff',
                            border: '1px solid #0b1c301a;',
                            borderRadius: '12px',
                            justifyContent: 'center',
                            alignItems: 'center',
                            width: '54px',
                            height: '54px',
                            display: 'inline-flex',
                            overflow: 'hidden',
                          }}>
                            <Image src={row.image} alt={row.competitor} width={50} height={50} />
                          </div>
                          <span className={`inline-flex items-center gap-1.5 rounded-full px-2 py-0.5 text-xs font-medium ${catStyle.bg} ${catStyle.text}`}>
                            <span className={`h-1.5 w-1.5 rounded-full ${catStyle.dot}`} />
                            {row.competitor}
                          </span>
                        </div>
                      </td>
                      <td className="px-4 py-3 text-sm text-muted-foreground">
                        {row.competitor.includes("Office") ? "Office 2021 Pro Plus" : row.competitor.includes("Windows") ? "Windows 10/11" : "Microsoft 365"}
                      </td>
                      <td className="px-4 py-3 text-sm font-semibold text-foreground">
                        {row.theirPrice}
                      </td>
                      <td className="px-4 py-3 text-sm text-muted-foreground">
                        {row.vietLicensePrice}
                      </td>
                      <td className="px-4 py-3">
                        <strong>{row.sku}</strong>
                        <span className={`inline-flex items-center rounded-full px-2 py-0.5 text-xs font-medium ${
                          row.skuNote === "SKU gần/trùng" ? "bg-blue-50 text-blue-700" : "bg-gray-100 text-gray-600"
                        }`}>
                          {row.skuNote}
                        </span>
                      </td>
                      <td className="px-4 py-3">
                        <span className={`inline-flex items-center rounded-full px-2 py-0.5 text-xs font-medium ${signalStyle.bg} ${signalStyle.text}`}>
                          {row.signal}
                        </span>
                      </td>
                      <td className="px-4 py-3">
                        <Link href={row.position} className="text-blue-500 hover:text-blue-600 underline font-bold text-sm" target="_blank" rel="noopener noreferrer">
                          {row.position}
                        </Link>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>

        <div className="mt-6 flex flex-wrap items-center gap-3">
          <Link href="/" className="btn btn-dark">
            Xem bảng giá VietLicense
          </Link>
          <Link
            href="https://zalo.me/0382520281"
            className="btn btn-light"
            target="_blank"
            rel="noopener noreferrer"
          >
            Gửi bảng giá cần đối chiếu
          </Link>
        </div>
      </div>
    </section>
  );
}
