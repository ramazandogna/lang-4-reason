import type { MockPostType } from '@/types/Mock.types.ts';
import HeroTitle from './HeroTitle/HeroTitle';
import HeroImage from './HeroImage/HeroImage';

function Hero({ hero }: { hero: MockPostType }) {
  return (
    <div className="flex flex-col gap-16 max-md:gap-10">
      <HeroTitle
        hero={{
          title: hero.title,
          category: hero.category,
          author: hero.author,
          readTime: hero.readTime,
          className: '',
          date: hero.date,
          subcategories: hero.subcategories
        }}
      />
      <HeroImage
        hero={{
          postImage: hero.image,
          alt: hero.title,
          className: ''
        }}
      />
    </div>
  );
}

export default Hero;
