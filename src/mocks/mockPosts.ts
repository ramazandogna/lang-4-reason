// src/mocks/mockPosts.ts
import { postImages } from '@/images/post-images';
import { avatarImages } from '@/images/avatar-images';
import type { MockPostType } from '@/types/Mock.types.ts';

export const mockPosts: MockPostType[] = [
  {
    id: 'post-1',
    slug: 'designing-with-emotion',
    title: 'Designing with Emotion',
    desc: 'Learn how to make users feel connected to your design through emotional triggers.',
    category: 'UI/UX Design',
    subcategories: ['Emotional Design', 'User Psychology', 'Wireframing'],
    image: { ...postImages[0], alt: 'Emotional design mockup' },
    avatar: { ...avatarImages[0] },
    author: 'Azunyan U. Wu',
    readTime: '5min read',
    date: '2025-06-01'
  },
  {
    id: 'post-2',
    slug: 'the-power-of-minimal-web-design',
    title: 'The Power of Minimal Web Design',
    desc: 'Why less is more in the age of information overload.',
    category: 'UI/UX Design',
    subcategories: ['Minimalism', 'Information Architecture', 'Whitespace'],
    image: { ...postImages[1], alt: 'Minimalistic web layout' },
    avatar: { ...avatarImages[1] },
    author: 'Haruto M. Kawa',
    readTime: '4min read',
    date: '2025-06-03'
  },
  {
    id: 'post-3',
    slug: 'low-poly-art-in-modern-design',
    title: 'Low-Poly Art in Modern Design',
    desc: 'How low-poly visuals are influencing UI trends in 2025.',
    category: 'UI/UX Design',
    subcategories: ['Low-Poly', '3D Elements', 'Color Blocking'],
    image: { ...postImages[2], alt: 'Low-poly 3D shapes on UI' },
    avatar: { ...avatarImages[2] },
    author: 'Lina S. Takahashi',
    readTime: '6min read',
    date: '2025-06-05'
  },
  {
    id: 'post-4',
    slug: 'the-magic-of-nature-photography',
    title: 'The Magic of Nature Photography',
    desc: 'Discover tips and techniques for capturing breathtaking landscapes.',
    category: 'Photography',
    subcategories: ['Landscape', 'Exposure', 'Composition'],
    image: { ...postImages[3], alt: 'Mountain landscape photo' },
    avatar: { ...avatarImages[3] },
    author: 'Kenji T. Aoki',
    readTime: '3min read',
    date: '2025-06-06'
  },
  {
    id: 'post-5',
    slug: 'urban-silence',
    title: 'Urban Silence',
    desc: 'Capturing stillness and shadow in modern city architecture.',
    category: 'Photography',
    subcategories: ['Cityscape', 'Minimalism', 'Architecture'],
    image: { ...postImages[4], alt: 'City skyline at dusk' },
    avatar: { ...avatarImages[4] },
    author: 'Yuki N. Hayashi',
    readTime: '7min read',
    date: '2025-06-07'
  },
  {
    id: 'post-6',
    slug: 'exploring-the-night-sky',
    title: 'Exploring the Night Sky',
    desc: 'A guide to stargazing and astrophotography for beginners.',
    category: 'Photography',
    subcategories: ['Astrophotography', 'Long Exposure', 'Nightscape'],
    image: { ...postImages[5], alt: 'Starry night sky with trees' },
    avatar: { ...avatarImages[5] },
    author: 'Minato S. Rei',
    readTime: '5min read',
    date: '2025-06-08'
  },
  {
    id: 'post-7',
    slug: 'brushwork-revival',
    title: 'Brushwork Revival',
    desc: 'Traditional painting techniques reimagined in the digital era.',
    category: 'Creative Tech',
    subcategories: ['Digital Painting', 'Texture', 'Brush Dynamics'],
    image: { ...postImages[6], alt: 'Digital brush strokes' },
    avatar: { ...avatarImages[6] },
    author: 'Eri K. Nakamura',
    readTime: '4min read',
    date: '2025-06-10'
  },
  {
    id: 'post-8',
    slug: 'cinematic-light-in-design',
    title: 'Cinematic Light in Design',
    desc: 'How lighting principles from film influence modern UI.',
    category: 'Creative Tech',
    subcategories: ['Cinematic Lighting', 'Contrast', 'Mood Setting'],
    image: { ...postImages[7], alt: 'UI design with cinematic lighting' },
    avatar: { ...avatarImages[7] },
    author: 'Akira F. Saito',
    readTime: '6min read',
    date: '2025-06-11'
  },
  {
    id: 'post-9',
    slug: 'the-rise-of-anime-aesthetics',
    title: 'The Rise of Anime Aesthetics',
    desc: 'From Tokyo streets to global runways — anime’s influence.',
    category: 'Creative Tech',
    subcategories: ['Anime Style', 'Color Theory', 'Illustration'],
    image: { ...postImages[8], alt: 'Anime-inspired fashion design' },
    avatar: { ...avatarImages[8] },
    author: 'Mei Y. Kobayashi',
    readTime: '5min read',
    date: '2025-06-12'
  },
  {
    id: 'post-10',
    slug: 'visual-rhythm-in-ui',
    title: 'Visual Rhythm in UI',
    desc: 'How rhythm and repetition in layout improve user experience.',
    category: 'UI/UX Design',
    subcategories: ['Repetition', 'Grid Systems', 'Hierarchy'],
    image: {
      src: 'https://images.pexels.com/photos/325044/pexels-photo-325044.jpeg',
      alt: 'Symmetrical layout in UI design'
    },
    avatar: { ...avatarImages[0] },
    author: 'Sora T. Inoue',
    readTime: '3min read',
    date: '2025-06-13'
  },
  {
    id: 'post-11',
    slug: 'the-mood-of-light-in-photography',
    title: 'The Mood of Light in Photography',
    desc: 'Light can tell stories — master the art of dramatic lighting.',
    category: 'Photography',
    subcategories: ['Portrait', 'Studio Lighting', 'Color Mood'],
    image: {
      src: 'https://images.pexels.com/photos/1229042/pexels-photo-1229042.jpeg',
      alt: 'Dramatic light in portrait photography'
    },
    avatar: { ...avatarImages[1] },
    author: 'Rei M. Sakamoto',
    readTime: '4min read',
    date: '2025-06-14'
  },
  {
    id: 'post-12',
    slug: 'the-geometry-of-nature',
    title: 'The Geometry of Nature',
    desc: 'Why symmetry in landscapes feels so pleasing to the human eye.',
    category: 'Photography',
    subcategories: ['Symmetry', 'Patterns', 'Fractals'],
    image: {
      src: 'https://images.pexels.com/photos/1379640/pexels-photo-1379640.jpeg',
      alt: 'Symmetrical mountain reflection'
    },
    avatar: { ...avatarImages[2] },
    author: 'Hikaru T. Yamada',
    readTime: '6min read',
    date: '2025-06-15'
  },
  {
    id: 'post-13',
    slug: 'how-colors-shape-user-flow',
    title: 'How Colors Shape User Flow',
    desc: 'Smart color theory tricks to guide users naturally.',
    category: 'UI/UX Design',
    subcategories: ['Color Psychology', 'Flow Direction', 'Accessibility'],
    image: {
      src: 'https://images.pexels.com/photos/1485894/pexels-photo-1485894.jpeg',
      alt: 'Color gradient UI background'
    },
    avatar: { ...avatarImages[3] },
    author: 'Mio N. Fujiwara',
    readTime: '5min read',
    date: '2025-06-16'
  },
  {
    id: 'post-14',
    slug: 'creative-ai-tools-for-designers',
    title: 'Creative AI Tools for Designers',
    desc: 'A tour of the latest generative design tools powered by AI.',
    category: 'Creative Tech',
    subcategories: ['Generative AI', 'Tooling', 'Workflow'],
    image: {
      src: 'https://images.pexels.com/photos/1525041/pexels-photo-1525041.jpeg',
      alt: 'AI-generated abstract design'
    },
    avatar: { ...avatarImages[4] },
    author: 'Akari H. Mizuno',
    readTime: '7min read',
    date: '2025-06-17'
  },
  {
    id: 'post-15',
    slug: 'digital-illustration-with-real-texture',
    title: 'Digital Illustration with Real Texture',
    desc: 'Techniques to add depth and grain using modern drawing tablets.',
    category: 'Creative Tech',
    subcategories: ['Texture', 'Brushwork', 'Layering'],
    image: {
      src: 'https://images.pexels.com/photos/1270184/pexels-photo-1270184.jpeg',
      alt: 'Textured digital illustration on tablet'
    },
    avatar: { ...avatarImages[5] },
    author: 'Daichi F. Kobayashi',
    readTime: '6min read',
    date: '2025-06-18'
  }
];
