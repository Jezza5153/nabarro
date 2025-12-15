import { cn } from "@/lib/utils";

export function PillLabel({ children, className }: { children: React.ReactNode; className?: string }) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full px-4 py-2 text-sm font-semibold",
        "bg-[hsl(var(--bright-yellow))] text-[hsl(var(--ink))] shadow-sm",
        className
      )}
    >
      {children}
    </span>
  );
}
