// Next.js Components
import Image from 'next/image';

// Types
interface HeroImageProps {
  image: string;
  blurDataURL?: string;
  alt?: string;
}

function HeroImage({ image, blurDataURL, alt }: HeroImageProps) {
  return (
    <div className="fade-up fade-up-delay-4 relative aspect-[16/9] w-full overflow-hidden rounded-2xl">
      <Image
        src={image}
        alt={alt || 'Post image'}
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
