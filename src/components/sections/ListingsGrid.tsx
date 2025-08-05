import { useState } from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { BookingModal } from '@/components/ui/booking-modal';
import { LoadingSpinner } from '@/components/ui/loading-spinner';
import { Star, MapPin, Users, Heart, Camera, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Listing } from '@/types';

interface ListingsGridProps {
  listings: Listing[];
  loading?: boolean;
  showBooking?: boolean;
  columns?: 2 | 3 | 4;
}

export const ListingsGrid = ({ 
  listings, 
  loading = false, 
  showBooking = true,
  columns = 3 
}: ListingsGridProps) => {
  const { t, i18n } = useTranslation(['listings', 'common']);
  const [selectedListing, setSelectedListing] = useState<Listing | null>(null);
  const [showBookingModal, setShowBookingModal] = useState(false);

  const gridCols = {
    2: 'grid-cols-1 md:grid-cols-2',
    3: 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3',
    4: 'grid-cols-1 md:grid-cols-2 lg:grid-cols-4'
  };

  const handleBookNow = (listing: Listing) => {
    setSelectedListing(listing);
    setShowBookingModal(true);
  };

  if (loading) {
    return (
      <div className="flex justify-center py-12">
        <LoadingSpinner size="lg" />
      </div>
    );
  }

  if (listings.length === 0) {
    return (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="text-center py-12"
      >
        <div className="text-6xl text-muted-foreground/50 mb-4">🔍</div>
        <h3 className="text-2xl font-semibold mb-2">{t('noResults')}</h3>
        <p className="text-muted-foreground mb-6">
          Try adjusting your search criteria or filters
        </p>
        <Button variant="outline">
          {t('clearFilters')}
        </Button>
      </motion.div>
    );
  }

  return (
    <>
      <div className={`grid ${gridCols[columns]} gap-8`}>
        {listings.map((listing, index) => (
          <motion.div
            key={listing.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            <Card className="group hover:shadow-2xl transition-all duration-500 hover:scale-[1.02] overflow-hidden">
              {/* Image Section */}
              <div className="relative overflow-hidden">
                <div className="aspect-video bg-gradient-to-br from-muted to-muted-foreground/20 relative group-hover:scale-110 transition-transform duration-500">
                  {listing.images[0] ? (
                    <img 
                      src={listing.images[0]} 
                      alt={listing.title[i18n.language]}
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center">
                      <Camera className="w-16 h-16 text-muted-foreground/60" />
                    </div>
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                
                {listing.featured && (
                  <Badge className="absolute top-4 left-4 bg-primary text-primary-foreground">
                    Featured
                  </Badge>
                )}
                
                <Button
                  size="icon"
                  variant="ghost"
                  className="absolute top-4 right-4 bg-white/80 backdrop-blur-sm hover:bg-white/90 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                >
                  <Heart className="w-4 h-4" />
                </Button>
                
                <div className="absolute bottom-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full flex items-center gap-1">
                  <Star className="w-4 h-4 text-yellow-500 fill-current" />
                  <span className="text-sm font-medium">{listing.rating}</span>
                  <span className="text-xs text-muted-foreground">({listing.reviewCount})</span>
                </div>
              </div>

              <CardContent className="p-6">
                <div className="space-y-4">
                  {/* Header */}
                  <div>
                    <div className="flex justify-between items-start mb-2">
                      <Badge variant="outline">{t(`categories.${listing.category}`)}</Badge>
                      <div className="text-right">
                        <div className="text-2xl font-bold text-primary">${listing.price}</div>
                        <div className="text-xs text-muted-foreground">{listing.priceUnit}</div>
                      </div>
                    </div>
                    <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">
                      {listing.title[i18n.language]}
                    </h3>
                    <div className="flex items-center gap-1 text-sm text-muted-foreground mb-3">
                      <MapPin className="w-4 h-4" />
                      <span>{listing.location}</span>
                    </div>
                    <p className="text-muted-foreground text-sm line-clamp-2">
                      {listing.shortDescription[i18n.language]}
                    </p>
                  </div>

                  {/* Amenities */}
                  <div className="flex flex-wrap gap-2">
                    {listing.amenities.slice(0, 3).map((amenity, idx) => (
                      <Badge key={idx} variant="secondary" className="text-xs">
                        {amenity}
                      </Badge>
                    ))}
                    {listing.amenities.length > 3 && (
                      <Badge variant="secondary" className="text-xs">
                        +{listing.amenities.length - 3} more
                      </Badge>
                    )}
                  </div>

                  {/* Actions */}
                  <div className="flex gap-2">
                    <Button asChild variant="outline" className="flex-1">
                      <Link to={`/listings/${listing.slug}`}>
                        {t('common:viewDetails')}
                      </Link>
                    </Button>
                    {showBooking && (
                      <Button 
                        onClick={() => handleBookNow(listing)}
                        className="flex-1 group-hover:bg-primary/90 transition-colors"
                      >
                        {t('common:bookNow')}
                        <ArrowRight className="ml-2 w-4 h-4" />
                      </Button>
                    )}
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>

      <BookingModal
        isOpen={showBookingModal}
        onClose={() => setShowBookingModal(false)}
        listing={selectedListing || undefined}
      />
    </>
  );
};