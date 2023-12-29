import type { Metadata } from 'next';
import { lato } from '@/lib/fonts';
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
      <body className={lato.variable}>{children}</body>
    </html>
  );
}
