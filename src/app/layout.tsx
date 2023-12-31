import type { Metadata } from 'next';
import { lato, jura } from '@/lib/fonts';
import { Header } from '@/components/shared-structures/header';
import { Footer } from '@/components/shared-structures/footer';
import { TailwindIndicator } from '@/components/TailwindIndicator';
import './globals.css';

export const metadata: Metadata = {
  title: 'OLMAT | Mateusz Olifirowicz',
  description:
    'Usługi elektryczne Mateusz Olifirowicz "OLMAT". Kompensacja mocy biernej.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pl">
      <body className={`${lato.variable} ${jura.variable}`}>
        <div className="font-lato relative flex flex-col w-screen min-h-screen h-full bg-slate-100 lg:flex-row">
          <div className="fixed top-0 w-full lg:w-[var(--header-width-desktop)] lg:flex lg:static z-50">
            <Header />
          </div>

          <div className="flex grow flex-col h-full items-center w-full lg:min-h-screen lg:h-full">
            <main className="mt-[var(--header-height)] flex flex-col gap-12 w-full lg:mt-0 lg:w-[calc(100vw-var(--header-width-desktop))]">
              {children}
            </main>
          </div>
          <TailwindIndicator />
          <Footer />
        </div>
      </body>
    </html>
  );
}
