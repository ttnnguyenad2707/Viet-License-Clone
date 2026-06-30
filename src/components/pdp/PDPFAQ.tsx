"use client";

import { useState } from "react";
import type { Product } from "@/types/product";

type PDPFAQProps = {
  faqs: Product["faqs"];
};

export function PDPFAQ({ faqs }: PDPFAQProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  if (!faqs || faqs.length === 0) return null;

  return (
    <section className="bg-secondary py-12">
      <div className="mx-auto max-w-3xl px-4">
        <h2 className="mb-6 text-xl font-semibold text-foreground">
          Câu hỏi thường gặp
        </h2>
        <div className="space-y-2">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className="rounded-xl border border-border bg-white overflow-hidden"
              >
                <button
                  type="button"
                  onClick={() => setOpenIndex(isOpen ? null : idx)}
                  className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left"
                >
                  <span className="text-sm font-semibold text-foreground">
                    {faq.question}
                  </span>
                  <span
                    className={`shrink-0 text-muted-foreground transition-transform duration-200 ${
                      isOpen ? "rotate-180" : ""
                    }`}
                  >
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={2}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="h-4 w-4"
                    >
                      <path d="M6 9l6 6 6-6" />
                    </svg>
                  </span>
                </button>
                {isOpen && (
                  <div className="border-t border-border px-5 pb-4 pt-3">
                    <p className="text-sm text-muted-foreground">{faq.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
