import { cn } from '@/lib/utils';
import type { SVGProps } from 'react';

const Logo = ({ className, ...props }: SVGProps<SVGSVGElement>) => {
  return (
    <div className="flex items-center gap-2 font-semibold">
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className={cn('text-primary', className)}
        {...props}
      >
        <path d="M4 12.5C4 12.5 6.5 10 12 10C17.5 10 20 12.5 20 12.5" />
        <path d="M4 16.5C4 16.5 6.5 14 12 14C17.5 14 20 16.5 20 16.5" />
        <path d="M4 8.5C4 8.5 6.5 6 12 6C17.5 6 20 8.5 20 8.5" />
      </svg>
      <span className="font-headline text-lg tracking-wide">swimwith ease</span>
    </div>
  );
};

export default Logo;
