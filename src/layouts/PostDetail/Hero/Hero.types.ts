import { StaticImageData } from 'next/image';

export interface HeroImageProps {
  postImage: string | { src: string } | StaticImageData;
  alt?: string;
  className?: string;
}

export interface HeroTitleProps {
  category?: string;
  title: string;
  author?: string;
  readTime?: string;
  className?: string;
}
