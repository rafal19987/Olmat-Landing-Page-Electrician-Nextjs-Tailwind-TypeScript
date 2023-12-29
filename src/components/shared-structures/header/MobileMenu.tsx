import Link from 'next/link';

export const MobileMenu: React.FC<{
  children?: React.ReactNode;
  isOpen: boolean;
}> = ({ children, isOpen }) => {
  return (
    <div
      className={`absolute left-0 top-[var(--header-height)] h-[calc(100vh-var(--header-height))] w-screen bg-black/50 z-50 translate-x-0 transition-transform duration-500 lg:hidden ${
        !isOpen && 'translate-x-full'
      }`}
    >
      <nav className="w-full h-full p-8">
        <ul className="flex flex-col gap-8 items-center justify-evenly w-full h-full">
          <li className="h-12 w-4/6">
            <Link
              href="#"
              className="flex items-center justify-center w-full h-full"
            >
              <span className="">Home</span>
            </Link>
          </li>
          <li className="h-12 w-4/6">
            <Link
              href="#"
              className="flex items-center justify-center w-full h-full"
            >
              <span className="">Home</span>
            </Link>
          </li>
          <li className="h-12 w-4/6">
            <Link
              href="#"
              className="flex items-center justify-center w-full h-full"
            >
              <span className="">Home</span>
            </Link>
          </li>
          <li className="h-12 w-4/6">
            <Link
              href="#"
              className="flex items-center justify-center w-full h-full"
            >
              <span className="">Home</span>
            </Link>
          </li>
          <li className="h-12 w-4/6">
            <Link
              href="#"
              className="flex items-center justify-center w-full h-full"
            >
              <span className="">Home</span>
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};
