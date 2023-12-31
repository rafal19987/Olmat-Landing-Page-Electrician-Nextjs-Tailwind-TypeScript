import Link from 'next/link';
import Image from 'next/image';
import mainPhoto from '@/assets/images/main-photo.jpg';
import rightArrowIcon from '@/assets/svg/right-arrow.svg';
import workerIcon from '@/assets/svg/worker.svg';
import voltmeterIcon from '@/assets/svg/voltmeter.svg';
import robotIcon from '@/assets/svg/robot.svg';
import factoryIcon from '@/assets/svg/factory.svg';
import powerPlantIcon from '@/assets/svg/power-plant.svg';

const advantagesOfCooperation = [
  'Solidnie i rzetelnie realizujemy każde zamówienie.',
  'Cały czas podnosimy swoje kwalifikacje, systematycznie i świadomie rozwijając Naszą wiedzę i kompetencje.',
  'Doradztwo i konsultacje na najwyższym poziomie.',
  'Posiadamy niezbędne uprawienia.',
];

const services = [
  {
    headline: 'Instalacje Elektryczne',
    text: 'Instalacje elektryczne i teletechniczne w budynkach przemysłowych, usługowych, administracyjnych, hotelach jak i w budownictwie indywidualnym.',
    icon: workerIcon,
  },
  {
    headline: 'Instalacje Fotowoltaiczne',
    text: 'Instalacja fotowoltaiczna to prosty sposób na oszczędności związane z zużyciem energii elektrycznej dla zakładu przemysłowego jak i domu rodzinnego.',
    icon: powerPlantIcon,
  },
  {
    headline: 'Kompensacje Mocy Biernej',
    text: 'Naszą główną domeną jest projektowanie i budowanie szytych na miarę urządzeń do kompensacji mocy biernej.',
    icon: factoryIcon,
  },
  {
    headline: 'Pomiary',
    text: 'Pomiary elektryczne ochrony od porażeń bieżące, odbiorcze, okresowe 5 letnie, eksploatacyjne oraz analiza sieci.',
    icon: voltmeterIcon,
  },
  {
    headline: 'Automatyka',
    text: 'Pomiary elektryczne ochrony od porażeń bieżące, odbiorcze, okresowe 5 letnie, eksploatacyjne oraz analiza sieci.',
    icon: robotIcon,
  },
];

export default function Home() {
  return (
    // lg:flex-row
    <>
      <LandingSection />
      <AboutSection />
      <ServicesSection />
      <RealizationsSection />
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
              <button className="bg-[#FFDE8A] p-4 rounded-md lg:w-[400px]">
                <span className="font-lato font-bold text-sm text-primary">
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
            {advantagesOfCooperation.map((advantage, _) => (
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
            {services.map((service, _) => (
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
          {/* <ul className="grid grid-cols-2 gap-4">
          {services.map((service, _) => (
            <li
              className="flex flex-col gap-3 items-center p-4 min-h-32 h-full bg-secondary bg-opacity-75 rounded-md"
              key={_}
            >
              <Image src={resistanceIcon} width={40} alt="" aria-hidden />
              <span className="text-center">{service}</span>
            </li>
          ))}
        </ul> */}
        </div>
      </div>
    </section>
  );
};

const SectionHeadline: React.FC<{ headline: string }> = ({ headline }) => {
  return (
    <h3 className='relative text-2xl font-jura font-bold w-fit text-secondary z-20 px-4 py-2 after:absolute after:-left-4 after:bottom-0 after:top-0 after:mt-auto after:mb-auto after:content-[""] after:w-[calc(100%+16px)] after:h-full after:-z-10 after:bg-primary after:bg-opacity-75'>
      {headline}
    </h3>
  );
};
