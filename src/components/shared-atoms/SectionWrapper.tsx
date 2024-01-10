import { cn } from '@/lib/utils';

export const SectionWrapper: React.FC<{
  children: React.ReactNode;
  className?: string;
  id?: string;
}> = ({ children, className, id }) => {
  return (
    <section id={id ? id : ''} className="p-4 w-full">
      <div className={cn('space-y-8', className)}>{children}</div>
    </section>
  );
};
