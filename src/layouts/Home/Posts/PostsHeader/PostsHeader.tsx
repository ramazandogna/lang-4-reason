// src/components/PostsHeader.tsx
'use client';
import React, { useState } from 'react';
import { Navbar } from '@/components/Navbar';
import { NAV_ITEMS } from '@/components/Navbar';
import { Input } from '@/components/ui/Input';
import { Search } from 'lucide-react';

export default function PostsHeader() {
  const [activeKey, setActiveKey] = useState('all');

  return (
    <div className="flex flex-wrap items-center justify-between gap-6 max-md:flex-col">
      {/* ---------- T A B   B A R ---------- */}
      <div className="w-full overflow-x-auto overflow-y-hidden">
        {/* min-w-max ile navbar’ın kendi genişliğini korur, flex-nowrap ile satır kaydırmaz */}
        <div className="inline-block min-w-max">
          <Navbar
            items={NAV_ITEMS}
            activeKey={activeKey}
            onChange={setActiveKey}
            className="flex-nowrap"
          />
        </div>
      </div>

      {/* --------- A R A M A   I N P U T --------- */}
      <div className="w-full md:w-auto">
        <Input
          placeholder="Search blog..."
          rightIcon={<Search />}
          className="w-full max-w-[320px]"
        />
      </div>
    </div>
  );
}
