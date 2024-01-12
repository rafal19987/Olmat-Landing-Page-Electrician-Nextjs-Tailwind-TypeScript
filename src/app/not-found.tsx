import { CircleOff } from 'lucide-react';
import { NavigationButton } from '@/components/shared-atoms/NavigationButton';
import * as Typography from '@/components/Typography';

export default function NotFoundPage() {
  return (
    <div className="flex grow items-center justify-center h-[calc(100vh-var(--header-height-desktop))]">
      <div className="space-y-12 w-full h-fit">
        <CircleOff className="w-64 h-64 text-secondary" />
        <div className="flex flex-col gap-8 items-center justify-center">
          <Typography.Span>Błąd 404</Typography.Span>
          <Typography.Span>Nie znaleziono zasobu</Typography.Span>
          <NavigationButton route="/" name="Przejdź do strony głównej" />
        </div>
      </div>
    </div>
  );
}
