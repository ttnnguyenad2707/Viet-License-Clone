import Link from "next/link";

export function BusinessAuditSection() {
  return (
    <section className="bg-background py-16">
      <div className="mx-auto max-w-[1440px] px-4">
        <div className="grid gap-12 md:grid-cols-2 md:items-start">
          <div>
            <p className="eyebrow mb-3 text-xs font-semibold uppercase tracking-wide text-muted-foreground">
              Rà soát 5-100 máy
            </p>
            <h2 className="display text-3xl font-semibold tracking-tight text-foreground md:text-4xl">
              Chuẩn hóa Windows, Office và M365 cho công ty
            </h2>
            <p className="mt-4 text-sm text-muted-foreground">
              Nếu công ty có nhiều máy cài Windows hoặc Office từ nhiều nguồn khác nhau, hãy rà soát lại phiên bản, tình trạng kích hoạt, tài khoản Microsoft 365 và chứng từ trước khi mua thêm.
            </p>
            <ul className="mt-6 space-y-3 text-sm text-muted-foreground">
              <li className="flex gap-2">
                <span className="mt-0.5 h-4 w-4 shrink-0 rounded-full border border-[#0068ff] bg-[#0068ff]" />
                <span>Gửi số lượng máy và ảnh trạng thái Activation.</span>
              </li>
              <li className="flex gap-2">
                <span className="mt-0.5 h-4 w-4 shrink-0 rounded-full border border-[#0068ff] bg-[#0068ff]" />
                <span>Kiểm tra nhu cầu Windows Home/Pro, Office 2019/2021 hoặc Microsoft 365.</span>
              </li>
              <li className="flex gap-2">
                <span className="mt-0.5 h-4 w-4 shrink-0 rounded-full border border-[#0068ff] bg-[#0068ff]" />
                <span>Phân nhóm Basic/Standard/Premium nếu cần email, Office desktop, bảo mật hoặc quản trị thiết bị.</span>
              </li>
              <li className="flex gap-2">
                <span className="mt-0.5 h-4 w-4 shrink-0 rounded-full border border-[#0068ff] bg-[#0068ff]" />
                <span>Không chắc OEM, FPP hay GGWA phù hợp? Gửi tình trạng máy để tư vấn đúng hướng.</span>
              </li>
              <li className="flex gap-2">
                <span className="mt-0.5 h-4 w-4 shrink-0 rounded-full border border-[#0068ff] bg-[#0068ff]" />
                <span>Tư vấn phương án license rõ ràng, có VAT khi cần.</span>
              </li>
            </ul>
            <div className="mt-6">
              <Link href="https://zalo.me/0382520281" className="btn btn-zalo" target="_blank" rel="noopener noreferrer">
                Rà soát qua Zalo
              </Link>
            </div>
          </div>
          <div className="space-y-6">
            <div className="rounded-3xl border border-border bg-white p-6">
              <div className="mb-3 flex items-center gap-2 text-xs text-muted-foreground">
                <span className="inline-flex h-5 w-5 items-center justify-center rounded-full border border-border bg-muted text-[10px] font-bold text-foreground">
                  N
                </span>
                <span>Theo news 11/06/2026</span>
              </div>
              <h3 className="text-base font-semibold text-foreground">Không mua vội khi chưa kiểm tra</h3>
              <p className="mt-2 text-sm text-muted-foreground">
                Sau các tin tức về Windows/Office lậu bị khởi tố, hướng xử lý đúng là kiểm kê máy và chuẩn hóa hồ sơ phần mềm, không chỉ mua key rời rạc theo cảm tính.
              </p>
              <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
                <li className="flex gap-2">
                  <span className="mt-0.5 h-4 w-4 shrink-0 rounded-full border border-[#0068ff] bg-[#0068ff]" />
                  <span>Lập danh sách máy, người dùng và phần mềm đang dùng.</span>
                </li>
                <li className="flex gap-2">
                  <span className="mt-0.5 h-4 w-4 shrink-0 rounded-full border border-[#0068ff] bg-[#0068ff]" />
                  <span>Lưu báo giá, hóa đơn, thông tin license và hướng dẫn kích hoạt.</span>
                </li>
                <li className="flex gap-2">
                  <span className="mt-0.5 h-4 w-4 shrink-0 rounded-full border border-[#0068ff] bg-[#0068ff]" />
                  <span>Ưu tiên bộ cài chính hãng và chứng từ bàn giao rõ ràng.</span>
                </li>
              </ul>
              <div className="mt-4 flex flex-wrap gap-2">
                <Link href="#quy-trinh" className="btn btn-dark btn-sm">
                  Xem checklist rà soát
                </Link>
                <Link href="/so-sanh-gia" className="btn btn-light btn-sm">
                  Phân biệt GGWA, OEM và FPP →
                </Link>
                <Link href="/so-sanh-gia" className="btn btn-light btn-sm">
                  Chọn Microsoft 365 Business cho SME →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
