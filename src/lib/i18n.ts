
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
    },
    home: {
      // Hero section
      heroTitle: 'Build Your Service Business Website in Minutes',
      heroSubtitle: 'Perfect for surf schools, rental properties, tour operators, and hospitality businesses. Create stunning websites with integrated booking systems.',
      trustedBy: 'Trusted by 1000+ Service Providers',
      
      // Features
      noSetupFees: 'No setup fees',
      freeTrial: '14-day free trial',
      cancelAnytime: 'Cancel anytime',
      
      // Benefits
      featuresTitle: 'Everything You Need to Succeed',
      featuresSubtitle: 'Built specifically for service-based businesses with all the tools you need',
      
      // How it works
      howItWorksTitle: 'How It Works',
      howItWorksSubtitle: 'Get started in just three simple steps',
      step1Title: 'Sign Up',
      step1Description: 'Create your account and choose your plan',
      step2Title: 'Customize',
      step2Description: 'Set up your brand and configure your services',
      step3Title: 'Launch',
      step3Description: 'Go live and start accepting bookings',
      
      // Testimonials
      testimonialsTitle: 'Loved by Service Providers Worldwide',
      testimonialsSubtitle: 'See what our customers say about their experience',
      
      // CTA
      ctaTitle: 'Ready to Transform Your Business?',
      ctaSubtitle: 'Join thousands of service providers who have grown their business with our platform',
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
    },
    home: {
      // Hero section
      heroTitle: 'Créez votre site web d\'entreprise de services en quelques minutes',
      heroSubtitle: 'Parfait pour les écoles de surf, les propriétés de location, les tour-opérateurs et les entreprises d\'hospitalité. Créez de superbes sites web avec des systèmes de réservation intégrés.',
      trustedBy: 'Approuvé par plus de 1000 prestataires de services',
      
      // Features
      noSetupFees: 'Aucun frais d\'installation',
      freeTrial: 'Essai gratuit de 14 jours',
      cancelAnytime: 'Annulez à tout moment',
      
      // Benefits
      featuresTitle: 'Tout ce dont vous avez besoin pour réussir',
      featuresSubtitle: 'Conçu spécifiquement pour les entreprises de services avec tous les outils dont vous avez besoin',
      
      // How it works
      howItWorksTitle: 'Comment ça marche',
      howItWorksSubtitle: 'Commencez en seulement trois étapes simples',
      step1Title: 'S\'inscrire',
      step1Description: 'Créez votre compte et choisissez votre plan',
      step2Title: 'Personnaliser',
      step2Description: 'Configurez votre marque et configurez vos services',
      step3Title: 'Lancer',
      step3Description: 'Mettez en ligne et commencez à accepter les réservations',
      
      // Testimonials
      testimonialsTitle: 'Aimé par les prestataires de services du monde entier',
      testimonialsSubtitle: 'Découvrez ce que nos clients disent de leur expérience',
      
      // CTA
      ctaTitle: 'Prêt à transformer votre entreprise ?',
      ctaSubtitle: 'Rejoignez des milliers de prestataires de services qui ont développé leur activité avec notre plateforme',
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
    },
    home: {
      // Hero section
      heroTitle: 'أنشئ موقع أعمالك الخدمية في دقائق',
      heroSubtitle: 'مثالي لمدارس الرياضة المائية، العقارات المؤجرة، منظمي الرحلات، وأعمال الضيافة. أنشئ مواقع رائعة مع أنظمة حجز متكاملة.',
      trustedBy: 'موثوق به من قبل أكثر من 1000 مقدم خدمة',
      
      // Features
      noSetupFees: 'بدون رسوم إعداد',
      freeTrial: 'تجربة مجانية لمدة 14 يوم',
      cancelAnytime: 'إلغاء في أي وقت',
      
      // Benefits
      featuresTitle: 'كل ما تحتاجه للنجاح',
      featuresSubtitle: 'مصمم خصيصاً للأعمال الخدمية مع جميع الأدوات التي تحتاجها',
      
      // How it works
      howItWorksTitle: 'كيف يعمل',
      howItWorksSubtitle: 'ابدأ في ثلاث خطوات بسيطة فقط',
      step1Title: 'سجل',
      step1Description: 'أنشئ حسابك واختر خطتك',
      step2Title: 'خصص',
      step2Description: 'أعد علامتك التجارية وكون خدماتك',
      step3Title: 'أطلق',
      step3Description: 'انطلق وابدأ قبول الحجوزات',
      
      // Testimonials
      testimonialsTitle: 'محبوب من قبل مقدمي الخدمات عالمياً',
      testimonialsSubtitle: 'شاهد ما يقوله عملاؤنا عن تجربتهم',
      
      // CTA
      ctaTitle: 'مستعد لتحويل أعمالك؟',
      ctaSubtitle: 'انضم إلى آلاف مقدمي الخدمات الذين نموا أعمالهم مع منصتنا',
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
