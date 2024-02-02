import Link from 'next/link';
import { PageHeadline } from '@/components/shared-atoms/PageHeadline';
import { SectionWrapper } from '@/components/shared-atoms/SectionWrapper';
import * as Typography from '@/components/Typography';
import { websiteConfig } from '@/websiteConfig';

export default function ServicesPage() {
  return (
    <SectionWrapper>
      <PageHeadline headline="Nasze usługi" />

      <div className="space-y-1">
        <Typography.Paragraph>
          Zajmujemy się świadczeniem usług elektrycznych dla firm, instytucji i
          osób prywatnych, wykonawstwem oraz renowacją kompletnych instalacji
          elektrycznych, a także prowadzimy sprzedaż hurtową i detaliczną
          markowego sprzętu elektroinstalacyjnego i oświetleniowego.
        </Typography.Paragraph>
      </div>
      <div className="space-y-8 lg:flex lg:flex-col lg:items-center">
        <Typography.H3 className="self-start">
          Usługi elektryczne w naszej ofercie:
        </Typography.H3>
        <ul className="grid grid-cols-1 gap-6 place-items-center pl-8 lg:flex lg:flex-col lg:self-start  lg:ml-0 lg:w-fit list-disc">
          {websiteConfig.services.map((service, idx) => (
            <li className="w-full" key={idx}>
              <Link className="text-red-500" href={`/uslugi/${service.link}`}>
                <Typography.Span className="text-sky-600">
                  {service.headline}
                </Typography.Span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </SectionWrapper>
  );
}
