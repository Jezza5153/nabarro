import { cn } from "@/lib/utils";

type Variant = "blue" | "white" | "yellow";

const styles: Record<Variant, string> = {
  blue: "bg-[hsl(var(--deep-blue))] text-white",
  white: "bg-white text-[hsl(var(--ink))]",
  yellow: "bg-[hsl(var(--bright-yellow))] text-[hsl(var(--ink))]",
};

export function BlobCard({
  variant = "white",
  className,
  children,
}: {
  variant?: Variant;
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <section
      className={cn(
        "relative overflow-hidden rounded-[2.25rem] p-6 md:p-10 shadow-[0_18px_50px_rgba(0,0,0,.10)]",
        styles[variant],
        className
      )}
    >
      {/* decorative corner */}
      <div className="pointer-events-none absolute -right-10 -top-10 h-44 w-44 rounded-[3rem] bg-white/10" />
      {children}
    </section>
  );
}
