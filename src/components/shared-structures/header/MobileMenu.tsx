import Link from 'next/link';
import { Dispatch, SetStateAction } from 'react';

const links = [
  {
    name: 'Home',
    link: '/',
  },
  {
    name: 'Realizacje',
    link: 'realizacje',
  },
];

export const MobileMenu: React.FC<{
  children?: React.ReactNode;
  isOpen: boolean;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
}> = ({ children, isOpen, setIsOpen }) => {
  return (
    <div
      className={`absolute left-0 top-[var(--header-height)] h-[calc(100vh-var(--header-height))] w-screen bg-black z-50 translate-x-0 transition-transform duration-500 lg:hidden ${
        !isOpen && 'translate-x-full'
      }`}
    >
      <nav className="w-full h-full p-8">
        <ul className="flex flex-col gap-8 items-center justify-evenly w-full h-full">
          {links.map((link, _) => (
            <li className="h-12 w-4/6" key={_}>
              <Link
                href={`/${link.link}`}
                className="flex items-center justify-center w-full h-full"
                onClick={() => setIsOpen(false)}
                replace
              >
                <span className="">{link.name}</span>
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};
