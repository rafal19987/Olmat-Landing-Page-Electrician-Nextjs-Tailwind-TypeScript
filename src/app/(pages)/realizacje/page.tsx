import { SectionWrapper } from '@/components/shared-atoms/SectionWrapper';
import * as Typography from '@/components/Typography';
import { websiteConfig } from '@/websiteConfig';
import { PageHeadline } from '@/components/shared-atoms/PageHeadline';
import { RealizationCard } from '@/components/shared-structures/RealizationCard';

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
            <RealizationCard
              headline={realization.headline}
              link={realization.link}
              photo={realization.photo}
              text={realization.text}
              key={idx}
            />
          ))}
        </ul>
      </div>
    </SectionWrapper>
  );
}
