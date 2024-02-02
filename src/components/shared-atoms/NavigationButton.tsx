'use client';

import { useRouter } from 'next/navigation';
import { cn } from '@/lib/utils';

export const NavigationButton: React.FC<{
  children?: React.ReactNode;
  name: string;
  route: string;
  className?: string;
}> = ({ children, name, route, className }) => {
  const router = useRouter();

  return (
    <button
      className={cn('', className)}
      onClick={() => (route ? router.push(`/${route}`) : router.back())}
    >
      {children}
      {name}
    </button>
  );
};
