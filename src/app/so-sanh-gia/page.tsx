import { CompareHeroSection } from "@/components/compare/CompareHeroSection";
import { CompareEvidenceSection } from "@/components/compare/CompareEvidenceSection";
import { CompareConclusionTable } from "@/components/compare/CompareConclusionTable";
import { compareSources, compareConclusionRows } from "@/components/compare/data";
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
      <CompareEvidenceSection sources={compareSources} />
      <CompareConclusionTable rows={compareConclusionRows} />
    </main>
  );
}
