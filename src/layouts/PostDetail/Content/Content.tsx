import Image from 'next/image';
import { ContentProps } from './Content.types';
import { getBlurData } from '@/lib/imageUtilis';
import { Section } from '@/components/ui/Section';

export default function Content({ post }: { post: ContentProps }) {
  const avatarBlurDataURL = getBlurData(post.avatar);

  return (
    <Section className="pt-0!">
      <article className="mx-auto max-w-4xl px-4 pt-10 pb-20">
        <div className="mb-4 text-sm font-semibold text-indigo-600">
          {post.category}
        </div>
        <h1 className="mb-6 text-4xl font-extrabold text-gray-900">
          {post.title}
        </h1>
        <p className="mb-10 text-lg text-gray-700">
          {post.desc}
          {post.desc}
          {post.desc}
          {post.desc}
          {post.desc}
          {post.desc}
          {post.desc}
          {post.desc}
          {post.desc}
          {post.desc}
          {post.desc}
          {post.desc}
          {post.desc}
          {post.desc}
          {post.desc}
          {post.desc}
          {post.desc}
          {post.desc}
          {post.desc}
          {post.desc}
          {post.desc}
          {post.desc}
          {post.desc}
          {post.desc}
          {post.desc}
          {post.desc}
          {post.desc}
          {post.desc}
          {post.desc}
          {post.desc}
          {post.desc}
          {post.desc}
          {post.desc}
          {post.desc}
          {post.desc}
          {post.desc}
          {post.desc}
          {post.desc}
          {post.desc}
          {post.desc}
          {post.desc}
          {post.desc}
          {post.desc}
          {post.desc}
          {post.desc}
          {post.desc}
          {post.desc}
          {post.desc}
        </p>

        <div className="flex items-center gap-3">
          <Image
            src={post.avatar}
            alt={post.author || 'Author image'}
            width={48}
            height={48}
            className="rounded-full"
            placeholder="blur"
            blurDataURL={avatarBlurDataURL}
          />
          <div className="text-sm">
            <div className="font-semibold">{post.author}</div>
            <div className="text-gray-400">{post.readTime}</div>
          </div>
        </div>
      </article>
    </Section>
  );
}
