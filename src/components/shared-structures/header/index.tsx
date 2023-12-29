import { MobileHeader } from './MobileHeader';

export const Header = () => {
  return (
    <header className="px-4 w-screen h-[var(--header-height)]">
      <MobileHeader />
    </header>
  );
};
