"use client";

import { useState } from "react";
import type { FAQItem } from "@/types/vietlicense";
import { ChevronDownIcon } from "@/components/icons";

type CompareFAQSectionProps = {
  items: FAQItem[];
};

export function CompareFAQSection({ items }: CompareFAQSectionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="bg-background py-12" id="faq">
      <div className="mx-auto max-w-[1440px] px-4">
        <div className="mb-8">
          <h2 className="display text-3xl font-semibold tracking-tight text-foreground md:text-4xl">
            Giải đáp <span className="text-[#0068ff]">trước khi mua</span>
          </h2>
        </div>

        <div className="mx-auto max-w-3xl divide-y divide-border rounded-2xl border border-border bg-white">
          {items.map((item, index) => {
            const isOpen = openIndex === index;
            return (
              <div key={item.question} className="faq-item">
                <button
                  type="button"
                  className="flex w-full items-center justify-between px-6 py-5 text-left"
                  aria-expanded={isOpen}
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                >
                  <span className="pr-4 text-sm font-semibold text-foreground">{item.question}</span>
                  <span
                    className="text-muted-foreground transition-transform duration-200"
                    style={{ transform: isOpen ? "rotate(180deg)" : "rotate(0deg)" }}
                  >
                    <ChevronDownIcon className="h-5 w-5" />
                  </span>
                </button>
                <div
                  className="overflow-hidden"
                  style={{
                    maxHeight: isOpen ? "480px" : "0px",
                    transition: "max-height 0.25s ease",
                  }}
                >
                  <div className="px-6 pb-5 text-sm leading-relaxed text-muted-foreground">
                    {item.answer}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
