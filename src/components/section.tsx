import { PillLabel } from "@/components/pill-label";

export function Section({
  id,
  label,
  children,
}: {
  id: string;
  label: string;
  children: React.ReactNode;
}) {
  return (
    <section id={id} className="scroll-mt-24">
      <div className="mb-4">
        <PillLabel>{label}</PillLabel>
      </div>
      {children}
    </section>
  );
}
