import Link from "next/link";

type PDPSectionProps = {
  title?: string;
  children: React.ReactNode;
  className?: string;
};

export function PDPContactBand({ className = "" }: { className?: string }) {
  return (
    <section className={`bg-[#0e1014] py-12 ${className}`}>
      <div className="mx-auto max-w-[1440px] px-4">
        <div className="flex flex-col items-center text-center gap-6">
          <h2 className="text-xl font-semibold text-white max-w-xl">
            Bạn cần tư vấn thêm trước khi chốt đơn?
          </h2>
          <p className="text-sm text-white/60 max-w-lg">
            Liên hệ VietLicense qua Zalo, hotline hoặc Facebook Fanpage để được tư vấn đúng sản phẩm, phiên bản và hướng license phù hợp.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-3">
            <Link
              href="https://zalo.me/0382520281"
              className="btn btn-zalo"
              target="_blank"
              rel="noopener noreferrer"
            >
              Z Chat qua Zalo
            </Link>
            <Link
              href="tel:0382520281"
              className="btn btn-light"
            >
              Gọi hotline
            </Link>
          </div>
          <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-xs text-white/50">
            <span>Zalo: Thành Nguyễn - VietLicense</span>
            <span>Hotline: 0382 520 281</span>
            <span>Facebook: Việt License - Oliu Group</span>
          </div>
        </div>
      </div>
    </section>
  );
}
