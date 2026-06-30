"use client";

import { useState } from "react";
import { ChevronDownIcon } from "@/components/icons";

type BusinessFAQSectionProps = {
  faqs: { q: string; a: string }[];
};

export function BusinessFAQSection({ faqs }: BusinessFAQSectionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="bg-background py-16">
      <div className="mx-auto max-w-[1440px] px-4">
        <div className="mb-10 max-w-3xl">
          <h2 className="display text-3xl font-semibold tracking-tight text-foreground md:text-4xl">
            FAQ cho doanh nghiệp ở TP.HCM, Cần Thơ, Bình Dương, Long An
          </h2>
        </div>
        <div className="max-w-3xl space-y-3">
          {faqs.map((faq, i) => (
            <div key={i} className="rounded-2xl border border-border bg-white">
              <button
                type="button"
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="flex w-full items-center justify-between gap-4 px-6 py-4 text-left"
              >
                <span className="text-sm font-semibold text-foreground">{faq.q}</span>
                <span
                  className={`shrink-0 transition-transform duration-300 ${openIndex === i ? "rotate-180" : ""}`}
                >
                  <ChevronDownIcon className="h-5 w-5 text-muted-foreground" />
                </span>
              </button>
              {openIndex === i && (
                <div className="border-t border-border px-6 pb-5 pt-3">
                  <p className="text-sm text-muted-foreground">{faq.a}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
