import Image from 'next/image';
import Link from 'next/link';
import { SectionWrapper } from '@/components/shared-atoms/SectionWrapper';
import * as Typography from '@/components/Typography';
import { websiteConfig } from '@/websiteConfig';
import { PageHeadline } from '@/components/shared-atoms/PageHeadline';
import { Logo } from '@/components/shared-atoms/Logo';

export default function ContactPage() {
  return (
    <SectionWrapper className=" ">
      <PageHeadline headline="Kontakt" />
      <div className="flex flex-col gap-8 items-center ">
        <Typography.Paragraph className="self-center text-center max-w-[600px]">
          Jeśli masz jakieś pytania, o których chcesz z nami porozmawiać,
          zadzwoń do nas lub skorzystaj z naszego formularza kontaktowego, a my
          skontaktujemy się z Tobą w ciągu 24 godzin.
        </Typography.Paragraph>
        <div className="flex flex-col md:flex-row justify-between w-full md:max-w-[800px]">
          <div className="w-full md:w-1/2 flex flex-col items-center justify-between space-y-1 border-x border-b md:border-x-0 md:border-b-0 md:border-y md:border-r-2 p-8">
            <ul className="space-y-2 flex flex-col items-center justify-center h-full">
              <li>
                <Typography.Span>
                  {websiteConfig.data.companyInfo.companyName}
                </Typography.Span>
              </li>
              <li>
                <Typography.Span>
                  {`${websiteConfig.data.companyInfo.adres.street} ${websiteConfig.data.companyInfo.adres.building}/${websiteConfig.data.companyInfo.adres.apartment}`}
                </Typography.Span>
              </li>
              <li>
                <Typography.Span>
                  {websiteConfig.data.companyInfo.adres.zipCode}{' '}
                  {websiteConfig.data.companyInfo.adres.city}
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
          </div>
          <div className="flex items-center gap-3 flex-col border-x w-full md:w-1/2 md:border-x-0  md:border-y p-8">
            <Image
              src={websiteConfig.data.profilePhoto}
              alt="Mateusz Olifirowicz fotografia"
              priority
            />
            <Typography.Paragraph>Mateusz Olifirowicz</Typography.Paragraph>

            {websiteConfig.data.contactInfo.map((contact, idx) => (
              <Link
                href={contact.link}
                className="flex gap-2 hover:underline"
                key={idx}
              >
                <Image src={contact.icon} alt="" aria-hidden />
                <Typography.Span>{contact.description}</Typography.Span>
              </Link>
            ))}
          </div>
        </div>

        <div className="flex flex-col items-center justify-between gap-6 w-full h-full">
          <Typography.Paragraph>Nasze usługi</Typography.Paragraph>
          <ul className="flex flex-col md:flex-row flex-wrap items-center justify-center gap-6 w-full">
            {websiteConfig.services.map((service) => (
              <li
                className="flex items-center gap-4 w-full md:w-fit  max-w-[370px] group"
                key={service.headline}
              >
                <Link
                  className="flex items-center gap-4 w-full h-full px-4 py-2 border group-hover:border-sky-500 transition-colors"
                  href={`/uslugi/${service.link}`}
                >
                  <Image src={service.icon} width={50} alt="" aria-hidden />
                  {service.headline}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </SectionWrapper>
  );
}

{
  /* <div className="space-y-8 lg:flex lg:flex-col lg:items-center border">
        <Typography.H3 className="self-start">
          Jakie inwestycje ukończyliśmy w ostatnim czasie?
        </Typography.H3>
        <Logo />
        <ul className="space-y-2 flex flex-col items-center border">
          <li>
            <Typography.Span className="text-[#9A9A9A]">
              {websiteConfig.data.companyInfo.adres.city}
            </Typography.Span>
          </li>

          <li>
            <Typography.Span className="text-[#9A9A9A]">
              {websiteConfig.data.companyInfo.companyName}
            </Typography.Span>
          </li>
          <li>
            <Typography.Span className="text-[#9A9A9A]">
              Nip: {websiteConfig.data.companyInfo.nip}
            </Typography.Span>
          </li>
          <li>
            <Typography.Span className="text-[#9A9A9A]">
              Regon: {websiteConfig.data.companyInfo.regon}
            </Typography.Span>
          </li>
        </ul>
        <ul className="flex flex-col-reverse gap-4 justify-center items-start">
          {websiteConfig.data.contactInfo.map((contact, _) => (
            <li key={_}>
              <Link href={contact.link} className="flex gap-4">
                <Image src={contact.icon} alt="" aria-hidden />
                <p>{contact.description}</p>
              </Link>
            </li>
          ))}
        </ul>
        <Typography.Span className="text-primary">
          Godziny pracy
        </Typography.Span>
        <div className="space-y-8">
          <ul className="space-y-2 flex flex-col items-center">
            <li>
              <Typography.Span className="text-[#9A9A9A]">
                Poniedziałek: 8 - 16.00
              </Typography.Span>
            </li>
            <li>
              <Typography.Span className="text-[#9A9A9A]">
                Wtorek: 8 - 16.00
              </Typography.Span>
            </li>
            <li>
              <Typography.Span className="text-[#9A9A9A]">
                Środa: 8 - 16.00
              </Typography.Span>
            </li>
            <li>
              <Typography.Span className="text-[#9A9A9A]">
                Czwartek: 8 - 16.00
              </Typography.Span>
            </li>
            <li>
              <Typography.Span className="text-[#9A9A9A]">
                Piątek: 8 - 16.00
              </Typography.Span>
            </li>
          </ul>
        </div>
      </div> */
}
