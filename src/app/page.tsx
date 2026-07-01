import { HeroSection } from "@/components/HeroSection";
import { ProductSection } from "@/components/ProductSection";
import { ContactChannels } from "@/components/ContactChannels";
import { EvidenceSection } from "@/components/EvidenceSection";
import { FAQSection } from "@/components/FAQSection";
import { CTABand } from "@/components/CTABand";
import type { Product, ContactOption, EvidenceAction, FAQItem } from "@/types/vietlicense";
import productsData from "@/data/products.json";

const homeProducts: Product[] = productsData.products
  .filter((product) => product.isFeatured === true)
  .sort((a, b) => {
    const aOrder = typeof a.displayOrder === "number" ? a.displayOrder : Number.MAX_SAFE_INTEGER;
    const bOrder = typeof b.displayOrder === "number" ? b.displayOrder : Number.MAX_SAFE_INTEGER;
    if (aOrder !== bOrder) return aOrder - bOrder;
    return a.name.localeCompare(b.name);
  })
  .map((product) => ({
    slug: product.slug,
    name: product.name,
    group: product.category,
    form: product.subcategory,
    availability: "in_stock",
    thumbnail: product.thumbnail || "",
    pills: product.cardBadges || [],
    price: {
      retailLabel: product.price?.retailLabel || "",
      retailValue: product.price?.retailValue || "",
      bulkLabel: product.price?.bulkLabel,
      bulkValue: product.price?.bulkValue,
    },
    includes: product.listDescription ? [product.listDescription] : [],
    description: product.listDescription || "",
    href: `/san-pham/${product.slug}`,
  }));

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
      <main>
        <HeroSection />
        <ProductSection products={homeProducts} />
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
    </>
  );
}
