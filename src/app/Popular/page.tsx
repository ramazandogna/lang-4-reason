import { getBlurDataURL } from '@/lib/plaiceholder';
import Image from 'next/image';

export default async function PopularPage() {
  const externalImageSrc =
    'https://images.pexels.com/photos/1213447/pexels-photo-1213447.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1';
  const blurDataURL = await getBlurDataURL(externalImageSrc);
  return (
    <div>
      <h1>Popüler</h1>
      <Image
        src={externalImageSrc}
        alt="Dışarıdan gelen resim"
        width={800}
        height={600}
        placeholder="blur"
        blurDataURL={blurDataURL}
        sizes="(max-width: 600px) 100vw, 800px"
        className="rounded-lg object-cover"
      />
    </div>
  );
}
