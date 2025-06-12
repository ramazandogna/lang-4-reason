'use client';
import { Navbar } from '@/components/Navbar';
import { NAV_ITEMS } from '@/components/Navbar/Navbar.contants';
import React, { useState } from 'react';

function PostsHeader() {
  const [activeKey, setActiveKey] = useState('all');

  return (
    <div>
      <Navbar items={NAV_ITEMS} activeKey={activeKey} onChange={setActiveKey} />
    </div>
  );
}

export default PostsHeader;
