import { Badge } from '@/components/ui/Badge';
import { PostType } from '@/types/post';
import Link from 'next/link';

function HeroTitle({ hero }: { hero: PostType }) {
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
      <div className="fade-up fade-up-delay-1 text-center font-bold text-[var(--accent)]">
        {finalDate}
      </div>
      <h2 className="fade-up fade-up-delay-2">{hero.title}</h2>
      <div className="group flex justify-center gap-2">
        {hero.categories &&
          hero.categories.nodes.map((category, idx) => (
            <Link
              href={`/category/${category.slug}`}
              key={category.slug}
              className={`fade-up fade-up-delay-${idx + 3} inline-block transition-all duration-300 group-hover:blur-sm hover:scale-[1.02] hover:!blur-none`}
            >
              <Badge
                shape="pill"
                variant="outline"
                color="danger"
                className="transition-all duration-300 hover:border-red-500 hover:bg-red-500 hover:text-white"
              >
                {category.name}
              </Badge>
            </Link>
          ))}
      </div>
    </div>
  );
}

export default HeroTitle;
