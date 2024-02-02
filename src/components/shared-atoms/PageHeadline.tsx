import { cn } from '@/lib/utils';

export const PageHeadline: React.FC<{
  headline: string;
  className?: string;
}> = ({ headline, className }) => {
  return (
    <h2
      className={cn(
        'flex items-center justify-center w-screen -ml-4 py-8 font-bold text-3xl text-primary z-20 lg:w-full',
        className
      )}
    >
      {headline}
    </h2>
  );
};
