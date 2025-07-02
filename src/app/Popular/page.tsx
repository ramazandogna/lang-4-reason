// Page component for /popular
// Next.js & React core
import Image from 'next/image';

// Utils
import { generateBlurDataURL } from '@/utils/plaiceholder';

export default async function PopularPage() {
  const externalImageSrc =
    'https://images.pexels.com/photos/1213447/pexels-photo-1213447.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1';

  const blurDataURL = await generateBlurDataURL(externalImageSrc);

  return (
    <div className="container mx-auto">
      <h1 className="mb-4 text-2xl font-bold">Popüler</h1>
      <Image
        src={externalImageSrc}
        alt="Dışarıdan gelen resim"
        width={800}
        height={600}
        placeholder={blurDataURL ? 'blur' : 'empty'}
        blurDataURL={blurDataURL || undefined}
        sizes="(max-width: 600px) 100vw, 800px"
        className="rounded-lg object-cover"
      />
    </div>
  );
}
