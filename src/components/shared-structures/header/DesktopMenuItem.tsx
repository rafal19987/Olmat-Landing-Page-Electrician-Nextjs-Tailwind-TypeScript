'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import * as Typography from '@/components/Typography';

export const DesktopMenuItem: React.FC<{
  children?: React.ReactNode;
  key: number;
  link: string;
  name: string;
}> = ({ children, key, link, name }) => {
  const pathname = usePathname();

  const isHomeRoute = pathname === '/' && link === '/';
  const currentRouteName = pathname.split('/')[1];

  return (
    <li key={key} className="flex items-center justify-center">
      <Link
        href={`/${link}`}
        className="flex items-center justify-center w-full h-fit"
      >
        <Typography.Span
          className={`relative text-primary lg:text-2xl
              before:absolute
              before:left-0
              before:-bottom-2
              before:w-0
              before:h-[2px]
              before:bg-primary
              before:hover:w-full
              before:transition-all
              before:duration-500
              after:absolute
              after:right-0
              after:-bottom-1
              after:w-0
              after:h-[2px]
              after:bg-primary
              after:hover:w-full
              after:transition-all
              after:duration-500
              ${
                isHomeRoute
                  ? 'before:w-full after:w-full'
                  : currentRouteName === link && 'before:w-full after:w-full'
              }
              `}
        >
          {name}
        </Typography.Span>
      </Link>
    </li>
  );
};
