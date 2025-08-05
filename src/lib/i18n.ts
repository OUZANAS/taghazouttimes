import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

const resources = {
  en: {
    common: {
      // Navigation
      home: 'Home',
      about: 'About',
      services: 'Services',
      listings: 'Listings',
      packages: 'Packages',
      blog: 'Blog',
      contact: 'Contact',
      dashboard: 'Dashboard',
      signin: 'Sign In',
      signup: 'Sign Up',
      logout: 'Logout',
      
      // Common actions
      learnMore: 'Learn More',
      getStarted: 'Get Started',
      viewDemo: 'View Demo',
      startFreeTrial: 'Start Free Trial',
      contactSales: 'Contact Sales',
      readMore: 'Read More',
      bookNow: 'Book Now',
      viewDetails: 'View Details',
      search: 'Search',
      filter: 'Filter',
      sort: 'Sort',
      save: 'Save',
      cancel: 'Cancel',
      edit: 'Edit',
      delete: 'Delete',
      
      // Form fields
      name: 'Name',
      email: 'Email',
      phone: 'Phone',
      message: 'Message',
      subject: 'Subject',
      password: 'Password',
      confirmPassword: 'Confirm Password',
      
      // Status
      loading: 'Loading...',
      error: 'Error',
      success: 'Success',
      pending: 'Pending',
      confirmed: 'Confirmed',
      cancelled: 'Cancelled',
      completed: 'Completed',
      
      // Footer
      stayUpdated: 'Stay Updated',
      enterEmail: 'Enter your email',
      subscribe: 'Subscribe',
      allRightsReserved: 'All rights reserved',
      
      // Company info
      companyName: 'TaghazoutTimes',
      companyTagline: 'Your gateway to authentic Moroccan experiences and unforgettable adventures.',
      trustedBy: 'Trusted by 1000+ travelers worldwide'
    },
    home: {
      // Hero section
      heroTitle: 'Discover Authentic Morocco',
      heroTitleHighlight: 'Your Way',
      heroSubtitle: 'From surf lessons in Taghazout to luxury riads in Marrakech. Experience Morocco through the eyes of locals with our curated selection of accommodations, activities, and adventures.',
      
      // Features
      features: {
        title: 'Why Choose Us',
        subtitle: 'Everything You Need for the Perfect Trip',
        description: 'Carefully curated experiences that showcase the best of Moroccan culture and hospitality',
        authentic: {
          title: 'Authentic Experiences',
          description: 'Connect with local culture through genuine, locally-guided experiences.'
        },
        verified: {
          title: 'Verified Providers',
          description: 'All our partners are carefully vetted for quality and authenticity.'
        },
        support: {
          title: '24/7 Support',
          description: 'Get help in your language whenever you need it during your journey.'
        },
        multilingual: {
          title: 'Multilingual Service',
          description: 'Full support in English, French, and Arabic for seamless communication.'
        }
      },
      
      // Stats
      stats: {
        destinations: 'Destinations',
        happyTravelers: 'Happy Travelers',
        averageRating: 'Average Rating',
        successRate: 'Success Rate'
      },
      
      // How it works
      howItWorks: {
        title: 'How It Works',
        subtitle: 'Plan your perfect Moroccan adventure in three simple steps',
        step1: {
          title: 'Explore',
          description: 'Browse our curated selection of accommodations, activities, and experiences'
        },
        step2: {
          title: 'Book',
          description: 'Secure your spot with our easy booking system and flexible payment options'
        },
        step3: {
          title: 'Experience',
          description: 'Enjoy your authentic Moroccan adventure with full support from our team'
        }
      },
      
      // Testimonials
      testimonials: {
        title: 'What Our Travelers Say',
        subtitle: 'Real experiences from real travelers'
      },
      
      // CTA
      cta: {
        title: 'Ready for Your Moroccan Adventure?',
        subtitle: 'Join thousands of travelers who have discovered the magic of Morocco with us'
      }
    },
    listings: {
      title: 'Explore Our Listings',
      subtitle: 'Discover amazing places and experiences',
      searchPlaceholder: 'Search listings...',
      noResults: 'No listings found',
      clearFilters: 'Clear Filters',
      showingResults: 'Showing {{count}} of {{total}} listings',
      categories: {
        all: 'All Categories',
        accommodation: 'Accommodation',
        activity: 'Activities',
        'surf-lesson': 'Surf Lessons',
        tour: 'Tours',
        rental: 'Rentals'
      }
    },
    packages: {
      title: 'Travel Packages',
      subtitle: 'Curated experiences for unforgettable journeys',
      duration: 'Duration',
      groupSize: 'Group Size',
      includes: 'Package Includes',
      highlights: 'Experience Highlights',
      perPerson: 'per person',
      customPackage: 'Create Custom Package'
    },
    blog: {
      title: 'Travel Blog',
      subtitle: 'Stories, tips, and insights from Morocco',
      readTime: 'min read',
      author: 'Author',
      publishedOn: 'Published on',
      relatedPosts: 'Related Posts',
      categories: {
        all: 'All Categories',
        travel: 'Travel Tips',
        culture: 'Culture',
        food: 'Food & Cuisine',
        adventure: 'Adventure'
      }
    },
    dashboard: {
      title: 'Dashboard',
      welcome: 'Welcome back',
      overview: 'Overview',
      bookings: 'My Bookings',
      favorites: 'Favorites',
      profile: 'Profile',
      settings: 'Settings',
      totalBookings: 'Total Bookings',
      totalSpent: 'Total Spent',
      upcomingTrips: 'Upcoming Trips',
      recentActivity: 'Recent Activity'
    }
  },
  fr: {
    common: {
      // Navigation
      home: 'Accueil',
      about: 'À propos',
      services: 'Services',
      listings: 'Annonces',
      packages: 'Forfaits',
      blog: 'Blog',
      contact: 'Contact',
      dashboard: 'Tableau de bord',
      signin: 'Se connecter',
      signup: 'S\'inscrire',
      logout: 'Déconnexion',
      
      // Common actions
      learnMore: 'En savoir plus',
      getStarted: 'Commencer',
      viewDemo: 'Voir la démo',
      startFreeTrial: 'Essai gratuit',
      contactSales: 'Contacter les ventes',
      readMore: 'Lire la suite',
      bookNow: 'Réserver maintenant',
      viewDetails: 'Voir les détails',
      search: 'Rechercher',
      filter: 'Filtrer',
      sort: 'Trier',
      save: 'Enregistrer',
      cancel: 'Annuler',
      edit: 'Modifier',
      delete: 'Supprimer',
      
      // Form fields
      name: 'Nom',
      email: 'Email',
      phone: 'Téléphone',
      message: 'Message',
      subject: 'Sujet',
      password: 'Mot de passe',
      confirmPassword: 'Confirmer le mot de passe',
      
      // Status
      loading: 'Chargement...',
      error: 'Erreur',
      success: 'Succès',
      pending: 'En attente',
      confirmed: 'Confirmé',
      cancelled: 'Annulé',
      completed: 'Terminé',
      
      // Footer
      stayUpdated: 'Restez informé',
      enterEmail: 'Entrez votre email',
      subscribe: 'S\'abonner',
      allRightsReserved: 'Tous droits réservés',
      
      // Company info
      companyName: 'TaghazoutTimes',
      companyTagline: 'Votre porte d\'entrée vers des expériences marocaines authentiques et des aventures inoubliables.',
      trustedBy: 'Approuvé par plus de 1000 voyageurs dans le monde'
    },
    home: {
      // Hero section
      heroTitle: 'Découvrez le Maroc Authentique',
      heroTitleHighlight: 'À Votre Façon',
      heroSubtitle: 'Des cours de surf à Taghazout aux riads de luxe à Marrakech. Découvrez le Maroc à travers les yeux des locaux avec notre sélection d\'hébergements, d\'activités et d\'aventures.',
      
      // Features
      features: {
        title: 'Pourquoi Nous Choisir',
        subtitle: 'Tout Ce Dont Vous Avez Besoin Pour Le Voyage Parfait',
        description: 'Expériences soigneusement sélectionnées qui mettent en valeur le meilleur de la culture et de l\'hospitalité marocaines',
        authentic: {
          title: 'Expériences Authentiques',
          description: 'Connectez-vous à la culture locale grâce à des expériences authentiques guidées localement.'
        },
        verified: {
          title: 'Prestataires Vérifiés',
          description: 'Tous nos partenaires sont soigneusement vérifiés pour la qualité et l\'authenticité.'
        },
        support: {
          title: 'Support 24/7',
          description: 'Obtenez de l\'aide dans votre langue quand vous en avez besoin pendant votre voyage.'
        },
        multilingual: {
          title: 'Service Multilingue',
          description: 'Support complet en anglais, français et arabe pour une communication fluide.'
        }
      },
      
      // Stats
      stats: {
        destinations: 'Destinations',
        happyTravelers: 'Voyageurs Heureux',
        averageRating: 'Note Moyenne',
        successRate: 'Taux de Réussite'
      },
      
      // How it works
      howItWorks: {
        title: 'Comment Ça Marche',
        subtitle: 'Planifiez votre aventure marocaine parfaite en trois étapes simples',
        step1: {
          title: 'Explorer',
          description: 'Parcourez notre sélection d\'hébergements, d\'activités et d\'expériences'
        },
        step2: {
          title: 'Réserver',
          description: 'Sécurisez votre place avec notre système de réservation facile et des options de paiement flexibles'
        },
        step3: {
          title: 'Expérimenter',
          description: 'Profitez de votre aventure marocaine authentique avec le soutien complet de notre équipe'
        }
      },
      
      // Testimonials
      testimonials: {
        title: 'Ce Que Disent Nos Voyageurs',
        subtitle: 'Expériences réelles de vrais voyageurs'
      },
      
      // CTA
      cta: {
        title: 'Prêt Pour Votre Aventure Marocaine?',
        subtitle: 'Rejoignez des milliers de voyageurs qui ont découvert la magie du Maroc avec nous'
      }
    },
    listings: {
      title: 'Explorez Nos Annonces',
      subtitle: 'Découvrez des lieux et expériences incroyables',
      searchPlaceholder: 'Rechercher des annonces...',
      noResults: 'Aucune annonce trouvée',
      clearFilters: 'Effacer les Filtres',
      showingResults: 'Affichage de {{count}} sur {{total}} annonces',
      categories: {
        all: 'Toutes les Catégories',
        accommodation: 'Hébergement',
        activity: 'Activités',
        'surf-lesson': 'Cours de Surf',
        tour: 'Tours',
        rental: 'Locations'
      }
    },
    packages: {
      title: 'Forfaits Voyage',
      subtitle: 'Expériences organisées pour des voyages inoubliables',
      duration: 'Durée',
      groupSize: 'Taille du Groupe',
      includes: 'Le Forfait Comprend',
      highlights: 'Points Forts de l\'Expérience',
      perPerson: 'par personne',
      customPackage: 'Créer un Forfait Personnalisé'
    },
    blog: {
      title: 'Blog de Voyage',
      subtitle: 'Histoires, conseils et aperçus du Maroc',
      readTime: 'min de lecture',
      author: 'Auteur',
      publishedOn: 'Publié le',
      relatedPosts: 'Articles Connexes',
      categories: {
        all: 'Toutes les Catégories',
        travel: 'Conseils de Voyage',
        culture: 'Culture',
        food: 'Nourriture et Cuisine',
        adventure: 'Aventure'
      }
    },
    dashboard: {
      title: 'Tableau de Bord',
      welcome: 'Bon retour',
      overview: 'Aperçu',
      bookings: 'Mes Réservations',
      favorites: 'Favoris',
      profile: 'Profil',
      settings: 'Paramètres',
      totalBookings: 'Total des Réservations',
      totalSpent: 'Total Dépensé',
      upcomingTrips: 'Voyages à Venir',
      recentActivity: 'Activité Récente'
    }
  },
  ar: {
    common: {
      // Navigation
      home: 'الرئيسية',
      about: 'حولنا',
      services: 'الخدمات',
      listings: 'القوائم',
      packages: 'الباقات',
      blog: 'المدونة',
      contact: 'اتصل بنا',
      dashboard: 'لوحة التحكم',
      signin: 'تسجيل الدخول',
      signup: 'إنشاء حساب',
      logout: 'تسجيل الخروج',
      
      // Common actions
      learnMore: 'اعرف المزيد',
      getStarted: 'ابدأ الآن',
      viewDemo: 'عرض تجريبي',
      startFreeTrial: 'تجربة مجانية',
      contactSales: 'اتصل بالمبيعات',
      readMore: 'اقرأ المزيد',
      bookNow: 'احجز الآن',
      viewDetails: 'عرض التفاصيل',
      search: 'بحث',
      filter: 'تصفية',
      sort: 'ترتيب',
      save: 'حفظ',
      cancel: 'إلغاء',
      edit: 'تعديل',
      delete: 'حذف',
      
      // Form fields
      name: 'الاسم',
      email: 'البريد الإلكتروني',
      phone: 'الهاتف',
      message: 'الرسالة',
      subject: 'الموضوع',
      password: 'كلمة المرور',
      confirmPassword: 'تأكيد كلمة المرور',
      
      // Status
      loading: 'جاري التحميل...',
      error: 'خطأ',
      success: 'نجح',
      pending: 'في الانتظار',
      confirmed: 'مؤكد',
      cancelled: 'ملغي',
      completed: 'مكتمل',
      
      // Footer
      stayUpdated: 'ابق على اطلاع',
      enterEmail: 'أدخل بريدك الإلكتروني',
      subscribe: 'اشترك',
      allRightsReserved: 'جميع الحقوق محفوظة',
      
      // Company info
      companyName: 'TaghazoutTimes',
      companyTagline: 'بوابتك إلى التجارب المغربية الأصيلة والمغامرات التي لا تُنسى.',
      trustedBy: 'موثوق به من قبل أكثر من 1000 مسافر حول العالم'
    },
    home: {
      // Hero section
      heroTitle: 'اكتشف المغرب الأصيل',
      heroTitleHighlight: 'بطريقتك',
      heroSubtitle: 'من دروس ركوب الأمواج في تغازوت إلى الرياض الفاخرة في مراكش. اختبر المغرب من خلال عيون السكان المحليين مع مجموعتنا المختارة من أماكن الإقامة والأنشطة والمغامرات.',
      
      // Features
      features: {
        title: 'لماذا تختارنا',
        subtitle: 'كل ما تحتاجه للرحلة المثالية',
        description: 'تجارب مختارة بعناية تعرض أفضل ما في الثقافة والضيافة المغربية',
        authentic: {
          title: 'تجارب أصيلة',
          description: 'تواصل مع الثقافة المحلية من خلال تجارب حقيقية بإرشاد محلي.'
        },
        verified: {
          title: 'مقدمو خدمات موثقون',
          description: 'جميع شركائنا تم فحصهم بعناية للجودة والأصالة.'
        },
        support: {
          title: 'دعم 24/7',
          description: 'احصل على المساعدة بلغتك متى احتجتها أثناء رحلتك.'
        },
        multilingual: {
          title: 'خدمة متعددة اللغات',
          description: 'دعم كامل بالإنجليزية والفرنسية والعربية للتواصل السلس.'
        }
      },
      
      // Stats
      stats: {
        destinations: 'الوجهات',
        happyTravelers: 'المسافرون السعداء',
        averageRating: 'التقييم المتوسط',
        successRate: 'معدل النجاح'
      },
      
      // How it works
      howItWorks: {
        title: 'كيف يعمل',
        subtitle: 'خطط لمغامرتك المغربية المثالية في ثلاث خطوات بسيطة',
        step1: {
          title: 'استكشف',
          description: 'تصفح مجموعتنا المختارة من أماكن الإقامة والأنشطة والتجارب'
        },
        step2: {
          title: 'احجز',
          description: 'احجز مكانك بنظام الحجز السهل وخيارات الدفع المرنة'
        },
        step3: {
          title: 'اختبر',
          description: 'استمتع بمغامرتك المغربية الأصيلة مع الدعم الكامل من فريقنا'
        }
      },
      
      // Testimonials
      testimonials: {
        title: 'ماذا يقول مسافرونا',
        subtitle: 'تجارب حقيقية من مسافرين حقيقيين'
      },
      
      // CTA
      cta: {
        title: 'مستعد لمغامرتك المغربية؟',
        subtitle: 'انضم إلى آلاف المسافرين الذين اكتشفوا سحر المغرب معنا'
      }
    },
    listings: {
      title: 'استكشف قوائمنا',
      subtitle: 'اكتشف أماكن وتجارب مذهلة',
      searchPlaceholder: 'البحث في القوائم...',
      noResults: 'لم يتم العثور على قوائم',
      clearFilters: 'مسح المرشحات',
      showingResults: 'عرض {{count}} من {{total}} قائمة',
      categories: {
        all: 'جميع الفئات',
        accommodation: 'الإقامة',
        activity: 'الأنشطة',
        'surf-lesson': 'دروس ركوب الأمواج',
        tour: 'الجولات',
        rental: 'الإيجارات'
      }
    },
    packages: {
      title: 'باقات السفر',
      subtitle: 'تجارب منظمة لرحلات لا تُنسى',
      duration: 'المدة',
      groupSize: 'حجم المجموعة',
      includes: 'تشمل الباقة',
      highlights: 'أبرز معالم التجربة',
      perPerson: 'للشخص الواحد',
      customPackage: 'إنشاء باقة مخصصة'
    },
    blog: {
      title: 'مدونة السفر',
      subtitle: 'قصص ونصائح ورؤى من المغرب',
      readTime: 'دقيقة قراءة',
      author: 'الكاتب',
      publishedOn: 'نُشر في',
      relatedPosts: 'المقالات ذات الصلة',
      categories: {
        all: 'جميع الفئات',
        travel: 'نصائح السفر',
        culture: 'الثقافة',
        food: 'الطعام والمأكولات',
        adventure: 'المغامرة'
      }
    },
    dashboard: {
      title: 'لوحة التحكم',
      welcome: 'مرحباً بعودتك',
      overview: 'نظرة عامة',
      bookings: 'حجوزاتي',
      favorites: 'المفضلة',
      profile: 'الملف الشخصي',
      settings: 'الإعدادات',
      totalBookings: 'إجمالي الحجوزات',
      totalSpent: 'إجمالي المبلغ المنفق',
      upcomingTrips: 'الرحلات القادمة',
      recentActivity: 'النشاط الأخير'
    }
  }
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: 'en',
    debug: false,
    
    interpolation: {
      escapeValue: false,
    },
    
    detection: {
      order: ['localStorage', 'navigator', 'htmlTag'],
      caches: ['localStorage'],
    },
  });

export default i18n;