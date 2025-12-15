import { cn } from "@/lib/utils";

export function SectionTitle({ children, className }: { children: React.ReactNode; className?: string }) {
  return (
    <h2 className={cn("text-4xl md:text-5xl font-extrabold tracking-tight text-white", className)}>
      {children}
    </h2>
  );
}
