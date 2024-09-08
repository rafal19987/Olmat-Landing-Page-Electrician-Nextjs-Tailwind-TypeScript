import Image from 'next/image';
import { notFound } from 'next/navigation';
import { NavigationButton } from '@/components/shared-atoms/NavigationButton';
import { SectionHeadline } from '@/components/shared-atoms/SectionHeadline';
import { SectionWrapper } from '@/components/shared-atoms/SectionWrapper';
import * as Typography from '@/components/Typography';
import { websiteConfig } from '@/websiteConfig';
import rightArrowIcon from '@/assets/svg/right-arrow.svg';
import Link from 'next/link';

export default function UsługaItem({
  params: { usluga },
}: {
  params: { usluga: string };
}) {
  const service = websiteConfig.services.filter((el) => el.link === usluga)[0];

  if (!service) return notFound();

  const realizationsOfService = websiteConfig.realizations.filter(
    (realization) => realization.category?.includes(usluga)
  );

  return (
    <SectionWrapper className='flex flex-col'>
      <NavigationButton
        name='Powrót do usług'
        route={websiteConfig.navigation[2].link}
        className='flex gap-4 items-center self-end'
      >
        <Image className='rotate-180' src={rightArrowIcon} alt='' aria-hidden />
      </NavigationButton>

      <SectionHeadline
        className='after:left-0 after:w-full text-center'
        headline={service.headline}
      />
      <Image
        src={service.image}
        alt=''
        priority
        placeholder='blur'
        className='max-h-[30dvw] object-cover object-top'
      />
      <div className='space-y-1'>
        <Typography.Paragraph>{service.text}</Typography.Paragraph>
      </div>
      <div className='space-y-8'>
        {/* <Typography.H3>Zakres prowadzonych przez Nas prac:</Typography.H3> */}
        {/* <ul className="space-y-4">
          {realization.workScope?.map((work, _) => (
            <li
              className="flex w-full gap-3 items-center min-h-24 max-h-full p-4 bg-secondary rounded-md lg:items-starts  lg:max-w-[var(--max-card-width)] "
              key={_}
            >
              <Image src={rightArrowIcon} width={20} alt="" aria-hidden />
              <Typography.Paragraph>{work}</Typography.Paragraph>
            </li>
          ))}
        </ul> */}
      </div>
      <div className='space-y-8 lg:flex lg:flex-col lg:items-center'>
        {realizationsOfService.length > 0 && (
          <>
            <h2 className='text-xl font-bold leading-6'>
              Przykładowe realizacje:
            </h2>
            <ul className='grid grid-cols-1 gap-6 -ml-4 w-screen place-items-center lg:grid-cols-3  lg:ml-0 lg:w-fit'>
              {realizationsOfService.map((realization, idx) => (
                <li
                  className='flex flex-col gap-6 items-center px-4 py-8 max-w-[var(--max-card-width)] min-h-32 h-full bg-secondary bg-opacity-75 rounded-md'
                  key={idx}
                >
                  <Typography.H4 className='text-center'>
                    {realization.headline}
                  </Typography.H4>

                  <Image
                    className='ml-0 w-full rounded-lg'
                    src={realization.photo}
                    alt={realization.headline}
                    aria-description={realization.headline}
                  />
                  <Typography.Paragraph>
                    {realization.text.length > 120
                      ? `${realization.text.slice(0, 120)} (...)`
                      : realization.text}
                  </Typography.Paragraph>
                  <button className='bg-primary px-4 py-3 rounded-md'>
                    <Link
                      className='text-secondary'
                      href={`/realizacje/${realization.link}`}
                    >
                      Czytaj więcej
                    </Link>
                  </button>
                </li>
              ))}
            </ul>
          </>
        )}
      </div>
    </SectionWrapper>
  );
}
