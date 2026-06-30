import Link from "next/link";

const comparisonRows = [
  {
    option: "Office 2019 Pro Plus",
    deadline: "Đã hết hỗ trợ từ 14/10/2025",
    suitable:
      "Phù hợp khi khách đã hiểu rõ giới hạn vòng đời và chỉ cần bộ Office mua một lần cho một máy với license, VAT và chứng từ rõ ràng.",
    next: "Nên cân nhắc Office 2021, Office 2024 hoặc Microsoft 365 nếu muốn lộ trình hỗ trợ dài hơn.",
  },
  {
    option: "Office 2021 Pro Plus",
    deadline: "Office LTSC 2021 hết hỗ trợ ngày 13/10/2026",
    suitable:
      "Phù hợp khi doanh nghiệp vẫn muốn Office mua một lần, mới hơn Office 2019 và chưa cần mô hình subscription.",
    next: "Nên lên kế hoạch thay thế trước hạn hỗ trợ thay vì chờ đến lúc buộc phải đổi.",
  },
  {
    option: "Office 2024",
    deadline: "Hướng nâng cấp on-premises mới hơn",
    suitable:
      "Phù hợp khi doanh nghiệp chưa muốn lên cloud nhưng cần lộ trình supported mới hơn Office 2021.",
    next: "Website dùng mục này để tư vấn định hướng; không tự suy đoán giá nếu catalog chưa niêm yết SKU Office 2024.",
  },
  {
    option: "Microsoft 365 Business",
    deadline: "Subscription 1 năm, cập nhật liên tục",
    suitable:
      "Phù hợp khi cần email doanh nghiệp, lưu trữ cloud, cộng tác Teams/SharePoint hoặc muốn giảm rủi ro refresh on-premises ngắn hạn.",
    next: "Chốt nhu cầu Basic, Standard hay Premium trước; Copilot/AI là bước tư vấn riêng sau khi xác định gói nền.",
  },
];

export function OfficeInfoSection() {
  return (
    <section className="bg-white py-16">
      <div className="mx-auto max-w-[1440px] px-4">
        <div className="mb-10 max-w-3xl">
          <p className="eyebrow mb-3 text-xs font-semibold uppercase tracking-wide text-muted-foreground">
            Mốc hỗ trợ cần kiểm tra trước khi mua
          </p>
          <h2 className="display text-3xl font-semibold tracking-tight text-foreground md:text-4xl">
            Chọn nhanh
          </h2>
          <p className="mt-3 text-sm text-muted-foreground">
            Nếu cần Office mua một lần cho một máy, hãy so Office 2019 với Office 2021 theo thời hạn hỗ trợ trước khi nhìn giá. Nếu cần email doanh nghiệp, cloud và cộng tác lâu dài, nên so Microsoft 365 Business trước rồi mới bàn thêm về Copilot.
          </p>
        </div>

        <div className="mb-8 flex flex-wrap gap-3">
          <span className="rounded-full bg-red-50 px-3 py-1.5 text-xs font-medium text-red-700">
            Office 2019 hết hỗ trợ
          </span>
          <span className="rounded-full bg-amber-50 px-3 py-1.5 text-xs font-medium text-amber-700">
            Office 2021 sắp hết hỗ trợ
          </span>
          <Link href="/so-sanh-gia" className="rounded-full bg-[#0068ff] px-3 py-1.5 text-xs font-medium text-white">
            So sánh Office 2019, 2021, 2024 và Microsoft 365
          </Link>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full min-w-[768px] text-sm">
            <thead>
              <tr className="border-b border-border bg-muted/60">
                <th className="px-4 py-3 text-left text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                  Lựa chọn
                </th>
                <th className="px-4 py-3 text-left text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                  Mốc hỗ trợ
                </th>
                <th className="px-4 py-3 text-left text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                  Phù hợp khi
                </th>
                <th className="px-4 py-3 text-left text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                  Khuyến nghị kế tiếp
                </th>
              </tr>
            </thead>
            <tbody>
              {comparisonRows.map((row) => (
                <tr key={row.option} className="border-b border-border">
                  <td className="px-4 py-4 font-semibold text-foreground">{row.option}</td>
                  <td className="px-4 py-4 text-red-600">{row.deadline}</td>
                  <td className="px-4 py-4 text-muted-foreground">{row.suitable}</td>
                  <td className="px-4 py-4 text-muted-foreground">{row.next}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
