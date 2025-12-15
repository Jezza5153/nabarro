import { cn } from '@/lib/utils';
import { cva, type VariantProps } from 'class-variance-authority';
import React from 'react';

const blobCardVariants = cva(
  'p-8 md:p-10 lg:p-12 shadow-lg transition-all duration-300',
  {
    variants: {
      variant: {
        blue: 'bg-primary text-primary-foreground',
        white: 'bg-accent text-accent-foreground',
        yellow: 'bg-secondary text-secondary-foreground',
      },
      size: {
        default: 'rounded-[3rem]',
        large: 'rounded-[4rem]',
      },
    },
    defaultVariants: {
      variant: 'white',
      size: 'default',
    },
  }
);

interface BlobCardProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof blobCardVariants> {}

const BlobCard = React.forwardRef<HTMLDivElement, BlobCardProps>(
  ({ className, variant, size, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(blobCardVariants({ variant, size, className }))}
        {...props}
      />
    );
  }
);
BlobCard.displayName = 'BlobCard';

export default BlobCard;
