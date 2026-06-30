"use client";

import { useState } from "react";
import Link from "next/link";
import { ChevronDownIcon } from "@/components/icons";

const faqs = [
  {
    q: "Có xuất VAT và hỗ trợ sau mua không?",
    a: "Việt License hỗ trợ xuất hóa đơn VAT điện tử theo yêu cầu. Khách được tư vấn đúng Home/Pro trước khi chốt đơn, nhận thông tin license, bộ cài chính hãng và hướng dẫn kích hoạt qua Zalo.",
  },
  {
    q: "Chưa chắc nên chọn Home hay Pro?",
    a: "Nhắn Zalo để được tư vấn theo nhu cầu và cấu hình máy của bạn, kèm xuất VAT đầy đủ.",
  },
];

export function WindowsFAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="bg-background py-16">
      <div className="mx-auto max-w-[1440px] px-4">
        <div className="mb-8 max-w-3xl">
          <h2 className="display text-3xl font-semibold tracking-tight text-foreground md:text-4xl">
            FAQ nhanh về Windows
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
                  className={`shrink-0 transition-transform duration-300 ${
                    openIndex === i ? "rotate-180" : ""
                  }`}
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
        <div className="mt-8">
          <Link
            href="https://zalo.me/0382520281"
            className="btn btn-zalo"
            target="_blank"
            rel="noopener noreferrer"
          >
            Tư vấn chọn phiên bản
          </Link>
        </div>
      </div>
    </section>
  );
}
