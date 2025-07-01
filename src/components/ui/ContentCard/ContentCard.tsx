import Image from 'next/image';
import { ArrowUpRight } from 'lucide-react';
import { Button } from '../Button';
import Link from '@/components/ui/Link';
import { MockPost } from '@/types/Mock/Mock.types.ts';
import { getImageSrc, getBlurData } from '@/utils/imageUtilis';

function ContentCard({
  image,
  avatar,
  category,
  title,
  desc,
  author,
  readTime,
  slug
}: MockPost) {
  const postImageSrc = getImageSrc(image);
  const postBlurDataUrl = getBlurData(image);
  const avatarBlurDataUrl = getBlurData(avatar);

  return (
    <div className="flex flex-col overflow-hidden rounded-3xl border border-gray-100 bg-white shadow-sm transition hover:shadow-lg">
      <div className="relative h-[220px] w-full overflow-hidden rounded-3xl">
        <Link href={`/${slug}`} className="group inset-0 flex cursor-pointer">
          <Image
            src={postImageSrc}
            alt={title}
            fill
            className="object-cover"
            sizes="(max-width: 600px) 100vw, 420px"
            placeholder={postBlurDataUrl ? 'blur' : 'empty'}
            blurDataURL={postBlurDataUrl}
            loading="lazy"
          />
          <Button
            rightIcon={
              <ArrowUpRight
                className="m-auto text-white transition-all duration-300 group-hover:scale-105 group-hover:rotate-45"
                size={20}
              />
            }
            className="absolute right-4 bottom-4 z-10 flex h-10 w-10 items-center justify-center rounded-full border-2 border-white/60 bg-transparent backdrop-blur-sm transition group-hover:border-white/80 hover:scale-105 hover:bg-transparent"
          />
        </Link>
      </div>

      <div className="flex flex-col gap-2 p-6 pb-4">
        <span className="mb-2 text-xs font-bold text-indigo-600">
          {category}
        </span>
        <Link href={`/${slug}`}>
          <h2 className="mb-1 line-clamp-2 text-2xl font-extrabold text-gray-900">
            {title}
          </h2>
        </Link>
        <p className="mb-3 line-clamp-2 text-base font-normal text-gray-500">
          {desc}
        </p>

        <div className="flex items-center justify-between pt-2">
          <div className="flex items-center gap-2">
            <Image
              src={avatar}
              alt="Yazar"
              width={40}
              height={40}
              placeholder="blur"
              blurDataURL={avatarBlurDataUrl}
              loading="lazy"
              className="rounded-full border-2 border-white shadow-md"
            />
            <span className="text-sm font-bold text-gray-900">{author}</span>
          </div>
          <span className="text-xs font-normal text-gray-400">{readTime}</span>
        </div>
      </div>
    </div>
  );
}

export default ContentCard;
