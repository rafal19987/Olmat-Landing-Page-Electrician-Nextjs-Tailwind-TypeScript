import workerIcon from '@/assets/svg/worker.svg';
import voltmeterIcon from '@/assets/svg/voltmeter.svg';
import robotIcon from '@/assets/svg/robot.svg';
import factoryIcon from '@/assets/svg/factory.svg';
import powerPlantIcon from '@/assets/svg/power-plant.svg';
import emailIcon from '@/assets/svg/email.svg';
import phoneIcon from '@/assets/svg/phone.svg';
import linkedInIcon from '@/assets/svg/linkedIn.svg';
import firstPhoto from '@/assets/images/1.png';
import secondPhoto from '@/assets/images/2.png';
import thirdPhoto from '@/assets/images/3.png';
import profilePhoto from '@/assets/images/mateusz-olifirowicz-profile.png';

export const websiteConfig = {
  title: 'OLMAT | Mateusz Olifirowicz',
  description:
    'Usługi elektryczne Mateusz Olifirowicz "OLMAT". Kompensacja mocy biernej.',
  services: [
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
  ],
  realizations: [
    {
      id: 1,
      headline: 'Sterownia przepompowni "Chiechanów"',
      text: 'Inwestycja realizowana dla przepompowni “Ciechanów”. Zakres prac obejmował montaż oraz konfigurację głównego bloku sterownicznego. Inwestycja realizowana dla przepompowni “Ciechanów”. Zakres prac obejmował montaż oraz konfigurację głównego bloku sterownicznego. Inwestycja realizowana dla przepompowni “Ciechanów”. Zakres prac obejmował montaż oraz konfigurację głównego bloku sterownicznego.',
      photo: firstPhoto,
      link: 'sterownia-przepompowni-ciechanow',
      workScope: [
        'Analiza parametrów sieci',
        'Pomiar sieci',
        'Wykonanie sterowania',
      ],
    },
    {
      id: 2,
      headline: 'System SmartHome - Wola Chomejowa',
      text: 'Projekt inteligentnego domu skupiający się na instalacji elektrycznej oraz montażu systemów oświetleniowych.',
      photo: secondPhoto,
      link: 'system-smarthome-wola-chomejowa',
      workScope: [
        'Tworzenie projektu oświetlenia',
        'Doradzwto techniczne',
        'Wykonanie systemu SmartHome z wykorzystaniem systemu Fiber',
      ],
    },
    {
      id: 3,
      headline: 'Rozdzielnia z systemem automatyki',
      text: 'Projektowanie oraz montaż systemu rozdzielnicy przemysłowej z elementami sterowniczymi centralnego układu elektrycznego.',
      photo: thirdPhoto,
      link: 'rozdzielnia-z-systemem-automatyki',
      workScope: ['Prefabrykacja rozdzielnic', 'Montaż rozdzielnic'],
    },
  ],
  advantagesOfCooperation: [
    'Solidnie i rzetelnie realizujemy każde zamówienie.',
    'Cały czas podnosimy swoje kwalifikacje, systematycznie i świadomie rozwijając Naszą wiedzę i kompetencje.',
    'Doradztwo i konsultacje na najwyższym poziomie.',
    'Posiadamy niezbędne uprawienia.',
  ],
  data: {
    companyInfo: {
      companyName: 'Olmat Mateusz Olifirowicz',
      nip: '8252139859',
      regon: '386857603',
      adres: {
        city: 'Warszawa',
        zipCode: '03-982',
        street: 'Jana Nowaka-Jeziorańskiego',
        building: '44',
        apartment: '18',
        icon: '',
      },
    },
    profilePhoto: profilePhoto,
    contactInfo: [
      {
        description: 'mateuszolifirowicz@gmail.com',
        link: 'mateuszolifirowicz@gmail.com',
        icon: emailIcon,
      },
      {
        description: '517-788-363',
        link: '517788363',
        icon: phoneIcon,
      },
      {
        description: 'LinkedIn',
        link: '#',
        icon: linkedInIcon,
      },
    ],
  },
};
