'use client';

import React, { useState } from 'react';
import { PostsCards } from './PostsCards';
import { PostsHeader } from './PostsHeader';
import PostsPagination from './PostsPagination/PostsPagination';
import { generateNavItems } from '@/components/ui/Navbar';
import { mockPosts } from '@/mocks/mockPosts';

function Posts() {
  const [activeKey, setActiveKey] = useState('all');
  const [currentPage, setCurrentPage] = useState(1);
  const pageSize = 6;

  // ✅ 1. Filtrelenmiş veriyi al
  const filteredPosts =
    activeKey === 'all'
      ? mockPosts
      : mockPosts.filter((post) => post.category === activeKey);

  const totalResults = filteredPosts.length;
  const totalPages = Math.ceil(totalResults / pageSize);

  // ✅ 2. Sayfaya göre postları böl
  const paginatedPosts = filteredPosts.slice(
    (currentPage - 1) * pageSize,
    currentPage * pageSize
  );

  // ✅ 3. Navbar itemleri
  const navItems = generateNavItems(activeKey);

  function scrollToPostsTop() {
    const el = document.getElementById('posts-section');
    if (!el) return;

    const yOffset = -80; // 🔥 Yukarıdan 80px boşluk bırak
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
          setCurrentPage(1); // kategori değişince sayfa 1’e dön
        }}
        navItems={navItems}
      />
      <PostsCards posts={paginatedPosts} />
      <PostsPagination
        currentPage={currentPage}
        totalPages={totalPages}
        pageSize={pageSize}
        totalResults={totalResults}
        onPageChange={(page) => {
          setCurrentPage(page);
          scrollToPostsTop(); // ✅ scroll eklendi
        }}
      />
    </span>
  );
}

export default Posts;
