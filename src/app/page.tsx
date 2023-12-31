import Link from 'next/link';
import Image from 'next/image';
import mainPhoto from '@/assets/images/main-photo.jpg';

export default function Home() {
  return (
    // lg:flex-row
    <div className="flex flex-col gap-12 p-4 w-full lg:flex-wrap lg:p-0 lg:justify-between border border-red-500 lg:h-screen">
      <div className="flex flex-col gap-4 lg:grow lg:flex-row">
        <div>
          <div className="flex flex-col lg:p-4">
            <div className="flex flex-col gap-3 font-jura lg:mt-24">
              <h1 className="font-bold text-3xl lg:text-6xl lg:max-w-[700px]">
                Usługi eleketryczne Mateusz Olifirowicz Olmat
              </h1>
              <h2 className="text-lg w-3/4 lg:text-2xl">
                Kompleksowe rozwiązania do domu i przemysłu
              </h2>
            </div>
            <div className="lg:mt-12">
              <button className="bg-primary p-4 rounded-lg lg:w-[400px]">
                <span className="font-lato text-sm text-secondary">
                  Sprawdź dotychczasowe realizacje
                </span>
              </button>
            </div>
          </div>
        </div>
        <div className="hidden lg:flex border-red-500 border lg:grow lg:items-center lg:justify-center">
          carousel
        </div>
      </div>
      <div className="relative h-[calc(50vh)] overflow-hidden rounded-xl lg:rounded-none lg:w-[calc(100vw-var(--header-width-desktop)))] lg:h-[280px]">
        <Image
          src={mainPhoto}
          alt="fotografia elektryka by: james-kovin"
          className="object-cover "
          fill
          priority
          placeholder="blur"
        />
      </div>
    </div>
  );
}
