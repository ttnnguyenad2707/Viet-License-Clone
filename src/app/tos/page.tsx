import { TOSContent } from "@/components/tos/TOSContent";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Điều khoản sử dụng | Việt License",
  description:
    "Điều khoản sử dụng website Việt License — quy trình giao dịch, điều kiện license Microsoft, thanh toán, hỗ trợ sau mua và giới hạn trách nhiệm.",
};

export default function TOSPage() {
  return (
    <main className="min-h-screen">
      <TOSContent />
    </main>
  );
}
