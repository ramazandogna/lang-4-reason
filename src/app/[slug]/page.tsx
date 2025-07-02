import { notFound } from 'next/navigation';
import { mockPosts } from '@/mocks/mockPosts';
import { Section } from 'lucide-react';
import { Hero } from '@/layouts/PostDetail/Hero';
import { Content } from '@/layouts/PostDetail/Content';
import { LatestContent } from '@/layouts/PostDetail/Content/LatestContent';
import { Newsletter } from '@/layouts/Home/Newsletter';

export default function PostPage({ params }: { params: { slug: string } }) {
  const post = mockPosts.find((p) => p.slug === params.slug);

  if (!post) return notFound();

  return (
    <>
      <Section className="container mx-auto pt-24! pb-0! max-md:pt-16! max-md:pb-10!">
        <Hero hero={post} />
      </Section>
      <Section className="container mx-auto pt-16!">
        <div className="post-container mx-auto">
          <Content post={post} />
        </div>
      </Section>
      <Section className="container mx-auto">
        <LatestContent />
      </Section>
      <Section className="mx-auto w-full bg-[var(--secondary-bg)]/30 py-16!">
        <span className="container">
          <Newsletter />
        </span>
      </Section>
    </>
  );
}
