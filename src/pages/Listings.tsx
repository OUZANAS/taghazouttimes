import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { useSearchParams } from 'react-router-dom';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { ListingsGrid } from '@/components/sections/ListingsGrid';
import { SEOHead } from '@/components/ui/seo-head';
import { PageTransition } from '@/components/ui/page-transition';
import { Search, Filter, SlidersHorizontal } from 'lucide-react';
import { mockListings } from '@/data/mockData';
import { Listing, SearchFilters } from '@/types';

const Listings = () => {
  const { t, i18n } = useTranslation(['listings', 'common']);
  const [searchParams, setSearchParams] = useSearchParams();
  
  const [filters, setFilters] = useState<SearchFilters>({
    query: searchParams.get('q') || '',
    category: searchParams.get('category') || 'all',
    location: searchParams.get('location') || 'all',
    sortBy: (searchParams.get('sort') as any) || 'featured'
  });
  
  const [listings, setListings] = useState<Listing[]>([]);
  const [loading, setLoading] = useState(false);

  const locations = ['all', 'Taghazout', 'Marrakech', 'Fes', 'Essaouira', 'Merzouga', 'High Atlas'];
  const categories = ['all', 'accommodation', 'activity', 'surf-lesson', 'tour', 'rental'];
  const sortOptions = [
    { value: 'featured', label: 'Featured First' },
    { value: 'rating', label: 'Highest Rated' },
    { value: 'price', label: 'Price: Low to High' },
    { value: 'newest', label: 'Newest First' }
  ];

  // Update URL params when filters change
  useEffect(() => {
    const params = new URLSearchParams();
    if (filters.query) params.set('q', filters.query);
    if (filters.category && filters.category !== 'all') params.set('category', filters.category);
    if (filters.location && filters.location !== 'all') params.set('location', filters.location);
    if (filters.sortBy && filters.sortBy !== 'featured') params.set('sort', filters.sortBy);
    
    setSearchParams(params);
  }, [filters, setSearchParams]);

  // Filter and sort listings
  useEffect(() => {
    setLoading(true);
    
    // Simulate API call delay
    setTimeout(() => {
      let filtered = mockListings.filter(listing => {
        const matchesQuery = !filters.query || 
          listing.title[i18n.language].toLowerCase().includes(filters.query.toLowerCase()) ||
          listing.description[i18n.language].toLowerCase().includes(filters.query.toLowerCase());
        
        const matchesCategory = !filters.category || filters.category === 'all' || 
          listing.category === filters.category;
        
        const matchesLocation = !filters.location || filters.location === 'all' || 
          listing.location.includes(filters.location);
        
        return matchesQuery && matchesCategory && matchesLocation;
      });

      // Sort listings
      filtered.sort((a, b) => {
        switch (filters.sortBy) {
          case 'price':
            return a.price - b.price;
          case 'rating':
            return b.rating - a.rating;
          case 'newest':
            return new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime();
          case 'featured':
          default:
            return (b.featured ? 1 : 0) - (a.featured ? 1 : 0);
        }
      });

      setListings(filtered);
      setLoading(false);
    }, 500);
  }, [filters, i18n.language]);

  const updateFilter = (key: keyof SearchFilters, value: any) => {
    setFilters(prev => ({ ...prev, [key]: value }));
  };

  const clearFilters = () => {
    setFilters({
      query: '',
      category: 'all',
      location: 'all',
      sortBy: 'featured'
    });
  };

  return (
    <PageTransition>
      <SEOHead 
        title={t('title')}
        description={t('subtitle')}
        keywords="Morocco accommodation, surf lessons, activities, tours, rentals"
      />
      
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
              {t('title')}
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
              {t('subtitle')}
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
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
                {/* Search Input */}
                <div className="relative lg:col-span-2">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
                  <Input
                    placeholder={t('searchPlaceholder')}
                    value={filters.query}
                    onChange={(e) => updateFilter('query', e.target.value)}
                    className="pl-10"
                  />
                </div>

                {/* Category Filter */}
                <Select value={filters.category} onValueChange={(value) => updateFilter('category', value)}>
                  <SelectTrigger>
                    <SelectValue placeholder={t('categories.all')} />
                  </SelectTrigger>
                  <SelectContent>
                    {categories.map(category => (
                      <SelectItem key={category} value={category}>
                        {t(`categories.${category}`)}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>

                {/* Location Filter */}
                <Select value={filters.location} onValueChange={(value) => updateFilter('location', value)}>
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

                {/* Sort By */}
                <Select value={filters.sortBy} onValueChange={(value) => updateFilter('sortBy', value)}>
                  <SelectTrigger>
                    <SelectValue placeholder="Sort by" />
                  </SelectTrigger>
                  <SelectContent>
                    {sortOptions.map(option => (
                      <SelectItem key={option.value} value={option.value}>
                        {option.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              {/* Active Filters */}
              {(filters.query || filters.category !== 'all' || filters.location !== 'all') && (
                <div className="flex items-center gap-2 mt-4 pt-4 border-t">
                  <span className="text-sm text-muted-foreground">Active filters:</span>
                  {filters.query && (
                    <Badge variant="secondary">Search: {filters.query}</Badge>
                  )}
                  {filters.category !== 'all' && (
                    <Badge variant="secondary">Category: {t(`categories.${filters.category}`)}</Badge>
                  )}
                  {filters.location !== 'all' && (
                    <Badge variant="secondary">Location: {filters.location}</Badge>
                  )}
                  <Button variant="ghost" size="sm" onClick={clearFilters}>
                    {t('clearFilters')}
                  </Button>
                </div>
              )}
            </motion.div>

            {/* Results Count */}
            <div className="flex justify-between items-center mb-6">
              <p className="text-muted-foreground">
                {t('showingResults', { count: listings.length, total: mockListings.length })}
              </p>
            </div>

            {/* Listings Grid */}
            <ListingsGrid listings={listings} loading={loading} />
          </div>
        </section>
      </div>
    </PageTransition>
  );
};

export default Listings;