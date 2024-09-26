import { type StaticImageData } from 'next/image';

export type Category =
  | 'instalacje-elektryczne'
  | 'instalacje-fotowoltaiczne'
  | 'kompensacje-mocy-biernej'
  | 'pomiary'
  | 'automatyka';

export type ContactInfo = {
  label: string;
  description: string;
  link: string;
  icon: string;
};

export type Address = {
  city: string;
  zipCode: string;
  street: string;
  building: string;
  apartment: string;
  icon: string;
};

export type CompanyInfo = {
  companyName: string;
  nip: string;
  regon: string;
  adres: Address;
};

export type Service = {
  headline: string;
  text: string;
  link: Category;
  icon: string;
  image: StaticImageData;
};

export type Realization = {
  id: number;
  headline: string;
  text: string;
  photo: StaticImageData;
  link: string;
  workScope: string[];
  category?: Category[];
};

export type NavigationItem = {
  name: string;
  link: string;
};

export type WebsiteConfig = {
  title: string;
  description: string;
  services: Service[];
  realizations: Realization[];
  advantagesOfCooperation: string[];
  data: {
    companyInfo: CompanyInfo;
    profilePhoto: StaticImageData;
    contactInfo: ContactInfo[];
  };
  navigation: NavigationItem[];
};
