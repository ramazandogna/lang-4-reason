// UI Components
import { Navbar } from '@/components/Navbar';
import { Input } from '@/components/Input';

// Icons
import { Search } from 'lucide-react';

type Props = {
  activeKey: string;
  setActiveKey: (key: string) => void;
  navItems: {
    key: string;
    label: string;
    count: number;
  }[];
};

export default function PostsHeader({
  activeKey,
  setActiveKey,
  navItems
}: Props) {
  return (
    <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
      <div className="scrollbar-hide flex w-full justify-start overflow-x-auto overflow-y-hidden">
        <div className="inline-flex min-w-max">
          <Navbar
            items={navItems}
            activeKey={activeKey}
            onChange={setActiveKey}
            className="flex-nowrap"
          />
        </div>
      </div>
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
