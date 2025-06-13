import { Section } from '@/components/ui/Section';
import LatestPosts from '@/layouts/Home/LatestPosts';
import Posts from '@/layouts/Home/Posts';

export default function TypographyShowcase() {
  return (
    <>
      <Section className="pt-16! max-md:pt-8!">
        <LatestPosts />
      </Section>
      <Section>
        <Posts />
      </Section>
    </>
  );
}
