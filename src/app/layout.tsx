import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Việt License - License Microsoft chính hãng, VAT cho cá nhân & SME",
  description:
    "Mua Windows, Office và Microsoft 365 chính hãng tại Việt License. Tư vấn đúng license, chuẩn hóa hồ sơ VAT cho cá nhân và SME, hỗ trợ nhanh qua Zalo.",
  openGraph: {
    title:
      "Việt License - License Microsoft chính hãng, VAT cho cá nhân & SME",
    description:
      "Mua Windows, Office và Microsoft 365 chính hãng tại Việt License. Tư vấn đúng license, chuẩn hóa hồ sơ VAT cho cá nhân và SME, hỗ trợ nhanh qua Zalo.",
    images: ["/assets/img/meta-banner.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="vi"
      className={`${inter.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-background text-foreground">
        <SiteHeader />
        {children}
        <SiteFooter />
      </body>
    </html>
  );
}
