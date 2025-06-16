import { StaticImageData } from 'next/image';

export type PostImageType = StaticImageData | { src: string } | string;

export interface ContentProps {
  postImage: PostImageType;
  avatar: StaticImageData;
  category?: string;
  title?: string;
  desc?: string;
  author?: string;
  readTime?: string;
}
