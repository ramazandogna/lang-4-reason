import Image from 'next/image';
import { ContentProps } from './Content.types';
import { getImageSrc, getBlurData } from '@/lib/imageUtilis';

export default function Content({ post }: { post: ContentProps }) {
  const imageSrc = getImageSrc(post.postImage);
  const blurDataURL = getBlurData(post.postImage);
  const avatarBlurDataURL = getBlurData(post.avatar);

  return (
    <article className="mx-auto max-w-4xl px-4 pt-10 pb-20">
      <div className="relative mb-10 aspect-[16/9] w-full overflow-hidden rounded-2xl">
        <Image
          src={imageSrc}
          alt={post.title || 'Post image'}
          fill
          className="rounded-2xl object-cover"
          placeholder={blurDataURL ? 'blur' : 'empty'}
          blurDataURL={blurDataURL}
          sizes="(max-width: 768px) 100vw, 1024px"
          loading="eager"
          priority
        />
      </div>

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
  );
}
