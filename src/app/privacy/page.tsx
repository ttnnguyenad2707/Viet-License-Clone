import { PrivacyContent } from "@/components/privacy/PrivacyContent";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Chính sách bảo mật | Việt License",
  description:
    "Chính sách bảo mật của Việt License — giải thích cách thu thập và xử lý dữ liệu khi khách xem catalog, nhắn tư vấn, yêu cầu báo giá hoặc cung cấp thông tin VAT.",
};

export default function PrivacyPage() {
  return (
    <main className="min-h-screen">
      <PrivacyContent />
    </main>
  );
}
