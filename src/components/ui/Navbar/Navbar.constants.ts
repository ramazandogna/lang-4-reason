import type { PostNode } from '@/types/posts';
import type { CategoryNode } from '@/types/posts';

export function generateNavItems(posts: PostNode[], activeKey: string) {
  const categories: { key: string; label: string }[] = [
    { key: 'Activities', label: 'Activities' },
    { key: 'Destinations', label: 'Destinations' },
    { key: 'Inspiration', label: 'Inspiration' },
    { key: 'Photography', label: 'Photo' }
  ];

  const navItems = [
    {
      key: 'all',
      label: 'Tüm',
      count: posts.length,
      isActive: activeKey === 'all'
    },
    ...categories.map((cat) => {
      // Her kategori için duplicate postları engelle
      const categoryPosts = posts.filter((p) =>
        p.categories?.nodes?.some((c: CategoryNode) => c.name === cat.label)
      );
      const uniquePosts = Array.from(new Set(categoryPosts.map((p) => p.slug)));
      return {
        key: cat.key,
        label: cat.label,
        count: uniquePosts.length,
        isActive: activeKey === cat.key
      };
    })
  ];

  return navItems;
}
