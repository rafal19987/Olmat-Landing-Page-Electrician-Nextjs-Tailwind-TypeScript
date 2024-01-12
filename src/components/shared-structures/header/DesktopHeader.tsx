import Link from 'next/link';
import { Logo } from '@/components/shared-atoms/Logo';
import { DesktopMenu } from './DesktopMenu';

export const DesktopHeader: React.FC<{ children?: React.ReactNode }> = ({
  children,
}) => {
  return (
    <div className="hidden lg:flex items-center justify-between h-full px-20">
      <Link href="/">
        <Logo />
      </Link>
      <DesktopMenu />
    </div>
  );
};
