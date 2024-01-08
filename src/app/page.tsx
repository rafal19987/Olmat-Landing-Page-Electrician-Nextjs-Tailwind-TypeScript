import Link from 'next/link';
import Image from 'next/image';
import { SectionHeadline } from '@/components/shared-atoms/SectionHeadline';
import { SectionWrapper } from '@/components/shared-atoms/SectionWrapper';
import * as Typography from '@/components/Typography';
import { websiteConfig } from '@/websiteConfig';
import mainPhoto from '@/assets/images/main-photo.jpg';
import rightArrowIcon from '@/assets/svg/right-arrow.svg';

export default function Home() {
  return (
    // lg:flex-row
    <>
      <LandingSection />
      <AboutSection />
      <ServicesSection />
      <RealizationsSection />
      <ContactSection />
    </>
  );
}

const LandingSection = () => {
  return (
    <section className="flex flex-col gap-12 p-4 w-full lg:p-0  lg:h-screen lg:flex-row">
      <div className="flex flex-col gap-4 lg:grow lg:flex-row lg:w-2/4 lg:items-center lg:justify-center">
        <div className="flex flex-col lg:p-4">
          <div className="flex flex-col gap-3 font-jura lg:mt-24">
            <Typography.H1>
              Usługi eleketryczne Mateusz Olifirowicz Olmat
            </Typography.H1>
            <Typography.H2 className="lg:max-w-[500px]">
              Dostarczamy rozwiązania z zakresu kompensacji mocy biernej,
              instalacji fotowoltaicznych.
            </Typography.H2>
          </div>
          <div className="mt-4 lg:mt-12">
            <button className="bg-primary p-4 rounded-md lg:w-[400px]">
              <Link href="/realizacje">
                <span className="font-lato font-bold text-sm text-secondary">
                  Sprawdź dotychczasowe realizacje
                </span>
              </Link>
            </button>
          </div>
        </div>
      </div>
      <div className="relative h-[calc(50vh)] overflow-hidden rounded-xl lg:rounded-none lg:w-2/4 lg:h-screen">
        <Image
          src={mainPhoto}
          alt="fotografia elektryka by: james-kovin"
          className="object-cover "
          fill
          priority
          placeholder="blur"
        />
      </div>
    </section>
  );
};

const AboutSection = () => {
  return (
    <SectionWrapper>
      <SectionHeadline headline="Nasza firma" />
      <div className="space-y-1">
        <Typography.Paragraph>
          Specjalizuje się w dostarczaniu rozwiązań z zakresu instalacji
          fotowoltaicznych, automatyzacji, komensacji mocy biernej.
        </Typography.Paragraph>
        <Typography.Paragraph>
          Wykonujemy pomiary wszystkich rodzajów instalacji elektrycznych.
        </Typography.Paragraph>
        <Typography.Paragraph>
          Oferujemy Nasze usługi na terenie całej Polski.
        </Typography.Paragraph>
      </div>
      <div className="space-y-8">
        <Typography.H3>Dlaczego warto z Nami współpracować ?</Typography.H3>
        <ul className="space-y-4 lg:grid lg:grid-cols-2 lg:gap-x-12 lg:gap-y-4 lg:space-y-0 lg:max-w-fit">
          {websiteConfig.advantagesOfCooperation.map((advantage, _) => (
            <li
              className="flex gap-3 items-center p-4 bg-secondary rounded-md h-full lg:items-starts lg:max-w-[var(--max-card-width)]"
              key={_}
            >
              <Image src={rightArrowIcon} width={20} alt="" aria-hidden />
              <Typography.Paragraph>{advantage}</Typography.Paragraph>
            </li>
          ))}
        </ul>
      </div>
    </SectionWrapper>
  );
};

const ServicesSection = () => {
  return (
    <SectionWrapper>
      <SectionHeadline headline="Nasze usługi" />
      <div className="space-y-1">
        <Typography.Paragraph>
          Wykonujemy prace montażowe, remontowe i modernizacyjne związane z
          branżą elektrotechniki, elektroenergetyki.
        </Typography.Paragraph>
      </div>
      <div className="space-y-8">
        <Typography.H3>Jakie usługi oferujemy?</Typography.H3>
        <ul className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:max-w-fit">
          {websiteConfig.services.map((service, _) => (
            <li
              className="flex flex-col gap-8 items-center justify-between px-4 py-8 max-w-[var(--max-card-width)] min-h-64 h-full rounded-md border border-primary"
              key={_}
            >
              <Image src={service.icon} width={60} alt="" aria-hidden />
              <Typography.H4>{service.headline}</Typography.H4>
              <Typography.Paragraph className="text-center">
                {service.text}
              </Typography.Paragraph>
              <button className="bg-primary px-4 py-3 rounded-md text-secondary">
                Czytaj więcej
              </button>
            </li>
          ))}
        </ul>
      </div>
    </SectionWrapper>
  );
};

const RealizationsSection = () => {
  return (
    <SectionWrapper>
      <SectionHeadline headline="Ostatnie realizacje" />
      <div className="space-y-1">
        <Typography.Paragraph>
          Wykonujemy prace montażowe, remontowe i modernizacyjne związane z
          branżą elektrotechniki, elektroenergetyki.
        </Typography.Paragraph>
      </div>
      <div className="space-y-8">
        <Typography.H3>
          Jakie inwestycje ukończyliśmy w ostatnim czasie?
        </Typography.H3>

        <ul className="grid grid-cols-1 gap-6 -ml-4 w-screen lg:grid-cols-2 lg:max-w-fit">
          {websiteConfig.realizations.map(
            (realization, idx) =>
              idx <= 1 && (
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
              )
          )}
        </ul>
      </div>
    </SectionWrapper>
  );
};

const ContactSection = () => {
  return (
    <SectionWrapper>
      <SectionHeadline headline="Kontakt" />
      <div className="space-y-1">
        <Typography.Paragraph>
          W przypadku pytań zachęcamy do kontaktu.
        </Typography.Paragraph>
      </div>
      <Image
        src={websiteConfig.data.profilePhoto}
        alt="Mateusz Olifirowicz Olmat"
      />
      <div className="space-y-8">
        <ul className="space-y-2">
          {websiteConfig.data.contactInfo.map((contact, _) => (
            <li key={_}>
              <Link href={contact.link} className="flex gap-4">
                <Image src={contact.icon} alt="" aria-hidden />
                <span>{contact.description}</span>
              </Link>
            </li>
          ))}
        </ul>
        {/* <h4 className="text-xl font-bold leading-6">
            Jakie inwestycje ukończyliśmy w ostatnim czasie?
          </h4> */}
        <ul className="space-y-1">
          <li>
            <Typography.Span>
              {websiteConfig.data.companyInfo.companyName}
            </Typography.Span>
          </li>
          <li>
            <Typography.Span>
              Nip: {websiteConfig.data.companyInfo.nip}
            </Typography.Span>
          </li>
          <li>
            <Typography.Span>
              Regon: {websiteConfig.data.companyInfo.regon}
            </Typography.Span>
          </li>
        </ul>
        <ul className="space-y-1">
          <li>
            <Typography.Span>
              ul. {websiteConfig.data.companyInfo.adres.street}
            </Typography.Span>
          </li>
          <li>
            <Typography.Span>
              bud. {websiteConfig.data.companyInfo.adres.building}
            </Typography.Span>
          </li>
          <li>
            <Typography.Span>
              {websiteConfig.data.companyInfo.adres.zipCode}{' '}
              {websiteConfig.data.companyInfo.adres.city}
            </Typography.Span>
          </li>
        </ul>
      </div>
    </SectionWrapper>
  );
};
