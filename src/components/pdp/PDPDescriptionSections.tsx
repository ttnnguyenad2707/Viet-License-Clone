type DescriptionSection = {
  title: string;
  content: string;
  bullets?: string[];
  specTable?: { label: string; value: string }[];
};

type DescriptionSectionBlockProps = {
  section: DescriptionSection;
};

function DescriptionSectionBlock({ section }: DescriptionSectionBlockProps) {
  const hasBullets = section.bullets && section.bullets.length > 0;
  const hasSpecTable = section.specTable && section.specTable.length > 0;

  return (
    <div className="py-5 border-b border-border last:border-b-0 last:pb-0">
      <h3 className="text-base font-semibold text-foreground mb-3">
        {section.title}
      </h3>
      {section.content && (
        <p className="text-sm text-muted-foreground mb-3">{section.content}</p>
      )}
      {hasBullets && (
        <ul className="space-y-2">
          {section.bullets!.map((bullet, idx) => (
            <li key={idx} className="flex gap-3 text-sm text-muted-foreground">
              <span className="check-icon mt-0.5 h-4 w-4 shrink-0 flex-shrink-0" />
              <span>{bullet}</span>
            </li>
          ))}
        </ul>
      )}
      {hasSpecTable && (
        <div className="rounded-xl border border-border bg-secondary/50 overflow-hidden mt-2">
          <table className="w-full text-sm">
            <tbody>
              {section.specTable!.map((row, idx) => (
                <tr
                  key={row.label}
                  className={idx !== section.specTable!.length - 1 ? "border-b border-border" : ""}
                >
                  <td className="px-4 py-2.5 align-top text-muted-foreground whitespace-nowrap">
                    {row.label}
                  </td>
                  <td className="px-4 py-2.5 align-top text-foreground font-medium">
                    {row.value}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}

type PDPDescriptionSectionsProps = {
  sections: DescriptionSection[];
};

export function PDPDescriptionSections({ sections }: PDPDescriptionSectionsProps) {
  if (!sections || sections.length === 0) return null;
  return (
    <div>
      {sections.map((section, idx) => (
        <DescriptionSectionBlock key={idx} section={section} />
      ))}
    </div>
  );
}
