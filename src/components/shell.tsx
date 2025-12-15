import { ReactNode } from "react";
import { cn } from "@/lib/utils";

export function Shell({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <div className={cn("relative min-h-screen watery-bg", className)}>
      <div className="noise-overlay" />
      <div className="relative">{children}</div>
    </div>
  );
}
