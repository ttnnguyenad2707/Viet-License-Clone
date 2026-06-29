import Link from "next/link";

export function CompareHeroSection() {
  return (
    <section className="relative overflow-hidden bg-[radial-gradient(120%_120%_at_50%_-10%,_#f5f8fa_0%,_#eef2f5_45%,_#e4ebf0_100%)]">
      <div className="mx-auto max-w-[1440px] px-4">
        <div className="grid items-center gap-10 pt-28 pb-16 md:grid-cols-2 md:gap-16">
          <div className="max-w-2xl">
            <p className="eyebrow mb-4 text-xs font-semibold uppercase tracking-wide text-muted-foreground">
              So sánh giá
            </p>
            <h1 className="display text-4xl font-semibold tracking-tight text-foreground md:text-5xl">
              So giá theo chứng từ, không chỉ theo key
            </h1>
            <p className="mt-4 text-base text-muted-foreground">
              VietLicense không cố rẻ nhất. VietLicense cân bằng giữa giá tốt, chứng từ VAT, tư vấn đúng SKU và hồ sơ Microsoft rõ ràng.
            </p>
            <div className="mt-6 flex flex-wrap items-center gap-3">
              <Link
                href="#bang-bang-chung"
                className="btn btn-dark"
              >
                Xem bằng chứng 20 nguồn
              </Link>
              <Link
                href="https://zalo.me/0382520281"
                className="btn btn-light"
                target="_blank"
                rel="noopener noreferrer"
              >
                Gửi bảng giá bạn đang có
              </Link>
            </div>
            <p className="mt-4 text-xs text-muted-foreground">
              Giá kiểm tra ngày 19/06/2026; giá VietLicense trong bảng là mốc từ 5 bản, SKU không trùng tuyệt đối chỉ là tham chiếu.
            </p>
          </div>
          <div className="relative hidden h-[420px] md:block">
            <div className="absolute -right-8 top-10 h-64 w-64 rounded-3xl bg-white/80 p-6 shadow-xl backdrop-blur">
              <p className="text-sm font-semibold text-foreground">Bảng bằng chứng giá</p>
              <p className="mt-1 text-xs text-muted-foreground">VietLicense là mốc cân bằng</p>
              <div className="mt-4 flex items-center gap-2 text-xs text-muted-foreground">
                <span className="inline-flex h-2 w-2 rounded-full bg-[#0068ff]" />
                <span>Kiểm tra ngày 19/06/2026</span>
              </div>
            </div>
            <div className="absolute left-10 top-24 h-64 w-64 rounded-3xl border border-border bg-white p-6 shadow-lg">
              <p className="text-xs font-medium text-muted-foreground">20 nguồn</p>
              <p className="mt-1 text-sm font-semibold text-foreground">5 giá rất thấp</p>
              <p className="mt-1 text-sm font-semibold text-foreground">10 VAT/sỉ</p>
              <p className="text-sm font-semibold text-foreground">5 retail</p>
              <p className="mt-3 text-xs text-muted-foreground">Giá VietLicense là mốc từ 5 bản</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
