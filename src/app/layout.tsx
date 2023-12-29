import type { Metadata } from 'next';
import { lato } from '@/lib/fonts';
import { Header } from '@/components/shared-structures/header';
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
      <body className={lato.variable}>
        <div className="font-lato relative flex flex-col w-screen min-h-screen h-full bg-slate-100 lg:flex-row">
          <div className="fixed top-0 w-full h-full lg:w-64 lg:flex lg:static">
            <Header />
          </div>

          <div className="flex grow flex-col h-full items-center w-full lg:min-h-screen lg:h-full">
            {children}
          </div>
        </div>
      </body>
    </html>
  );
}
