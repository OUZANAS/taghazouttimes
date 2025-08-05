import React from 'react';
import { motion } from 'framer-motion';
import { TrendingUp, MapPin, Users, Star } from 'lucide-react';

interface StatItem {
  icon: React.ElementType;
  value: string;
  label: string;
}

const stats: StatItem[] = [
  { icon: MapPin, value: '200+', label: 'Destinations' },
  { icon: Users, value: '50K+', label: 'Happy Travelers' },
  { icon: Star, value: '4.9', label: 'Average Rating' },
  { icon: TrendingUp, value: '99%', label: 'Success Rate' },
];

export const HeroStats: React.FC = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.5 }}
      className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12"
    >
      {stats.map((stat, index) => (
        <motion.div
          key={stat.label}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.7 + index * 0.1 }}
          className="text-center group"
        >
          <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 text-primary mb-3 group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300">
            <stat.icon className="w-6 h-6" />
          </div>
          <div className="text-2xl font-bold text-foreground">{stat.value}</div>
          <div className="text-sm text-muted-foreground">{stat.label}</div>
        </motion.div>
      ))}
    </motion.div>
  );
};