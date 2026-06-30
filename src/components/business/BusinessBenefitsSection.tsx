import Link from "next/link";
import type { BusinessBenefit } from "./data";

type BusinessBenefitsSectionProps = {
  benefits: BusinessBenefit[];
};

const iconMap: Record<string, string> = {
  sl: "SL",
  bg: "BG",
  vat: "VAT",
  cs: "CS",
};

export function BusinessBenefitsSection({ benefits }: BusinessBenefitsSectionProps) {
  return (
    <section className="bg-background py-16">
      <div className="mx-auto max-w-[1440px] px-4">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {benefits.map((benefit) => (
            <div
              key={benefit.icon}
              className="rounded-3xl border border-border bg-white p-6"
            >
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-[#0068ff] text-sm font-bold text-white">
                {iconMap[benefit.icon] ?? benefit.icon}
              </div>
              <h3 className="text-base font-semibold text-foreground">{benefit.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{benefit.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
