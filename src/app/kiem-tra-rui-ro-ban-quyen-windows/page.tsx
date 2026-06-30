import { ScannerHeroSection } from "@/components/scanner/ScannerHeroSection";
import { QuizSection } from "@/components/scanner/QuizSection";
import { ScannerToolSection } from "@/components/scanner/ScannerToolSection";
import { ScannerFAQSection } from "@/components/scanner/ScannerFAQSection";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Rà soát rủi ro license Windows & Office | VietLicense License Scanner",
  description:
    "Quick quiz hoặc tải VietLicense License Scanner để rà soát tín hiệu kỹ thuật license Windows & Office offline, xuất report Markdown + JSON local.",
};

export default function ScannerPage() {
  return (
    <main className="min-h-screen">
      <ScannerHeroSection />
      <QuizSection />
      <ScannerToolSection />
      <ScannerFAQSection />
    </main>
  );
}
