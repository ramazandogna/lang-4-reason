import { getPlaiceholder } from 'plaiceholder';
import { Buffer } from 'buffer';

export async function getBlurDataURL(src: string) {
  let input: Buffer;

  if (src.startsWith('http')) {
    // remote URL ise fetch edip Buffer yap
    const res = await fetch(src);
    if (!res.ok) throw new Error(`Resim yüklenemedi: ${res.status}`);
    const arrayBuffer = await res.arrayBuffer();
    input = Buffer.from(arrayBuffer);
  } else {
    // yerel path ise doğrudan Buffer yap
    input = Buffer.from(src);
  }

  // getPlaiceholder hem Buffer hem de string path alabiliyor
  const { base64 } = await getPlaiceholder(input);
  return base64;
}
