import Link from 'next/link';
import Image from 'next/image';
import { SectionHeadline } from '@/components/shared-atoms/SectionHeadline';
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
    <section className="flex flex-col gap-12 p-4 w-full lg:flex-wrap lg:p-0 lg:justify-between lg:h-screen">
      <div className="flex flex-col gap-4 lg:grow lg:flex-row">
        <div>
          <div className="flex flex-col lg:p-4">
            <div className="flex flex-col gap-3 font-jura lg:mt-24">
              <h1 className="font-bold text-3xl lg:text-6xl lg:max-w-[700px]">
                Usługi eleketryczne Mateusz Olifirowicz Olmat
              </h1>
              <h2 className="text-lg lg:text-2xl font-lato font-light leading-6">
                Dostarczamy rozwiązania z zakresu kompensacji mocy biernej,
                instalacji fotowoltaicznych.
              </h2>
            </div>
            <div className="mt-4 lg:mt-12">
              <button className="bg-primary p-4 rounded-md lg:w-[400px]">
                <span className="font-lato font-bold text-sm text-secondary">
                  Sprawdź dotychczasowe realizacje
                </span>
              </button>
            </div>
          </div>
        </div>
        <div className="hidden lg:flex border-red-500 border lg:grow lg:items-center lg:justify-center">
          carousel
        </div>
      </div>
      <div className="relative h-[calc(50vh)] overflow-hidden rounded-xl lg:rounded-none lg:w-[calc(100vw-var(--header-width-desktop)))] lg:h-[280px]">
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
    <section className="p-4">
      <div className="space-y-8">
        <SectionHeadline headline="Nasza firma" />
        <div className="space-y-1">
          <p>
            Specjalizuje się w dostarczaniu rozwiązań z zakresu instalacji
            fotowoltaicznych, automatyzacji, komensacji mocy biernej.
          </p>
          <p>
            Wykonujemy pomiary wszystkich rodzajów instalacji elektrycznych.
          </p>
          <p>Oferujemy Nasze usługi na terenie całej Polski.</p>
        </div>
        <div className="space-y-8">
          <h4 className="text-xl font-bold leading-6">
            Dlaczego warto z Nami współpracować ?
          </h4>
          <ul className="space-y-4">
            {websiteConfig.advantagesOfCooperation.map((advantage, _) => (
              <li
                className="flex gap-3 items-center p-4 bg-secondary rounded-md"
                key={_}
              >
                <Image src={rightArrowIcon} width={20} alt="" aria-hidden />
                <span>{advantage}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

const ServicesSection = () => {
  return (
    <section className="p-4">
      <div className="space-y-8">
        <SectionHeadline headline="Nasze usługi" />
        <div className="space-y-1">
          <p>
            Wykonujemy prace montażowe, remontowe i modernizacyjne związane z
            branżą elektrotechniki, elektroenergetyki.
          </p>
        </div>
        <div className="space-y-8">
          <h4 className="text-xl font-bold leading-6">
            Jakie usługi oferujemy?
          </h4>
          <ul className="grid grid-cols-1 gap-12">
            {websiteConfig.services.map((service, _) => (
              <li
                className="flex flex-col gap-8 items-center justify-between px-4 py-8 min-h-64 h-full rounded-md border border-primary"
                key={_}
              >
                <Image src={service.icon} width={60} alt="" aria-hidden />
                <h5 className="font-bold text-lg">{service.headline}</h5>
                <span className="text-center">{service.text}</span>
                <button className="bg-primary px-4 py-3 rounded-md text-secondary">
                  Czytaj więcej
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

const RealizationsSection = () => {
  return (
    <section className="p-4">
      <div className="space-y-8">
        <SectionHeadline headline="Ostatnie realizacje" />
        <div className="space-y-1">
          <p>
            Wykonujemy prace montażowe, remontowe i modernizacyjne związane z
            branżą elektrotechniki, elektroenergetyki.
          </p>
        </div>
        <div className="space-y-8">
          <h4 className="text-xl font-bold leading-6">
            Jakie inwestycje ukończyliśmy w ostatnim czasie?
          </h4>
          <ul className="grid grid-cols-1 gap-6 -ml-4 w-screen">
            {websiteConfig.realizations.map((realization, _) => (
              <li
                className="flex flex-col gap-6 items-center px-4 py-8 min-h-32 h-full bg-secondary bg-opacity-75 rounded-md"
                key={_}
              >
                <h5 className="text-xl text-center font-bold">
                  {realization.headline}
                </h5>
                <Image
                  className="ml-0 w-full rounded-lg"
                  src={realization.photo}
                  alt={realization.headline}
                  aria-description={realization.headline}
                />
                <span className="">{realization.text}</span>
                <button className="bg-primary px-4 py-3 rounded-md">
                  <Link
                    className="text-secondary"
                    href={`/realizacje/${Array.from(
                      realization.headline
                        .split(' ')
                        .filter((el) => el !== '-' && el !== '')
                        .map((el) => el.toLowerCase())
                    ).join('-')}`}
                  >
                    Czytaj więcej
                  </Link>
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

const ContactSection = () => {
  return (
    <section className="p-4">
      <div className="space-y-8">
        <SectionHeadline headline="Kontakt" />
        <div className="space-y-1">
          <p>W przypadku pytań zachęcamy do kontaktu.</p>
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
              <span>{websiteConfig.data.companyInfo.companyName}</span>
            </li>
            <li>
              <span>Nip: {websiteConfig.data.companyInfo.nip}</span>
            </li>
            <li>
              <span>Regon: {websiteConfig.data.companyInfo.regon}</span>
            </li>
          </ul>
          <ul className="space-y-1">
            <li>
              <span>ul. {websiteConfig.data.companyInfo.adres.street}</span>
            </li>
            <li>
              <span>
                bud. {websiteConfig.data.companyInfo.adres.building}/
                {websiteConfig.data.companyInfo.adres.apartment}
              </span>
            </li>
            <li>
              <span>
                {websiteConfig.data.companyInfo.adres.zipCode}{' '}
                {websiteConfig.data.companyInfo.adres.city}
              </span>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};
