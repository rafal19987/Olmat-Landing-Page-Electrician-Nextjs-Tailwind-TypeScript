import Link from 'next/link';
import { Logo } from '@/components/shared-atoms/Logo';

export const DesktopHeader: React.FC<{ children?: React.ReactNode }> = ({
  children,
}) => {
  return (
    <div className="hidden lg:flex flex-col">
      <Logo />
      <nav className="mt-24">
        <ul className="flex flex-col gap-12 p-4 bg-slate-200">
          <li className="flex items-center justify-center">
            <Link
              href="#"
              className="flex items-center justify-center w-full h-full p-4"
            >
              <span>Home</span>
            </Link>
          </li>
          <li className="flex items-center justify-center">
            <Link
              href="#"
              className="flex items-center justify-center w-full h-full p-4"
            >
              <span>Home</span>
            </Link>
          </li>
          <li className="flex items-center justify-center">
            <Link
              href="#"
              className="flex items-center justify-center w-full h-full p-4"
            >
              <span>Home</span>
            </Link>
          </li>
          <li className="flex items-center justify-center">
            <Link
              href="#"
              className="flex items-center justify-center w-full h-full p-4"
            >
              <span>Home</span>
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};
