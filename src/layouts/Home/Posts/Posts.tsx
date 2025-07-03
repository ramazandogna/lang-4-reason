'use client';

import React, { useState } from 'react';
import { PostsCards } from '../PostNavbar/PostsCards';
import { PostsHeader } from '../PostNavbar/PostsHeader';
import PostsPagination from '../PostNavbar/PostsPagination/PostsPagination';
import { generateNavItems } from '@/components/Navbar/Navbar.constants';
import type { PostResponse } from '@/types/posts';

export default function Posts({ posts }: { posts: PostResponse }) {
  const [activeKey, setActiveKey] = useState('all');
  const [currentPage, setCurrentPage] = useState(1);
  const pageSize = 6;

  // Tüm postlar üzerinden kategoriye göre filtrele
  const filteredPosts =
    activeKey === 'all'
      ? posts.nodes
      : posts.nodes.filter((post) =>
          post.categories?.nodes?.some((cat) => cat.name === activeKey)
        );

  const totalResults = filteredPosts.length;
  const totalPages = Math.ceil(totalResults / pageSize);

  // Sayfaya göre postları böl
  const paginatedPosts = filteredPosts.slice(
    (currentPage - 1) * pageSize,
    currentPage * pageSize
  );

  // Navbar itemleri
  const navItems = generateNavItems(posts.nodes, activeKey);

  function scrollToPostsTop() {
    // Client-side kontrolü ekle
    if (typeof window === 'undefined') return;

    const el = document.getElementById('posts-section');
    if (!el) return;

    const yOffset = -80;
    const rect = el.getBoundingClientRect();
    const y = rect.top + window.scrollY + yOffset;

    window.scrollTo({ top: y, behavior: 'smooth' });
  }

  function handlePageChange(page: number) {
    setCurrentPage(page);
    // Her durumda scroll yap (sayfa değişse de değişmese de)
    setTimeout(() => {
      scrollToPostsTop();
    }, 50); // Küçük bir delay ile state update'i bekle
  }

  return (
    <span
      id="posts-section"
      className="flex flex-col gap-[40px] pt-4 max-md:gap-[32px]"
    >
      <PostsHeader
        activeKey={activeKey}
        setActiveKey={(key) => {
          setActiveKey(key);
          setCurrentPage(1);
          setTimeout(() => {
            scrollToPostsTop();
          }, 50);
        }}
        navItems={navItems}
      />
      <PostsCards posts={{ nodes: paginatedPosts, pageInfo: posts.pageInfo }} />
      <PostsPagination
        currentPage={currentPage}
        totalPages={totalPages}
        pageSize={pageSize}
        totalResults={totalResults}
        onPageChange={handlePageChange}
      />
    </span>
  );
}
