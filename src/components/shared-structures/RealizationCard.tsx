import Image, { type StaticImageData } from 'next/image';
import Link from 'next/link';
import * as Typography from '@/components/Typography';
import { type Realization } from '@/types';

export const RealizationCard: React.FC<{ realization: Realization }> = ({
  realization,
}) => {
  const { headline, text, photo, link } = realization;

  return (
    <li className='flex flex-col items-center justify-between w-full h-full rounded-xl overflow-hidden border-2'>
      <Image
        className='ml-0 w-full aspect-[1/0.75] md:aspect-square object-cover'
        src={photo}
        alt={headline}
        aria-description={headline}
        placeholder='blur'
      />
      <div className='flex flex-col justify-between gap-4 w-full h-full px-8 py-6'>
        <div className='space-y-4'>
          <Typography.H4 className='text-start w-full font-bold font-jura'>
            {headline}
          </Typography.H4>
          <Typography.Paragraph className='font-jura'>
            {text.length > 120 ? `${text.slice(0, 120)} (...)` : text}
          </Typography.Paragraph>
        </div>

        <Link
          className='w-fit self-end rounded-md text-black hover:text-blue-600 underline underline-offset-4 transition-opacity'
          href={`/realizacje/${link}`}
        >
          Czytaj więcej
        </Link>
      </div>
    </li>
  );
};
