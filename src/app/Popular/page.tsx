// Page component for /popular
// Next.js & React core
import Image from 'next/image';

// Utils
import { getBlurDataURL } from '@/utils/plaiceholder';
import { getImageSrc } from '@/utils/imageUtilis';

export default async function PopularPage() {
  const externalImageSrc =
    'https://images.pexels.com/photos/1213447/pexels-photo-1213447.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1';

  const blurDataURL = await getBlurDataURL(externalImageSrc);

  return (
    <div className="container mx-auto">
      <h1 className="mb-4 text-2xl font-bold">Popüler</h1>
      <Image
        src={getImageSrc(externalImageSrc)}
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
