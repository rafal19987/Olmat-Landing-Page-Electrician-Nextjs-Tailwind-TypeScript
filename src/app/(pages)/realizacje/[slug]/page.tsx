import { SectionHeadline } from '@/components/shared-atoms/SectionHeadline';

export default function RealizacjaItem({
  params: { slug },
}: {
  params: { slug: string };
}) {
  return (
    <section className="p-4">
      <div className="space-y-8">
        <SectionHeadline headline={slug} />
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
          {/* <ul className="grid grid-cols-1 gap-6 -ml-4 w-screen">
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
          </ul> */}
        </div>
      </div>
    </section>
  );
}
