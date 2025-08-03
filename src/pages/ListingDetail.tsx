
import { useParams, Link } from 'react-router-dom';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
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
  CheckCircle
} from 'lucide-react';
import { motion } from 'framer-motion';

const ListingDetail = () => {
  const { slug } = useParams();

  // Mock data - in real app, this would be fetched based on slug
  const listing = {
    id: 1,
    slug: 'ocean-view-villa-taghazout',
    title: 'Ocean View Villa Taghazout',
    category: 'accommodation',
    location: 'Taghazout, Morocco',
    price: 120,
    rating: 4.8,
    reviews: 124,
    capacity: 6,
    description: 'Experience the ultimate beachfront getaway in this stunning villa overlooking the Atlantic Ocean. Perfect for families and groups seeking comfort, style, and proximity to world-class surf breaks.',
    fullDescription: `This beautiful ocean-view villa offers the perfect blend of traditional Moroccan architecture and modern amenities. Located just steps from the beach in Taghazout, you'll wake up to breathtaking sunrise views over the Atlantic Ocean.

The villa features spacious bedrooms, a fully equipped kitchen, and a large terrace perfect for enjoying meals with panoramic ocean views. The property is ideally located within walking distance of Taghazout's best surf spots, restaurants, and cafes.

Whether you're here to surf, relax, or explore the rich culture of Morocco, this villa provides the perfect base for your adventure.`,
    amenities: [
      { name: 'High-speed WiFi', icon: Wifi },
      { name: 'Free Parking', icon: Car },
      { name: 'Coffee Machine', icon: Coffee },
      { name: 'Ocean View', icon: MapPin },
      { name: 'Beach Access', icon: Users },
      { name: '24/7 Support', icon: CheckCircle },
    ],
    images: ['/placeholder.svg', '/placeholder.svg', '/placeholder.svg', '/placeholder.svg'],
    host: {
      name: 'Ahmed Bennani',
      rating: 4.9,
      reviews: 234,
      joinDate: 'June 2020',
      description: 'Local surf instructor and property manager with years of hospitality experience.',
    },
    reviews: [
      {
        name: 'Sarah Johnson',
        rating: 5,
        date: '2 weeks ago',
        comment: 'Absolutely amazing villa with stunning ocean views! Ahmed was incredibly helpful and responsive. The location is perfect for surfing and exploring Taghazout.',
      },
      {
        name: 'Mike Chen',
        rating: 5,
        date: '1 month ago',
        comment: 'Perfect for our group surf trip. Clean, spacious, and the terrace views are incredible. Would definitely stay again!',
      },
    ],
  };

  if (!listing) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Listing not found</h1>
          <Link to="/listings">
            <Button variant="outline">Back to Listings</Button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      {/* Breadcrumb */}
      <div className="bg-muted/30 py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center space-x-2 text-sm">
            <Link to="/listings" className="text-muted-foreground hover:text-foreground">
              Listings
            </Link>
            <span className="text-muted-foreground">/</span>
            <span className="text-foreground">{listing.title}</span>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Back Button */}
        <Button variant="ghost" asChild className="mb-6">
          <Link to="/listings">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Listings
          </Link>
        </Button>

        {/* Header */}
        <div className="space-y-4 mb-8">
          <div className="flex items-start justify-between">
            <div className="space-y-2">
              <div className="flex items-center space-x-2">
                <Badge variant="secondary">{listing.category}</Badge>
              </div>
              <h1 className="text-3xl sm:text-4xl font-bold">{listing.title}</h1>
              <div className="flex items-center space-x-4 text-muted-foreground">
                <div className="flex items-center space-x-1">
                  <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  <span className="font-medium">{listing.rating}</span>
                  <span>({listing.reviews} reviews)</span>
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
        </div>

        {/* Image Gallery */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-12">
          <div className="md:col-span-2">
            <div className="aspect-video bg-muted rounded-lg overflow-hidden">
              <div className="w-full h-full bg-gradient-to-br from-primary/20 to-primary/40 flex items-center justify-center">
                <span className="text-muted-foreground">Main Image</span>
              </div>
            </div>
          </div>
          <div className="md:col-span-2 grid grid-cols-2 gap-4">
            {listing.images.slice(1, 5).map((_, index) => (
              <div key={index} className="aspect-square bg-muted rounded-lg overflow-hidden">
                <div className="w-full h-full bg-gradient-to-br from-primary/10 to-primary/30 flex items-center justify-center">
                  <span className="text-sm text-muted-foreground">Image {index + 2}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Description */}
            <div className="space-y-4">
              <h2 className="text-2xl font-semibold">About this place</h2>
              <p className="text-muted-foreground leading-relaxed">{listing.description}</p>
              <p className="text-muted-foreground leading-relaxed">{listing.fullDescription}</p>
            </div>

            <Separator />

            {/* Amenities */}
            <div className="space-y-4">
              <h2 className="text-2xl font-semibold">What this place offers</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {listing.amenities.map((amenity, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <amenity.icon className="w-5 h-5 text-primary" />
                    <span>{amenity.name}</span>
                  </div>
                ))}
              </div>
            </div>

            <Separator />

            {/* Host Info */}
            <div className="space-y-4">
              <h2 className="text-2xl font-semibold">Meet your host</h2>
              <div className="flex items-start space-x-4">
                <div className="w-16 h-16 bg-muted rounded-full flex items-center justify-center">
                  <Users className="w-8 h-8 text-muted-foreground" />
                </div>
                <div className="space-y-2">
                  <h3 className="text-xl font-semibold">{listing.host.name}</h3>
                  <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                    <span>{listing.host.rating} ⭐ ({listing.host.reviews} reviews)</span>
                    <span>Joined {listing.host.joinDate}</span>
                  </div>
                  <p className="text-muted-foreground">{listing.host.description}</p>
                </div>
              </div>
            </div>

            <Separator />

            {/* Reviews */}
            <div className="space-y-6">
              <h2 className="text-2xl font-semibold">Reviews</h2>
              <div className="space-y-6">
                {listing.reviews.map((review, index) => (
                  <div key={index} className="space-y-3">
                    <div className="flex items-start justify-between">
                      <div className="flex items-center space-x-3">
                        <div className="w-10 h-10 bg-muted rounded-full flex items-center justify-center">
                          <span className="text-sm font-medium">{review.name.charAt(0)}</span>
                        </div>
                        <div>
                          <p className="font-medium">{review.name}</p>
                          <p className="text-sm text-muted-foreground">{review.date}</p>
                        </div>
                      </div>
                      <div className="flex items-center space-x-1">
                        {[...Array(review.rating)].map((_, i) => (
                          <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                        ))}
                      </div>
                    </div>
                    <p className="text-muted-foreground">{review.comment}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Booking Card */}
          <div className="lg:col-span-1">
            <motion.div
              className="sticky top-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <Card>
                <CardContent className="p-6 space-y-6">
                  <div className="text-center">
                    <div className="text-3xl font-bold">${listing.price}</div>
                    <div className="text-muted-foreground">per night</div>
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

                  <Button className="w-full" size="lg">
                    Reserve Now
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
    </div>
  );
};

export default ListingDetail;
