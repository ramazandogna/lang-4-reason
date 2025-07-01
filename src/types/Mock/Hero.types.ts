import { StaticImageData } from 'next/image';

export interface HeroImageProps {
  postImage: string | { src: string } | StaticImageData;
  alt?: string;
  className?: string;
}

export interface HeroTitleProps {
  title: string;
  category: string;
  subcategories: string[];
  author: string;
  readTime: string;
  className?: string;
  date: string;
}
