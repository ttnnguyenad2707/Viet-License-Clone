"use client";

import { useState } from "react";
import { ChevronDownIcon } from "@/components/icons";

const faqs = [
  {
    q: "Tool có gửi dữ liệu ra ngoài không?",
    a: "Không. VietLicense License Scanner được định hướng chạy offline, không gọi network và không upload report. Report được lưu local trên máy của bạn.",
  },
  {
    q: "Quick quiz khác gì License Scanner?",
    a: "Quick quiz là checklist tự đánh giá ngay trên web, không quét máy. License Scanner là tool PowerShell chạy trên Windows để rà soát tín hiệu kỹ thuật sâu hơn và xuất report local.",
  },
  {
    q: "Tool có phát hiện crack 100% không?",
    a: "Không. Tool chỉ rà soát tín hiệu kỹ thuật trong phạm vi an toàn. Kết quả giúp ưu tiên kiểm tra, không phải kết luận tuyệt đối.",
  },
  {
    q: "Có cần quyền admin không?",
    a: "Một số tín hiệu hệ thống có thể cần quyền admin để đọc đầy đủ hơn. Nếu không chạy admin, report vẫn có thể tạo nhưng phạm vi dữ liệu sẽ hạn chế.",
  },
  {
    q: "Tool có xóa file hoặc can thiệp hệ thống không?",
    a: "Không. Tool chỉ đọc tín hiệu và xuất report local, không xóa file, không sửa registry, không kích hoạt hoặc thay đổi license.",
  },
  {
    q: "Tool có đọc tài liệu cá nhân, browser, email hoặc password không?",
    a: "Không. Tool không thu thập tài liệu cá nhân, lịch sử browser, email, password hay dữ liệu đăng nhập.",
  },
  {
    q: "Report dùng để làm gì?",
    a: "Report giúp IT hoặc chủ doanh nghiệp biết máy nào có dấu hiệu cần rà soát, cần đối chiếu chứng từ hoặc cần tư vấn chuẩn hóa license.",
  },
  {
    q: "Doanh nghiệp cần chuẩn bị gì để chuẩn hóa license?",
    a: "Nên chuẩn bị danh sách máy, edition Windows/Office đang dùng, chứng từ mua hàng, hóa đơn VAT nếu có, tài khoản Microsoft 365 liên quan và nhu cầu sử dụng thực tế.",
  },
];

const references = [
  {
    title: "Microsoft - Windows licensing resources",
    href: "https://www.microsoft.com/licensing",
  },
  {
    title: "Microsoft Support - Windows 10 support has ended",
    href: "https://support.microsoft.com/windows/windows-10-support-has-ended",
  },
  {
    title: "Microsoft Learn - Windows 10 Extended Security Updates",
    href: "https://learn.microsoft.com/windows/whats-new/windows-10-extended-security-updates",
  },
  {
    title: "Microsoft - Consumer Extended Security Updates",
    href: "https://www.microsoft.com/windows/security/windows-end-of-support",
  },
  {
    title: "Chính phủ - Công điện 38/CĐ-TTg ngày 05/05/2026",
    href: "https://chinhphu.vn",
  },
  {
    title: "Cổng Công báo - VBHN 67 Luật Sở hữu trí tuệ",
    href: "https://congbobuhos.congbao.gov.vn",
  },
  {
    title: "Cổng Công báo - VBHN 135 Bộ luật Hình sự",
    href: "https://congbobuhos.congbao.gov.vn",
  },
];

export function ScannerFAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <>
      {/* FAQ */}
      <section className="bg-background py-16">
        <div className="mx-auto max-w-[1440px] px-4">
          <div className="mb-8 max-w-3xl">
            <p className="eyebrow mb-3 text-xs font-semibold uppercase tracking-wide text-muted-foreground">
              FAQ
            </p>
            <h2 className="display text-3xl font-semibold tracking-tight text-foreground md:text-4xl">
              Câu hỏi thường gặp
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
        </div>
      </section>

      {/* References */}
      <section className="bg-white py-16">
        <div className="mx-auto max-w-[1440px] px-4">
          <div className="mb-8 max-w-3xl">
            <p className="eyebrow mb-3 text-xs font-semibold uppercase tracking-wide text-muted-foreground">
              Nguồn tham khảo
            </p>
            <h2 className="display text-3xl font-semibold tracking-tight text-foreground md:text-4xl">
              Nguồn tham khảo
            </h2>
            <p className="mt-3 text-sm text-muted-foreground">
              Các nguồn dưới đây dùng để định hướng nội dung giáo dục và checklist. Phần kết quả không dùng các nguồn này để đưa kết luận pháp lý cá nhân hóa.
            </p>
          </div>
          <div className="max-w-3xl space-y-3">
            {references.map((ref, i) => (
              <a
                key={i}
                href={ref.href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 rounded-xl border border-border bg-white px-5 py-4 text-sm text-[#0068ff] transition-colors hover:bg-muted"
              >
                <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-[#0068ff]/40" />
                <span>{ref.title}</span>
              </a>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
