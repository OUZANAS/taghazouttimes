import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import { Search, MapPin, Calendar, Users, Filter } from 'lucide-react';
import { Button } from './button';
import { Input } from './input';
import { Card, CardContent } from './card';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './select';

interface SearchFormProps {
  variant?: 'default' | 'floating';
  className?: string;
}

export const SearchForm: React.FC<SearchFormProps> = ({ 
  variant = 'default', 
  className = '' 
}) => {
  const { t } = useTranslation('common');
  const navigate = useNavigate();
  const [searchData, setSearchData] = useState({
    query: '',
    location: '',
    checkIn: '',
    checkOut: '',
    guests: 2,
    category: 'all'
  });

  const isFloating = variant === 'floating';

  const handleSearch = () => {
    const params = new URLSearchParams();
    if (searchData.query) params.set('q', searchData.query);
    if (searchData.location) params.set('location', searchData.location);
    if (searchData.category !== 'all') params.set('category', searchData.category);
    
    navigate(`/listings?${params.toString()}`);
  };

  const locations = ['Taghazout', 'Marrakech', 'Fes', 'Essaouira', 'Merzouga'];
  const categories = [
    { value: 'all', label: 'All Types' },
    { value: 'accommodation', label: 'Accommodation' },
    { value: 'activity', label: 'Activities' },
    { value: 'surf-lesson', label: 'Surf Lessons' },
    { value: 'tour', label: 'Tours' }
  ];
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.3 }}
      className={className}
    >
      <Card className={`${isFloating ? 'floating-card' : ''} shadow-xl border-0`}>
        <CardContent className="p-6">
          <div className="grid grid-cols-1 md:grid-cols-6 gap-4">
            <div className="space-y-2 md:col-span-2">
              <label className="text-sm font-medium text-muted-foreground flex items-center gap-2">
                <Search className="w-4 h-4" />
                {t('search')}
              </label>
              <Input 
                placeholder="What are you looking for?" 
                value={searchData.query}
                onChange={(e) => setSearchData(prev => ({ ...prev, query: e.target.value }))}
                className="border-0 bg-muted/50 focus:bg-background transition-colors"
              />
            </div>
            
            <div className="space-y-2">
              <label className="text-sm font-medium text-muted-foreground flex items-center gap-2">
                <MapPin className="w-4 h-4" />
                Location
              </label>
              <Select value={searchData.location} onValueChange={(value) => setSearchData(prev => ({ ...prev, location: value }))}>
                <SelectTrigger className="border-0 bg-muted/50 focus:bg-background">
                  <SelectValue placeholder="Where?" />
                </SelectTrigger>
                <SelectContent>
                  {locations.map(location => (
                    <SelectItem key={location} value={location}>{location}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            
            <div className="space-y-2">
              <label className="text-sm font-medium text-muted-foreground flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                Check-in
              </label>
              <Input 
                type="date" 
                value={searchData.checkIn}
                onChange={(e) => setSearchData(prev => ({ ...prev, checkIn: e.target.value }))}
                className="border-0 bg-muted/50 focus:bg-background transition-colors"
              />
            </div>
            
            <div className="space-y-2">
              <label className="text-sm font-medium text-muted-foreground flex items-center gap-2">
                <Users className="w-4 h-4" />
                Guests
              </label>
              <Input 
                type="number" 
                placeholder="2 guests" 
                min="1"
                value={searchData.guests}
                onChange={(e) => setSearchData(prev => ({ ...prev, guests: parseInt(e.target.value) || 2 }))}
                className="border-0 bg-muted/50 focus:bg-background transition-colors"
              />
            </div>
            
            <div className="flex items-end">
              <Button 
                onClick={handleSearch}
                variant="glow" 
                size="lg" 
                className="w-full"
              >
                <Search className="w-4 h-4 mr-2" />
                {t('search')}
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
};