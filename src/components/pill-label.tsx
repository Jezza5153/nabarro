import { cn } from '@/lib/utils';
import React from 'react';

type PillLabelProps = {
  children: React.ReactNode;
  className?: string;
};

const PillLabel = ({ children, className }: PillLabelProps) => {
  return (
    <div
      className={cn(
        'inline-block rounded-full bg-secondary px-4 py-1.5 text-sm font-bold uppercase tracking-wider text-secondary-foreground',
        className
      )}
    >
      {children}
    </div>
  );
};

export default PillLabel;
