function Section({
  children,
  className
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <section
      className={`${className} flex flex-col py-[64px]! max-md:py-[40px]`}
    >
      {children}
    </section>
  );
}

export default Section;
