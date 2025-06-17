'use client';
import { Button } from '@/components/ui/Button';
import { getBlurData } from '@/lib/imageUtilis';
import { Copy, Facebook, Linkedin, Twitter } from 'lucide-react';
import Image from 'next/image';
import type { PostImageType } from '@/types/Mock.types.ts';
import Link from '@/components/ui/Link';

interface ContentAuthorProps {
  contentAuthor: {
    avatar: PostImageType; // artık hem StaticImageData hem remote URL gelebilir
    author: string;
    slug: string;
  };
}

export default function ContentAuthor({ contentAuthor }: ContentAuthorProps) {
  const { avatar, author, slug } = contentAuthor;
  const blurDataURL = getBlurData(avatar);

  // Oluşturulacak paylaşım URL’si
  const postUrl = `${typeof window !== 'undefined' ? window.location.origin : ''}/${slug}`;

  const handleCopy = () => {
    if (typeof navigator !== 'undefined' && navigator.clipboard) {
      navigator.clipboard.writeText(postUrl);
      // İstersen bir toast vs. gösterebilirsin
    }
  };

  return (
    <div className="flex items-center justify-between gap-3">
      <div className="flex items-center gap-3">
        <Image
          src={contentAuthor.avatar as string} // Type assertion to string
          alt={contentAuthor.slug ?? author}
          width={48}
          height={48}
          className="rounded-full"
          placeholder={blurDataURL ? 'blur' : 'empty'}
          blurDataURL={blurDataURL}
        />
        <div className="text-sm">
          <div className="font-semibold">{author}</div>
          <div className="text-gray-400">Product Designer in Rei Product</div>
        </div>
      </div>
      <div className="flex items-center gap-2">
        <Button
          variant="secondary"
          color="gray"
          leftIcon={<Copy />}
          onClick={handleCopy}
          className="text-gray-500!"
        >
          Linki Kopyala
        </Button>
        <Link href="">
          <Button
            variant="secondary"
            iconOnly
            color="gray"
            leftIcon={<Facebook size={22} />}
            className="text-gray-500!"
          />
        </Link>
        <Link href="">
          <Button
            variant="secondary"
            iconOnly
            color="gray"
            leftIcon={<Twitter size={22} />}
            className="text-gray-500!"
          />
        </Link>
        <Link href="">
          <Button
            variant="secondary"
            iconOnly
            color="gray"
            leftIcon={<Linkedin size={22} />}
            className="text-gray-500!"
          />
        </Link>
      </div>
    </div>
  );
}
