import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { PackagesGrid } from '@/components/sections/PackagesGrid';
import { SEOHead } from '@/components/ui/seo-head';
import { PageTransition } from '@/components/ui/page-transition';
import { ArrowRight } from 'lucide-react';
import { mockPackages } from '@/data/mockData';
import { Package } from '@/types';

const Packages = () => {
  const { t, i18n } = useTranslation(['packages', 'common']);
  const [packages, setPackages] = useState<Package[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedCategory, setSelectedCategory] = useState('All');

  const categories = ['All', 'Cultural', 'Adventure', 'Photography', 'Surf'];

  useEffect(() => {
    // Simulate API call
    setTimeout(() => {
      const filtered = selectedCategory === 'All' 
        ? mockPackages 
        : mockPackages.filter(pkg => pkg.category === selectedCategory);
      
      setPackages(filtered);
      setLoading(false);
    }, 500);
  }, [selectedCategory]);

  return (
    <PageTransition>
      <SEOHead 
        title={t('title')}
        description={t('subtitle')}
        keywords="Morocco travel packages, cultural tours, adventure trips, photography tours"
      />
      
      <div className="min-h-screen bg-gradient-to-br from-background to-muted/30">
        {/* Hero Section */}
        <section className="relative overflow-hidden pt-20 pb-16 lg:pt-32 lg:pb-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center"
          >
            <Badge variant="secondary" className="mb-6">
              Curated Experiences
            </Badge>
            <h1 className="text-4xl sm:text-6xl font-bold tracking-tight mb-6">
              {t('title')}
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
              {t('subtitle')}
            </p>
            
            {/* Category Filter */}
            <div className="flex flex-wrap justify-center gap-4 mb-12">
              {categories.map((category) => (
                <Button
                  key={category}
                  variant={selectedCategory === category ? "default" : "outline"}
                  onClick={() => setSelectedCategory(category)}
                  className="transition-all duration-300"
                >
                  {category}
                </Button>
              ))}
            </div>
          </motion.div>
        </section>

        {/* Packages Grid */}
        <section className="pb-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <PackagesGrid packages={packages} loading={loading} />
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-24 bg-gradient-to-r from-primary to-primary/80">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8"
          >
            <h2 className="text-3xl sm:text-5xl font-bold text-white">
              Can't Find What You're Looking For?
            </h2>
            <p className="text-xl text-primary-foreground/80">
              {t('customPackage')} - We specialize in creating custom packages tailored to your unique interests.
            </p>
            <Button size="lg" variant="secondary" className="text-lg px-8 py-6">
              {t('customPackage')}
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </motion.div>
        </section>
      </div>
    </PageTransition>
  );
};

export default Packages;