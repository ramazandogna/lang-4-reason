import { ContentHeroProps } from '../Content/Content.types';
import HeroTitle from './HeroTitle/HeroTitle';
import HeroImage from './HeroImage/HeroImage';
import { HeroImageProps, HeroTitleProps } from './Hero.types';
import { Section } from '@/components/ui/Section';

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
    <Section className="flex flex-col gap-16 pt-24 pb-16 max-md:gap-10 max-md:pt-16 max-md:pb-10">
      <HeroTitle hero={heroTitle} />
      <HeroImage hero={heroImage} />
    </Section>
  );
}

export default Hero;
