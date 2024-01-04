export const SectionHeadline: React.FC<{ headline: string }> = ({
  headline,
}) => {
  return (
    <h3 className='relative text-2xl font-jura font-bold w-fit text-secondary z-20 px-4 py-2 after:absolute after:-left-4 after:bottom-0 after:top-0 after:mt-auto after:mb-auto after:content-[""] after:w-[calc(100%+16px)] after:h-full after:-z-10 after:bg-primary after:bg-opacity-75'>
      {headline}
    </h3>
  );
};
