import { ReactNode } from "react";
import { cn } from "@/lib/utils";

export function Shell({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <div className={cn("relative min-h-dvh flex flex-col watery-bg", className)}>
      <div className="noise-overlay" />
      <div className="relative flex-1 flex flex-col">{children}</div>
    </div>
  );
}
