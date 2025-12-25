import { ReactNode } from "react";
import { cn } from "@/lib/utils";

export function Shell({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <div className={cn("flex-1", className)}>
      {children}
    </div>
  );
}
