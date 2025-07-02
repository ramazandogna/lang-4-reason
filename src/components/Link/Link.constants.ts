import type { LinkVariant } from './Link.types';

/**
 * Her bir variant için gereken temel sınıflar.
 * Burada 'relative inline-block' zaten pseudo-element için gerekli.
 */
export const LINK_VARIANTS: Record<LinkVariant, string> = {
  after: 'relative inline-block afterlink',
  menu: 'relative inline-block menulink',
  underline: 'inline-block underlinelink',
  default: 'inline-block defaultlink'
};
