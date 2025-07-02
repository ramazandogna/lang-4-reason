import { getPlaiceholder } from 'plaiceholder';
import { Buffer } from 'buffer';

const SUPPORTED_IMAGE_FORMATS = ['.jpg', '.jpeg', '.png', '.webp', '.avif'];

function isSupportedImageFormat(src: string) {
  return SUPPORTED_IMAGE_FORMATS.some((ext) => src.toLowerCase().endsWith(ext));
}

export async function generateBlurDataURL(
  src: string
): Promise<string | undefined> {
  let base64: string | undefined;

  if (isSupportedImageFormat(src)) {
    try {
      const response = await fetch(src);
      if (!response.ok) throw new Error(`Failed to fetch image: ${src}`);
      const buffer = Buffer.from(await response.arrayBuffer());
      const result = await getPlaiceholder(buffer);
      base64 = result.base64;
    } catch (error) {
      console.warn('Could not generate blur placeholder:', error);
    }
  }

  return base64;
}
