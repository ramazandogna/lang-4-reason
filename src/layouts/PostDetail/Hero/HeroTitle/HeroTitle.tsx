import { Badge } from '@/components/ui/Badge';
import { HeroTitleProps } from '../../../../types/Mock/Hero.types';

function HeroTitle({ hero }: { hero: HeroTitleProps }) {
  const date = new Date(hero.date);

  const formatter = new Intl.DateTimeFormat('tr-TR', {
    day: 'numeric',
    month: 'short',
    year: 'numeric'
  });

  const parts = formatter.formatToParts(date);
  const day = parts.find((p) => p.type === 'day')?.value || '01';
  const month = parts.find((p) => p.type === 'month')?.value || 'Ocak';
  const year = parts.find((p) => p.type === 'year')?.value || '1970';

  const finalDate = `${month.charAt(0).toUpperCase() + month.slice(1)} ${day}, ${year}`;

  return (
    <div className="post-container mx-auto flex w-full flex-col gap-6 text-center">
      <div className="text-center font-bold text-[var(--accent)]">
        {finalDate}
      </div>
      <h2 className="">{hero.title}</h2>
      <div className="flex justify-center gap-2">
        {hero.subcategories && (
          <Badge shape="pill" variant="outline" color="danger">
            {hero.category}
          </Badge>
        )}
      </div>
    </div>
  );
}

export default HeroTitle;
