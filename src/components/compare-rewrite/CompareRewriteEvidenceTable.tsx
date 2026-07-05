"use client";

import { useState } from "react";
import Link from "next/link";
import type { CompareSource } from "@/types/vietlicense";
import { InfoIcon } from "@/components/icons";

type CompareRewriteEvidenceTableProps = {
  sources: CompareSource[];
};

const categoryStyles = {
  "very-low": {
    badge: "border-red-200 bg-red-50 text-red-700",
    dot: "bg-red-500",
    label: "Giá rất thấp",
  },
  "vat-bulk": {
    badge: "border-amber-200 bg-amber-50 text-amber-700",
    dot: "bg-amber-500",
    label: "VAT / sỉ",
  },
  retail: {
    badge: "border-emerald-200 bg-emerald-50 text-emerald-700",
    dot: "bg-emerald-500",
    label: "Retail chính ngạch",
  },
};

export function CompareRewriteEvidenceTable({ sources }: CompareRewriteEvidenceTableProps) {
  const [activeId, setActiveId] = useState<string>(sources[0]?.id ?? "");

  const active = sources.find((s) => s.id === activeId) ?? sources[0];

  return (
    <section id="bang-bang-chung" className="bg-background py-16">
      <div className="mx-auto max-w-[1440px] px-4">
        <div className="mb-10 max-w-3xl">
          <p className="eyebrow mb-3 text-xs font-semibold uppercase tracking-wide text-muted-foreground">
            Bảng bằng chứng giá
          </p>
          <h2 className="display text-3xl font-semibold tracking-tight text-foreground md:text-4xl">
            Best value evidence
          </h2>
          <p className="mt-3 text-sm text-muted-foreground">
            VietLicense = giá cân bằng + VAT + hỗ trợ + hồ sơ Microsoft.
          </p>
        </div>

        <div className="mb-6 flex flex-wrap gap-2">
          {Object.entries(categoryStyles).map(([key, styles]) => {
            const count = sources.filter((s) => s.category === key).length;
            return (
              <div
                key={key}
                className={`inline-flex items-center gap-2 rounded-full border px-3 py-1.5 text-xs font-medium ${styles.badge}`}
              >
                <span className={`h-1.5 w-1.5 rounded-full ${styles.dot}`} />
                <span>{styles.label}: {count}</span>
              </div>
            );
          })}
        </div>

        <div className="grid gap-6 lg:grid-cols-[380px_1fr]">
          <div className="space-y-3">
            {sources.map((source) => {
              const styles = categoryStyles[source.category];
              const isActive = activeId === source.id;
              return (
                <button
                  key={source.id}
                  type="button"
                  onClick={() => setActiveId(source.id)}
                  className={`w-full rounded-2xl border p-4 text-left transition-all ${
                    isActive
                      ? "border-foreground bg-white shadow-sm"
                      : "border-border bg-white hover:border-muted-foreground"
                  }`}
                >
                  <div className="flex items-center justify-between gap-2">
                    <div className="flex items-center gap-3">
                      <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-muted text-xs font-semibold text-foreground">
                        {source.initials}
                      </span>
                      <div className="min-w-0">
                        <p className="truncate text-sm font-semibold text-foreground">{source.name}</p>
                        <p className="truncate text-xs text-muted-foreground">{source.productName}</p>
                      </div>
                    </div>
                    <span
                      className={`shrink-0 rounded-full border px-2 py-0.5 text-[11px] font-medium ${styles.badge}`}
                    >
                      {styles.label}
                    </span>
                  </div>
                  <div className="mt-3 flex items-start gap-2 text-xs text-muted-foreground">
                    <span className="mt-0.5 flex h-4 w-4 shrink-0 items-center justify-center rounded-full border border-border text-[10px] font-semibold text-foreground">
                      i
                    </span>
                    <span>{source.summary}</span>
                  </div>
                </button>
              );
            })}
          </div>

          <div className="rounded-3xl border border-border bg-white p-6 lg:p-8">
            {active && (
              <div className="space-y-6">
                <div className="flex flex-wrap items-center gap-3">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-muted text-sm font-semibold text-foreground">
                    {active.initials}
                  </span>
                  <div>
                    <p className="text-sm font-semibold text-foreground">{active.name}</p>
                    <p className="text-xs text-muted-foreground">{active.productName}</p>
                  </div>
                  <span
                    className={`ml-auto shrink-0 rounded-full border px-2 py-1 text-xs font-medium ${categoryStyles[active.category].badge}`}
                  >
                    {categoryStyles[active.category].label}
                  </span>
                </div>

                <div className="grid gap-4 md:grid-cols-2">
                  <div className="rounded-2xl border border-border bg-muted/60 p-4">
                    <p className="text-xs font-medium text-muted-foreground">{active.evidenceLabel}</p>
                    <p className="mt-1 text-lg font-semibold text-foreground">{active.evidenceText}</p>
                  </div>
                  <div className="rounded-2xl border border-border bg-muted/60 p-4">
                    <p className="text-xs font-medium text-muted-foreground">VietLicense</p>
                    <p className="mt-1 text-lg font-semibold text-foreground">Mốc cân bằng từ 5 bản</p>
                  </div>
                </div>

                <div className="rounded-2xl border border-border bg-muted/60 p-4">
                  <div className="flex items-start gap-2">
                    <InfoIcon className="mt-0.5 h-4 w-4 shrink-0 text-muted-foreground" />
                    <div className="text-sm text-muted-foreground">{active.note}</div>
                  </div>
                </div>

                <div className="flex flex-wrap gap-2">
                  <Link
                    href={active.href}
                    className="btn btn-dark btn-sm"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Xem nguồn {active.name}
                  </Link>
                  <Link href="/so-sanh-gia-rewrite" className="btn btn-light btn-sm">
                    So sánh lại
                  </Link>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
