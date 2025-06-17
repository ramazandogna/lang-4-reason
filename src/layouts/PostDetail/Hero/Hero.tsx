import { ContentHeroProps } from '../Content/Content.types';
import HeroTitle from './HeroTitle/HeroTitle';
import HeroImage from './HeroImage/HeroImage';
import { HeroImageProps, HeroTitleProps } from './Hero.types';

function Hero({ hero }: { hero: ContentHeroProps }) {
  const heroImage: HeroImageProps = {
    postImage: hero.postImage,
    alt: hero.title,
    className: ''
  };

  const heroTitle: HeroTitleProps = {
    title: hero.title,
    category: hero.category,
    author: hero.author,
    readTime: hero.readTime,
    className: ''
  };

  return (
    <div className="flex flex-col gap-16 max-md:gap-10">
      <HeroTitle hero={heroTitle} />
      <HeroImage hero={heroImage} />
    </div>
  );
}

export default Hero;
