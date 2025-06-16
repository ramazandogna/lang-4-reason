import { Section } from '@/components/ui/Section';
import { LatestPosts } from '@/layouts/Home/LatestPosts';
import { Newsletter } from '@/layouts/Home/Newsletter';
import { Posts } from '@/layouts/Home/Posts';

export default function TypographyShowcase() {
  return (
    <>
      <Section className="container mx-auto w-full pt-16! max-md:pt-8!">
        <LatestPosts />
      </Section>
      <Section className="container mx-auto w-full pt-0!">
        <Posts />
      </Section>
      <Section className="mx-auto w-full bg-[var(--secondary-bg)]/30 py-16!">
        <span className="container">
          <Newsletter />
        </span>
      </Section>
    </>
  );
}
