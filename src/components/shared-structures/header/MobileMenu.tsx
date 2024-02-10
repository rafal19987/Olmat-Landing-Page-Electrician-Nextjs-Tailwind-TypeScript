import Link from 'next/link';
import { Dispatch, SetStateAction } from 'react';
import { websiteConfig } from '@/websiteConfig';

export const MobileMenu: React.FC<{
  children?: React.ReactNode;
  isOpen: boolean;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
}> = ({ children, isOpen, setIsOpen }) => {
  return (
    <div
      className={`absolute right-0 top-[var(--header-height)] h-[calc(40vh)] w-1/2 bg-white z-50 translate-x-0 transition-transform duration-500 lg:hidden ${
        !isOpen && 'translate-x-full'
      }`}
    >
      <nav className="w-full h-full p-8">
        <ul className="flex flex-col gap-2 items-center justify-evenly w-full h-full">
          {websiteConfig.navigation.map((navItem, _) => (
            <li className="h-12 w-4/6" key={_}>
              <Link
                href={`/${navItem.link}`}
                className="flex items-center justify-center w-full h-full text-sky-500 border-b border-sky-300"
                onClick={() => setIsOpen(false)}
                replace
              >
                <span className="text-xl">{navItem.name}</span>
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};
