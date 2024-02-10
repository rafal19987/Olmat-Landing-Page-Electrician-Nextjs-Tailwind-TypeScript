import Image, { type StaticImageData } from 'next/image';
import Link from 'next/link';
import * as Typography from '@/components/Typography';

type Props = {
  headline: string;
  photo: StaticImageData;
  text: string;
  link: string;
};

export const RealizationCard: React.FC<Props> = ({
  headline,
  link,
  photo,
  text,
}) => {
  return (
    <li className="flex flex-col gap-6 items-center justify-between px-4 py-8 max-w-[var(--max-card-width)] min-h-32 h-full bg-secondary bg-opacity-75 rounded-md">
      <Typography.H4 className="text-center">{headline}</Typography.H4>

      <Image
        className="ml-0 w-full rounded-lg"
        src={photo}
        alt={headline}
        aria-description={headline}
        placeholder="blur"
      />
      <Typography.Paragraph>
        {text.length > 120 ? `${text.slice(0, 120)} (...)` : text}
      </Typography.Paragraph>
      <button className="bg-primary px-4 py-3 rounded-md text-secondary hover:bg-cyan-900 hover:text-white hover:transition-colors">
        <Link href={`/realizacje/${link}`}>Czytaj więcej</Link>
      </button>
    </li>
  );
};
