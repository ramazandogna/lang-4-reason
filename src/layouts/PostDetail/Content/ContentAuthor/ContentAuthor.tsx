'use client';
import { Button } from '@/components/ui/Button';
import { Copy, Facebook, Linkedin, Twitter } from 'lucide-react';
import Image from 'next/image';
import Link from '@/components/ui/Link';
import { AuthorNode } from '@/types/post';

type ContentAuthorType = {
  contentAuthor: AuthorNode;
  contentSlug: string;
};

export default function ContentAuthor({
  contentAuthor,
  contentSlug
}: ContentAuthorType) {
  // Oluşturulacak paylaşım URL’si
  const postUrl = `${typeof window !== 'undefined' ? window.location.origin : ''}/${contentSlug}`;

  const handleCopy = () => {
    if (typeof navigator !== 'undefined' && navigator.clipboard) {
      navigator.clipboard.writeText(postUrl);
      // İstersen bir toast vs. gösterebilirsin
    }
  };

  return (
    <div className="flex items-center justify-between gap-3">
      <div className="flex items-center gap-3">
        <Link href={`/author/${contentAuthor.slug}`}>
          <Image
            src={contentAuthor.avatar?.url || ''} // Type assertion to string
            alt={contentAuthor.name}
            width={48}
            height={48}
            className="rounded-full"
            placeholder={contentAuthor.avatar?.blurDataURL ? 'blur' : 'empty'}
            blurDataURL={contentAuthor.avatar?.blurDataURL}
          />
        </Link>
        <div className="text-sm">
          <Link href={`/author/${contentAuthor.slug}`}>
            <div className="font-semibold">{contentAuthor.name}</div>
          </Link>
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
