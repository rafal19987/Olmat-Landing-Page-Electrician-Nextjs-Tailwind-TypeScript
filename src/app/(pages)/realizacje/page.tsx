import Image from 'next/image';
import Link from 'next/link';
import { SectionWrapper } from '@/components/shared-atoms/SectionWrapper';
import * as Typography from '@/components/Typography';
import { websiteConfig } from '@/websiteConfig';
import { PageHeadline } from '@/components/shared-atoms/PageHeadline';

export default function RealizationsPage() {
  return (
    <SectionWrapper>
      <PageHeadline headline="Nasze realizacje" />
      <div className="space-y-1">
        <Typography.Paragraph>
          Wykonujemy prace montażowe, remontowe i modernizacyjne związane z
          branżą elektrotechniki, elektroenergetyki.
        </Typography.Paragraph>
      </div>
      <div className="space-y-8 lg:flex lg:flex-col lg:items-center">
        <Typography.H3 className="self-start">
          Jakie inwestycje ukończyliśmy w ostatnim czasie?
        </Typography.H3>
        <ul className="grid grid-cols-1 gap-6 -ml-4 w-screen place-items-center lg:grid-cols-3  lg:ml-0 lg:w-fit">
          {websiteConfig.realizations.map((realization, idx) => (
            <li
              className="flex flex-col gap-6 items-center px-4 py-8 max-w-[var(--max-card-width)] min-h-32 h-full bg-secondary bg-opacity-75 rounded-md"
              key={idx}
            >
              <Typography.H4 className="text-center">
                {realization.headline}
              </Typography.H4>

              <Image
                className="ml-0 w-full rounded-lg"
                src={realization.photo}
                alt={realization.headline}
                aria-description={realization.headline}
              />
              <Typography.Paragraph>
                {realization.text.length > 120
                  ? `${realization.text.slice(0, 120)} (...)`
                  : realization.text}
              </Typography.Paragraph>
              <button className="bg-primary px-4 py-3 rounded-md">
                <Link
                  className="text-secondary"
                  href={`/realizacje/${realization.link}`}
                >
                  Czytaj więcej
                </Link>
              </button>
            </li>
          ))}
        </ul>
      </div>
    </SectionWrapper>
  );
}
