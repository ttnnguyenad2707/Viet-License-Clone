import { CompareHeroSection } from "@/components/compare/CompareHeroSection";
import { CompareEvidenceTable } from "@/components/compare/CompareEvidenceTable";
import { CompareInfoCards } from "@/components/compare/CompareInfoCards";
import { CompareBestValueEvidence } from "@/components/compare/CompareBestValueEvidence";
import { CompareConclusionTable } from "@/components/compare/CompareConclusionTable";
import { CompareFAQSection } from "@/components/compare/CompareFAQSection";
import { CompareCTASection } from "@/components/compare/CompareCTASection";
import { compareRows, compareConclusionRows, compareFAQItems } from "@/components/compare/data";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "So sánh giá Windows Office Microsoft 365 VAT | Việt License",
  description:
    "So sánh giá license Windows, Office và Microsoft 365 theo chứng từ VAT, hồ sơ doanh nghiệp và điều kiện mua sỉ.",
};

export default function ComparePage() {
  return (
    <main className="min-h-screen">
      <CompareHeroSection />
      <CompareBestValueEvidence />
      <CompareEvidenceTable rows={compareRows} />
      <CompareInfoCards />
      <CompareConclusionTable rows={compareConclusionRows} />
      <CompareFAQSection items={compareFAQItems} />
      <CompareCTASection />
    </main>
  );
}
