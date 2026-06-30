import { BusinessHeroSection } from "@/components/business/BusinessHeroSection";
import { BusinessBenefitsSection } from "@/components/business/BusinessBenefitsSection";
import { BusinessVATSection } from "@/components/business/BusinessVATSection";
import { BusinessAuditSection } from "@/components/business/BusinessAuditSection";
import { BusinessScenarioSection } from "@/components/business/BusinessScenarioSection";
import { BusinessWorkflowSection } from "@/components/business/BusinessWorkflowSection";
import { BusinessFAQSection } from "@/components/business/BusinessFAQSection";
import {
  businessBenefits,
  businessScenarios,
  businessFAQs,
} from "@/components/business/data";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Rà soát license Windows, Office, M365 cho SME | Việt License",
  description:
    "Chuẩn hóa Windows, Office và Microsoft 365 cho doanh nghiệp vừa và nhỏ. Tư vấn theo số lượng máy, báo giá riêng, chiết khấu đơn lớn và xuất VAT.",
};

export default function BusinessPage() {
  return (
    <main className="min-h-screen">
      <BusinessHeroSection />
      <BusinessBenefitsSection benefits={businessBenefits} />
      <BusinessVATSection />
      <BusinessAuditSection />
      <BusinessScenarioSection scenarios={businessScenarios} />
      <BusinessWorkflowSection />
      <BusinessFAQSection faqs={businessFAQs} />
    </main>
  );
}
