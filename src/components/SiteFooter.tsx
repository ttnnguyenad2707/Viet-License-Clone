import Image from "next/image";
import Link from "next/link";
import { FacebookIcon } from "./icons";

const productLinks = [
  { href: "/windows", label: "Windows" },
  { href: "/office", label: "Office" },
  { href: "/so-sanh-gia", label: "So sánh giá" },
  { href: "/doanh-nghiep", label: "Doanh nghiệp" },
];

const supportLinks = [
  { href: "/faq", label: "Câu hỏi thường gặp" },
  { href: "https://zalo.me/0382520281", label: "Tư vấn qua Zalo" },
  { href: "https://www.facebook.com/VietLicenseOliuGroup/", label: "Fanpage Facebook" },
  { href: "https://www.facebook.com/messages/t/1131614906706493", label: "Liên hệ qua Messenger" },
];

const contactRows = [
  { href: "https://www.facebook.com/VietLicenseOliuGroup/", label: "Fanpage: Việt License", icon: FacebookIcon },
  { href: "https://zalo.me/0382520281", label: "Zalo: Thành Nguyễn - VietLicense", icon: FacebookIcon },
  { href: "tel:0382520281", label: "Hotline: 0382 520 281", icon: FacebookIcon },
];

export function SiteFooter() {
  return (
    <footer className="footer border-t border-border bg-white">
      <div className="mx-auto max-w-[1440px] px-4 py-12">
        <div className="foot-grid grid grid-cols-1 gap-10 md:grid-cols-4">
          <div className="md:col-span-1">
            <Link href="/" className="brand inline-block" aria-label="Việt License">
              <Image src="/images/logo-trimmed.png" alt="Việt License" width={180} height={71} className="h-[46px] w-auto" />
            </Link>
            <p className="fdesc mt-4 text-sm text-muted-foreground">
              Windows, Office và Microsoft 365 chính hãng, hỗ trợ nhanh qua Zalo. Xuất VAT đầy đủ, license rõ ràng, tư vấn đúng nhu cầu.
            </p>
          </div>

          <div>
            <h5 className="text-sm font-semibold text-foreground">Sản phẩm</h5>
            <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
              {productLinks.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="transition-colors hover:text-foreground">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h5 className="text-sm font-semibold text-foreground">Hỗ trợ</h5>
            <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
              {supportLinks.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="transition-colors hover:text-foreground" target="_blank" rel="noopener noreferrer">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h5 className="text-sm font-semibold text-foreground">Liên hệ</h5>
            <ul className="mt-4 space-y-3 text-sm text-muted-foreground">
              {contactRows.map((item) => (
                <li key={item.label}>
                  <Link href={item.href} className="flex items-center gap-2 transition-colors hover:text-foreground" target="_blank" rel="noopener noreferrer">
                    <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#0e1014] text-white">
                      <item.icon className="h-4 w-4" />
                    </span>
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-10 flex flex-wrap items-center justify-between gap-4 text-xs text-muted-foreground">
          <span>© {new Date().getFullYear()} Việt License. All rights reserved.</span>
          <div className="flex gap-4">
            <Link href="/privacy" className="transition-colors hover:text-foreground">Chính sách bảo mật</Link>
            <Link href="/tos" className="transition-colors hover:text-foreground">Điều khoản sử dụng</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
