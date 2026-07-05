import Link from "next/link";

export function CompareHeroSection() {
  return (
    <section className="relative overflow-hidden bg-[radial-gradient(120%_120%_at_50%_-10%,_#f5f8fa_0%,_#eef2f5_45%,_#e4ebf0_100%)]">
      <div className="mx-auto max-w-[1440px] px-4">
        <div className="pt-28 pb-16 flex flex-col items-center justify-center">
          <div className="max-w-2xl text-center" >
            <p className="eyebrow mb-4 text-xl font-bold uppercase tracking-wide text-muted-foreground">
              So sánh giá
            </p>
            <h1 className="display text-5xl font-bold tracking-tight text-foreground md:text-5xl">
              So giá theo chứng từ, không chỉ theo key
            </h1>
            <p className="mt-4 text-base text-muted-foreground">
              VietLicense không cố rẻ nhất. VietLicense cân bằng giữa giá tốt, chứng từ VAT, tư vấn đúng SKU và hồ sơ Microsoft rõ ràng.
            </p>
            <div className="mt-6 flex flex-wrap items-center gap-3 justify-center">
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
          
        </div>
      </div>
    </section>
  );
}
