import { MobileHeader } from './MobileHeader';
import { DesktopHeader } from './DesktopHeader';

export const Header = () => {
  return (
    <header className="px-4 w-screen h-[var(--header-height)] lg:px-0 lg:h-screen">
      <MobileHeader />
      <DesktopHeader />
    </header>
  );
};
