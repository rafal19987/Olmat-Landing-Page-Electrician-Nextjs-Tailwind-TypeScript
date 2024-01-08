export const SectionWrapper: React.FC<{
  children: React.ReactNode;
  className?: string;
  id?: string;
}> = ({ children, className, id }) => {
  return (
    <section id={id ? id : ''} className="p-4">
      <div className="space-y-8">{children}</div>
    </section>
  );
};
