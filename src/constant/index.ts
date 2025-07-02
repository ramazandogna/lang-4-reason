// Reading speed constants
export const READING_SPEED = {
  WORDS_PER_MINUTE: 200
} as const;

// API constants
export const API = {
  DEBOUNCE_DELAY: 300, // ms
  DEFAULT_POSTS_PER_PAGE: 5,
  MAX_POSTS_PER_PAGE: 10
} as const;

// Site-wide constants
export const SITE = {
  NAME: 'Amacına İngilizce',
  URL: 'https://amacinaingilize.com',
  LOCALE: 'tr_TR',
  DESCRIPTION: 'Amacına uygun İngilizce öğrenmek için Amacına İngilizce.',
  KEYWORDS:
    'ingilizce, için ingilizce, yazılımcılar için ingilizce, göç için ingilizce, taşınmak için ingilizce, üniversite okumak için ingilizce',
  AUTHOR: 'Ramazan Doğan'
  //TWITTER_HANDLE: '@pekafilli'
} as const;

// SEO meta defaults
export const SEO = {
  DEFAULT_TITLE: 'Amacına İngilizce - Ana Sayfa',
  DEFAULT_DESCRIPTION:
    'Amacına uygun İngilizce öğrenmek için Amacına İngilizce.',
  DEFAULT_IMAGE: 'https://amacinaingilizce.com/logo',
  DEFAULT_IMAGE_WIDTH: 1200,
  DEFAULT_IMAGE_HEIGHT: 630
  // TWITTER_CARD_TYPE: 'summary_large_image',
  // FACEBOOK_APP_ID: 'your-facebook-app-id'
} as const;

// Category slugs
export const CATEGORIES = {
  ACTIVITIES: 'activities',
  PHOTOGRAPHY: 'photography',
  TRAVEL_TIPS: 'travel-tips',
  INSPIRATION: 'inspiration',
  DESTINATIONS: 'destinations'
} as const;

// Social media links
export const SOCIAL_LINKS = {
  INSTAGRAM: '/',
  TWITTER: '/',
  YOUTUBE: '/',
  LINKEDIN: '/'
} as const;
