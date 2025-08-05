import React from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { AnimatedCounter } from './animated-counter';
import { TrendingUp, MapPin, Users, Star } from 'lucide-react';

interface StatItem {
  icon: React.ElementType;
  value: number;
  suffix?: string;
  labelKey: string;
}

export const HeroStats: React.FC = () => {
  const { t } = useTranslation('home');

  const stats: StatItem[] = [
    { icon: MapPin, value: 200, suffix: '+', labelKey: 'stats.destinations' },
    { icon: Users, value: 50000, suffix: '+', labelKey: 'stats.happyTravelers' },
    { icon: Star, value: 4.9, labelKey: 'stats.averageRating' },
    { icon: TrendingUp, value: 99, suffix: '%', labelKey: 'stats.successRate' },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.5 }}
      className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12"
    >
      {stats.map((stat, index) => (
        <motion.div
          key={stat.labelKey}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.7 + index * 0.1 }}
          className="text-center group"
        >
          <motion.div 
            className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 text-primary mb-3 group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300"
            whileHover={{ scale: 1.1, rotate: 5 }}
          >
            <stat.icon className="w-6 h-6" />
          </motion.div>
          <div className="text-2xl font-bold text-foreground">
            <AnimatedCounter end={stat.value} suffix={stat.suffix} />
          </div>
          <div className="text-sm text-muted-foreground">{t(stat.labelKey)}</div>
        </motion.div>
      ))}
    </motion.div>
  );
};