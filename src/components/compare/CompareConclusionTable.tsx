import Link from "next/link";
import type { CompareConclusionRow } from "@/types/vietlicense";

type CompareConclusionTableProps = {
  rows: CompareConclusionRow[];
};

export function CompareConclusionTable({ rows }: CompareConclusionTableProps) {
  return (
    <section className="bg-background py-16">
      <div className="mx-auto max-w-[1440px] px-4">
        <div className="mb-10 max-w-3xl">
          <h2 className="display text-3xl font-semibold tracking-tight text-foreground md:text-4xl">Kết luận nhanh</h2>
          <p className="mt-3 text-sm text-muted-foreground">
            Đừng hỏi “bên nào rẻ nhất”. Hỏi “bên nào đủ hồ sơ để mua”.
          </p>
        </div>
        <div className="overflow-hidden rounded-3xl border border-border bg-white">
          <div className="grid grid-cols-1 md:grid-cols-4">
            <div className="border-b border-border bg-muted/60 px-6 py-4 text-xs font-semibold uppercase tracking-wide text-muted-foreground md:border-b-0 md:border-r">
              Lựa chọn
            </div>
            <div className="border-b border-border bg-muted/60 px-6 py-4 text-xs font-semibold uppercase tracking-wide text-muted-foreground md:border-b-0 md:border-r">
              Giá
            </div>
            <div className="border-b border-border bg-muted/60 px-6 py-4 text-xs font-semibold uppercase tracking-wide text-muted-foreground md:border-b-0 md:border-r">
              VAT / chứng từ
            </div>
            <div className="border-b border-border bg-muted/60 px-6 py-4 text-xs font-semibold uppercase tracking-wide text-muted-foreground md:border-b-0">
              Kết luận mua
            </div>
            {rows.map((row) => (
              <>
                <div key={`${row.choice}-choice`} className="border-b border-border px-6 py-4 text-sm font-semibold text-foreground md:border-r">
                  {row.choice}
                </div>
                <div key={`${row.choice}-price`} className="border-b border-border px-6 py-4 text-sm text-foreground md:border-r">
                  {row.price}
                </div>
                <div key={`${row.choice}-vat`} className="border-b border-border px-6 py-4 text-sm text-muted-foreground md:border-r">
                  {row.vatNote}
                </div>
                <div key={`${row.choice}-conclusion`} className="border-b border-border px-6 py-4 text-sm text-foreground md:border-b-0">
                  {row.conclusion}
                </div>
              </>
            ))}
          </div>
        </div>
        <div className="mt-8 flex flex-wrap items-center gap-3">
          <Link href="/" className="btn btn-dark">
            Xem bảng giá VietLicense
          </Link>
          <Link href="https://zalo.me/0382520281" className="btn btn-light" target="_blank" rel="noopener noreferrer">
            Gửi bảng giá cần đối chiếu
          </Link>
        </div>
      </div>
    </section>
  );
}
