import { Lato, Jura } from 'next/font/google';

export const lato = Lato({
  subsets: ['latin'],
  weight: ['100', '300', '400', '700', '900'],
  style: ['italic', 'normal'],
  variable: '--font-lato',
});

export const jura = Jura({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  style: ['normal'],
  variable: '--font-jura',
});
