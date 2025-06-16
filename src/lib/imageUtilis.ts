import { StaticImageData } from 'next/image';
import { PostImageType } from '@/mocks/mockTypes';

export function getImageSrc(image: PostImageType): string | StaticImageData {
  if (typeof image === 'string') return image;
  if ('src' in image) return image.src;
  return image;
}

export function getBlurData(image: PostImageType): string | undefined {
  if (typeof image === 'object' && image && 'blurDataURL' in image)
    return image.blurDataURL;
}
