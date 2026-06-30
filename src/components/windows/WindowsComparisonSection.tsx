import Link from "next/link";

const comparisonRows = [
  {
    form: "DVD Fullbox",
    suitable:
      "Máy mới hoặc cần cài Windows hoàn toàn từ đầu.",
    receives:
      "Box Windows, DVD cài đặt, key/license, hướng dẫn kích hoạt.",
  },
  {
    form: "FPP USB Fullbox",
    suitable:
      "Cần USB cài đặt tiện lợi, hình thức FPP rõ ràng và hộp lưu hồ sơ.",
    receives:
      "Box Windows, USB cài đặt, key/license FPP, hướng dẫn kích hoạt.",
  },
  {
    form: "FPP No Box",
    suitable:
      "Máy đang crack hoặc kích hoạt không rõ nguồn gốc, cần license FPP rõ ràng và tối ưu chi phí.",
    receives:
      "Key/license FPP gửi qua email, link tải bộ cài chính hãng, hướng dẫn kích hoạt.",
  },
];

export function WindowsComparisonSection() {
  return (
    <section className="bg-white py-16">
      <div className="mx-auto max-w-[1440px] px-4">
        <div className="mb-8 max-w-3xl">
          <p className="eyebrow mb-3 text-xs font-semibold uppercase tracking-wide text-muted-foreground">
            Hướng dẫn chọn nhanh
          </p>
          <h2 className="display text-3xl font-semibold tracking-tight text-foreground md:text-4xl">
            DVD Fullbox, FPP USB Fullbox và FPP No Box khác nhau thế nào?
          </h2>
          <p className="mt-3 text-sm text-muted-foreground">
            DVD Fullbox phù hợp máy mới hoặc cần cài Windows từ đầu; FPP USB Fullbox phù hợp khách cần USB và hộp lưu hồ sơ; FPP No Box phù hợp máy đang crack hoặc kích hoạt không rõ nguồn gốc muốn chuyển sang bản quyền.
          </p>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full min-w-[640px] text-sm">
            <thead>
              <tr className="border-b border-border bg-muted/60">
                <th className="px-4 py-3 text-left text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                  Hình thức
                </th>
                <th className="px-4 py-3 text-left text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                  Phù hợp khi
                </th>
                <th className="px-4 py-3 text-left text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                  Nhận được
                </th>
              </tr>
            </thead>
            <tbody>
              {comparisonRows.map((row) => (
                <tr key={row.form} className="border-b border-border">
                  <td className="px-4 py-4 font-semibold text-foreground">{row.form}</td>
                  <td className="px-4 py-4 text-muted-foreground">{row.suitable}</td>
                  <td className="px-4 py-4 text-muted-foreground">{row.receives}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="mt-10 rounded-3xl border border-border bg-white p-6">
          <h3 className="text-base font-semibold text-foreground">OEM, FPP và GGWA khác nhau khi audit như thế nào?</h3>
          <p className="mt-3 text-sm text-muted-foreground">
            Với doanh nghiệp, chọn Windows không chỉ là Home hay Pro. OEM thường phù hợp với máy mới hoặc thiết bị có license đi kèm từ đầu; FPP/Retail phù hợp khi cần license rõ ràng và linh hoạt hơn; còn GGWA là chủ đề nên hỏi tư vấn khi doanh nghiệp cần rà soát nhóm máy đang hoạt động nhưng chưa có license phù hợp.
          </p>
          <p className="mt-3 text-sm text-muted-foreground">
            Việt License không niêm yết GGWA như sản phẩm bán sẵn. Nếu chưa chắc máy nên dùng OEM, FPP hay cần hướng GGWA/compliance, hãy gửi số lượng máy và tình trạng kích hoạt qua Zalo trước khi mua.
          </p>
          <div className="mt-4">
            <Link href="/doanh-nghiep" className="btn btn-dark btn-sm">
              Windows GGWA là gì? Chọn GGWA, OEM hay FPP khi audit
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
