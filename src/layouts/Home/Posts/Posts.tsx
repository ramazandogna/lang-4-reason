'use client';

import React, { useState } from 'react';
import { PostsCards } from '../PostDetail/PostsCards';
import { PostsHeader } from '../PostDetail/PostsHeader';
import PostsPagination from '../PostDetail/PostsPagination/PostsPagination';
import { generateNavItems } from '@/components/ui/Navbar/Navbar.constants';
import type { PostResponse } from '@/types/posts';

export default function Posts({
  initialPosts
}: {
  initialPosts: PostResponse;
}) {
  const [activeKey, setActiveKey] = useState('all');
  const [currentPage, setCurrentPage] = useState(1);
  const pageSize = 6;

  console.log('Tüm post sayısı (SSR):', initialPosts.nodes.length);
  // Tüm postlar üzerinden kategoriye göre filtrele
  const filteredPosts =
    activeKey === 'all'
      ? initialPosts.nodes
      : initialPosts.nodes.filter((post) =>
          post.categories?.nodes?.some((cat) => cat.name === activeKey)
        );
  console.log(
    'Filtrelenmiş post sayısı:',
    filteredPosts.length,
    'Kategori:',
    activeKey
  );

  const totalResults = filteredPosts.length;
  const totalPages = Math.ceil(totalResults / pageSize);

  // Sayfaya göre postları böl
  const paginatedPosts = filteredPosts.slice(
    (currentPage - 1) * pageSize,
    currentPage * pageSize
  );

  // Navbar itemleri
  const navItems = generateNavItems(initialPosts.nodes, activeKey);

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
      <PostsCards
        posts={{ nodes: paginatedPosts, pageInfo: initialPosts.pageInfo }}
      />
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
