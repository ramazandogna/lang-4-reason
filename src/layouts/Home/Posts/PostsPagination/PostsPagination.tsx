'use client';
import { Pagination } from '@/components/ui/Pagination';
import React, { useState } from 'react';

function PostsPagination() {
  const [page, setPage] = useState(5);
  return (
    <Pagination
      currentPage={page}
      totalPages={10}
      pageSize={12}
      totalResults={120}
      onPageChange={setPage}
      className="p-4"
    />
  );
}

export default PostsPagination;
