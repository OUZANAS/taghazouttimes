import React from 'react';
import { motion } from 'framer-motion';
import { Search, MapPin, Calendar, Users, Filter } from 'lucide-react';
import { Button } from './button';
import { Input } from './input';
import { Card, CardContent } from './card';

interface SearchFormProps {
  variant?: 'default' | 'floating';
  className?: string;
}

export const SearchForm: React.FC<SearchFormProps> = ({ 
  variant = 'default', 
  className = '' 
}) => {
  const isFloating = variant === 'floating';
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.3 }}
      className={className}
    >
      <Card className={`${isFloating ? 'floating-card' : ''} shadow-xl border-0`}>
        <CardContent className="p-6">
          <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
            <div className="space-y-2">
              <label className="text-sm font-medium text-muted-foreground flex items-center gap-2">
                <MapPin className="w-4 h-4" />
                Destination
              </label>
              <Input 
                placeholder="Where to?" 
                className="border-0 bg-muted/50 focus:bg-background transition-colors"
              />
            </div>
            
            <div className="space-y-2">
              <label className="text-sm font-medium text-muted-foreground flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                Check-in
              </label>
              <Input 
                type="date" 
                className="border-0 bg-muted/50 focus:bg-background transition-colors"
              />
            </div>
            
            <div className="space-y-2">
              <label className="text-sm font-medium text-muted-foreground flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                Check-out
              </label>
              <Input 
                type="date" 
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
                placeholder="2 adults" 
                min="1"
                className="border-0 bg-muted/50 focus:bg-background transition-colors"
              />
            </div>
            
            <div className="flex items-end gap-2">
              <Button variant="glow" size="lg" className="flex-1">
                <Search className="w-4 h-4 mr-2" />
                Search
              </Button>
              <Button variant="outline" size="lg" className="px-3">
                <Filter className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
};