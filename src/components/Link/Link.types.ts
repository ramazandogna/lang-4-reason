import type { AnchorHTMLAttributes, ReactNode } from 'react';

export type LinkVariant = 'after' | 'menu' | 'underline' | 'default';

export interface LinkProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  /**
   * Gidilecek adres
   */
  href: string;
  /**
   * Hangi stil variantsını kullanacağı
   */
  variant?: LinkVariant;
  /**
   * Yeni pencerede açsın mı?
   */
  newTab?: boolean;
  /**
   * Link içeriği
   */
  children: ReactNode;
  /**
   * Ekstra sınıflar
   */
  className?: string;
}
