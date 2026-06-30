import { OfficeHeroSection } from "@/components/office/OfficeHeroSection";
import { OfficeProductSection } from "@/components/office/OfficeProductSection";
import { OfficeInfoSection } from "@/components/office/OfficeInfoSection";
import { OfficeFAQSection } from "@/components/office/OfficeFAQSection";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Office 2019/2021 & Microsoft 365 Business chính hãng | Việt License",
  description:
    "Office 2019/2021 Pro Plus mua một lần và Microsoft 365 Business subscription 1 năm. Chuẩn hóa bản quyền, xuất VAT, tư vấn đúng nhu cầu.",
};

const officeProducts = [
  {
    slug: "office-2021-pro-plus-bind-account-fullbox",
    name: "Office 2021 Pro Plus - Bind account + Fullbox",
    group: "office",
    form: "Bind account · Fullbox",
    availability: "in_stock",
    thumbnail: "/images/optimized/officepro2021-720.png",
    pills: ["Bind account", "Fullbox", "Best seller"],
    price: {
      retailLabel: "Giá bán lẻ",
      retailValue: "2.900.000đ",
      bulkLabel: "Đơn từ 5 sản phẩm giá",
      bulkValue: "2.800.000đ",
    },
    includes: [
      "1 x Box Office chính hãng",
      "1 x License Office 2021 Pro Plus gắn vào tài khoản Microsoft của khách",
      "1 x Link tải bộ cài chính hãng",
    ],
    description: "Bind account kèm Fullbox, license gắn vào tài khoản Microsoft của khách và có hộp lưu hồ sơ.",
    href: "/san-pham/office-2021-pro-plus-bind-account-fullbox",
  },
  {
    slug: "office-2021-pro-plus-fullbox",
    name: "Office 2021 Pro Plus - Fullbox",
    group: "office",
    form: "Fullbox",
    availability: "in_stock",
    thumbnail: "/images/optimized/officepro2021-720.png",
    pills: ["Fullbox"],
    price: {
      retailLabel: "Giá bán lẻ",
      retailValue: "2.650.000đ",
      bulkLabel: "Đơn từ 5 sản phẩm giá",
      bulkValue: "2.550.000đ",
    },
    includes: [
      "1 x Box Office chính hãng",
      "1 x Key/license Office 2021 Pro Plus",
      "1 x Link tải bộ cài chính hãng",
    ],
    description: "Bản Fullbox dùng cho 1 máy, có hộp lưu hồ sơ và phù hợp khách cần Office 2021.",
    href: "/san-pham/office-2021-pro-plus-fullbox",
  },
  {
    slug: "office-2021-pro-plus-no-box",
    name: "Office 2021 Pro Plus - No Box",
    group: "office",
    form: "No Box",
    availability: "in_stock",
    thumbnail: "/images/optimized/officepro2021-720.png",
    pills: ["No Box"],
    price: {
      retailLabel: "Giá bán lẻ",
      retailValue: "2.250.000đ",
      bulkLabel: "Đơn từ 5 sản phẩm giá",
      bulkValue: "2.150.000đ",
    },
    includes: [
      "1 x Key/license Office 2021 Pro Plus gửi qua email",
      "1 x Link tải bộ cài chính hãng",
      "1 x Hướng dẫn cài đặt và kích hoạt",
    ],
    description: "Bản No Box dùng cho 1 máy, gửi key/license qua email và không kèm hộp.",
    href: "/san-pham/office-2021-pro-plus-no-box",
  },
  {
    slug: "office-2021-pro-plus-bind-account-no-box",
    name: "Office 2021 Pro Plus - Bind account No Box",
    group: "office",
    form: "Bind account · No Box",
    availability: "in_stock",
    thumbnail: "/images/optimized/officepro2021-720.png",
    pills: ["Bind account", "No Box"],
    price: {
      retailLabel: "Giá bán lẻ",
      retailValue: "2.600.000đ",
      bulkLabel: "Đơn từ 5 sản phẩm giá",
      bulkValue: "2.500.000đ",
    },
    includes: [
      "1 x License Office 2021 Pro Plus gắn vào tài khoản Microsoft của khách, bàn giao qua email",
      "1 x Link tải bộ cài chính hãng",
      "1 x Hướng dẫn cài đặt và kích hoạt",
    ],
    description: "Bind account No Box, license gắn tài khoản Microsoft của khách và thông tin bàn giao gửi qua email.",
    href: "/san-pham/office-2021-pro-plus-bind-account-no-box",
  },
  {
    slug: "office-2019-pro-plus-fullbox",
    name: "Office 2019 Pro Plus - Fullbox",
    group: "office",
    form: "Fullbox",
    availability: "in_stock",
    thumbnail: "/images/optimized/officepro2019-720.png",
    pills: ["Fullbox"],
    price: {
      retailLabel: "Giá bán lẻ",
      retailValue: "1.900.000đ",
      bulkLabel: "Đơn từ 5 sản phẩm giá",
      bulkValue: "1.800.000đ",
    },
    includes: [
      "1 x Box Office chính hãng",
      "1 x Key/license Office 2019 Pro Plus",
      "1 x Link tải bộ cài chính hãng",
    ],
    description: "Bản Fullbox dùng cho 1 máy, có hộp và key/license lưu hồ sơ.",
    href: "/san-pham/office-2019-pro-plus-fullbox",
  },
  {
    slug: "office-2019-pro-plus-no-box",
    name: "Office 2019 Pro Plus - No Box",
    group: "office",
    form: "No Box",
    availability: "in_stock",
    thumbnail: "/images/optimized/officepro2019-720.png",
    pills: ["No Box"],
    price: {
      retailLabel: "Giá bán lẻ",
      retailValue: "1.500.000đ",
      bulkLabel: "Đơn từ 5 sản phẩm giá",
      bulkValue: "1.400.000đ",
    },
    includes: [
      "1 x Key/license Office 2019 Pro Plus gửi qua email",
      "1 x Link tải bộ cài chính hãng",
      "1 x Hướng dẫn cài đặt và kích hoạt",
    ],
    description: "Bản No Box dùng cho 1 máy, gửi key/license qua email và không kèm hộp vật lý.",
    href: "/san-pham/office-2019-pro-plus-no-box",
  },
  {
    slug: "office-2019-pro-plus-bind-account-fullbox",
    name: "Office 2019 Pro Plus - Bind account + Fullbox",
    group: "office",
    form: "Bind account · Fullbox",
    availability: "in_stock",
    thumbnail: "/images/optimized/officepro2019-720.png",
    pills: ["Bind account", "Fullbox"],
    price: {
      retailLabel: "Giá bán lẻ",
      retailValue: "2.600.000đ",
      bulkLabel: "Đơn từ 5 sản phẩm giá",
      bulkValue: "2.500.000đ",
    },
    includes: [
      "1 x Box Office chính hãng",
      "1 x License Office 2019 Pro Plus gắn vào tài khoản Microsoft của khách",
      "1 x Link tải bộ cài chính hãng",
    ],
    description: "Bind account kèm Fullbox, license gắn vào tài khoản Microsoft của khách và có hộp lưu hồ sơ.",
    href: "/san-pham/office-2019-pro-plus-bind-account-fullbox",
  },
  {
    slug: "office-2019-pro-plus-bind-account-no-box",
    name: "Office 2019 Pro Plus - Bind account No Box",
    group: "office",
    form: "Bind account · No Box",
    availability: "in_stock",
    thumbnail: "/images/optimized/officepro2019-720.png",
    pills: ["Bind account", "No Box"],
    price: {
      retailLabel: "Giá bán lẻ",
      retailValue: "2.250.000đ",
      bulkLabel: "Đơn từ 5 sản phẩm giá",
      bulkValue: "2.150.000đ",
    },
    includes: [
      "1 x License Office 2019 Pro Plus gắn vào tài khoản Microsoft của khách, bàn giao qua email",
      "1 x Link tải bộ cài chính hãng",
      "1 x Hướng dẫn cài đặt và kích hoạt",
    ],
    description: "Bind account No Box, license gắn tài khoản Microsoft của khách và thông tin bàn giao gửi qua email.",
    href: "/san-pham/office-2019-pro-plus-bind-account-no-box",
  },
  {
    slug: "microsoft-365-business-basic",
    name: "Microsoft 365 Business Basic",
    group: "office",
    form: "Subscription · 1 năm",
    availability: "in_stock",
    thumbnail: "/images/optimized/office2024.png",
    pills: ["Microsoft 365", "Business Basic", "1 năm"],
    price: {
      retailLabel: "Giá bán lẻ",
      retailValue: "1.400.000đ",
      bulkLabel: "Đơn từ 5 sản phẩm giá",
      bulkValue: "1.290.000đ",
    },
    includes: [
      "1 x License Microsoft 365 Business Basic thời hạn 1 năm",
      "Hướng dẫn kích hoạt tài khoản và gán license",
      "Hỗ trợ thiết lập ban đầu",
    ],
    description: "Gói Microsoft 365 Business Basic 1 năm với ứng dụng Office web/mobile, email doanh nghiệp và cloud cho đội nhóm nhỏ.",
    href: "/san-pham/microsoft-365-business-basic",
  },
  {
    slug: "microsoft-365-business-standard",
    name: "Microsoft 365 Business Standard",
    group: "office",
    form: "Subscription · 1 năm",
    availability: "in_stock",
    thumbnail: "/images/optimized/office2024.png",
    pills: ["Microsoft 365", "Business Standard", "1 năm"],
    price: {
      retailLabel: "Giá bán lẻ",
      retailValue: "3.500.000đ",
      bulkLabel: "Đơn từ 5 sản phẩm giá",
      bulkValue: "3.290.000đ",
    },
    includes: [
      "1 x License Microsoft 365 Business Standard thời hạn 1 năm",
      "Hướng dẫn kích hoạt tài khoản, cài Office desktop và gán license",
      "Hỗ trợ thiết lập ban đầu",
    ],
    description: "Gói Microsoft 365 Business Standard 1 năm, thêm ứng dụng Office desktop bên cạnh email, cloud và cộng tác.",
    href: "/san-pham/microsoft-365-business-standard",
  },
  {
    slug: "microsoft-365-business-premium",
    name: "Microsoft 365 Business Premium",
    group: "office",
    form: "Subscription · 1 năm",
    availability: "in_stock",
    thumbnail: "/images/optimized/office2024.png",
    pills: ["Microsoft 365", "Business Premium", "1 năm"],
    price: {
      retailLabel: "Giá bán lẻ",
      retailValue: "6.500.000đ",
      bulkLabel: "Đơn từ 5 sản phẩm giá",
      bulkValue: "6.390.000đ",
    },
    includes: [
      "1 x License Microsoft 365 Business Premium thời hạn 1 năm",
      "Hướng dẫn kích hoạt tài khoản, cài Office desktop và gán license",
      "Hỗ trợ thiết lập ban đầu",
    ],
    description: "Gói Microsoft 365 Business Premium 1 năm, thêm bảo mật và quản lý thiết bị nâng cao cho doanh nghiệp.",
    href: "/san-pham/microsoft-365-business-premium",
  },
];

export default function OfficePage() {
  return (
    <main className="min-h-screen">
      <OfficeHeroSection />
      <OfficeProductSection products={officeProducts} />
      <OfficeInfoSection />
      <OfficeFAQSection />
    </main>
  );
}
