import type { Metadata } from 'next';
import { lato, jura } from '@/lib/fonts';
import { websiteConfig } from '@/websiteConfig';
import { Header } from '@/components/shared-structures/header';
import { Footer } from '@/components/shared-structures/footer';
import { TailwindIndicator } from '@/components/TailwindIndicator';
import './globals.css';

export const metadata: Metadata = {
  title: websiteConfig.title,
  description: websiteConfig.description,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pl">
      <body className={`${lato.variable} ${jura.variable}`}>
        <div className="font-lato relative flex flex-col items-center w-screen min-h-screen h-full bg-white">
          <div className="fixed top-0 left-0 w-full z-50">
            <Header />
          </div>

          <div className="mt-[var(--header-height)] flex grow flex-col items-center w-full h-full pb-24 max-w-[var(--max-content-width)] lg:min-h-screen lg:h-full lg:mt-[var(--header-height-desktop)]">
            <main className="flex flex-col gap-12 items-center w-full lg:mt-0 max-w-[var(--max-content-width)]">
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
