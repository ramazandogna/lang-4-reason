'use client';

import { useState } from 'react';
import { PostsCards } from './PostsCards';
import { PostsHeader } from './PostsHeader';
import PostsPagination from './PostsPagination/PostsPagination';
import { generateNavItems } from '@/components/ui/Navbar';
import type { PostResponse } from '@/types/posts';

function Posts({ posts }: { posts: PostResponse }) {
  const [activeKey, setActiveKey] = useState('all');
  const [currentPage, setCurrentPage] = useState(1);
  const pageSize = 6;

  // 1. Filtrelenmiş veriyi al
  const filteredPosts =
    activeKey === 'all'
      ? posts.nodes
      : posts.nodes.filter((post) =>
          post.categories?.nodes?.some((cat) => cat.name === activeKey)
        );

  const totalResults = filteredPosts.length;
  const totalPages = Math.ceil(totalResults / pageSize);

  // 2. Sayfaya göre postları böl
  const paginatedPosts = filteredPosts.slice(
    (currentPage - 1) * pageSize,
    currentPage * pageSize
  );

  // 3. Navbar itemleri
  const navItems = generateNavItems(posts.nodes, activeKey);

  function scrollToPostsTop() {
    const el = document.getElementById('posts-section');
    if (!el) return;
    const yOffset = -80;
    const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset;
    window.scrollTo({ top: y, behavior: 'smooth' });
  }

  return (
    <span
      id="posts-section"
      className="flex flex-col gap-[64px] pt-4 max-md:gap-[40px]"
    >
      <PostsHeader
        activeKey={activeKey}
        setActiveKey={(key) => {
          setActiveKey(key);
          setCurrentPage(1);
        }}
        navItems={navItems}
      />
      <PostsCards posts={{ nodes: paginatedPosts, pageInfo: posts.pageInfo }} />
      <PostsPagination
        currentPage={currentPage}
        totalPages={totalPages}
        pageSize={pageSize}
        totalResults={totalResults}
        onPageChange={(page) => {
          setCurrentPage(page);
          scrollToPostsTop();
        }}
      />
    </span>
  );
}

export default Posts;
