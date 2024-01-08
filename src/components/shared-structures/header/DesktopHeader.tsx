import Link from 'next/link';
import { Logo } from '@/components/shared-atoms/Logo';
import { websiteConfig } from '@/websiteConfig';

export const DesktopHeader: React.FC<{ children?: React.ReactNode }> = ({
  children,
}) => {
  return (
    <div className="hidden lg:flex items-center justify-between h-full">
      <Link href="/">
        <Logo />
      </Link>
      <nav className="h-full">
        <ul className="flex gap-12 p-4 h-full">
          {websiteConfig.navigation.map((navItem, _) => (
            <li key={_} className="flex items-center justify-center">
              <Link
                href={navItem.link}
                className="flex items-center justify-center w-full h-fit"
              >
                <span className="text-secondary">{navItem.name}</span>
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};
