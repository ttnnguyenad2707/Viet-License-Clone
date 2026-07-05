"use client";

import Image from "next/image";
import Link from "next/link";
import { config } from "@/lib/config";

const navLinks = [
  { href: "/", label: "Trang chủ" },
  { href: "/windows", label: "Windows" },
  { href: "/office", label: "Office" },
  { href: "/so-sanh-gia", label: "So sánh giá" },
  { href: "/doanh-nghiep", label: "Doanh nghiệp" },
];

export function SiteHeader() {
  return (
    <header className="site-header fixed inset-x-0 top-0 z-50 h-[74.8px] bg-white/92 backdrop-blur-[10px] saturate-[1.4]">
      <div className="mx-auto flex h-full max-w-[1440px] items-center justify-between px-4">
        <Link href="/" className="brand" aria-label="Việt License">
          <Image
            src={config.logo.src}
            alt={config.logo.alt}
            width={config.logo.width}
            height={config.logo.height}
            className="h-[46px] w-auto"
            priority
          />
        </Link>

        <nav className="hidden items-center gap-8 md:flex" aria-label="Điều hướng chính">
          {navLinks.map((item) => (
            <Link key={item.href} href={item.href} className="navlink text-sm font-medium text-[#4a525c]">
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-3 md:flex">
          <Link href="/#faq" className="navlink text-sm font-medium text-[#4a525c]">
            FAQ
          </Link>
          <Link
            href="https://zalo.me/0382520281"
            className="btn btn-dark btn-sm"
            target="_blank"
            rel="noopener noreferrer"
          >
            Tư vấn qua Zalo
          </Link>
        </div>

        <button
          type="button"
          className="nav-toggle flex flex-col gap-1.5 md:hidden"
          aria-label="Menu"
        >
          <span className="block h-0.5 w-6 bg-foreground" />
          <span className="block h-0.5 w-6 bg-foreground" />
          <span className="block h-0.5 w-6 bg-foreground" />
        </button>
      </div>
    </header>
  );
}
