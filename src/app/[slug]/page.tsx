import { notFound } from 'next/navigation';
import { mockPosts } from '@/mocks/mockPosts';
import PostDetail from '@/layouts/PostDetail';
import type { ContentProps } from '@/layouts/PostDetail/Content/Content.types';

type Props = {
  params: { slug: string };
};

export default function PostPage({ params }: Props) {
  const post = mockPosts.find((p) => p.slug === params.slug);

  if (!post) return notFound();

  const postWithImage: ContentProps = {
    postImage: post.image,
    avatar: post.avatar,
    category: post.category,
    title: post.title,
    desc: post.desc,
    author: post.author,
    readTime: post.readTime
  };

  return <PostDetail post={postWithImage} />;
}
