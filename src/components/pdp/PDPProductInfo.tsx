type SpecRow = {
  label: string;
  value: string;
};

type PDPProductInfoProps = {
  specifications: SpecRow[];
};

export function PDPProductInfo({ specifications }: PDPProductInfoProps) {
  if (!specifications || specifications.length === 0) return null;

  return (
    <div className="rounded-2xl border border-border bg-white overflow-hidden">
      <div className="bg-secondary px-5 py-3 border-b border-border">
        <p className="text-sm font-semibold text-foreground">Thông tin sản phẩm</p>
      </div>
      <table className="w-full text-sm">
        <tbody>
          {specifications.map((row, idx) => (
            <tr
              key={row.label}
              className={idx !== specifications.length - 1 ? "border-b border-border" : ""}
            >
              <td className="px-5 py-3 align-top text-muted-foreground whitespace-nowrap w-1/2">
                {row.label}
              </td>
              <td className="px-5 py-3 align-top text-foreground font-medium">
                {row.value}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
