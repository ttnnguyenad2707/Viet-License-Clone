import Image from "next/image";
import { FacebookIcon, InfoIcon, ArrowUpIcon } from "./icons";
import Link from "next/link";

const heroImages = [
  { src: "https://res.cloudinary.com/dj4xx7efi/image/upload/v1783236728/hero-windows-server-2019_ttilc3.png", alt: "Windows 10/11 Home/Pro chính hãng" },
  { src: "https://res.cloudinary.com/dj4xx7efi/image/upload/v1783236726/logo-trimmed_ntkapz.png", alt: "Microsoft 365 Business bản quyền" },
  { src: "https://res.cloudinary.com/dj4xx7efi/image/upload/v1783236725/hero-windows-10-11_xaqebb.png", alt: "Office 2021 Pro Plus chính hãng" },
  { src: "https://res.cloudinary.com/dj4xx7efi/image/upload/v1783236725/hero-office-2019-pro-plus_r0txky.png", alt: "Office 2019 Pro Plus chính hãng" },
  { src: "https://res.cloudinary.com/dj4xx7efi/image/upload/v1783236724/hero-office-2021-pro-plus_ar5rlg.png", alt: "Windows Server 2016/2019 bản quyền" },
  { src: "https://res.cloudinary.com/dj4xx7efi/image/upload/v1783236724/hero-office-365_z44f92.png", alt: "SQL Server 2019/2022 bản quyền" },
];

export function HeroSection() {
  return (
    <section className="hero relative overflow-hidden" style={{ background: "radial-gradient(120% 120% at 50% -10%, rgb(245, 248, 250) 0%, rgb(238, 242, 245) 45%, rgb(228, 235, 240) 100%)" }}>
      <div className="mx-auto max-w-[1440px] px-4">
        <div className="grid items-center gap-10 pt-28 pb-24 md:grid-cols-2 md:gap-16">
          <div className="hero-inner">
            <p className="eyebrow mb-4 text-xs font-semibold uppercase tracking-wide text-muted-foreground">
              Bản quyền Microsoft chính hãng
            </p>
            <h1 className="display text-4xl font-semibold tracking-tight text-foreground md:text-5xl">
              Windows, Office<br />
              <span className="bg-clip-text text-transparent" style={{ backgroundImage: "linear-gradient(100deg, rgb(0, 104, 255) 0%, rgb(58, 160, 255) 45%, rgb(0, 194, 255) 100%)" }}>
                & Microsoft 365
              </span>
              <br />
              chính hãng
            </h1>

            <div className="hero-contact-row mt-8 flex flex-wrap items-center gap-3">
              <Link
                href="https://www.facebook.com/VietLicenseOliuGroup/"
                className="hero-contact-card facebook flex items-center gap-2 rounded-full bg-[#0e1014] px-5 py-2.5 text-sm font-medium text-white shadow-[rgba(0,0,0,0.5)_0px_12px_24px_-12px] transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="hero-contact-icon">
                  <FacebookIcon className="h-5 w-5" />
                </span>
                Tư vấn inbox
              </Link>
              <Link
                href="#products"
                className="hero-contact-card catalog flex items-center gap-2 rounded-full bg-white px-5 py-2.5 text-sm font-medium text-foreground transition-colors"
              >
                Xem sản phẩm
              </Link>
            </div>

            <div className="mt-6 flex items-center gap-2 text-sm text-muted-foreground">
              <span className="hint-icon">
                <InfoIcon className="h-5 w-5" />
              </span>
              <span>Chưa rõ chọn bản nào? Nhắn cấu hình máy qua Zalo, tư vấn đúng phiên bản trong 5 phút.</span>
            </div>
          </div>

          <div className="relative hidden h-[520px] w-full md:block">
            {heroImages.map((image, index) => (
              <Image
                key={image.src}
                src={image.src}
                alt={image.alt}
                fill
                priority={index === 0}
                className="hero-box object-contain transition-all duration-500"
                style={{
                  zIndex: heroImages.length - index,
                  transform: `translate(${(index % 3) * 12}px, ${index * 14}px) scale(${1 - index * 0.04})`,
                  opacity: 0.95 - index * 0.04,
                }}
              />
            ))}
          </div>
        </div>

        <div className="hero-scroll-cue mx-auto mb-6 flex w-fit items-center gap-2 rounded-full bg-white px-4 py-2 text-xs font-medium text-foreground">
          <Link href="#products" className="flex items-center gap-2">
            <ArrowUpIcon className="h-4 w-4 rotate-180" />
            Cuộn xuống để xem sản phẩm
          </Link>
        </div>

      </div>
    </section>
  );
}
