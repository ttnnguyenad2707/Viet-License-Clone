import Link from "next/link";
import { InfoIcon, CheckCircleIcon, FileTextIcon } from "@/components/icons";

export function CompareInfoCards() {
  const cards = [
    {
      icon: InfoIcon,
      title: "Biết giá trước",
      description: "Giá kiểm tra ngày 19/06/2026 với 20 nguồn công khai. VietLicense là mốc cân bằng - không rẻ nhất, không đắt nhất.",
    },
    {
      icon: CheckCircleIcon,
      title: "Tư vấn đúng SKU",
      description: "Không bán bừa SKU. Tư vấn đúng license phù hợp với nhu cầu, cấu hình và đối tượng sử dụng của khách hàng.",
    },
    {
      icon: FileTextIcon,
      title: "Đủ hồ sơ VAT",
      description: "Xuất hóa đơn VAT, có hồ sơ Microsoft Marketplace rõ ràng. Khách hàng có thể kiểm tra trước khi mua.",
    },
  ];

  return (
    <section className="bg-background py-12">
      <div className="mx-auto max-w-[1440px] px-4">
        <div className="grid gap-6 md:grid-cols-3">
          {cards.map((card) => (
            <div
              key={card.title}
              className="rounded-2xl border border-border bg-white p-6 transition-shadow hover:shadow-lg"
            >
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-[#0068ff]/10">
                <card.icon className="h-6 w-6 text-[#0068ff]" />
              </div>
              <h3 className="text-lg font-semibold text-foreground">{card.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{card.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
