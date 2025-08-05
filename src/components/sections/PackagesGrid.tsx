import { useState } from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { BookingModal } from '@/components/ui/booking-modal';
import { LoadingSpinner } from '@/components/ui/loading-spinner';
import { Star, Clock, Users, ArrowRight, Crown, Waves, Mountain, Camera } from 'lucide-react';
import { Package } from '@/types';

interface PackagesGridProps {
  packages: Package[];
  loading?: boolean;
  showBooking?: boolean;
}

export const PackagesGrid = ({ packages, loading = false, showBooking = true }: PackagesGridProps) => {
  const { t, i18n } = useTranslation(['packages', 'common']);
  const [selectedPackage, setSelectedPackage] = useState<Package | null>(null);
  const [showBookingModal, setShowBookingModal] = useState(false);

  const getCategoryIcon = (category: string) => {
    switch (category.toLowerCase()) {
      case 'cultural': return Crown;
      case 'adventure': return Mountain;
      case 'surf': return Waves;
      case 'photography': return Camera;
      default: return Crown;
    }
  };

  const getCategoryColor = (category: string) => {
    switch (category.toLowerCase()) {
      case 'cultural': return 'from-amber-500 to-orange-500';
      case 'adventure': return 'from-green-500 to-emerald-500';
      case 'surf': return 'from-blue-500 to-cyan-500';
      case 'photography': return 'from-purple-500 to-pink-500';
      default: return 'from-gray-500 to-gray-600';
    }
  };

  const getCategoryBg = (category: string) => {
    switch (category.toLowerCase()) {
      case 'cultural': return 'bg-amber-50';
      case 'adventure': return 'bg-green-50';
      case 'surf': return 'bg-blue-50';
      case 'photography': return 'bg-purple-50';
      default: return 'bg-gray-50';
    }
  };

  const handleBookNow = (pkg: Package) => {
    setSelectedPackage(pkg);
    setShowBookingModal(true);
  };

  if (loading) {
    return (
      <div className="flex justify-center py-12">
        <LoadingSpinner size="lg" />
      </div>
    );
  }

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {packages.map((pkg, index) => {
          const CategoryIcon = getCategoryIcon(pkg.category);
          const colorClass = getCategoryColor(pkg.category);
          const bgClass = getCategoryBg(pkg.category);

          return (
            <motion.div
              key={pkg.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1, ease: "easeOut" }}
              viewport={{ once: true }}
            >
              <Card className={`group hover:shadow-2xl transition-all duration-500 hover:scale-[1.02] overflow-hidden ${bgClass} border-0`}>
                {/* Image Section */}
                <div className="relative overflow-hidden">
                  <div className="aspect-video bg-gradient-to-br from-muted to-muted-foreground/20 relative">
                    {pkg.images[0] ? (
                      <img 
                        src={pkg.images[0]} 
                        alt={pkg.title[i18n.language]}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center">
                        <CategoryIcon className="w-16 h-16 text-muted-foreground/60" />
                      </div>
                    )}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
                  </div>
                  
                  <Badge 
                    className={`absolute top-4 left-4 bg-gradient-to-r ${colorClass} text-white border-0`}
                  >
                    {pkg.category}
                  </Badge>
                  
                  <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full flex items-center gap-1">
                    <Star className="w-4 h-4 text-yellow-500 fill-current" />
                    <span className="text-sm font-medium">{pkg.rating}</span>
                    <span className="text-xs text-muted-foreground">({pkg.reviewCount})</span>
                  </div>
                </div>

                <CardContent className="p-8">
                  <div className="space-y-6">
                    {/* Header */}
                    <div>
                      <h3 className="text-2xl font-bold mb-3 group-hover:text-primary transition-colors">
                        {pkg.title[i18n.language]}
                      </h3>
                      <p className="text-muted-foreground leading-relaxed">
                        {pkg.shortDescription[i18n.language]}
                      </p>
                    </div>

                    {/* Package Info */}
                    <div className="flex flex-wrap gap-4 py-4 border-y border-border/50">
                      <div className="flex items-center gap-2 text-sm">
                        <Clock className="w-4 h-4 text-primary" />
                        <span>{pkg.duration}</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm">
                        <Users className="w-4 h-4 text-primary" />
                        <span>{pkg.groupSize}</span>
                      </div>
                    </div>

                    {/* Highlights */}
                    <div>
                      <h4 className="font-semibold mb-3">{t('highlights')}:</h4>
                      <ul className="space-y-2">
                        {pkg.highlights[i18n.language]?.slice(0, 3).map((highlight, idx) => (
                          <li key={idx} className="flex items-start gap-2 text-sm text-muted-foreground">
                            <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                            <span>{highlight}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Price and CTA */}
                    <div className="flex items-center justify-between pt-4">
                      <div>
                        <div className="text-3xl font-bold text-primary">${pkg.price}</div>
                        <div className="text-sm text-muted-foreground">{t('perPerson')}</div>
                      </div>
                      {showBooking ? (
                        <Button 
                          onClick={() => handleBookNow(pkg)}
                          size="lg"
                          className={`bg-gradient-to-r ${colorClass} text-white border-0 hover:scale-105 transition-all duration-300`}
                        >
                          {t('common:bookNow')}
                          <ArrowRight className="ml-2 w-5 h-5" />
                        </Button>
                      ) : (
                        <Button asChild size="lg" variant="outline">
                          <Link to={`/packages/${pkg.slug}`}>
                            {t('common:viewDetails')}
                          </Link>
                        </Button>
                      )}
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          );
        })}
      </div>

      <BookingModal
        isOpen={showBookingModal}
        onClose={() => setShowBookingModal(false)}
        package={selectedPackage || undefined}
      />
    </>
  );
};