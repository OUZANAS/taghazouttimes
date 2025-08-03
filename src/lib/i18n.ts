
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
      signin: 'Sign In',
      signup: 'Start Free Trial',
      
      // Common actions
      learnMore: 'Learn More',
      getStarted: 'Get Started',
      viewDemo: 'View Demo',
      startFreeTrial: 'Start Free Trial',
      contactSales: 'Contact Sales',
      readMore: 'Read More',
      
      // Footer
      stayUpdated: 'Stay Updated',
      enterEmail: 'Enter your email',
      subscribe: 'Subscribe',
      allRightsReserved: 'All rights reserved',
      
      // Company info
      companyName: 'SaaSify',
      companyTagline: 'Empower your service business with our comprehensive platform. From listings to bookings, we\'ve got everything you need to grow.',
      trustedBy: 'Trusted by 1000+ Service Providers'
    },
    home: {
      // Hero section
      heroTitle: 'Build Your Service Business Website in',
      heroTitleHighlight: 'Minutes',
      heroSubtitle: 'Perfect for surf schools, rental properties, tour operators, and hospitality businesses. Create stunning websites with integrated booking systems.',
      
      // Features
      features: {
        title: 'Our Platform',
        subtitle: 'Everything You Need to Succeed',
        description: 'Built specifically for service-based businesses with all the tools you need',
        quickSetup: {
          title: 'Quick Setup',
          description: 'Launch your professional website in minutes with our easy-to-use templates.'
        },
        multilingual: {
          title: 'Multilingual Support',
          description: 'Reach global audiences with built-in translation and localization features.'
        },
        secure: {
          title: 'Secure & Reliable',
          description: 'Enterprise-grade security with 99.9% uptime guarantee for your business.'
        },
        support: {
          title: '24/7 Support',
          description: 'Get help whenever you need it with our dedicated customer support team.'
        }
      },
      
      // Benefits
      benefits: {
        noSetupFees: 'No setup fees',
        freeTrial: '14-day free trial',
        cancelAnytime: 'Cancel anytime'
      },
      
      // How it works
      howItWorks: {
        title: 'How It Works',
        subtitle: 'Get started in just three simple steps',
        step1: {
          title: 'Sign Up',
          description: 'Create your account and choose your plan'
        },
        step2: {
          title: 'Customize',
          description: 'Set up your brand and configure your services'
        },
        step3: {
          title: 'Launch',
          description: 'Go live and start accepting bookings'
        }
      },
      
      // Testimonials
      testimonials: {
        title: 'What Our Customers Say',
        subtitle: 'Loved by Service Providers Worldwide'
      },
      
      // CTA
      cta: {
        title: 'Ready to Transform Your Business?',
        subtitle: 'Join thousands of service providers who have grown their business with our platform'
      }
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
      signin: 'Se connecter',
      signup: 'Essai gratuit',
      
      // Common actions
      learnMore: 'En savoir plus',
      getStarted: 'Commencer',
      viewDemo: 'Voir la démo',
      startFreeTrial: 'Essai gratuit',
      contactSales: 'Contacter les ventes',
      readMore: 'Lire la suite',
      
      // Footer
      stayUpdated: 'Restez informé',
      enterEmail: 'Entrez votre email',
      subscribe: 'S\'abonner',
      allRightsReserved: 'Tous droits réservés',
      
      // Company info
      companyName: 'SaaSify',
      companyTagline: 'Renforcez votre entreprise de services avec notre plateforme complète. Des annonces aux réservations, nous avons tout ce dont vous avez besoin pour grandir.',
      trustedBy: 'Approuvé par plus de 1000 prestataires de services'
    },
    home: {
      // Hero section
      heroTitle: 'Créez votre site web d\'entreprise de services en',
      heroTitleHighlight: 'Minutes',
      heroSubtitle: 'Parfait pour les écoles de surf, les propriétés de location, les tour-opérateurs et les entreprises d\'hospitalité. Créez de superbes sites web avec des systèmes de réservation intégrés.',
      
      // Features
      features: {
        title: 'Notre Plateforme',
        subtitle: 'Tout ce dont vous avez besoin pour réussir',
        description: 'Conçu spécifiquement pour les entreprises de services avec tous les outils dont vous avez besoin',
        quickSetup: {
          title: 'Configuration rapide',
          description: 'Lancez votre site web professionnel en quelques minutes avec nos modèles faciles à utiliser.'
        },
        multilingual: {
          title: 'Support multilingue',
          description: 'Atteignez un public mondial avec des fonctions intégrées de traduction et de localisation.'
        },
        secure: {
          title: 'Sécurisé et fiable',
          description: 'Sécurité de niveau entreprise avec une garantie de disponibilité de 99,9% pour votre entreprise.'
        },
        support: {
          title: 'Support 24/7',
          description: 'Obtenez de l\'aide quand vous en avez besoin avec notre équipe de support client dédiée.'
        }
      },
      
      // Benefits
      benefits: {
        noSetupFees: 'Aucun frais d\'installation',
        freeTrial: 'Essai gratuit de 14 jours',
        cancelAnytime: 'Annulez à tout moment'
      },
      
      // How it works
      howItWorks: {
        title: 'Comment ça marche',
        subtitle: 'Commencez en seulement trois étapes simples',
        step1: {
          title: 'S\'inscrire',
          description: 'Créez votre compte et choisissez votre plan'
        },
        step2: {
          title: 'Personnaliser',
          description: 'Configurez votre marque et configurez vos services'
        },
        step3: {
          title: 'Lancer',
          description: 'Mettez en ligne et commencez à accepter les réservations'
        }
      },
      
      // Testimonials
      testimonials: {
        title: 'Ce que disent nos clients',
        subtitle: 'Aimé par les prestataires de services du monde entier'
      },
      
      // CTA
      cta: {
        title: 'Prêt à transformer votre entreprise ?',
        subtitle: 'Rejoignez des milliers de prestataires de services qui ont développé leur activité avec notre plateforme'
      }
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
      signin: 'تسجيل الدخول',
      signup: 'تجربة مجانية',
      
      // Common actions
      learnMore: 'اعرف المزيد',
      getStarted: 'ابدأ الآن',
      viewDemo: 'عرض تجريبي',
      startFreeTrial: 'تجربة مجانية',
      contactSales: 'اتصل بالمبيعات',
      readMore: 'اقرأ المزيد',
      
      // Footer
      stayUpdated: 'ابق على اطلاع',
      enterEmail: 'أدخل بريدك الإلكتروني',
      subscribe: 'اشترك',
      allRightsReserved: 'جميع الحقوق محفوظة',
      
      // Company info
      companyName: 'SaaSify',
      companyTagline: 'قوي أعمالك الخدمية مع منصتنا الشاملة. من القوائم إلى الحجوزات، لدينا كل ما تحتاجه للنمو.',
      trustedBy: 'موثوق به من قبل أكثر من 1000 مقدم خدمة'
    },
    home: {
      // Hero section
      heroTitle: 'أنشئ موقع أعمالك الخدمية في',
      heroTitleHighlight: 'دقائق',
      heroSubtitle: 'مثالي لمدارس الرياضة المائية، العقارات المؤجرة، منظمي الرحلات، وأعمال الضيافة. أنشئ مواقع رائعة مع أنظمة حجز متكاملة.',
      
      // Features
      features: {
        title: 'منصتنا',
        subtitle: 'كل ما تحتاجه للنجاح',
        description: 'مصمم خصيصاً للأعمال الخدمية مع جميع الأدوات التي تحتاجها',
        quickSetup: {
          title: 'إعداد سريع',
          description: 'أطلق موقعك المهني في دقائق بقوالبنا سهلة الاستخدام.'
        },
        multilingual: {
          title: 'دعم متعدد اللغات',
          description: 'اوصل لجمهور عالمي مع ميزات الترجمة والتوطين المدمجة.'
        },
        secure: {
          title: 'آمن وموثوق',
          description: 'أمان على مستوى المؤسسات مع ضمان توفر 99.9% لعملك.'
        },
        support: {
          title: 'دعم 24/7',
          description: 'احصل على المساعدة متى احتجتها مع فريق دعم العملاء المخصص لدينا.'
        }
      },
      
      // Benefits
      benefits: {
        noSetupFees: 'بدون رسوم إعداد',
        freeTrial: 'تجربة مجانية لمدة 14 يوم',
        cancelAnytime: 'إلغاء في أي وقت'
      },
      
      // How it works
      howItWorks: {
        title: 'كيف يعمل',
        subtitle: 'ابدأ في ثلاث خطوات بسيطة فقط',
        step1: {
          title: 'سجل',
          description: 'أنشئ حسابك واختر خطتك'
        },
        step2: {
          title: 'خصص',
          description: 'أعد علامتك التجارية وكون خدماتك'
        },
        step3: {
          title: 'أطلق',
          description: 'انطلق وابدأ قبول الحجوزات'
        }
      },
      
      // Testimonials
      testimonials: {
        title: 'ماذا يقول عملاؤنا',
        subtitle: 'محبوب من قبل مقدمي الخدمات عالمياً'
      },
      
      // CTA
      cta: {
        title: 'مستعد لتحويل أعمالك؟',
        subtitle: 'انضم إلى آلاف مقدمي الخدمات الذين نموا أعمالهم مع منصتنا'
      }
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
