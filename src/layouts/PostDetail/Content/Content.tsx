import { PostType } from '@/types/post';
import { ContentAuthor } from './ContentAuthor';

export default function Content({ post }: { post: PostType }) {
  return (
    <article>
      <h1 className="mb-2 text-4xl font-extrabold text-gray-900">
        {post.title}
      </h1>
      <p className="mb-10 text-lg text-gray-700">{post.content}</p>
      <ContentAuthor contentSlug={post.slug} contentAuthor={post.author.node} />
    </article>
  );
}
