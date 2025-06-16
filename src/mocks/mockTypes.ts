import { StaticImageData } from 'next/image';

export type PostImageType = StaticImageData | { src: string } | string;

export interface MockPost {
  id: string;
  slug: string;
  title: string;
  desc: string;
  category: string;
  image: StaticImageData | { src: string };
  avatar: StaticImageData;
  author: string;
  readTime: string;
}
