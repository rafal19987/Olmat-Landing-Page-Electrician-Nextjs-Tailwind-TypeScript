import Image from 'next/image';
import { notFound } from 'next/navigation';
import { NavigationButton } from '@/components/shared-atoms/NavigationButton';
import { SectionHeadline } from '@/components/shared-atoms/SectionHeadline';
import { SectionWrapper } from '@/components/shared-atoms/SectionWrapper';
import * as Typography from '@/components/Typography';
import { websiteConfig } from '@/websiteConfig';
import rightArrowIcon from '@/assets/svg/right-arrow.svg';

export default function RealizacjaItem({
  params: { slug },
}: {
  params: { slug: string };
}) {
  const realization = websiteConfig.realizations.filter(
    (el) => el.link === slug
  )[0];

  if (!realization) return notFound();

  return (
    <SectionWrapper className='flex flex-col'>
      <NavigationButton
        name='Powrót do realizacji'
        route={websiteConfig.navigation[1].link}
        className='flex gap-4 items-center self-end'
      >
        <Image className='rotate-180' src={rightArrowIcon} alt='' aria-hidden />
      </NavigationButton>

      <SectionHeadline
        className='after:left-0 after:w-full text-center'
        headline={realization.headline}
      />
      <div className='space-y-1'>
        <Typography.Paragraph>{realization.text}</Typography.Paragraph>
      </div>
      <div className='space-y-8'>
        <Typography.H3>Zakres prowadzonych przez Nas prac:</Typography.H3>
        <ul className='space-y-4'>
          {realization.workScope?.map((work, _) => (
            <li
              className='flex w-full gap-3 items-center min-h-24 max-h-full p-4 bg-secondary rounded-md lg:items-starts  lg:max-w-[var(--max-card-width)] '
              key={_}
            >
              <Image src={rightArrowIcon} width={20} alt='' aria-hidden />
              <Typography.Paragraph>{work}</Typography.Paragraph>
            </li>
          ))}
        </ul>
      </div>
      <div className='space-y-8 lg:flex lg:flex-col lg:items-center'>
        <h2 className='text-xl font-bold leading-6'>
          Kilka fotografi z inwestycji
        </h2>
        <ul className='grid grid-cols-1 md:grid-cols-2 gap-6 -ml-4 w-screen place-items-center lg:grid-cols-3 lg:gap-12 lg:ml-0 lg:w-full'>
          <li className='flex flex-col gap-6 items-center px-4 min-h-32 h-full'>
            <Image src={realization.photo} alt='' aria-hidden />
          </li>
          <li className='flex flex-col gap-6 items-center px-4 min-h-32 h-full'>
            <Image src={realization.photo} alt='' aria-hidden />
          </li>
          <li className='flex flex-col gap-6 items-center px-4 min-h-32 h-full'>
            <Image src={realization.photo} alt='' aria-hidden />
          </li>
          <li className='flex flex-col gap-6 items-center px-4 min-h-32 h-full'>
            <Image src={realization.photo} alt='' aria-hidden />
          </li>
          <li className='flex flex-col gap-6 items-center px-4 min-h-32 h-full'>
            <Image src={realization.photo} alt='' aria-hidden />
          </li>
          <li className='flex flex-col gap-6 items-center px-4 min-h-32 h-full'>
            <Image src={realization.photo} alt='' aria-hidden />
          </li>
          <li className='flex flex-col gap-6 items-center px-4 min-h-32 h-full'>
            <Image src={realization.photo} alt='' aria-hidden />
          </li>
          <li className='flex flex-col gap-6 items-center px-4 min-h-32 h-full'>
            <Image src={realization.photo} alt='' aria-hidden />
          </li>
          <li className='flex flex-col gap-6 items-center px-4 min-h-32 h-full'>
            <Image src={realization.photo} alt='' aria-hidden />
          </li>
          <li className='flex flex-col gap-6 items-center px-4 min-h-32 h-full'>
            <Image src={realization.photo} alt='' aria-hidden />
          </li>
        </ul>
      </div>
    </SectionWrapper>
  );
}

export async function generateStaticParams() {
  return websiteConfig.realizations.map((realization) => ({
    slug: realization.link,
  }));
}
