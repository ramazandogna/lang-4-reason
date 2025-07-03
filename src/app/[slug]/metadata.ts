// Next.js core
import type { Metadata } from 'next';

// Data (mock, should be replaced with real data in production)
import { mockPosts } from '@/mocks/mockPosts';

type Props = {
  params: { slug: string };
};

export function generateMetadata({ params }: Props): Metadata {
  const post = mockPosts.find(
    (p) => p.title.toLowerCase().replace(/\s+/g, '-') === params.slug
  );

  if (!post) return { title: 'Post Not Found' };

  return {
    title: post.title,
    description: post.desc
  };
}
