import { MobileHeader } from './MobileHeader';
import { DesktopHeader } from './DesktopHeader';

export const Header = () => {
  return (
    <header className="px-4 w-screen h-[var(--header-height)] lg:h-[var(--header-height-desktop)] bg-primary text-secondary ">
      <MobileHeader />
      <DesktopHeader />
    </header>
  );
};
