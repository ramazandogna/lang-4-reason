function Section({
  children,
  className
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <section className={`${className} flex flex-col py-[96px] max-md:py-16`}>
      {children}
    </section>
  );
}

export default Section;
