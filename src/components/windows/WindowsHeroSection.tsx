import Link from "next/link";

export function WindowsHeroSection() {
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
            Danh mục Windows
          </p>
          <h1 className="display text-4xl font-semibold tracking-tight text-foreground md:text-5xl">
            Windows chính hãng
            <br />
            <span
              className="bg-clip-text text-transparent"
              style={{
                backgroundImage:
                  "linear-gradient(100deg, rgb(0, 104, 255) 0%, rgb(58, 160, 255) 45%, rgb(0, 194, 255) 100%)",
              }}
            >
              cho cá nhân &amp; SME
            </span>
          </h1>
          <p className="mt-4 max-w-2xl text-base text-muted-foreground">
            Chọn Windows Home hoặc Pro phù hợp với nhu cầu sử dụng, hình thức license và khả năng nâng cấp Windows 11 của thiết bị.
          </p>
          <div className="mt-6">
            <Link href="#san-pham" className="btn btn-light">
              Xem danh sách
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
