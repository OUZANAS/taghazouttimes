import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { SearchForm } from '@/components/ui/search-form';
import { HeroStats } from '@/components/ui/hero-stats';
import { FloatingElements } from '@/components/ui/floating-elements';
import { ArrowRight, Play } from 'lucide-react';

interface HeroSectionProps {
  variant?: 'default' | 'travel' | 'business' | 'surf' | 'hospitality';
  customContent?: {
    title?: string;
    subtitle?: string;
    backgroundImage?: string;
    ctaText?: string;
  };
}

export const HeroSection = ({ variant = 'default', customContent }: HeroSectionProps) => {
  const { t } = useTranslation(['home', 'common']);

  const getVariantStyles = () => {
    switch (variant) {
      case 'travel':
        return {
          bgClass: 'bg-gradient-to-br from-blue-50 via-cyan-50 to-teal-50',
          badgeClass: 'bg-blue-100 text-blue-800',
          gradientText: 'from-blue-600 to-cyan-600'
        };
      case 'business':
        return {
          bgClass: 'bg-gradient-to-br from-purple-50 via-indigo-50 to-blue-50',
          badgeClass: 'bg-purple-100 text-purple-800',
          gradientText: 'from-purple-600 to-indigo-600'
        };
      case 'surf':
        return {
          bgClass: 'bg-gradient-to-br from-teal-50 via-cyan-50 to-blue-50',
          badgeClass: 'bg-teal-100 text-teal-800',
          gradientText: 'from-teal-600 to-blue-600'
        };
      case 'hospitality':
        return {
          bgClass: 'bg-gradient-to-br from-amber-50 via-orange-50 to-red-50',
          badgeClass: 'bg-amber-100 text-amber-800',
          gradientText: 'from-amber-600 to-orange-600'
        };
      default:
        return {
          bgClass: 'hero-bg',
          badgeClass: 'bg-primary/10 text-primary border-primary/20',
          gradientText: 'from-primary to-primary/80'
        };
    }
  };

  const styles = getVariantStyles();

  return (
    <section className={`relative ${styles.bgClass} pt-20 pb-40 lg:pt-32 lg:pb-48 overflow-hidden`}>
      <FloatingElements />
      
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10"
      >
        <div className="text-center space-y-8">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Badge variant="secondary" className={`animate-pulse-slow shadow-lg backdrop-blur-sm ${styles.badgeClass}`}>
              🌍 {t('common:trustedBy')}
            </Badge>
          </motion.div>
          
          <motion.h1 
            className="text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            {customContent?.title || t('heroTitle')}
            <span className={`bg-gradient-to-r ${styles.gradientText} bg-clip-text text-transparent block`}>
              {t('heroTitleHighlight')}
            </span>
          </motion.h1>
          
          <motion.p 
            className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            {customContent?.subtitle || t('heroSubtitle')}
          </motion.p>
          
          <motion.div 
            className="flex flex-col sm:flex-row gap-4 justify-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.7 }}
          >
            <Button variant="glow" size="lg" className="text-lg px-8 py-6 shadow-2xl">
              {customContent?.ctaText || t('common:getStarted')}
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            <Button size="lg" variant="outline" className="text-lg px-8 py-6 group">
              <Play className="mr-2 w-5 h-5 group-hover:scale-110 transition-transform" />
              {t('common:viewDemo')}
            </Button>
          </motion.div>
          
          <HeroStats />
        </div>
      </motion.div>
      
      {/* Search Form */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 -mb-20 relative z-20">
        <SearchForm variant="floating" />
      </div>
    </section>
  );
};