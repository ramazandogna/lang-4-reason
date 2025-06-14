import { mockPosts } from '@/mocks/mockPosts';

export function generateNavItems(activeKey: string) {
  const allCount = mockPosts.length;
  const uiuxCount = mockPosts.filter(
    (p) => p.category === 'UI/UX Design'
  ).length;
  const photoCount = mockPosts.filter(
    (p) => p.category === 'Photography'
  ).length;
  const techCount = mockPosts.filter(
    (p) => p.category === 'Creative Tech'
  ).length;

  return [
    {
      key: 'all',
      label: 'All',
      count: allCount,
      isActive: activeKey === 'all'
    },
    {
      key: 'UI/UX Design',
      label: 'UI/UX Design',
      count: uiuxCount,
      isActive: activeKey === 'UI/UX Design'
    },
    {
      key: 'Photography',
      label: 'Photography',
      count: photoCount,
      isActive: activeKey === 'Photography'
    },
    {
      key: 'Creative Tech',
      label: 'Creative Tech',
      count: techCount,
      isActive: activeKey === 'Creative Tech'
    }
  ];
}
