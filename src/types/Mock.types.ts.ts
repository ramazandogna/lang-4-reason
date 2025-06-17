import { StaticImageData } from 'next/image';

export type ImageWithOptionalBlur = StaticImageData & {
  blurDataURL?: string;
  alt?: string;
};

export type RemoteImage = {
  src: string;
  blurDataURL?: string;
  alt?: string;
};

export type PostImageType = ImageWithOptionalBlur | RemoteImage | string;

export interface MockPostType {
  id: string;
  slug: string;
  title: string;
  desc: string;
  category: string;
  subcategories: string[];
  image: PostImageType;
  avatar: ImageWithOptionalBlur;
  author: string;
  readTime: string;
  date: string;
}
