import Link from "next/link";

export function BusinessHeroSection() {
  return (
    <section
      className="relative overflow-hidden"
      style={{
        background:
          "radial-gradient(120% 120% at 50% -10%, rgb(245, 248, 250) 0%, rgb(238, 242, 245) 45%, rgb(228, 235, 240) 100%)",
      }}
    >
      <div className="mx-auto max-w-[1440px] px-4">
        <div className="grid items-center gap-10 pt-28 pb-20 md:grid-cols-2 md:gap-16">
          <div className="max-w-2xl">
            <p className="eyebrow mb-4 text-xs font-semibold uppercase tracking-wide text-muted-foreground">
              Doanh nghiệp
            </p>
            <h1 className="display text-4xl font-semibold tracking-tight text-foreground md:text-5xl">
              Chuẩn hóa Windows, Office
              <br />
              <span
                className="bg-clip-text text-transparent"
                style={{
                  backgroundImage:
                    "linear-gradient(100deg, rgb(0, 104, 255) 0%, rgb(58, 160, 255) 45%, rgb(0, 194, 255) 100%)",
                }}
              >
                &amp; Microsoft 365
              </span>
            </h1>
            <p className="mt-4 text-base text-muted-foreground">
              Tư vấn theo số lượng máy/người dùng, chọn đúng sản phẩm, có báo giá riêng, chiết khấu theo số lượng cho
              đơn lớn, chứng từ bàn giao và xuất VAT đầy đủ.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <Link
                href="https://zalo.me/0382520281"
                className="btn btn-zalo"
                target="_blank"
                rel="noopener noreferrer"
              >
                Nhận tư vấn doanh nghiệp
              </Link>
              <Link href="#quy-trinh" className="btn btn-light">
                Quy trình báo giá
              </Link>
            </div>
          </div>
          <div className="hidden md:block">
            <div className="relative h-80 w-full">
              <div className="absolute right-0 top-0 w-72 rounded-3xl border border-border bg-white p-6 shadow-xl">
                <p className="text-sm font-semibold text-foreground">Ưu đãi cho đơn lớn</p>
                <div className="mt-4 space-y-3">
                  <div className="flex items-center gap-3">
                    <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#0068ff] text-xs font-bold text-white">
                      SL
                    </span>
                    <span className="text-sm text-muted-foreground">Chiết khấu số lượng</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#0068ff] text-xs font-bold text-white">
                      BG
                    </span>
                    <span className="text-sm text-muted-foreground">Báo giá riêng</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#0068ff] text-xs font-bold text-white">
                      VAT
                    </span>
                    <span className="text-sm text-muted-foreground">Xuất VAT đầy đủ</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
