type Col<T> = { key: keyof T; label: string };

export function DataTable<T extends Record<string, any>>({
  columns,
  rows,
}: {
  columns: Array<Col<T>>;
  rows: T[];
}) {
  return (
    <div className="w-full overflow-x-auto rounded-2xl bg-white/80">
      <table className="min-w-[640px] w-full text-sm">
        <thead className="bg-[hsl(var(--deep-blue))] text-white">
          <tr>
            {columns.map((c) => (
              <th key={String(c.key)} className="px-4 py-3 text-left font-semibold">
                {c.label}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((r, i) => (
            <tr key={i} className="border-b border-black/5">
              {columns.map((c) => (
                <td key={String(c.key)} className="px-4 py-3 align-top">
                  {r[c.key]}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
