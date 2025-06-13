// src/components/PostsHeader.tsx
'use client';
import React, { useState } from 'react';
import { Navbar } from '@/components/ui/Navbar';
import { NAV_ITEMS } from '@/components/ui/Navbar';
import { Input } from '@/components/ui/Input';
import { Search } from 'lucide-react';

export default function PostsHeader() {
  const [activeKey, setActiveKey] = useState('all');

  return (
    <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
      {/* ---------- TAB BAR ---------- */}
      <div className="flex w-full justify-start overflow-x-auto overflow-y-visible">
        <div className="inline-flex min-w-max">
          <Navbar
            items={NAV_ITEMS}
            activeKey={activeKey}
            onChange={setActiveKey}
            className="flex-nowrap"
          />
        </div>
      </div>
      {/* --------- SEARCH INPUT --------- */}
      <div className="flex w-full! justify-center md:max-w-[320px] md:justify-end">
        <Input
          placeholder="Search blog..."
          rightIcon={<Search />}
          className="w-full"
        />
      </div>
    </div>
  );
}
