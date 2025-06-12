function Section({
  children,
  className
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <section className={`${className} flex flex-col py-[96px]`}>
      {children}
    </section>
  );
}

export default Section;
