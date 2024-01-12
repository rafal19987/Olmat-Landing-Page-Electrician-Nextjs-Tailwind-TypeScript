import { websiteConfig } from '@/websiteConfig';
import { DesktopMenuItem } from './DesktopMenuItem';

export const DesktopMenu: React.FC<{ children?: React.ReactNode }> = ({
  children,
}) => {
  return (
    <nav className="h-full">
      <ul className="flex gap-12 p-4 h-full">
        {websiteConfig.navigation.map((navItem, _) => (
          <DesktopMenuItem key={_} link={navItem.link} name={navItem.name} />
        ))}
      </ul>
    </nav>
  );
};
