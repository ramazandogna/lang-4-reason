import Image from 'next/image';
import { HeroImageProps } from '../../../../types/Hero.types';
import { getBlurData, getImageSrc } from '@/lib/imageUtilis';

function HeroImage({ hero }: { hero: HeroImageProps }) {
  const imageSrc = getImageSrc(hero.postImage);
  const blurDataURL = getBlurData(hero.postImage);

  return (
    <div className="relative aspect-[16/9] w-full overflow-hidden rounded-2xl">
      <Image
        src={imageSrc}
        alt={hero.alt || 'Post image'}
        fill
        className="rounded-2xl object-cover"
        placeholder={blurDataURL ? 'blur' : 'empty'}
        blurDataURL={blurDataURL}
        sizes="(max-width: 768px) 100vw, 1024px"
        loading="eager"
        priority
      />
    </div>
  );
}

export default HeroImage;
