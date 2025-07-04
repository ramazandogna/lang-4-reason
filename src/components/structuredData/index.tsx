// SEO Utils
import { generateStructuredData } from '@/utils/seo';

// Types
interface StructuredDataProps {
  title?: string;
  description?: string;
  image?: string;
  url?: string;
  type?: string;
  publishedTime?: string;
  modifiedTime?: string;
  author?: string;
}

export default function StructuredData(props: StructuredDataProps) {
  const structuredData = generateStructuredData(props);

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(structuredData)
      }}
    />
  );
}
