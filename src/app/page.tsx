import { SiteHeader } from "@/components/SiteHeader";
import { HeroSection } from "@/components/HeroSection";
import { ProductSection } from "@/components/ProductSection";
import { ContactChannels } from "@/components/ContactChannels";
import { EvidenceSection } from "@/components/EvidenceSection";
import { FAQSection } from "@/components/FAQSection";
import { CTABand } from "@/components/CTABand";
import { SiteFooter } from "@/components/SiteFooter";
import type { Product, ContactOption, EvidenceAction, FAQItem } from "@/types/vietlicense";

const   products: Product[] = [
  {
    slug: "windows-10-11-home-pro-fpp-usb-fullbox",
    name: "Windows 10/11 Home/Pro - FPP USB Fullbox",
    group: "windows",
    form: "USB · Fullbox · FPP",
    availability: "in_stock",
    thumbnail: "/images/optimized/win11pro-720.png",
    pills: ["Fullbox", "USB", "FPP", "Best seller"],
    price: {
      retailLabel: "GIÁ BÁN LẺ",
      retailValue: "2.650.000đ",
      bulkLabel: "Đơn từ 5 sản phẩm giá",
      bulkValue: "2.550.000đ",
    },
    includes: [
      "1 x Box Windows chính hãng",
      "1 x USB cài đặt Windows 10/11",
      "1 x Key/license FPP đúng phiên bản Home/Pro",
    ],
    description:
      "Phù hợp chuyển máy Windows đang crack hoặc kích hoạt không rõ nguồn gốc sang license FPP rõ ràng.",
    href: "/san-pham/windows-10-11-home-pro-fpp-usb-fullbox",
  },
  {
    slug: "windows-10-11-home-pro-dvd-fullbox",
    name: "Windows 10/11 Home/Pro - DVD Fullbox",
    group: "windows",
    form: "DVD · Fullbox",
    availability: "in_stock",
    thumbnail: "/images/optimized/win11pro-720.png",
    pills: ["Fullbox", "DVD"],
    price: {
      retailLabel: "GIÁ BÁN LẺ",
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
    href: "/san-pham/windows-10-11-home-pro-dvd-fullbox",
  },
  {
    slug: "windows-10-11-home-pro-fpp-no-box",
    name: "Windows 10/11 Home/Pro - FPP No Box",
    group: "windows",
    form: "No Box · FPP",
    availability: "in_stock",
    thumbnail: "/images/optimized/win11pro-720.png",
    pills: ["No Box", "FPP"],
    price: {
      retailLabel: "GIÁ BÁN LẺ",
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
    href: "/san-pham/windows-10-11-home-pro-fpp-no-box",
  },
  {
    slug: "office-2021-pro-plus-bind-account-fullbox",
    name: "Office 2021 Pro Plus - Bind account + Fullbox",
    group: "office",
    form: "Bind account · Fullbox",
    availability: "in_stock",
    thumbnail: "/images/optimized/officepro2021-720.png",
    pills: ["Bind account", "Fullbox", "Best seller"],
    price: {
      retailLabel: "GIÁ BÁN LẺ",
      retailValue: "2.900.000đ",
      bulkLabel: "Đơn từ 5 sản phẩm giá",
      bulkValue: "2.800.000đ",
    },
    includes: [
      "1 x Box Office chính hãng",
      "1 x License Office 2021 Pro Plus gắn vào tài khoản Microsoft của khách",
      "1 x Link tải bộ cài chính hãng",
    ],
    description:
      "Bind account kèm Fullbox, license gắn vào tài khoản Microsoft của khách và có hộp lưu hồ sơ.",
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
      retailLabel: "GIÁ BÁN LẺ",
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
      retailLabel: "GIÁ BÁN LẺ",
      retailValue: "2.250.000đ",
      bulkLabel: "Đơn từ 5 sản phẩm giá",
      bulkValue: "2.150.000đ",
    },
    includes: [
      "1 x Key/license Office 2021 Pro Plus gửi qua email",
      "1 x Link tải bộ cài chính hãng",
      "1 x Hướng dẫn cài đặt và kích hoạt",
    ],
    description:
      "Bản No Box dùng cho 1 máy, gửi key/license qua email và không kèm hộp.",
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
      retailLabel: "GIÁ BÁN LẺ",
      retailValue: "2.700.000đ",
      bulkLabel: "Đơn từ 5 sản phẩm giá",
      bulkValue: "2.600.000đ",
    },
    includes: [
      "1 x License Office 2021 Pro Plus gắn vào tài khoản Microsoft của khách, bàn giao qua email",
      "1 x Link tải bộ cài chính hãng",
      "1 x Hướng dẫn cài đặt và kích hoạt",
    ],
    description:
      "Bind account No Box, license gắn tài khoản Microsoft của khách và thông tin bàn giao gửi qua email.",
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
      retailLabel: "GIÁ BÁN LẺ",
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
      retailLabel: "GIÁ BÁN LẺ",
      retailValue: "1.500.000đ",
      bulkLabel: "Đơn từ 5 sản phẩm giá",
      bulkValue: "1.400.000đ",
    },
    includes: [
      "1 x Key/license Office 2019 Pro Plus gửi qua email",
      "1 x Link tải bộ cài chính hãng",
      "1 x Hướng dẫn cài đặt và kích hoạt",
    ],
    description:
      "Bản No Box dùng cho 1 máy, gửi key/license qua email và không kèm hộp vật lý.",
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
      retailLabel: "GIÁ BÁN LẺ",
      retailValue: "2.100.000đ",
      bulkLabel: "Đơn từ 5 sản phẩm giá",
      bulkValue: "2.000.000đ",
    },
    includes: [
      "1 x Box Office chính hãng",
      "1 x License Office 2019 Pro Plus gắn vào tài khoản Microsoft của khách",
      "1 x Link tải bộ cài chính hãng",
    ],
    description:
      "Bind account kèm Fullbox, license gắn vào tài khoản Microsoft của khách và có hộp lưu hồ sơ.",
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
      retailLabel: "GIÁ BÁN LẺ",
      retailValue: "1.900.000đ",
      bulkLabel: "Đơn từ 5 sản phẩm giá",
      bulkValue: "1.800.000đ",
    },
    includes: [
      "1 x License Office 2019 Pro Plus gắn vào tài khoản Microsoft của khách, bàn giao qua email",
      "1 x Link tải bộ cài chính hãng",
      "1 x Hướng dẫn cài đặt và kích hoạt",
    ],
    description:
      "Bind account No Box, license gắn tài khoản Microsoft của khách và thông tin bàn giao gửi qua email.",
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
      retailLabel: "GIÁ BÁN LẺ",
      retailValue: "Liên hệ",
      bulkLabel: "Đơn từ 5 sản phẩm giá",
      bulkValue: "Ưu đãi theo số lượng",
    },
    includes: [
      "1 x License Microsoft 365 Business Basic thời hạn 1 năm",
      "Hướng dẫn kích hoạt tài khoản và gán license",
      "Hỗ trợ thiết lập ban đầu",
    ],
    description:
      "Gói Microsoft 365 Business Basic 1 năm với ứng dụng Office web/mobile, email doanh nghiệp và cloud cho đội nhóm nhỏ.",
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
      retailLabel: "GIÁ BÁN LẺ",
      retailValue: "Liên hệ",
      bulkLabel: "Đơn từ 5 sản phẩm giá",
      bulkValue: "Ưu đãi theo số lượng",
    },
    includes: [
      "1 x License Microsoft 365 Business Standard thời hạn 1 năm",
      "Hướng dẫn kích hoạt tài khoản, cài Office desktop và gán license",
      "Hỗ trợ thiết lập ban đầu",
    ],
    description:
      "Gói Microsoft 365 Business Standard 1 năm, thêm ứng dụng Office desktop bên cạnh email, cloud và cộng tác.",
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
      retailLabel: "GIÁ BÁN LẺ",
      retailValue: "Liên hệ",
      bulkLabel: "Đơn từ 5 sản phẩm giá",
      bulkValue: "Ưu đãi theo số lượng",
    },
    includes: [
      "1 x License Microsoft 365 Business Premium thời hạn 1 năm",
      "Hướng dẫn kích hoạt tài khoản, cài Office desktop và gán license",
      "Hỗ trợ thiết lập ban đầu",
    ],
    description:
      "Gói Microsoft 365 Business Premium 1 năm, thêm bảo mật và quản lý thiết bị nâng cao cho doanh nghiệp.",
    href: "/san-pham/microsoft-365-business-premium",
  },
  {
    slug: "windows-server-2016-2019",
    name: "Windows Server 2016/2019",
    group: "windows",
    form: "Server License",
    availability: "in_stock",
    thumbnail: "/images/products/windows-server-2019-packshot.png",
    pills: ["Server", "Digital License"],
    price: {
      retailLabel: "GIÁ BÁN LẺ",
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
    href: "/san-pham/windows-server-2016-2019",
  },
  {
    slug: "sql-server-2019-2022",
    name: "SQL Server 2019/2022",
    group: "windows",
    form: "Server License",
    availability: "in_stock",
    thumbnail: "/images/products/sql-server-2022-packshot.png",
    pills: ["SQL", "Server", "Digital License"],
    price: {
      retailLabel: "GIÁ BÁN LẺ",
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
    href: "/san-pham/sql-server-2019-2022",
  },
];

const contactOptions: ContactOption[] = [
  { title: "Facebook Fanpage", subtitle: "Việt License - Oliu Group", href: "https://www.facebook.com/VietLicenseOliuGroup/", icon: "facebook" },
  { title: "Zalo", subtitle: "Thành Nguyễn - VietLicense", href: "https://zalo.me/0382520281", icon: "zalo" },
  { title: "0382 520 281", subtitle: "Gọi hotline", href: "tel:0382520281", icon: "phone" },
];

const evidenceActions: EvidenceAction[] = [
  { text: "Xem hồ sơ Microsoft Marketplace", href: "https://marketplace.microsoft.com/en-us/partners/5778c294-d9d5-4ec7-9a25-8228c3053b75/overview", variant: "dark" },
  { text: "Yêu cầu mẫu chứng từ qua Zalo", href: "https://zalo.me/0382520281", variant: "zalo" },
];

const faqItems: FAQItem[] = [
  {
    question: "Key và license có rõ ràng không?",
    answer:
      "Có. Mỗi đơn hàng được tư vấn đúng phiên bản Windows hoặc Office, hình thức license phù hợp và hướng dẫn kích hoạt. Khi cần, khách có thể yêu cầu hóa đơn VAT và thông tin bàn giao để lưu hồ sơ.",
  },
  {
    question: "Có thể kiểm tra hồ sơ đối tác Microsoft không?",
    answer:
      "Có. Việt License cung cấp thông tin hồ sơ đối tác OLIU GROUP COMPANY LIMITED trên Microsoft Marketplace để khách kiểm tra trước khi chốt đơn.",
  },
  {
    question: "Vì sao doanh nghiệp nên mua bản quyền chính hãng?",
    answer:
      "Bản quyền chính hãng giúp doanh nghiệp giảm rủi ro kiểm tra, đảm bảo cập nhật bảo mật, có hóa đơn VAT đầy đủ và được hỗ trợ kích hoạt chính hãng.",
  },
];

export default function Home() {
  return (
    <>
      <SiteHeader />
      <main>
        <HeroSection />
        <ProductSection products={products} />
        <ContactChannels options={contactOptions} />
        <EvidenceSection actions={evidenceActions} />
        <FAQSection items={faqItems} />
        <CTABand
          heading="Chưa chắc Windows đang dùng có rủi ro bản quyền không?"
          body="Trả lời vài câu hỏi để nhận đánh giá sơ bộ về license Windows. Không upload file, không thu dữ liệu cá nhân."
          cta="Kiểm tra rủi ro Windows"
          href="/kiem-tra-rui-ro-ban-quyen-windows"
        />
      </main>
      <SiteFooter />
    </>
  );
}
