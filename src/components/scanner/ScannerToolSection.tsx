import Link from "next/link";
import { CTABand } from "@/components/CTABand";

const signals = [
  {
    badge: "Windows",
    label: "Edition, license status, activation channel, KMS/Volume signal.",
  },
  {
    badge: "Office / Microsoft 365",
    label: "Click-to-Run, ospp signal, trạng thái kích hoạt và cấu hình cần xác minh.",
  },
  {
    badge: "Defender history",
    label: "Một số lịch sử liên quan công cụ kích hoạt không rõ nguồn nếu hệ thống còn lưu.",
  },
  {
    badge: "Tasks / services / processes",
    label: "Tín hiệu tác vụ, dịch vụ hoặc tiến trình liên quan activation/licensing.",
  },
  {
    badge: "Bounded DeepScan",
    label: "Rà soát artifact giới hạn, không quét tài liệu cá nhân, browser, email hay password.",
  },
];

const steps = [
  {
    num: "01",
    title: "Tải và chạy tool trên Windows",
    body: "Dùng trên Windows 10/11 khi bạn cần rà soát sâu hơn quick quiz.",
  },
  {
    num: "02",
    title: "Rà soát tín hiệu kỹ thuật offline",
    body: "Tool chỉ đọc activation/licensing signal trong phạm vi an toàn, không gọi network.",
  },
  {
    num: "03",
    title: "Nhận report Markdown + JSON local",
    body: "Report nằm trên máy của bạn để IT hoặc chủ doanh nghiệp xem lại.",
  },
  {
    num: "04",
    title: "Gửi report qua Zalo nếu cần tư vấn",
    body: "Việt License hỗ trợ đối chiếu chứng từ, phiên bản và hướng chuẩn hóa license.",
  },
];

const reportColors = [
  { level: "GREEN", desc: "Không phát hiện dấu hiệu cần rà soát trong phạm vi quét." },
  { level: "YELLOW", desc: "Có dấu hiệu cấu hình cần xác minh." },
  { level: "ORANGE", desc: "Nhiều dấu hiệu trùng khớp, nên rà soát license." },
  { level: "RED", desc: "Dấu hiệu mạnh, cần chuẩn hóa." },
];

export function ScannerToolSection() {
  return (
    <>
      {/* Problem statement */}
      <section className="bg-white py-16">
        <div className="mx-auto max-w-[1440px] px-4">
          <div className="max-w-3xl">
            <h2 className="display text-3xl font-semibold tracking-tight text-foreground md:text-4xl">
              Nhiều máy đang dùng ổn, nhưng hồ sơ license lại chưa rõ
            </h2>
            <p className="mt-3 text-sm text-muted-foreground">
              Trong doanh nghiệp, Windows và Office thường đến từ nhiều nguồn: máy mua sẵn, máy cũ, tiệm cài, key bàn giao rời hoặc tài khoản Microsoft 365. Khi cần kiểm kê, xuất VAT hoặc chuẩn hóa phần mềm, trạng thái &quot;đã activated&quot; chưa đủ để biết hồ sơ license có rõ ràng hay không.
            </p>
            <ul className="mt-5 space-y-3 text-sm text-muted-foreground">
              <li className="flex gap-3">
                <span className="check-icon mt-0.5 h-4 w-4 shrink-0" />
                <span>Không rõ máy đang dùng Windows Home, Pro, Enterprise hay channel nào.</span>
              </li>
              <li className="flex gap-3">
                <span className="check-icon mt-0.5 h-4 w-4 shrink-0" />
                <span>Windows/Office đã kích hoạt nhưng thiếu hóa đơn, bàn giao hoặc license record.</span>
              </li>
              <li className="flex gap-3">
                <span className="check-icon mt-0.5 h-4 w-4 shrink-0" />
                <span>Máy mua từ nhiều nguồn, từng thay main, clone ổ hoặc cài lại nhiều lần.</span>
              </li>
              <li className="flex gap-3">
                <span className="check-icon mt-0.5 h-4 w-4 shrink-0" />
                <span>Khó lập danh sách máy cần chuẩn hóa trước khi báo giá hoặc xuất VAT.</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Tool CTA */}
      <section id="tool" className="bg-background py-16">
        <div className="mx-auto max-w-[1440px] px-4">
          <div className="grid gap-8 lg:grid-cols-2">
            {/* Left: Tool intro */}
            <div>
              <div className="rounded-[18px] border border-border bg-white p-6">
                <p className="eyebrow mb-3 text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                  Offline scanner
                </p>
                <h2 className="display text-2xl font-semibold text-foreground">
                  VietLicense License Scanner
                </h2>
                <p className="mt-3 text-sm text-muted-foreground">
                  Rà soát dấu hiệu license Windows &amp; Office không rõ ràng, offline và an toàn. V1 ưu tiên nhận tool/report qua Zalo để Việt License hướng dẫn đúng cách chạy và đọc kết quả.
                </p>
                <div className="mt-5 flex flex-wrap gap-3">
                  <Link
                    href="https://zalo.me/0382520281"
                    className="btn btn-zalo"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Nhận tool qua Zalo
                  </Link>
                  <Link
                    href="https://zalo.me/0382520281"
                    className="btn btn-dark"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Gửi report qua Zalo 0382 520 281
                  </Link>
                </div>
              </div>

              {/* How it works */}
              <div className="mt-8 rounded-[18px] border border-border bg-white p-6">
                <h3 className="mb-5 text-lg font-semibold text-foreground">
                  Cách hoạt động
                </h3>
                <p className="text-sm font-semibold text-muted-foreground mb-4">
                  Rà soát nhanh, giữ dữ liệu ở lại trên máy
                </p>
                <div className="space-y-6">
                  {steps.map((s) => (
                    <div key={s.num} className="flex gap-4">
                      <span className="shrink-0 text-2xl font-bold text-[#0068ff] opacity-40">
                        {s.num}
                      </span>
                      <div>
                        <p className="text-sm font-semibold text-foreground">{s.title}</p>
                        <p className="mt-1 text-xs text-muted-foreground">{s.body}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right: Scan preview */}
            <div>
              <div className="rounded-[18px] border border-border bg-[#0f1117] p-6 font-mono text-sm text-white">
                <p className="mb-4 text-xs text-white/50">VietLicense License Scanner</p>
                <div className="mb-3 flex items-center gap-3">
                  <p className="text-xs text-white/50">Scan progress</p>
                  <div className="h-2 w-32 rounded-full bg-white/10 overflow-hidden">
                    <div className="h-full w-2/3 rounded-full bg-[#22c55e]" />
                  </div>
                  <span className="text-xs text-[#22c55e]">68%</span>
                </div>
                <div className="mb-4 flex flex-wrap gap-2">
                  <span className="rounded bg-[#22c55e]/20 px-2 py-0.5 text-xs text-[#22c55e]">GREEN Windows</span>
                  <span className="rounded bg-[#eab308]/20 px-2 py-0.5 text-xs text-[#eab308]">YELLOW Office</span>
                  <span className="rounded bg-[#f97316]/20 px-2 py-0.5 text-xs text-[#f97316]">ORANGE KMS signal</span>
                  <span className="rounded bg-[#ef4444]/20 px-2 py-0.5 text-xs text-[#ef4444]">RED Artifact</span>
                </div>
                <div className="space-y-1 text-xs text-white/60">
                  <p>[10:31:08] Read Windows activation channel...</p>
                  <p>[10:31:10] Check Office Click-to-Run signal...</p>
                  <p>[10:31:12] Export report: license-report.md</p>
                </div>
              </div>

              {/* Offline badge */}
              <div className="mt-4 rounded-[18px] border border-border bg-white p-5">
                <p className="mb-3 text-sm font-semibold text-foreground">Local report</p>
                <div className="grid grid-cols-2 gap-2 text-xs">
                  {[
                    "Markdown + JSON",
                    "Offline 100%",
                    "Không upload dữ liệu",
                    "Không đọc tài liệu cá nhân",
                    "Không lấy full product key",
                    "Không sửa hệ thống",
                    "Xuất report local",
                  ].map((item) => (
                    <div key={item} className="flex items-center gap-2">
                      <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-[#22c55e]" />
                      <span className="text-muted-foreground">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Signals */}
              <div className="mt-4 rounded-[18px] border border-border bg-white p-6">
                <h3 className="mb-4 text-sm font-semibold text-foreground">
                  Tool đang nhìn vào những tín hiệu nào?
                </h3>
                <p className="mb-4 text-xs text-muted-foreground">
                  License Scanner không đọc tài liệu cá nhân và không cố kết luận pháp lý. Tool chỉ tổng hợp tín hiệu kỹ thuật để bạn biết mục nào cần đối chiếu thêm.
                </p>
                <div className="space-y-3">
                  {signals.map((sig) => (
                    <div key={sig.badge} className="flex gap-3">
                      <span className="check-icon mt-0.5 h-4 w-4 shrink-0" />
                      <div>
                        <span className="text-xs font-semibold text-foreground">{sig.badge}</span>
                        <span className="text-xs text-muted-foreground"> — {sig.label}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Report preview */}
      <section className="bg-white py-16">
        <div className="mx-auto max-w-[1440px] px-4">
          <div className="mb-8 max-w-3xl">
            <p className="eyebrow mb-3 text-xs font-semibold uppercase tracking-wide text-muted-foreground">
              Report preview
            </p>
            <h2 className="display text-3xl font-semibold tracking-tight text-foreground md:text-4xl">
              Report dễ đọc để ra quyết định tiếp theo
            </h2>
            <p className="mt-3 text-sm text-muted-foreground">
              Màu kết quả là mức ưu tiên rà soát, không phải kết luận pháp lý hoặc kết luận máy vi phạm.
            </p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {reportColors.map((r) => (
              <div key={r.level} className="rounded-[18px] border border-border bg-white p-5">
                <div
                  className={`mb-3 inline-block rounded px-3 py-1 text-xs font-bold ${
                    r.level === "GREEN"
                      ? "bg-green-100 text-green-700"
                      : r.level === "YELLOW"
                      ? "bg-yellow-100 text-yellow-700"
                      : r.level === "ORANGE"
                      ? "bg-orange-100 text-orange-700"
                      : "bg-red-100 text-red-700"
                  }`}
                >
                  {r.level}
                </div>
                <p className="text-sm text-muted-foreground">{r.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Multi-machine CTA */}
      <CTABand
        heading="Bạn có nhiều máy cần chuẩn hóa Windows/Office?"
        body="Gửi danh sách máy hoặc report local qua Zalo. Việt License sẽ tư vấn đúng phiên bản, hướng license phù hợp, báo giá theo số lượng, VAT nếu cần và hỗ trợ sau mua."
        cta="Gửi report qua Zalo 0382 520 281"
        href="https://zalo.me/0382520281"
      />
    </>
  );
}
