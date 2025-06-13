import { getPlaiceholder } from 'plaiceholder';

export async function getBlurDataURL(src: string) {
  const bufferSrc = Buffer.from(src); // Convert string to Buffer
  const { base64 } = await getPlaiceholder(bufferSrc);
  return base64;
}
