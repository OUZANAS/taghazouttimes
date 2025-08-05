import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { BookingModal } from '@/components/ui/booking-modal';
import { SEOHead } from '@/components/ui/seo-head';
import { PageTransition } from '@/components/ui/page-transition';
import { LoadingSpinner } from '@/components/ui/loading-spinner';
import { 
  ArrowLeft, 
  Star, 
  MapPin, 
  Users, 
  Calendar, 
  Clock, 
  Wifi, 
  Car, 
  Coffee,
  Heart,
  Share2,
  CheckCircle,
  ChevronLeft,
  ChevronRight
} from 'lucide-react';
import { mockListings } from '@/data/mockData';
import { Listing } from '@/types';

const ListingDetail = () => {
  const { slug } = useParams();
  const { t, i18n } = useTranslation(['listings', 'common']);
  const [listing, setListing] = useState<Listing | null>(null);
  const [loading, setLoading] = useState(true);
  const [showBookingModal, setShowBookingModal] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    // Simulate API call to fetch listing by slug
    setTimeout(() => {
      const foundListing = mockListings.find(l => l.slug === slug);
      setListing(foundListing || null);
      setLoading(false);
    }, 500);
  }, [slug]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <LoadingSpinner size="lg" />
      </div>
    );
  }

  if (!listing) {
    return (
      <PageTransition>
        <div className="min-h-screen flex items-center justify-center">
          <div className="text-center space-y-4">
            <h1 className="text-2xl font-bold">Listing not found</h1>
            <p className="text-muted-foreground">The listing you're looking for doesn't exist.</p>
            <Button asChild variant="outline">
              <Link to="/listings">Back to Listings</Link>
            </Button>
          </div>
        </div>
      </PageTransition>
    );
  }

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % listing.images.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + listing.images.length) % listing.images.length);
  };

  return (
    <PageTransition>
      <SEOHead 
        title={listing.title[i18n.language]}
        description={listing.shortDescription[i18n.language]}
        image={listing.images[0]}
        keywords={`${listing.category}, ${listing.location}, Morocco travel`}
      />
      
      <div className="min-h-screen">
        {/* Breadcrumb */}
        <div className="bg-muted/30 py-4">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center space-x-2 text-sm">
              <Link to="/listings" className="text-muted-foreground hover:text-foreground transition-colors">
                {t('common:listings')}
              </Link>
              <span className="text-muted-foreground">/</span>
              <span className="text-foreground truncate">{listing.title[i18n.language]}</span>
            </div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          {/* Back Button */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4 }}
          >
            <Button variant="ghost" asChild className="mb-6">
              <Link to="/listings">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Listings
              </Link>
            </Button>
          </motion.div>

          {/* Header */}
          <motion.div 
            className="space-y-4 mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <div className="flex items-start justify-between">
              <div className="space-y-2">
                <div className="flex items-center space-x-2">
                  <Badge variant="secondary">{t(`categories.${listing.category}`)}</Badge>
                  {listing.featured && <Badge>Featured</Badge>}
                </div>
                <h1 className="text-3xl sm:text-4xl font-bold">{listing.title[i18n.language]}</h1>
                <div className="flex items-center space-x-4 text-muted-foreground">
                  <div className="flex items-center space-x-1">
                    <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    <span className="font-medium">{listing.rating}</span>
                    <span>({listing.reviewCount} reviews)</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <MapPin className="w-4 h-4" />
                    <span>{listing.location}</span>
                  </div>
                </div>
              </div>
              
              <div className="flex items-center space-x-2">
                <Button variant="ghost" size="icon">
                  <Heart className="w-5 h-5" />
                </Button>
                <Button variant="ghost" size="icon">
                  <Share2 className="w-5 h-5" />
                </Button>
              </div>
            </div>
          </motion.div>

          {/* Image Gallery */}
          <motion.div 
            className="mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="relative">
              <div className="aspect-video bg-muted rounded-lg overflow-hidden">
                {listing.images[currentImageIndex] ? (
                  <img 
                    src={listing.images[currentImageIndex]} 
                    alt={listing.title[i18n.language]}
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <div className="w-full h-full bg-gradient-to-br from-primary/20 to-primary/40 flex items-center justify-center">
                    <span className="text-muted-foreground">Image {currentImageIndex + 1}</span>
                  </div>
                )}
              </div>
              
              {listing.images.length > 1 && (
                <>
                  <Button
                    variant="ghost"
                    size="icon"
                    className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/80 backdrop-blur-sm hover:bg-white/90"
                    onClick={prevImage}
                  >
                    <ChevronLeft className="w-5 h-5" />
                  </Button>
                  <Button
                    variant="ghost"
                    size="icon"
                    className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/80 backdrop-blur-sm hover:bg-white/90"
                    onClick={nextImage}
                  >
                    <ChevronRight className="w-5 h-5" />
                  </Button>
                  
                  <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
                    {listing.images.map((_, index) => (
                      <button
                        key={index}
                        onClick={() => setCurrentImageIndex(index)}
                        className={`w-2 h-2 rounded-full transition-colors ${
                          index === currentImageIndex ? 'bg-white' : 'bg-white/50'
                        }`}
                      />
                    ))}
                  </div>
                </>
              )}
            </div>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-8">
              {/* Description */}
              <motion.div 
                className="space-y-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                <h2 className="text-2xl font-semibold">About this place</h2>
                <p className="text-muted-foreground leading-relaxed text-lg">
                  {listing.description[i18n.language]}
                </p>
              </motion.div>

              <Separator />

              {/* Amenities */}
              <motion.div 
                className="space-y-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                <h2 className="text-2xl font-semibold">What this place offers</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {listing.amenities.map((amenity, index) => (
                    <motion.div 
                      key={index} 
                      className="flex items-center space-x-3 p-3 rounded-lg hover:bg-accent/50 transition-colors"
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.4, delay: 0.5 + index * 0.05 }}
                    >
                      <CheckCircle className="w-5 h-5 text-primary" />
                      <span>{amenity}</span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </div>

            {/* Booking Card */}
            <div className="lg:col-span-1">
              <motion.div
                className="sticky top-8"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                <Card className="floating-card">
                  <CardContent className="p-6 space-y-6">
                    <div className="text-center">
                      <div className="text-3xl font-bold">${listing.price}</div>
                      <div className="text-muted-foreground">{listing.priceUnit}</div>
                    </div>

                    <div className="space-y-4">
                      <div className="grid grid-cols-2 gap-2">
                        <div className="p-3 border rounded-lg">
                          <div className="text-xs text-muted-foreground">Check-in</div>
                          <div className="text-sm">Add dates</div>
                        </div>
                        <div className="p-3 border rounded-lg">
                          <div className="text-xs text-muted-foreground">Check-out</div>
                          <div className="text-sm">Add dates</div>
                        </div>
                      </div>
                      
                      <div className="p-3 border rounded-lg">
                        <div className="text-xs text-muted-foreground">Guests</div>
                        <div className="text-sm">1 guest</div>
                      </div>
                    </div>

                    <Button 
                      className="w-full btn-primary-glow" 
                      size="lg"
                      onClick={() => setShowBookingModal(true)}
                    >
                      {t('common:bookNow')}
                    </Button>

                    <p className="text-center text-sm text-muted-foreground">
                      You won't be charged yet
                    </p>

                    <div className="space-y-3 text-sm">
                      <div className="flex justify-between">
                        <span>${listing.price} x 5 nights</span>
                        <span>${listing.price * 5}</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Service fee</span>
                        <span>${Math.round(listing.price * 5 * 0.1)}</span>
                      </div>
                      <Separator />
                      <div className="flex justify-between font-semibold">
                        <span>Total</span>
                        <span>${listing.price * 5 + Math.round(listing.price * 5 * 0.1)}</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </div>
          </div>
        </div>

        <BookingModal
          isOpen={showBookingModal}
          onClose={() => setShowBookingModal(false)}
          listing={listing}
        />
      </div>
    </PageTransition>
  );
};

export default ListingDetail;