import Link from "next/link";
import type { BusinessScenarioRow } from "./data";

type BusinessScenarioSectionProps = {
  scenarios: BusinessScenarioRow[];
};

export function BusinessScenarioSection({ scenarios }: BusinessScenarioSectionProps) {
  return (
    <section className="bg-white py-16">
      <div className="mx-auto max-w-[1440px] px-4">
        <div className="mb-10 max-w-3xl">
          <p className="eyebrow mb-3 text-xs font-semibold uppercase tracking-wide text-muted-foreground">
            Phạm vi phục vụ
          </p>
          <h2 className="display text-3xl font-semibold tracking-tight text-foreground md:text-4xl">
            Ma trận xử lý nhanh cho khách miền Nam và ĐBSCL
          </h2>
          <p className="mt-3 text-sm text-muted-foreground">
            Thay vì tạo trang địa phương riêng lẻ, Việt License gom các nhu cầu mua mới và rà soát license vào một luồng tư vấn từ xa thống nhất cho doanh nghiệp ở TP.HCM, Cần Thơ, Bình Dương, Long An và các tỉnh lân cận.
          </p>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full min-w-[768px] text-sm">
            <thead>
              <tr className="border-b border-border bg-muted/60">
                <th className="px-4 py-3 text-left text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                  Tình huống
                </th>
                <th className="px-4 py-3 text-left text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                  Nên gửi trước qua Zalo
                </th>
                <th className="px-4 py-3 text-left text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                  Việt License phản hồi gì
                </th>
                <th className="px-4 py-3 text-left text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                  Liên kết phù hợp
                </th>
              </tr>
            </thead>
            <tbody>
              {scenarios.map((row, i) => (
                <tr key={i} className="border-b border-border">
                  <td className="px-4 py-4 font-medium text-foreground">{row.situation}</td>
                  <td className="px-4 py-4 text-muted-foreground">{row.sendFirst}</td>
                  <td className="px-4 py-4 text-muted-foreground">{row.vietLicenseResponse}</td>
                  <td className="px-4 py-4">
                    <Link href={row.linkHref} className="text-[#0068ff] underline hover:opacity-80">
                      {row.linkLabel}
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="mt-6 text-xs text-muted-foreground">
          Từ ngày 01/06/2025, Nghị định 70/2025/NĐ-CP và Thông tư 32/2025/TT-BTC là hai mốc công khai để đội kế toán hoặc thu mua đối chiếu thêm về hóa đơn điện tử.
        </p>
      </div>
    </section>
  );
}
