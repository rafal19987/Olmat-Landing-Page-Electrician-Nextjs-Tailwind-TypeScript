import Link from 'next/link';
import Image from 'next/image';
import { SectionHeadline } from '@/components/shared-atoms/SectionHeadline';
import { SectionWrapper } from '@/components/shared-atoms/SectionWrapper';
import { RealizationCard } from '@/components/shared-structures/RealizationCard';
import * as Typography from '@/components/Typography';
import { websiteConfig } from '@/websiteConfig';
import mainPhoto from '@/assets/images/main-photo.webp';
import rightArrowIcon from '@/assets/svg/right-arrow.svg';
import cropArchitectOpeningBlueprint from '@/assets/images/crop-architect-opening-blueprint.webp';
import { ServiceCard } from '@/components/shared-structures/ServiceCard';

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
    <section className='flex flex-col gap-12 p-4 w-full lg:p-0  lg:h-[calc(100vh-var(--header-height-desktop))] lg:flex-row lg:w-screen'>
      <div className='flex flex-col gap-4 lg:grow lg:flex-row lg:w-2/4 lg:justify-center'>
        <div className='flex flex-col lg:p-4'>
          <div className='flex flex-col gap-3 font-jura lg:mt-24'>
            <Typography.H1>
              Usługi eleketryczne Mateusz Olifirowicz Olmat
            </Typography.H1>
            <Typography.H2 className='lg:max-w-[500px]'>
              Dostarczamy rozwiązania z zakresu kompensacji mocy biernej,
              instalacji fotowoltaicznych.
            </Typography.H2>
          </div>
          <div className='mt-4 lg:mt-12'>
            <button className='bg-primary p-4 rounded-md lg:w-[400px] transition-colors duration-300 lg:hover:bg-opacity-80'>
              <Link href='/realizacje'>
                <span className='font-lato font-bold text-sm text-secondary'>
                  Sprawdź dotychczasowe realizacje
                </span>
              </Link>
            </button>
          </div>
        </div>
      </div>
      <div className='relative h-[calc(50vh)] overflow-hidden lg:w-2/4 lg:h-full'>
        <Image
          src={mainPhoto}
          alt='fotografia elektryka by: james-kovin'
          className='object-cover '
          fill
          priority
          placeholder='blur'
        />
      </div>
    </section>
  );
};

const AboutSection = () => {
  return (
    <SectionWrapper>
      <SectionHeadline headline='Nasza firma' />
      <div className='flex flex-col lg:flex-row lg:justify-between'>
        <div className='space-y-1 lg:w-5/12 lg:relative lg:flex lg:flex-col'>
          <Typography.Paragraph className='lg:text-2xl'>
            Specjalizuje się w dostarczaniu rozwiązań z zakresu instalacji
            fotowoltaicznych, automatyzacji, komensacji mocy biernej.
          </Typography.Paragraph>
          <Typography.Paragraph className='lg:text-2xl'>
            Wykonujemy pomiary wszystkich rodzajów instalacji elektrycznych.
          </Typography.Paragraph>
          <Typography.Paragraph className='lg:text-xl lg:absolute lg:bottom-0'>
            Oferujemy Nasze usługi na terenie całej Polski.
          </Typography.Paragraph>
        </div>
        <div className='relative overflow-hidden rounded-xl lg:w-2/4 lg:h-[calc(40vh)]'>
          <Image
            src={cropArchitectOpeningBlueprint}
            alt='Image by Freepik '
            className='object-cover '
            fill
            placeholder='blur'
          />
        </div>
      </div>
      <div className='space-y-8 lg:flex lg:items-center lg:flex-col'>
        <Typography.H3 className='lg:self-start'>
          Dlaczego warto z Nami współpracować ?
        </Typography.H3>
        <ul className='space-y-4 lg:space-y-0 lg:gap-4 lg:flex lg:flex-wrap lg:justify-center'>
          {websiteConfig.advantagesOfCooperation.map((advantage, _) => (
            <li
              className='flex w-full gap-3 items-center min-h-24 max-h-full p-4 bg-secondary rounded-md lg:items-starts  lg:max-w-[var(--max-card-width)] '
              key={_}
            >
              <Image src={rightArrowIcon} width={20} alt='' aria-hidden />
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
      <SectionHeadline headline='Nasze usługi' />
      <div className='space-y-1'>
        <Typography.Paragraph>
          Wykonujemy prace montażowe, remontowe i modernizacyjne związane z
          branżą elektrotechniki, elektroenergetyki.
        </Typography.Paragraph>
      </div>
      <div className='space-y-8'>
        <Typography.H3>Jakie usługi oferujemy?</Typography.H3>
        <ul className='flex flex-col gap-12 md:justify-center md:items-center lg:flex-wrap lg:flex-row '>
          {websiteConfig.services.map((service, _) => (
            <ServiceCard key={_} service={service} />
          ))}
        </ul>
      </div>
    </SectionWrapper>
  );
};

const RealizationsSection = () => {
  return (
    <SectionWrapper>
      <SectionHeadline headline='Ostatnie realizacje' />
      <div className='space-y-1'>
        <Typography.Paragraph>
          Wykonujemy prace montażowe, remontowe i modernizacyjne związane z
          branżą elektrotechniki, elektroenergetyki.
        </Typography.Paragraph>
      </div>
      <div className='space-y-8 lg:flex lg:flex-col lg:items-center'>
        <Typography.H3 className='self-start'>
          Jakie inwestycje ukończyliśmy w ostatnim czasie?
        </Typography.H3>

        <ul className='grid grid-cols-1 md:grid-cols-2 gap-6 -ml-4 w-screen place-items-center lg:grid-cols-3  lg:ml-0 lg:w-fit'>
          {websiteConfig.realizations.map(
            (realization, idx) =>
              idx < 3 && <RealizationCard realization={realization} key={idx} />
          )}
        </ul>
      </div>
    </SectionWrapper>
  );
};
