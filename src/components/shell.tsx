import { cn } from '@/lib/utils';
import React from 'react';

type ShellProps = {
  children: React.ReactNode;
  className?: string;
};

const Shell = ({ children, className }: ShellProps) => {
  return (
    <div className={cn('relative min-h-dvh flex flex-col watery-background noise-overlay', className)}>
      {children}
    </div>
  );
};

export default Shell;
