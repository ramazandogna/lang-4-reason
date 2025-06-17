import type { MockPostType } from '@/types/Mock.types.ts';
import { ContentAuthor } from './ContentAuthor';

export default function Content({ post }: { post: MockPostType }) {
  const contentAuthor = {
    avatar: post.avatar,
    author: post.author,
    slug: post.slug
  };

  return (
    <article>
      <h1 className="mb-2 text-4xl font-extrabold text-gray-900">
        {post.title}
      </h1>
      <p className="mb-10 text-lg text-gray-700">
        {post.desc}
        {post.desc}
        {post.desc}
      </p>
      <p className="mb-10 text-lg text-gray-700">
        {post.desc}
        {post.desc}
        {post.desc}
      </p>
      <p className="mb-10 text-lg text-gray-700">
        {post.desc}
        {post.desc}
        {post.desc}
        {post.desc}
        {post.desc}
      </p>
      <p className="mb-10 text-lg text-gray-700">
        {post.desc}
        {post.desc}
        {post.desc}
        {post.desc}
        {post.desc}
      </p>
      <p className="mb-10 text-lg text-gray-700">
        {post.desc}
        {post.desc}
        {post.desc}
        {post.desc}
        {post.desc}
      </p>
      <p className="mb-10 text-lg text-gray-700">
        {post.desc}
        {post.desc}
        {post.desc}
      </p>

      <ContentAuthor contentAuthor={contentAuthor} />
    </article>
  );
}
