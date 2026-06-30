import { WindowsHeroSection } from "@/components/windows/WindowsHeroSection";
import { WindowsProductSection } from "@/components/windows/WindowsProductSection";
import { WindowsComparisonSection } from "@/components/windows/WindowsComparisonSection";
import { WindowsFAQSection } from "@/components/windows/WindowsFAQSection";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Windows 10/11 bản quyền Home/Pro, FPP & VAT | Việt License",
  description:
    "Windows 10/11 bản quyền Home/Pro các hình thức FPP Fullbox, USB, DVD, No Box. Chọn đúng phiên bản, xuất VAT, tư vấn nhanh.",
};

const windowsProducts = [
  {
    slug: "windows-1011-home-pro-fpp-usb-fullbox",
    name: "Windows 10/11 Home/Pro - FPP USB Fullbox",
    group: "windows",
    form: "USB · Fullbox · FPP",
    availability: "in_stock" as const,
    thumbnail: "/images/optimized/windows11-720.png",
    pills: ["USB", "Fullbox", "FPP", "Best seller"],
    price: {
      retailLabel: "Giá bán lẻ",
      retailValue: "2.650.000đ",
      bulkLabel: "�ơn từ 5 sản phẩm giá",
      bulkValue: "2.550.000đ",
    },
    includes: [
      "1 x Box Windows chính hãng",
      "1 x USB cài đặt Windows 10/11",
      "1 x Key/license FPP đúng phiên bản Home/Pro",
    ],
    description:
      "Phù hợp chuyển máy Windows đang crack hoặc kích hoạt không rõ nguồn gốc sang license FPP rõ ràng.",
    href: "/san-pham/windows-1011-home-pro-fpp-usb-fullbox",
  },
  {
    slug: "windows-1011-home-pro-dvd-fullbox",
    name: "Windows 10/11 Home/Pro - DVD Fullbox",
    group: "windows",
    form: "DVD · Fullbox",
    availability: "in_stock" as const,
    thumbnail: "/images/optimized/windows11-720.png",
    pills: ["DVD", "Fullbox"],
    price: {
      retailLabel: "Giá bán lẻ",
      retailValue: "1.300.000đ",
      bulkLabel: "Đơn từ 5 sản phẩm giá",
      bulkValue: "1.200.000đ",
    },
    includes: [
      "1 x Box Windows chính hãng",
      "1 x DVD cài đặt Windows 10/11",
      "1 x Key/license đúng phiên bản Home/Pro",
    ],
    description: "Dành cho máy mới hoặc máy cần cài Windows hoàn toàn từ đầu.",
    href: "/san-pham/windows-1011-home-pro-dvd-fullbox",
  },
  {
    slug: "windows-1011-home-pro-fpp-no-box",
    name: "Windows 10/11 Home/Pro - FPP No Box",
    group: "windows",
    form: "No Box · FPP",
    availability: "in_stock" as const,
    thumbnail: "/images/optimized/windows11-720.png",
    pills: ["No Box", "FPP"],
    price: {
      retailLabel: "Giá bán lẻ",
      retailValue: "2.200.000đ",
      bulkLabel: "Đơn từ 5 sản phẩm giá",
      bulkValue: "2.100.000đ",
    },
    includes: [
      "1 x Key/license FPP đúng phiên bản Home/Pro gửi qua email",
      "1 x Link tải bộ cài Windows chính hãng",
      "1 x Hướng dẫn kích hoạt",
    ],
    description:
      "FPP No Box gửi key qua email, phù hợp chuyển máy Windows crack hoặc kích hoạt không rõ nguồn gốc sang bản quyền.",
    href: "/san-pham/windows-1011-home-pro-fpp-no-box",
  },
  {
    slug: "windows-server-20162019",
    name: "Windows Server 2016/2019",
    group: "windows",
    form: "Server License",
    availability: "in_stock" as const,
    thumbnail: "/images/optimized/windows-server.png",
    pills: ["Server", "Digital License"],
    price: {
      retailLabel: "Giá bán lẻ",
      retailValue: "5.000.000đ",
      bulkLabel: "Số lượng",
      bulkValue: "Liên hệ khi mua số lượng",
    },
    includes: [
      "1 x License Windows Server 2016/2019",
      "1 x Link tải bộ cài chính hãng",
      "1 x Hướng dẫn cài đặt và kích hoạt",
    ],
    description: "License Windows Server 2016/2019 cho máy chủ nội bộ và hệ thống doanh nghiệp.",
    href: "/san-pham/windows-server-20162019",
  },
  {
    slug: "sql-server-20192022",
    name: "SQL Server 2019/2022",
    group: "windows",
    form: "Server License",
    availability: "in_stock" as const,
    thumbnail: "/images/optimized/sql-server.png",
    pills: ["SQL", "Server", "Digital License"],
    price: {
      retailLabel: "Giá bán lẻ",
      retailValue: "5.500.000đ",
      bulkLabel: "Số lượng",
      bulkValue: "Liên hệ khi mua số lượng",
    },
    includes: [
      "1 x License SQL Server 2019/2022",
      "1 x Link tải bộ cài chính hãng",
      "1 x Hướng dẫn cài đặt và kích hoạt",
    ],
    description: "License SQL Server 2019/2022 cho hệ thống dữ liệu và ứng dụng doanh nghiệp.",
    href: "/san-pham/sql-server-20192022",
  },
];

export default function WindowsPage() {
  return (
    <main className="min-h-screen">
      <WindowsHeroSection />
      <WindowsProductSection products={windowsProducts} />
      <WindowsComparisonSection />
      <WindowsFAQSection />
    </main>
  );
}
