import { Listing, Package, BlogPost, User, Booking } from '@/types';

// Mock data for development - will be replaced by Laravel API
export const mockListings: Listing[] = [
  {
    id: '1',
    slug: 'ocean-view-villa-taghazout',
    title: {
      en: 'Ocean View Villa Taghazout',
      fr: 'Villa Vue Océan Taghazout',
      ar: 'فيلا إطلالة على المحيط تغازوت'
    },
    description: {
      en: 'Stunning beachfront villa with panoramic ocean views, perfect for surf enthusiasts and beach lovers. Features modern amenities and traditional Moroccan architecture.',
      fr: 'Villa magnifique en bord de mer avec vue panoramique sur l\'océan, parfaite pour les amateurs de surf et les amoureux de la plage. Dispose d\'équipements modernes et d\'architecture marocaine traditionnelle.',
      ar: 'فيلا مذهلة على شاطئ البحر مع إطلالة بانورامية على المحيط، مثالية لعشاق ركوب الأمواج ومحبي الشاطئ. تتميز بوسائل الراحة الحديثة والهندسة المعمارية المغربية التقليدية.'
    },
    shortDescription: {
      en: 'Beachfront villa with ocean views and modern amenities',
      fr: 'Villa en bord de mer avec vue océan et équipements modernes',
      ar: 'فيلا على شاطئ البحر مع إطلالة على المحيط ووسائل الراحة الحديثة'
    },
    category: 'accommodation',
    location: 'Taghazout, Morocco',
    price: 120,
    currency: 'USD',
    priceUnit: 'per night',
    rating: 4.8,
    reviewCount: 124,
    images: [
      'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg',
      'https://images.pexels.com/photos/1571463/pexels-photo-1571463.jpeg',
      'https://images.pexels.com/photos/1571468/pexels-photo-1571468.jpeg'
    ],
    amenities: ['Ocean View', 'Free WiFi', 'Kitchen', 'Parking', 'Beach Access'],
    capacity: 6,
    featured: true,
    status: 'active',
    clientId: 'client-1',
    createdAt: '2024-01-01T00:00:00Z',
    updatedAt: '2024-01-15T00:00:00Z'
  },
  {
    id: '2',
    slug: 'surf-lessons-taghazout-bay',
    title: {
      en: 'Professional Surf Lessons - Taghazout Bay',
      fr: 'Cours de Surf Professionnels - Baie de Taghazout',
      ar: 'دروس ركوب الأمواج المهنية - خليج تغازوت'
    },
    description: {
      en: 'Learn to surf with certified instructors at Morocco\'s premier surf destination. All equipment included, suitable for beginners to advanced surfers.',
      fr: 'Apprenez à surfer avec des instructeurs certifiés dans la destination de surf première du Maroc. Tout l\'équipement inclus, adapté aux débutants aux surfeurs avancés.',
      ar: 'تعلم ركوب الأمواج مع مدربين معتمدين في وجهة ركوب الأمواج الأولى في المغرب. جميع المعدات مشمولة، مناسبة للمبتدئين إلى راكبي الأمواج المتقدمين.'
    },
    shortDescription: {
      en: 'Professional surf lessons with certified instructors',
      fr: 'Cours de surf professionnels avec instructeurs certifiés',
      ar: 'دروس ركوب الأمواج المهنية مع مدربين معتمدين'
    },
    category: 'surf-lesson',
    location: 'Taghazout Bay, Morocco',
    price: 45,
    currency: 'USD',
    priceUnit: 'per lesson',
    rating: 4.9,
    reviewCount: 89,
    images: [
      'https://images.pexels.com/photos/390051/surfer-wave-sunset-the-indian-ocean-390051.jpeg',
      'https://images.pexels.com/photos/416978/pexels-photo-416978.jpeg',
      'https://images.pexels.com/photos/1654489/pexels-photo-1654489.jpeg'
    ],
    amenities: ['Equipment Included', 'All Levels', 'Certified Instructors', 'Small Groups'],
    duration: '2 hours',
    featured: true,
    status: 'active',
    clientId: 'client-2',
    createdAt: '2024-01-02T00:00:00Z',
    updatedAt: '2024-01-16T00:00:00Z'
  },
  {
    id: '3',
    slug: 'luxury-riad-marrakech-medina',
    title: {
      en: 'Luxury Riad in Marrakech Medina',
      fr: 'Riad de Luxe dans la Médina de Marrakech',
      ar: 'رياض فاخر في مدينة مراكش'
    },
    description: {
      en: 'Experience authentic Moroccan hospitality in this beautifully restored riad. Located in the heart of Marrakech medina with rooftop terrace and traditional hammam.',
      fr: 'Découvrez l\'hospitalité marocaine authentique dans ce riad magnifiquement restauré. Situé au cœur de la médina de Marrakech avec terrasse sur le toit et hammam traditionnel.',
      ar: 'اختبر الضيافة المغربية الأصيلة في هذا الرياض المرمم بشكل جميل. يقع في قلب مدينة مراكش مع تراس على السطح وحمام تقليدي.'
    },
    shortDescription: {
      en: 'Authentic luxury riad with rooftop terrace and hammam',
      fr: 'Riad de luxe authentique avec terrasse et hammam',
      ar: 'رياض فاخر أصيل مع تراس على السطح وحمام'
    },
    category: 'accommodation',
    location: 'Marrakech Medina, Morocco',
    price: 180,
    currency: 'USD',
    priceUnit: 'per night',
    rating: 4.7,
    reviewCount: 156,
    images: [
      'https://images.pexels.com/photos/1134176/pexels-photo-1134176.jpeg',
      'https://images.pexels.com/photos/1134166/pexels-photo-1134166.jpeg',
      'https://images.pexels.com/photos/1134188/pexels-photo-1134188.jpeg'
    ],
    amenities: ['Rooftop Terrace', 'Traditional Hammam', 'Free WiFi', 'Breakfast Included', 'Concierge Service'],
    capacity: 4,
    featured: false,
    status: 'active',
    clientId: 'client-3',
    createdAt: '2024-01-03T00:00:00Z',
    updatedAt: '2024-01-17T00:00:00Z'
  }
];

export const mockPackages: Package[] = [
  {
    id: '1',
    slug: 'marrakech-cultural-discovery',
    title: {
      en: '5-Day Marrakech Cultural Discovery',
      fr: 'Découverte Culturelle de Marrakech 5 Jours',
      ar: 'اكتشاف ثقافي لمراكش لمدة 5 أيام'
    },
    description: {
      en: 'Immerse yourself in the rich culture and history of Marrakech with guided medina walks, traditional hammam, and authentic cooking classes.',
      fr: 'Plongez-vous dans la riche culture et l\'histoire de Marrakech avec des promenades guidées dans la médina, un hammam traditionnel et des cours de cuisine authentiques.',
      ar: 'انغمس في الثقافة والتاريخ الغني لمراكش مع جولات مرشدة في المدينة والحمام التقليدي ودروس الطبخ الأصيلة.'
    },
    shortDescription: {
      en: 'Cultural immersion in the heart of Marrakech',
      fr: 'Immersion culturelle au cœur de Marrakech',
      ar: 'انغماس ثقافي في قلب مراكش'
    },
    duration: '5 Days / 4 Nights',
    groupSize: '2-8 People',
    price: 599,
    currency: 'USD',
    rating: 4.9,
    reviewCount: 127,
    images: [
      'https://images.pexels.com/photos/3889855/pexels-photo-3889855.jpeg',
      'https://images.pexels.com/photos/2373201/pexels-photo-2373201.jpeg',
      'https://images.pexels.com/photos/3889856/pexels-photo-3889856.jpeg'
    ],
    highlights: {
      en: [
        'Guided medina and souks exploration',
        'Traditional Moroccan cooking class',
        'Relaxing hammam spa experience',
        'Visit to Bahia Palace and Saadian Tombs',
        'Sunset at Jemaa el-Fnaa square'
      ],
      fr: [
        'Exploration guidée de la médina et des souks',
        'Cours de cuisine marocaine traditionnelle',
        'Expérience spa hammam relaxante',
        'Visite du Palais Bahia et des Tombeaux Saadiens',
        'Coucher de soleil sur la place Jemaa el-Fnaa'
      ],
      ar: [
        'استكشاف مرشد للمدينة والأسواق',
        'درس طبخ مغربي تقليدي',
        'تجربة سبا حمام مريحة',
        'زيارة قصر الباهية وقبور السعديين',
        'غروب الشمس في ساحة جامع الفنا'
      ]
    },
    includes: {
      en: [
        'Accommodation in traditional riad',
        'All meals and cooking class',
        'Professional local guide',
        'Transportation within Marrakech',
        'Hammam spa session'
      ],
      fr: [
        'Hébergement dans un riad traditionnel',
        'Tous les repas et cours de cuisine',
        'Guide local professionnel',
        'Transport dans Marrakech',
        'Séance de spa hammam'
      ],
      ar: [
        'إقامة في رياض تقليدي',
        'جميع الوجبات ودرس الطبخ',
        'دليل محلي محترف',
        'النقل داخل مراكش',
        'جلسة سبا حمام'
      ]
    },
    category: 'Cultural',
    featured: true,
    clientId: 'client-1',
    createdAt: '2024-01-01T00:00:00Z',
    updatedAt: '2024-01-15T00:00:00Z'
  }
];

export const mockBlogPosts: BlogPost[] = [
  {
    id: '1',
    slug: 'ultimate-guide-taghazout-surfing',
    title: {
      en: 'The Ultimate Guide to Surfing in Taghazout',
      fr: 'Le Guide Ultime du Surf à Taghazout',
      ar: 'الدليل النهائي لركوب الأمواج في تغازوت'
    },
    excerpt: {
      en: 'Discover the best surf spots, local tips, and everything you need to know about surfing in Morocco\'s premier surf destination.',
      fr: 'Découvrez les meilleurs spots de surf, les conseils locaux et tout ce que vous devez savoir sur le surf dans la destination de surf première du Maroc.',
      ar: 'اكتشف أفضل أماكن ركوب الأمواج والنصائح المحلية وكل ما تحتاج لمعرفته حول ركوب الأمواج في وجهة ركوب الأمواج الأولى في المغرب.'
    },
    content: {
      en: '<p>Taghazout has become synonymous with world-class surfing...</p>',
      fr: '<p>Taghazout est devenu synonyme de surf de classe mondiale...</p>',
      ar: '<p>أصبحت تغازوت مرادفة لركوب الأمواج على مستوى عالمي...</p>'
    },
    category: 'travel',
    tags: ['surfing', 'taghazout', 'morocco', 'travel-guide'],
    author: {
      name: 'Ahmed Benali',
      avatar: 'https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg',
      bio: {
        en: 'Local surf instructor and travel writer with 10+ years of experience in Taghazout.',
        fr: 'Instructeur de surf local et écrivain de voyage avec plus de 10 ans d\'expérience à Taghazout.',
        ar: 'مدرب ركوب أمواج محلي وكاتب سفر مع أكثر من 10 سنوات من الخبرة في تغازوت.'
      }
    },
    featuredImage: 'https://images.pexels.com/photos/390051/surfer-wave-sunset-the-indian-ocean-390051.jpeg',
    published: true,
    featured: true,
    readTime: 8,
    createdAt: '2024-01-10T00:00:00Z',
    updatedAt: '2024-01-15T00:00:00Z'
  }
];

export const mockUsers: User[] = [
  {
    id: '1',
    email: 'admin@taghazouttimes.com',
    name: 'Admin User',
    role: 'admin',
    avatar: 'https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg',
    createdAt: '2024-01-01T00:00:00Z',
    updatedAt: '2024-01-15T00:00:00Z'
  }
];

export const mockBookings: Booking[] = [
  {
    id: '1',
    userId: '1',
    listingId: '1',
    checkIn: '2024-02-15',
    checkOut: '2024-02-20',
    guests: 4,
    totalPrice: 600,
    currency: 'USD',
    status: 'confirmed',
    customerInfo: {
      name: 'Sarah Johnson',
      email: 'sarah@example.com',
      phone: '+1234567890'
    },
    createdAt: '2024-01-20T00:00:00Z',
    updatedAt: '2024-01-20T00:00:00Z'
  }
];