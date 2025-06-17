import { HeroTitleProps } from '../Hero.types';

function HeroTitle({ hero }: { hero: HeroTitleProps }) {
  console.log(hero);
  return <div>HeroTitle</div>;
}

export default HeroTitle;
