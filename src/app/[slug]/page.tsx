import { notFound } from 'next/navigation';
import { mockPosts } from '@/mocks/mockPosts';
import PostDetail from '@/layouts/PostDetail';

type Props = {
  params: { slug: string };
};

export default function PostPage({ params }: Props) {
  const post = mockPosts.find((p) => p.slug === params.slug);

  if (!post) return notFound();

  return <PostDetail post={post} />;
}
