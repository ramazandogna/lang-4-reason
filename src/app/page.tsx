import { Section } from '@/components/Section';
import LatestPosts from '@/layouts/Home/LatestPosts';
import Posts from '@/layouts/Home/Posts';

export default function TypographyShowcase() {
  return (
    <>
      <Section>
        <LatestPosts />
      </Section>
      <Section>
        <Posts />
      </Section>
    </>
  );
}
