import Image from 'next/image';
import Link from 'next/link';
import { SectionHeadline } from '@/components/shared-atoms/SectionHeadline';

import firstPhoto from '@/assets/images/1.png';
import secondPhoto from '@/assets/images/2.png';
import thirdPhoto from '@/assets/images/3.png';

const realizations = [
  {
    headline: 'Sterownia przepompowni Chiechanów',
    text: 'Inwestycja realizowana dla przepompowni “Ciechanów”. Zakres prac obejmował montaż oraz konfigurację głównego bloku sterownicznego.',
    photo: firstPhoto,
  },
  {
    headline: 'System SmartHome - Wola Chomejowa',
    text: 'Projekt inteligentnego domu skupiający się na instalacji elektrycznej oraz montażu systemów oświetleniowych.',
    photo: secondPhoto,
  },
  {
    headline: 'Rozdzielnia z systemem automatyki',
    text: 'Projektowanie oraz montaż systemu rozdzielnicy przemysłowej z elementami sterowniczymi centralnego układu elektrycznego.',
    photo: thirdPhoto,
  },
];

const RealizationsPage: React.FC<{ children?: React.ReactNode }> = ({
  children,
}) => {
  return (
    <section className="p-4">
      <div className="space-y-8">
        <SectionHeadline headline="Nasze realizacje" />
        <div className="space-y-1">
          <p>
            Wykonujemy prace montażowe, remontowe i modernizacyjne związane z
            branżą elektrotechniki, elektroenergetyki.
          </p>
        </div>
        <div className="space-y-8">
          <h4 className="text-xl font-bold leading-6">
            Jakie inwestycje ukończyliśmy w ostatnim czasie?
          </h4>
          <ul className="grid grid-cols-1 gap-6 -ml-4 w-screen">
            {realizations.map((realization, _) => (
              <li
                className="flex flex-col gap-6 items-center px-4 py-8 min-h-32 h-full bg-secondary bg-opacity-75 rounded-md"
                key={_}
              >
                <h5 className="text-xl text-center font-bold">
                  {realization.headline}
                </h5>
                <Image
                  className="ml-0 w-full rounded-lg"
                  src={realization.photo}
                  alt={realization.headline}
                  aria-description={realization.headline}
                />
                <span className="">{realization.text}</span>
                <button className="bg-primary px-4 py-3 rounded-md">
                  <Link
                    className="text-secondary"
                    href={`/realizacje/${Array.from(
                      realization.headline
                        .split(' ')
                        .filter((el) => el !== '-' && el !== '')
                        .map((el) => el.toLowerCase())
                    ).join('-')}`}
                  >
                    Czytaj więcej
                  </Link>
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default RealizationsPage;
