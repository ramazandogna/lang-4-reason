import {
  PostImageType,
  ImageWithOptionalBlur
} from '@/types/Mock/Mock.types.ts';

export interface ContentProps {
  postImage: PostImageType;
  category: string;
  title: string;
  desc: string;
  author: string;
  readTime: string;
  avatar: ImageWithOptionalBlur;
  date: string;
}

export interface ContentHeroProps {
  postImage: PostImageType;
  category: string;
  title: string;
  author: string;
  readTime: string;
}

export interface HeroTitleProps {
  title: string;
  category: string;
  author: string;
  readTime: string;
  className?: string;
}

export interface HeroImageProps {
  postImage: PostImageType;
  alt?: string;
  className?: string;
}
