import Image from 'next/image';
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

  if (!realization) return <span>Realizacja nie odnaleziona</span>;

  return (
    <SectionWrapper>
      <SectionHeadline
        className="after:left-0 after:w-full text-center"
        headline={realization.headline}
      />
      <div className="space-y-1">
        <Typography.Paragraph>{realization.text}</Typography.Paragraph>
      </div>
      <div className="space-y-8">
        <Typography.H3>Zakres prowadzonych przez Nas prac:</Typography.H3>
        <ul className="space-y-4">
          {realization.workScope?.map((work, _) => (
            <li
              className="flex gap-3 items-center p-4 bg-secondary rounded-md"
              key={_}
            >
              <Image src={rightArrowIcon} width={20} alt="" aria-hidden />
              <Typography.Paragraph>{work}</Typography.Paragraph>
            </li>
          ))}
        </ul>
      </div>
      <div className="space-y-8">
        <h2 className="text-xl font-bold leading-6">
          Kilka fotografi z inwestycji
        </h2>
        <ul className="grid grid-cols-1 gap-12 -ml-4 w-screen">
          <li className="flex flex-col gap-6 items-center px-4 min-h-32 h-full">
            <Image src={realization.photo} alt="" aria-hidden />
          </li>
          <li className="flex flex-col gap-6 items-center px-4 min-h-32 h-full">
            <Image src={realization.photo} alt="" aria-hidden />
          </li>
          <li className="flex flex-col gap-6 items-center px-4 min-h-32 h-full">
            <Image src={realization.photo} alt="" aria-hidden />
          </li>
          <li className="flex flex-col gap-6 items-center px-4 min-h-32 h-full">
            <Image src={realization.photo} alt="" aria-hidden />
          </li>
          <li className="flex flex-col gap-6 items-center px-4 min-h-32 h-full">
            <Image src={realization.photo} alt="" aria-hidden />
          </li>
        </ul>
      </div>
    </SectionWrapper>
  );
}
