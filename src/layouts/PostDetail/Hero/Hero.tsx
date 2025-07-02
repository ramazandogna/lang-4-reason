// Layouts
import HeroTitle from './HeroTitle/HeroTitle';
import HeroImage from './HeroImage/HeroImage';

// Types
import { PostType } from '@/types/post';

export default function Hero({
  hero
}: {
  hero: PostType & { blurDataURL?: string };
}) {
  const image =
    hero.featuredImage?.node?.mediaDetails?.sizes?.[0]?.sourceUrl || '';
  const blurDataURL = hero.blurDataURL;
  return (
    <div className="flex flex-col gap-16 max-md:gap-10">
      <HeroTitle hero={hero} />
      <HeroImage image={image} blurDataURL={blurDataURL} alt={hero.title} />
    </div>
  );
}
