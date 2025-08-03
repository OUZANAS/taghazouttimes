
import { useState } from 'react';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Search, Filter, MapPin, Star, Users, Wifi, Car, Coffee } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const Listings = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedLocation, setSelectedLocation] = useState('all');

  const listings = [
    {
      id: 1,
      slug: 'ocean-view-villa-taghazout',
      title: 'Ocean View Villa Taghazout',
      category: 'accommodation',
      location: 'Taghazout, Morocco',
      price: 120,
      rating: 4.8,
      reviews: 124,
      capacity: 6,
      image: '/placeholder.svg',
      amenities: ['wifi', 'parking', 'coffee'],
      featured: true,
    },
    {
      id: 2,
      slug: 'beginner-surf-lessons-agadir',
      title: 'Beginner Surf Lessons',
      category: 'surf',
      location: 'Agadir, Morocco',
      price: 35,
      rating: 4.9,
      reviews: 89,
      capacity: 8,
      image: '/placeholder.svg',
      amenities: ['equipment', 'instructor', 'transport'],
      featured: false,
    },
    {
      id: 3,
      slug: 'desert-adventure-tour-marrakech',
      title: 'Desert Adventure Tour',
      category: 'tours',
      location: 'Marrakech, Morocco',
      price: 85,
      rating: 4.7,
      reviews: 156,
      capacity: 12,
      image: '/placeholder.svg',
      amenities: ['meals', 'transport', 'guide'],
      featured: true,
    },
    {
      id: 4,
      slug: 'yoga-retreat-essaouira',
      title: 'Yoga Retreat Essaouira',
      category: 'wellness',
      location: 'Essaouira, Morocco',
      price: 95,
      rating: 5.0,
      reviews: 43,
      capacity: 15,
      image: '/placeholder.svg',
      amenities: ['meals', 'mats', 'meditation'],
      featured: false,
    },
    {
      id: 5,
      slug: 'traditional-riad-marrakech',
      title: 'Traditional Riad Experience',
      category: 'accommodation',
      location: 'Marrakech, Morocco',
      price: 160,
      rating: 4.6,
      reviews: 78,
      capacity: 4,
      image: '/placeholder.svg',
      amenities: ['wifi', 'breakfast', 'spa'],
      featured: false,
    },
    {
      id: 6,
      slug: 'fishing-trip-essaouira',
      title: 'Deep Sea Fishing Trip',
      category: 'tours',
      location: 'Essaouira, Morocco',
      price: 65,
      rating: 4.4,
      reviews: 92,
      capacity: 10,
      image: '/placeholder.svg',
      amenities: ['equipment', 'lunch', 'guide'],
      featured: false,
    },
  ];

  const categories = [
    { value: 'all', label: 'All Categories' },
    { value: 'accommodation', label: 'Accommodation' },
    { value: 'surf', label: 'Surf Lessons' },
    { value: 'tours', label: 'Tours & Activities' },
    { value: 'wellness', label: 'Wellness' },
  ];

  const locations = [
    { value: 'all', label: 'All Locations' },
    { value: 'taghazout', label: 'Taghazout' },
    { value: 'agadir', label: 'Agadir' },
    { value: 'marrakech', label: 'Marrakech' },
    { value: 'essaouira', label: 'Essaouira' },
  ];

  const filteredListings = listings.filter(listing => {
    const matchesSearch = listing.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         listing.location.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || listing.category === selectedCategory;
    const matchesLocation = selectedLocation === 'all' || 
                           listing.location.toLowerCase().includes(selectedLocation);
    
    return matchesSearch && matchesCategory && matchesLocation;
  });

  const getAmenityIcon = (amenity: string) => {
    switch (amenity) {
      case 'wifi': return Wifi;
      case 'parking': return Car;
      case 'coffee': return Coffee;
      default: return Users;
    }
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-background via-background to-muted/30 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center space-y-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Badge variant="secondary">Discover Amazing Experiences</Badge>
            <h1 className="text-4xl sm:text-6xl font-bold tracking-tight">
              Find Your Perfect
              <span className="bg-gradient-to-r from-primary to-primary/80 bg-clip-text text-transparent">
                {' '}Experience
              </span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Browse through hundreds of curated accommodations, surf lessons, tours, and unique experiences
            </p>
          </motion.div>
        </div>
      </section>

      {/* Filters */}
      <section className="py-8 bg-muted/30 border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-4 items-center">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
              <Input
                placeholder="Search for experiences, locations..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10"
              />
            </div>
            
            <Select value={selectedCategory} onValueChange={setSelectedCategory}>
              <SelectTrigger className="w-full lg:w-48">
                <SelectValue placeholder="Category" />
              </SelectTrigger>
              <SelectContent>
                {categories.map((category) => (
                  <SelectItem key={category.value} value={category.value}>
                    {category.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>

            <Select value={selectedLocation} onValueChange={setSelectedLocation}>
              <SelectTrigger className="w-full lg:w-48">
                <SelectValue placeholder="Location" />
              </SelectTrigger>
              <SelectContent>
                {locations.map((location) => (
                  <SelectItem key={location.value} value={location.value}>
                    {location.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>

            <Button variant="outline" size="icon">
              <Filter className="w-4 h-4" />
            </Button>
          </div>
        </div>
      </section>

      {/* Listings Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-8">
            <p className="text-muted-foreground">
              Showing {filteredListings.length} of {listings.length} results
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredListings.map((listing, index) => (
              <motion.div
                key={listing.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Link to={`/listings/${listing.slug}`}>
                  <Card className="group hover:shadow-xl transition-all duration-300 overflow-hidden">
                    <div className="relative">
                      <div className="aspect-video bg-muted flex items-center justify-center overflow-hidden">
                        <div className="w-full h-full bg-gradient-to-br from-primary/20 to-primary/40 flex items-center justify-center">
                          <span className="text-muted-foreground">Image Preview</span>
                        </div>
                      </div>
                      {listing.featured && (
                        <Badge className="absolute top-3 left-3">Featured</Badge>
                      )}
                      <div className="absolute top-3 right-3 bg-background/80 rounded-lg px-2 py-1">
                        <span className="text-sm font-semibold">${listing.price}</span>
                      </div>
                    </div>
                    
                    <CardContent className="p-6 space-y-4">
                      <div className="space-y-2">
                        <h3 className="text-xl font-semibold group-hover:text-primary transition-colors">
                          {listing.title}
                        </h3>
                        <div className="flex items-center space-x-1 text-sm text-muted-foreground">
                          <MapPin className="w-3 h-3" />
                          <span>{listing.location}</span>
                        </div>
                      </div>

                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-1">
                          <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                          <span className="text-sm font-medium">{listing.rating}</span>
                          <span className="text-sm text-muted-foreground">({listing.reviews})</span>
                        </div>
                        <div className="flex items-center space-x-1 text-sm text-muted-foreground">
                          <Users className="w-3 h-3" />
                          <span>Up to {listing.capacity}</span>
                        </div>
                      </div>

                      <div className="flex items-center space-x-2">
                        {listing.amenities.slice(0, 3).map((amenity, idx) => {
                          const IconComponent = getAmenityIcon(amenity);
                          return (
                            <div key={idx} className="p-1 bg-muted rounded">
                              <IconComponent className="w-3 h-3 text-muted-foreground" />
                            </div>
                          );
                        })}
                        {listing.amenities.length > 3 && (
                          <span className="text-xs text-muted-foreground">+{listing.amenities.length - 3} more</span>
                        )}
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              </motion.div>
            ))}
          </div>

          {filteredListings.length === 0 && (
            <div className="text-center py-12">
              <p className="text-xl text-muted-foreground">No results found for your search criteria.</p>
              <Button 
                variant="outline" 
                className="mt-4"
                onClick={() => {
                  setSearchQuery('');
                  setSelectedCategory('all');
                  setSelectedLocation('all');
                }}
              >
                Clear Filters
              </Button>
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default Listings;
