import Link from 'next/link';
import Image from 'next/image';
import mainPhoto from '@/assets/images/main-photo.jpg';

export default function Home() {
  return (
    <div className="flex flex-col gap-12 p-4 w-full">
      <div className="flex flex-col gap-3 font-jura">
        <h1 className="font-bold text-3xl">
          Usługi eleketryczne Mateusz Olifirowicz Olmat
        </h1>
        <h2 className="text-lg w-3/4">
          Kompleksowe rozwiązania do domu i przemysłu
        </h2>
      </div>
      <div>
        <button className="bg-primary p-4 rounded-lg">
          <span className="font-lato text-sm text-secondary">
            Sprawdź dotychczasowe realizacje
          </span>
        </button>
      </div>
      <div className="relative h-[calc(50vh)] overflow-hidden rounded-xl">
        <Image
          src={mainPhoto}
          alt="fotografia elektryka by: james-kovin"
          className="object-cover"
          fill
          priority
          placeholder="blur"
        />
      </div>
    </div>
  );
}
