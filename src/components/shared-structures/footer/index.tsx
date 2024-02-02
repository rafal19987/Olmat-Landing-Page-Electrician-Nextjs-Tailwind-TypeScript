import * as Typography from '@/components/Typography';
import { websiteConfig } from '@/websiteConfig';
import { Logo } from '@/components/shared-atoms/Logo';
import Image from 'next/image';
import Link from 'next/link';

export const Footer: React.FC<{ children?: React.ReactNode }> = ({
  children,
}) => {
  return (
    <footer className="flex flex-col items-center justify-end gap-8 p-4 w-screen min-h-96 h-full bg-[#121212] text-white">
      <div className="flex flex-col items-center justify-evenly w-full py-10 md:flex-row md:items-start gap-20">
        <div className="flex flex-col items-center gap-8">
          <div className="space-y-1">
            <Logo />
          </div>

          <div className="space-y-8">
            <ul className="space-y-2 flex flex-col items-center">
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
            <ul className="flex gap-9 justify-center items-center">
              {websiteConfig.data.contactInfo.map((contact, _) => (
                <li key={_}>
                  <Link href={contact.link} className="flex gap-4">
                    <Image src={contact.icon} alt="" aria-hidden />
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="flex flex-col items-center gap-8 lg:flex-row">
          <div className="space-y-8 flex flex-col items-center">
            <Typography.Span className="text-white">
              Przydatne linki
            </Typography.Span>
            <div className="space-y-8">
              <ul className="space-y-2 flex flex-col items-center">
                {websiteConfig.navigation.map((navigation, _) => (
                  <li key={_}>
                    <Link href={`/${navigation.link}`} className="flex gap-4">
                      <Typography.Span className="text-[#9A9A9A] underline">
                        {navigation.name}
                      </Typography.Span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="flex flex-col items-center gap-8 lg:flex-row">
          <div className="space-y-8 flex flex-col items-center">
            <Typography.Span className="text-white">
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
          </div>
        </div>
      </div>

      <div className="flex flex-col items-center gap-3 w-dvw py-4 border-t border-[#9A9A9A] lg:flex-row lg:justify-around">
        <Typography.Span className="text-center text-sm text-[#9A9A9A] tracking-wider">
          Copyright ©{new Date().getFullYear()}
        </Typography.Span>
        {/* <Typography.Span className="text-center text-sm text-[#9A9A9A] tracking-wider">
          Strona zaprojektowana przez Rafał Izdebski
        </Typography.Span> */}
      </div>
    </footer>
  );
};
