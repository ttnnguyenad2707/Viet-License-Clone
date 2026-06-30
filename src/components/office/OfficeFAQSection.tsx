"use client";

import { useState } from "react";
import Link from "next/link";
import { ChevronDownIcon } from "@/components/icons";

const faqs = [
  {
    q: "Office 2019 còn mua được không nếu đã hết hỗ trợ?",
    a: "Khách vẫn có thể hỏi Office 2019 khi cần bản mua một lần và chấp nhận giới hạn vòng đời, nhưng nên hiểu rằng Office 2019 đã hết hỗ trợ từ ngày 14/10/2025. Nếu cần lộ trình an toàn hơn, nên so thêm Office 2021, Office 2024 hoặc Microsoft 365 trước khi chốt.",
  },
  {
    q: "Office 2021 khác gì so với Microsoft 365 Business?",
    a: "Office 2021 là bản mua một lần cho một máy, phù hợp khi khách chỉ cần bộ Office cục bộ. Microsoft 365 Business là subscription 1 năm, phù hợp khi cần email doanh nghiệp, cloud storage, cộng tác và cập nhật liên tục; khách nên chọn Basic, Standard hoặc Premium theo nhu cầu thật.",
  },
  {
    q: "Doanh nghiệp cần mua Office có VAT nên gửi gì trước khi hỏi Zalo?",
    a: "Nên gửi phiên bản Office đang dùng hoặc muốn mua, số máy hoặc số user, ai cần desktop app hay email doanh nghiệp, cùng tên đơn vị, mã số thuế và email nhận hóa đơn. Việt License tư vấn qua Zalo và các kênh online toàn quốc, gồm khách ở miền Nam và ĐBSCL, nhưng nội dung này không dùng để khẳng định có chi nhánh địa phương.",
  },
];

const extraInfo = [
  {
    heading: "Bind account, Fullbox và No Box nghĩa là gì?",
    body: "Bind account là hình thức license gắn vào tài khoản Microsoft của khách. Fullbox có hộp để lưu hồ sơ hoặc bàn giao nội bộ. No Box không kèm hộp vật lý, key/license được gửi qua email và phù hợp khi khách cần tối ưu chi phí.",
  },
  {
    heading: "Có xuất VAT và nhận được gì sau khi mua?",
    body: "Khách nhận license/key đúng phiên bản, link tải bộ cài chính hãng, hướng dẫn cài đặt/kích hoạt và hỗ trợ sau mua qua Zalo. Với No Box, thông tin bàn giao được gửi qua email. Hóa đơn VAT điện tử được xuất theo yêu cầu khi khách cung cấp thông tin hợp lệ.",
  },
  {
    heading: "Doanh nghiệp nên gửi gì trước khi hỏi báo giá Office có VAT?",
    body: "Nên gửi phiên bản Office đang dùng hoặc định mua, số máy hoặc số user, ai cần desktop app, ai chỉ cần web/mobile và có cần email doanh nghiệp hay không. Tên đơn vị, mã số thuế và email nhận hóa đơn giúp xử lý VAT điện tử nhanh hơn.",
  },
];

export function OfficeFAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="bg-background py-16">
      <div className="mx-auto max-w-[1440px] px-4">
        <div className="grid gap-12 md:grid-cols-2 md:items-start">
          <div>
            <div className="mb-10">
              <h2 className="display text-3xl font-semibold tracking-tight text-foreground md:text-4xl">
                FAQ nhanh trước khi chốt Office
              </h2>
            </div>
            <div className="space-y-3">
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
          </div>
          <div className="space-y-6">
            {extraInfo.map((info) => (
              <div key={info.heading} className="rounded-3xl border border-border bg-white p-6">
                <h3 className="text-base font-semibold text-foreground">{info.heading}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{info.body}</p>
              </div>
            ))}
            <div className="rounded-3xl border border-border bg-white p-6">
              <h3 className="text-base font-semibold text-foreground">Office mua một lần hay Microsoft 365?</h3>
              <p className="mt-2 text-sm text-muted-foreground">
                Nhắn Zalo để được tư vấn lựa chọn phù hợp với nhu cầu, số user, email/cloud và ngân sách của bạn.
              </p>
              <div className="mt-4">
                <Link
                  href="https://zalo.me/0382520281"
                  className="btn btn-zalo btn-sm"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Tư vấn Office qua Zalo
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
