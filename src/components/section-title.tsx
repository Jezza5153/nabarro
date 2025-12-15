import { cn } from '@/lib/utils';
import React from 'react';

type SectionTitleProps = {
  children: React.ReactNode;
  className?: string;
};

const SectionTitle = ({ children, className }: SectionTitleProps) => {
  return (
    <h2
      className={cn(
        'font-headline text-4xl font-bold tracking-tight text-accent sm:text-5xl md:text-6xl',
        className
      )}
    >
      {children}
    </h2>
  );
};

export default SectionTitle;
