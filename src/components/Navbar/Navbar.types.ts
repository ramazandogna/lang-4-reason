export type NavbarItem = {
  key: string;
  label: string;
  count?: number;
};

export interface NavbarProps {
  items: NavbarItem[];
  activeKey: string;
  onChange?: (key: string) => void;
  className?: string;
}
