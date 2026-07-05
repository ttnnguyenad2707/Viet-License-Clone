"use client";

import { useState } from "react";
import Link from "next/link";
import type { CompareConclusionRow } from "@/types/vietlicense";

type CompareConclusionTableProps = {
  rows: CompareConclusionRow[];
};

export function CompareConclusionTable({ rows }: CompareConclusionTableProps) {
  const [activeTab, setActiveTab] = useState(1);

  const questions = [
    {
      title: "Giá rất thấp",
      answer: "Thường là key-only, forum, marketplace hoặc chưa thấy VAT/hợp đồng/bàn giao doanh nghiệp rõ trên nguồn công khai.",
    },
    {
      title: "Có chứng từ / retail",
      answer: "Nhiều SKU có VAT/retail cao hơn VietLicense; trường hợp giá gần hoặc thấp hơn cần kiểm tra điều kiện VAT, Teams, khuyến mãi và số lượng.",
    },
    {
      title: "VietLicense",
      answer: "VietLicense không cố rẻ nhất. VietLicense cân bằng giữa giá tốt, chứng từ VAT, tư vấn đúng SKU và hồ sơ Microsoft rõ ràng.",
    },
  ];

  return (
    <section className="bg-background py-12">
      <div className="mx-auto max-w-[1440px] px-4">
        <div className="mb-8">
          <h2 className="display text-3xl font-semibold tracking-tight text-foreground md:text-4xl">
            Kết luận nhanh
          </h2>
          <p className="mt-2 text-sm text-muted-foreground">
            Đừng hỏi &quot;bên nào rẻ nhất&quot;. Hỏi &quot;bên nào đủ hồ sơ để mua&quot;.
          </p>
        </div>

        <div className="mb-6 flex flex-wrap gap-2">
          <button
            type="button"
            onClick={() => setActiveTab(0)}
            className={`inline-flex items-center gap-1.5 rounded-full px-4 py-2 text-sm font-medium transition-colors ${
              activeTab === 0
                ? "bg-red-100 text-red-700"
                : "bg-white text-muted-foreground border border-border hover:bg-muted"
            }`}
          >
            <span className={`h-2 w-2 rounded-full ${activeTab === 0 ? "bg-red-500" : "bg-gray-400"}`} />
            Giá rất thấp
          </button>
          <button
            type="button"
            onClick={() => setActiveTab(1)}
            className={`inline-flex items-center gap-1.5 rounded-full px-4 py-2 text-sm font-medium transition-colors ${
              activeTab === 1
                ? "bg-[#0e1014] text-white"
                : "bg-white text-muted-foreground border border-border hover:bg-muted"
            }`}
          >
            <span className={`h-2 w-2 rounded-full ${activeTab === 1 ? "bg-white" : "bg-gray-400"}`} />
            VietLicense
          </button>
          <button
            type="button"
            onClick={() => setActiveTab(2)}
            className={`inline-flex items-center gap-1.5 rounded-full px-4 py-2 text-sm font-medium transition-colors ${
              activeTab === 2
                ? "bg-gray-200 text-gray-800"
                : "bg-white text-muted-foreground border border-border hover:bg-muted"
            }`}
          >
            <span className={`h-2 w-2 rounded-full ${activeTab === 2 ? "bg-gray-600" : "bg-gray-400"}`} />
            Retail / chứng từ cao
          </button>
        </div>

        <div className="overflow-hidden rounded-2xl border border-border bg-white">
          <div className="grid grid-cols-1 md:grid-cols-3">
            {rows.map((row, index) => (
              <div
                key={row.choice}
                className={`border-b border-border p-6 md:border-b-0 ${
                  index < rows.length - 1 ? "md:border-r md:border-border" : ""
                }`}
              >
                <div className="mb-4">
                  <h3 className="text-lg font-semibold text-foreground">{row.choice}</h3>
                  <p className="mt-1 text-sm font-medium text-muted-foreground">{row.price}</p>
                </div>
                <div className="h-px w-full bg-border" />
                <div className="mt-4 space-y-3">
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                      VAT / chứng từ
                    </p>
                    <p className="mt-1 text-sm text-muted-foreground">{row.vatNote}</p>
                  </div>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                      Kết luận mua
                    </p>
                    <p className="mt-1 text-sm text-foreground">{row.conclusion}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-6 rounded-2xl border border-border bg-white p-6">
          <h4 className="text-base font-semibold text-foreground">
            {questions[activeTab].title}
          </h4>
          <p className="mt-2 text-sm text-muted-foreground">
            {questions[activeTab].answer}
          </p>
        </div>

        <div className="mt-8 flex flex-wrap items-center gap-3">
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
