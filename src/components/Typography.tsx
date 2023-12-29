import { cn } from '@/lib/utils';

export const paragraph: React.FC<{
  children: React.ReactNode;
  className?: string;
}> = ({ children, className }) => {
  return <p className={cn('text-black', className)}>{children}</p>;
};
