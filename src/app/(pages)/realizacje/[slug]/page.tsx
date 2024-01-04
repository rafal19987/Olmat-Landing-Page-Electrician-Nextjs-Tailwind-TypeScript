import { SectionHeadline } from '@/components/shared-atoms/SectionHeadline';
import { websiteConfig } from '@/websiteConfig';
import Image from 'next/image';

export default function RealizacjaItem({
  params: { slug },
}: {
  params: { slug: string };
}) {
  const realization = websiteConfig.realizations.filter(
    (el) => el.link === slug
  )[0];

  if (!realization) return <span>Realizacja nie odnaleziona</span>;

  return (
    <section className="p-4">
      <div className="space-y-8">
        <SectionHeadline headline={realization.headline} />
        <div className="space-y-1">
          <h1>{realization.text}</h1>
        </div>
        <div className="space-y-8">
          <h2 className="text-xl font-bold leading-6">
            Kilka fotografi z inwestycji
          </h2>
          <ul className="grid grid-cols-1 gap-6 -ml-4 w-screen">
            <li className="flex flex-col gap-6 items-center px-4 py-8 min-h-32 h-full bg-secondary bg-opacity-75 rounded-md">
              <Image src={realization.photo} alt={realization.headline} />
              <Image src={realization.photo} alt={realization.headline} />

              <Image src={realization.photo} alt={realization.headline} />
              <Image src={realization.photo} alt={realization.headline} />
              <Image src={realization.photo} alt={realization.headline} />
              <Image src={realization.photo} alt={realization.headline} />
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
