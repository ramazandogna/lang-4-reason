// Next.js & React core
import Image from 'next/image';

// UI Components
import { ArrowUpRight } from 'lucide-react';
import { Button } from '@/components/Button';
import Link from '@/components/Link';

// Types
import type { PostNode } from '@/types/posts';

export type ContentCardProps = {
  post: PostNode;
  readTime?: string;
  blurDataURL?: string;
};

// Default blurhash'i burada tanımlıyoruz.
const DEFAULT_BLUR_HASH = 'LBC}oL=A+W;1OaJAw|t90cAD-akZ';

export default function ContentCard({
  post,
  readTime,
  blurDataURL
}: ContentCardProps) {
  const postImageSrc =
    post.featuredImage?.node?.mediaDetails?.sizes?.[0]?.sourceUrl || '';
  const authorAvatarUrl = post.author?.node?.avatar?.url || '';

  return (
    <div className="flex flex-col overflow-hidden rounded-3xl border border-gray-100 bg-white shadow-sm transition hover:shadow-lg">
      <Link href={`/${post.slug}`} className="inset-0 flex cursor-pointer">
        <div className="group relative h-[220px] w-full overflow-hidden rounded-3xl">
          <Image
            src={postImageSrc}
            alt={post.title}
            fill
            className="object-cover transition-transform duration-500 ease-in-out group-hover:scale-110 group-hover:rotate-5"
            sizes="(max-width: 600px) 100vw, 420px"
            placeholder="blur"
            blurDataURL={blurDataURL || DEFAULT_BLUR_HASH}
            loading="lazy"
          />
          <Button
            rightIcon={
              <ArrowUpRight
                className="m-auto text-white/60 transition-all duration-300 group-hover:scale-105 group-hover:rotate-45 group-hover:text-white"
                size={20}
              />
            }
            className="absolute right-4 bottom-4 z-10 flex h-10 w-10 items-center justify-center rounded-full border-2 border-white/60 bg-transparent backdrop-blur-sm transition ease-in-out group-hover:scale-110 group-hover:border-white hover:bg-transparent"
          />
        </div>
      </Link>

      <div className="flex flex-col gap-2 p-6 pb-4">
        <span className="mb-2 text-xs font-bold text-indigo-600">
          {post.categories?.nodes?.[0]?.name || ''}
        </span>
        <Link href={`/${post.slug}`}>
          <h2 className="mb-1 line-clamp-2 text-2xl font-extrabold text-gray-900">
            {post.title}
          </h2>
        </Link>
        <p className="mb-3 line-clamp-2 text-base font-normal text-gray-500">
          {post.excerpt.replace(/<\/?p>/g, '')}
        </p>

        <div className="flex items-center justify-between pt-2">
          <div className="flex items-center gap-2">
            <Link href={post.author?.node?.uri || '#'}>
              <Image
                src={authorAvatarUrl}
                alt={post.author?.node?.name || ''}
                width={40}
                height={40}
                placeholder="empty"
                loading="lazy"
                className="rounded-full border-2 border-white shadow-md"
              />
            </Link>
            <Link href={post.author?.node?.uri || '#'}>
              <span className="cursor-pointer text-sm font-bold text-gray-900 hover:underline">
                {post.author?.node?.name || ''}
              </span>
            </Link>
          </div>
          {readTime && (
            <span className="text-xs font-normal text-gray-400">
              {readTime}
            </span>
          )}
        </div>
      </div>
    </div>
  );
}
