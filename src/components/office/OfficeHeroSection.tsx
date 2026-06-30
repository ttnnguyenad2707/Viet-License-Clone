import Link from "next/link";

export function OfficeHeroSection() {
  return (
    <section
      className="relative overflow-hidden"
      style={{
        background:
          "radial-gradient(120% 120% at 50% -10%, rgb(245, 248, 250) 0%, rgb(238, 242, 245) 45%, rgb(228, 235, 240) 100%)",
      }}
    >
      <div className="mx-auto max-w-[1440px] px-4">
        <div className="pt-28 pb-16">
          <p className="eyebrow mb-4 text-xs font-semibold uppercase tracking-wide text-muted-foreground">
            Danh mục Office
          </p>
          <h1 className="display text-4xl font-semibold tracking-tight text-foreground md:text-5xl">
            Office &amp; Microsoft 365
            <br />
            <span
              className="bg-clip-text text-transparent"
              style={{
                backgroundImage:
                  "linear-gradient(100deg, rgb(0, 104, 255) 0%, rgb(58, 160, 255) 45%, rgb(0, 194, 255) 100%)",
              }}
            >
              chính hãng
            </span>
          </h1>
          <p className="mt-4 max-w-2xl text-base text-muted-foreground">
            Office 2019/2021 Pro Plus mua một lần và Microsoft 365 Business theo subscription 1 năm. Trước khi mua, nên kiểm tra luôn mốc hỗ trợ của Office 2019/2021 để chọn đúng bản mua đứt, Office 2024 hay Basic/Standard/Premium.
          </p>
          <div className="mt-6 flex flex-wrap items-center gap-3">
            <Link href="/so-sanh-gia" className="btn btn-light">
              Xem danh sách
            </Link>
            <Link href="/so-sanh-gia" className="btn btn-light">
              Office 2024 hay M365? So sánh M365 Business
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
