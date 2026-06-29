"use client";

import { useState } from "react";
import { ChevronDownIcon } from "./icons";
import type { FAQItem } from "@/types/vietlicense";

type FAQSectionProps = {
  items: FAQItem[];
};

export function FAQSection({ items }: FAQSectionProps) {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section className="sec faq py-16">
      <div className="mx-auto max-w-[1440px] px-4">
        <div className="sec-head flex flex-col items-center text-center">
          <p className="eyebrow mb-3 text-xs font-semibold uppercase tracking-wide text-muted-foreground">Câu hỏi thường gặp</p>
          <h2 className="display text-3xl font-semibold tracking-tight text-foreground md:text-4xl">
            Giải đáp<br />
            <span className="text-[#0068ff]">trước khi mua</span>
          </h2>
        </div>

        <div className="faq mx-auto mt-10 max-w-3xl divide-y divide-border rounded-2xl border border-border bg-white">
          {items.map((item, index) => {
            const isOpen = index === openIndex;
            return (
              <div key={item.question} className={`faq-item ${isOpen ? "open" : ""}`}>
                <button
                  type="button"
                  className="faq-q flex w-full items-center justify-between px-6 py-5 text-left"
                  aria-expanded={isOpen}
                  onClick={() => setOpenIndex(isOpen ? -1 : index)}
                >
                  <span className="pr-4 text-sm font-semibold text-foreground">{item.question}</span>
                  <span className="chev text-muted-foreground transition-transform duration-200" style={{ transform: isOpen ? "rotate(180deg)" : "rotate(0deg)" }}>
                    <ChevronDownIcon className="h-5 w-5" />
                  </span>
                </button>
                <div className="faq-a overflow-hidden" style={{ maxHeight: isOpen ? "480px" : "0px", transition: "max-height 0.25s ease" }}>
                  <div className="px-6 pb-5 text-sm leading-relaxed text-muted-foreground">{item.answer}</div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
