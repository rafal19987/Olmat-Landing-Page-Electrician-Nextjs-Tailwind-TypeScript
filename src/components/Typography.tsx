import { cn } from '@/lib/utils';

export const H1: React.FC<{
  children: React.ReactNode;
  className?: string;
}> = ({ children, className }) => {
  return (
    <h1
      className={cn(
        'font-bold text-3xl lg:text-6xl lg:max-w-[700px]',
        className
      )}
    >
      {children}
    </h1>
  );
};

export const H2: React.FC<{
  children: React.ReactNode;
  className?: string;
}> = ({ children, className }) => {
  return (
    <h2
      className={cn(
        'text-lg lg:text-3xl font-lato font-light leading-6',
        className
      )}
    >
      {children}
    </h2>
  );
};

export const H3: React.FC<{
  children: React.ReactNode;
  className?: string;
}> = ({ children, className }) => {
  return (
    <h3 className={cn('text-xl font-bold leading-6 lg:text-2xl', className)}>
      {children}
    </h3>
  );
};

export const H4: React.FC<{
  children: React.ReactNode;
  className?: string;
}> = ({ children, className }) => {
  return (
    <h4 className={cn('font-bold text-lg lg:text-xl', className)}>
      {children}
    </h4>
  );
};

export const Paragraph: React.FC<{
  children: React.ReactNode;
  className?: string;
}> = ({ children, className }) => {
  return <p className={cn('text-black lg:text-lg', className)}>{children}</p>;
};

export const Span: React.FC<{
  children: React.ReactNode;
  className?: string;
}> = ({ children, className }) => {
  return (
    <span className={cn('text-black lg:text-base', className)}>{children}</span>
  );
};
