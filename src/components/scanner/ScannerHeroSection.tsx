import Link from "next/link";

export function ScannerHeroSection() {
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
            VietLicense License Scanner
          </p>
          <h1 className="display text-4xl font-semibold tracking-tight text-foreground md:text-5xl">
            Rà soát rủi ro license
            <br />
            <span
              className="bg-clip-text text-transparent"
              style={{
                backgroundImage:
                  "linear-gradient(100deg, rgb(0, 104, 255) 0%, rgb(58, 160, 255) 45%, rgb(0, 194, 255) 100%)",
              }}
            >
              Windows &amp; Office
            </span>{" "}
            trước khi chuẩn hóa
          </h1>
          <p className="mt-4 max-w-2xl text-base text-muted-foreground">
            Bắt đầu bằng quick quiz không cần tải gì, hoặc dùng VietLicense License Scanner để rà soát tín hiệu kỹ thuật offline trên Windows 10/11 và xuất report local Markdown + JSON.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <Link href="#quiz" className="btn btn-dark">
              Làm quick quiz 2 phút
            </Link>
            <Link href="#tool" className="btn btn-light">
              Tải License Scanner
            </Link>
            <Link
              href="https://zalo.me/0382520281"
              className="btn btn-zalo"
              target="_blank"
              rel="noopener noreferrer"
            >
              Gửi report qua Zalo
            </Link>
          </div>
          <div className="mt-6 rounded-2xl border border-amber-200 bg-amber-50 p-4 max-w-2xl">
            <p className="text-sm text-amber-800">
              Kết quả từ quiz và scanner chỉ là tín hiệu hỗ trợ rà soát ban đầu, không phải kết luận pháp lý, không loại trừ mọi rủi ro và không thay thế kiểm toán license.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
