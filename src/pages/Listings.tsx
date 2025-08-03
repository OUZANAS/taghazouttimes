
import { useState } from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { ArrowRight, Star, MapPin, Users, Wifi, Car, Coffee, Search, Filter, Heart, Camera } from 'lucide-react';
import { Link } from 'react-router-dom';

const Listings = () => {
  const { t } = useTranslation(['listings', 'common']);
  
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedLocation, setSelectedLocation] = useState('all');
  const [selectedType, setSelectedType] = useState('all');
  const [sortBy, setSortBy] = useState('featured');

  const listings = [
    {
      id: 'surf-school-taghazout',
      slug: 'surf-school-taghazout',
      title: 'Atlantic Surf Academy',
      description: 'Professional surf school in Taghazout offering lessons for all levels. Experience the best waves of Morocco\'s Atlantic coast.',
      location: 'Taghazout, Morocco',
      type: 'Surf School',
      price: '$45',
      priceUnit: 'per lesson',
      rating: 4.9,
      reviews: 234,
      featured: true,
      image: '/placeholder.svg?height=300&width=400&text=Surf+School',
      amenities: ['Equipment Included', 'All Levels Welcome', 'Certified Instructors'],
      images: [
        '/placeholder.svg?height=300&width=400&text=Surf+Lesson+1',
        '/placeholder.svg?height=300&width=400&text=Surf+Lesson+2',
        '/placeholder.svg?height=300&width=400&text=Surf+Equipment'
      ]
    },
    {
      id: 'riad-marrakech-luxury',
      slug: 'riad-marrakech-luxury',
      title: 'Riad Al Baraka',
      description: 'Traditional luxury riad in the heart of Marrakech medina. Authentic architecture with modern comfort and rooftop terrace.',
      location: 'Marrakech, Morocco',
      type: 'Accommodation',
      price: '$120',
      priceUnit: 'per night',
      rating: 4.8,
      reviews: 156,
      featured: true,
      image: '/placeholder.svg?height=300&width=400&text=Luxury+Riad',
      amenities: ['Free WiFi', 'Rooftop Terrace', 'Traditional Hammam'],
      images: [
        '/placeholder.svg?height=300&width=400&text=Riad+Courtyard',
        '/placeholder.svg?height=300&width=400&text=Riad+Room',
        '/placeholder.svg?height=300&width=400&text=Riad+Terrace'
      ]
    },
    {
      id: 'atlas-mountain-trek',
      slug: 'atlas-mountain-trek',
      title: 'Atlas Mountain Adventures',
      description: 'Guided trekking experiences in the High Atlas Mountains. Discover Berber villages and stunning mountain landscapes.',
      location: 'High Atlas, Morocco',
      type: 'Tour Operator',
      price: '$85',
      priceUnit: 'per day',
      rating: 4.7,
      reviews: 89,
      featured: false,
      image: '/placeholder.svg?height=300&width=400&text=Mountain+Trek',
      amenities: ['Local Guides', 'Mountain Equipment', 'Traditional Meals'],
      images: [
        '/placeholder.svg?height=300&width=400&text=Mountain+View',
        '/placeholder.svg?height=300&width=400&text=Berber+Village',
        '/placeholder.svg?height=300&width=400&text=Trek+Group'
      ]
    },
    {
      id: 'cooking-class-fes',
      slug: 'cooking-class-fes',
      title: 'Moroccan Culinary Experience',
      description: 'Learn authentic Moroccan cooking with local families in Fes. Market visit and hands-on cooking in traditional kitchen.',
      location: 'Fes, Morocco',
      type: 'Activity',
      price: '$65',
      priceUnit: 'per person',
      rating: 4.9,
      reviews: 127,
      featured: false,
      image: '/placeholder.svg?height=300&width=400&text=Cooking+Class',
      amenities: ['Market Tour', 'Recipe Book', 'Traditional Ingredients'],
      images: [
        '/placeholder.svg?height=300&width=400&text=Market+Visit',
        '/placeholder.svg?height=300&width=400&text=Cooking+Kitchen',
        '/placeholder.svg?height=300&width=400&text=Moroccan+Dishes'
      ]
    },
    {
      id: 'desert-camp-merzouga',
      slug: 'desert-camp-merzouga',
      title: 'Sahara Luxury Desert Camp',
      description: 'Luxury desert camping experience in Erg Chebbi dunes. Camel trekking, traditional music, and star gazing.',
      location: 'Merzouga, Morocco',
      type: 'Accommodation',
      price: '$180',
      priceUnit: 'per night',
      rating: 4.8,
      reviews: 203,
      featured: true,
      image: '/placeholder.svg?height=300&width=400&text=Desert+Camp',
      amenities: ['Camel Trekking', 'Traditional Dinner', 'Star Gazing'],
      images: [
        '/placeholder.svg?height=300&width=400&text=Desert+Dunes',
        '/placeholder.svg?height=300&width=400&text=Camel+Trek',
        '/placeholder.svg?height=300&width=400&text=Camp+Night'
      ]
    },
    {
      id: 'yoga-retreat-essaouira',
      slug: 'yoga-retreat-essaouira',
      title: 'Ocean Breeze Yoga Retreat',
      description: 'Beachfront yoga retreat in historic Essaouira. Daily yoga sessions, meditation, and wellness activities.',
      location: 'Essaouira, Morocco',
      type: 'Activity',
      price: '$95',
      priceUnit: 'per day',
      rating: 4.6,
      reviews: 76,
      featured: false,
      image: '/placeholder.svg?height=300&width=400&text=Yoga+Retreat',
      amenities: ['Beachfront Location', 'Daily Yoga', 'Healthy Meals'],
      images: [
        '/placeholder.svg?height=300&width=400&text=Beach+Yoga',
        '/placeholder.svg?height=300&width=400&text=Meditation+Space',
        '/placeholder.svg?height=300&width=400&text=Healthy+Food'
      ]
    }
  ];

  const locations = ['all', 'Marrakech', 'Taghazout', 'Fes', 'Essaouira', 'Merzouga', 'High Atlas'];
  const types = ['all', 'Accommodation', 'Activity', 'Surf School', 'Tour Operator'];

  const filteredListings = listings.filter(listing => {
    const matchesSearch = listing.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         listing.description.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesLocation = selectedLocation === 'all' || listing.location.includes(selectedLocation);
    const matchesType = selectedType === 'all' || listing.type === selectedType;
    
    return matchesSearch && matchesLocation && matchesType;
  });

  const sortedListings = [...filteredListings].sort((a, b) => {
    switch (sortBy) {
      case 'price-low':
        return parseInt(a.price.slice(1)) - parseInt(b.price.slice(1));
      case 'price-high':
        return parseInt(b.price.slice(1)) - parseInt(a.price.slice(1));
      case 'rating':
        return b.rating - a.rating;
      case 'reviews':
        return b.reviews - a.reviews;
      case 'featured':
      default:
        return b.featured ? 1 : -1;
    }
  });

  return (
    <div className="min-h-screen bg-gradient-to-br from-background to-muted/30">
      {/* Hero Section */}
      <section className="relative overflow-hidden pt-20 pb-12 lg:pt-32 lg:pb-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center"
        >
          <Badge variant="secondary" className="mb-6">
            Discover Morocco
          </Badge>
          <h1 className="text-4xl sm:text-6xl font-bold tracking-tight mb-6">
            Explore Our
            <span className="bg-gradient-to-r from-primary to-primary/80 bg-clip-text text-transparent">
              {' '}Listings
            </span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            From surf schools to luxury riads, adventure tours to cooking classes. 
            Discover authentic Moroccan experiences curated by local experts.
          </p>
        </motion.div>
      </section>

      {/* Filters Section */}
      <section className="pb-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
            className="bg-card rounded-2xl shadow-lg p-6 mb-8"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {/* Search Input */}
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
                <Input
                  placeholder="Search listings..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10"
                />
              </div>

              {/* Location Filter */}
              <Select value={selectedLocation} onValueChange={setSelectedLocation}>
                <SelectTrigger>
                  <SelectValue placeholder="All Locations" />
                </SelectTrigger>
                <SelectContent>
                  {locations.map(location => (
                    <SelectItem key={location} value={location}>
                      {location === 'all' ? 'All Locations' : location}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>

              {/* Type Filter */}
              <Select value={selectedType} onValueChange={setSelectedType}>
                <SelectTrigger>
                  <SelectValue placeholder="All Types" />
                </SelectTrigger>
                <SelectContent>
                  {types.map(type => (
                    <SelectItem key={type} value={type}>
                      {type === 'all' ? 'All Types' : type}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>

              {/* Sort By */}
              <Select value={sortBy} onValueChange={setSortBy}>
                <SelectTrigger>
                  <SelectValue placeholder="Sort by" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="featured">Featured First</SelectItem>
                  <SelectItem value="rating">Highest Rated</SelectItem>
                  <SelectItem value="reviews">Most Reviews</SelectItem>
                  <SelectItem value="price-low">Price: Low to High</SelectItem>
                  <SelectItem value="price-high">Price: High to Low</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </motion.div>

          {/* Results Count */}
          <div className="flex justify-between items-center mb-6">
            <p className="text-muted-foreground">
              Showing {sortedListings.length} of {listings.length} listings
            </p>
          </div>

          {/* Listings Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {sortedListings.map((listing, index) => (
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
                    <div className="aspect-video bg-gradient-to-br from-muted to-muted-foreground/20 flex items-center justify-center relative group-hover:scale-110 transition-transform duration-500">
                      <Camera className="w-16 h-16 text-muted-foreground/60" />
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
                      <span className="text-xs text-muted-foreground">({listing.reviews})</span>
                    </div>
                  </div>

                  <CardContent className="p-6">
                    <div className="space-y-4">
                      {/* Header */}
                      <div>
                        <div className="flex justify-between items-start mb-2">
                          <Badge variant="outline">{listing.type}</Badge>
                          <div className="text-right">
                            <div className="text-2xl font-bold text-primary">{listing.price}</div>
                            <div className="text-xs text-muted-foreground">{listing.priceUnit}</div>
                          </div>
                        </div>
                        <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">
                          {listing.title}
                        </h3>
                        <div className="flex items-center gap-1 text-sm text-muted-foreground mb-3">
                          <MapPin className="w-4 h-4" />
                          <span>{listing.location}</span>
                        </div>
                        <p className="text-muted-foreground text-sm line-clamp-2">
                          {listing.description}
                        </p>
                      </div>

                      {/* Amenities */}
                      <div className="flex flex-wrap gap-2">
                        {listing.amenities.map((amenity, idx) => (
                          <Badge key={idx} variant="secondary" className="text-xs">
                            {amenity}
                          </Badge>
                        ))}
                      </div>

                      {/* CTA */}
                      <Button asChild className="w-full group-hover:bg-primary/90 transition-colors">
                        <Link to={`/listings/${listing.slug}`}>
                          View Details
                          <ArrowRight className="ml-2 w-4 h-4" />
                        </Link>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          {sortedListings.length === 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-12"
            >
              <div className="text-6xl text-muted-foreground/50 mb-4">🔍</div>
              <h3 className="text-2xl font-semibold mb-2">No listings found</h3>
              <p className="text-muted-foreground mb-6">
                Try adjusting your search criteria or filters
              </p>
              <Button 
                onClick={() => {
                  setSearchQuery('');
                  setSelectedLocation('all');
                  setSelectedType('all');
                }}
              >
                Clear All Filters
              </Button>
            </motion.div>
          )}
        </div>
      </section>
    </div>
  );
};

export default Listings;
