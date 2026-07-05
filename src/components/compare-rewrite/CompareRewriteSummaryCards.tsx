import Link from "next/link";
import type { CompareConclusionRow } from "@/types/vietlicense";

type CompareRewriteSummaryCardsProps = {
  rows: CompareConclusionRow[];
};

export function CompareRewriteSummaryCards({ rows }: CompareRewriteSummaryCardsProps) {
  return (
    <section className="bg-background py-16">
      <div className="mx-auto max-w-[1440px] px-4">
        <div className="mb-10 max-w-3xl">
          <h2 className="display text-3xl font-semibold tracking-tight text-foreground md:text-4xl">
            Kết luận nhanh
          </h2>
          <p className="mt-3 text-sm text-muted-foreground">
            Đừng hỏi "bên nào rẻ nhất". Hỏi "bên nào đủ hồ sơ để mua".
          </p>
        </div>
        <div className="grid gap-4 md:grid-cols-3">
          {rows.map((row) => (
            <div
              key={row.choice}
              className="rounded-2xl border border-border bg-white p-6 transition-shadow hover:shadow-lg"
            >
              <h3 className="text-base font-semibold text-foreground">{row.choice}</h3>
              <p className="mt-1 text-sm font-medium text-muted-foreground">{row.price}</p>
              <div className="mt-4 h-px w-full bg-border" />
              <p className="mt-4 text-sm text-muted-foreground">{row.vatNote}</p>
              <p className="mt-3 text-sm text-foreground">{row.conclusion}</p>
            </div>
          ))}
        </div>
        <div className="mt-8 flex flex-wrap items-center gap-3">
          <Link href="/" className="btn btn-dark">
            Xem bảng giá VietLicense
          </Link>
          <Link
            href="https://zalo.me/0382520281"
            className="btn btn-light"
            target="_blank"
            rel="noopener noreferrer"
          >
            Gửi bảng giá cần đối chiếu
          </Link>
        </div>
      </div>
    </section>
  );
}
