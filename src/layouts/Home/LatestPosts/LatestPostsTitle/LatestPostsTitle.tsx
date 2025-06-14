import { Badge } from '@/components/ui/Badge';
import { Button } from '@/components/ui/Button';
import { ArrowRight } from 'lucide-react';
import React from 'react';

function LatestPostsTitle() {
  return (
    <div>
      <span className="flex items-center max-md:flex-col max-md:items-center md:justify-between">
        <span className="flex max-w-[696px] flex-col gap-[20px]">
          <span>
            <Badge color="theme" shape="pill" variant="soft" size="sm">
              Blog Yazıları
            </Badge>
          </span>
          <h3 className="m-0 font-bold">Son Paylaşımlar</h3>
          <p className="text-md">
            Donec ac odio tempor orci dapibus ultrices. Ut lectus arcu bibendum
            at varius vel pharetra vel. Enim sed faucibus turpis in eu mi
            bibendum.
          </p>
        </span>
        <Button
          variant="primary"
          color="theme"
          size="lg"
          align="center"
          className="group ml-auto flex min-w-auto justify-center py-4! text-center font-bold whitespace-nowrap max-md:mt-4 max-md:w-full"
          rightIcon={
            <ArrowRight
              size={16}
              className="transition-transform group-hover:translate-x-1"
            />
          }
        >
          Tüm Paylaşımları Gör
        </Button>
      </span>
    </div>
  );
}

export default LatestPostsTitle;
