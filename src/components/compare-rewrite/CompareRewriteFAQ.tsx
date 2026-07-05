"use client";

import { useState } from "react";
import type { FAQItem } from "@/types/vietlicense";
import { ChevronDownIcon } from "@/components/icons";

type CompareRewriteFAQProps = {
  items: FAQItem[];
};

export function CompareRewriteFAQ({ items }: CompareRewriteFAQProps) {
  const [openIndex, setOpenIndex] = useState<number>(0);

  return (
    <section className="bg-background py-16" id="faq">
      <div className="mx-auto max-w-[1440px] px-4">
        <div className="mb-10 max-w-3xl">
          <p className="eyebrow mb-3 text-xs font-semibold uppercase tracking-wide text-muted-foreground">
            Câu hỏi thường gặp
          </p>
          <h2 className="display text-3xl font-semibold tracking-tight text-foreground md:text-4xl">
            Giải đáp <span className="text-[#0068ff]">trước khi mua</span>
          </h2>
        </div>

        <div className="mx-auto max-w-3xl divide-y divide-border rounded-2xl border border-border bg-white">
          {items.map((item, index) => {
            const isOpen = index === openIndex;
            return (
              <div key={item.question} className="faq-item">
                <button
                  type="button"
                  className="flex w-full items-center justify-between px-6 py-5 text-left"
                  aria-expanded={isOpen}
                  onClick={() => setOpenIndex(isOpen ? -1 : index)}
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
