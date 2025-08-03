
import { useState } from 'react';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Search, Calendar, User, ArrowRight, TrendingUp, BookOpen, Lightbulb } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const Blog = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const blogPosts = [
    {
      id: 1,
      slug: 'boost-booking-rates-2024',
      title: '10 Proven Strategies to Boost Your Booking Rates in 2024',
      excerpt: 'Discover the latest techniques successful service providers use to increase their bookings and revenue.',
      category: 'business',
      author: 'Sarah Mitchell',
      date: '2024-01-15',
      readTime: '8 min read',
      featured: true,
      image: '/placeholder.svg',
    },
    {
      id: 2,
      slug: 'surf-school-digital-transformation',
      title: 'How Surf Schools Are Embracing Digital Transformation',
      excerpt: 'Learn how traditional surf schools are leveraging technology to attract more students and streamline operations.',
      category: 'case-study',
      author: 'Ahmed El Mansouri',
      date: '2024-01-12',
      readTime: '6 min read',
      featured: false,
      image: '/placeholder.svg',
    },
    {
      id: 3,
      slug: 'multilingual-websites-hospitality',
      title: 'The Power of Multilingual Websites in Hospitality',
      excerpt: 'Why supporting multiple languages can dramatically increase your international bookings.',
      category: 'marketing',
      author: 'Lisa Chen',
      date: '2024-01-10',
      readTime: '5 min read',
      featured: true,
      image: '/placeholder.svg',
    },
    {
      id: 4,
      slug: 'mobile-booking-optimization',
      title: 'Mobile-First Booking: Essential for Modern Travelers',
      excerpt: 'Statistics show that 70% of travelers book on mobile. Here\'s how to optimize your booking flow.',
      category: 'technology',
      author: 'Marcus Thompson',
      date: '2024-01-08',
      readTime: '7 min read',
      featured: false,
      image: '/placeholder.svg',
    },
    {
      id: 5,
      slug: 'seasonal-pricing-strategies',
      title: 'Seasonal Pricing Strategies That Actually Work',
      excerpt: 'Master the art of dynamic pricing to maximize revenue during peak and off-peak seasons.',
      category: 'business',
      author: 'Elena Rodriguez',
      date: '2024-01-05',
      readTime: '9 min read',
      featured: false,
      image: '/placeholder.svg',
    },
    {
      id: 6,
      slug: 'guest-review-management',
      title: 'Turning Negative Reviews into Positive Outcomes',
      excerpt: 'A comprehensive guide to managing guest feedback and building a stellar online reputation.',
      category: 'marketing',
      author: 'David Park',
      date: '2024-01-03',
      readTime: '6 min read',
      featured: false,
      image: '/placeholder.svg',
    },
  ];

  const categories = [
    { value: 'all', label: 'All Categories' },
    { value: 'business', label: 'Business Tips' },
    { value: 'marketing', label: 'Marketing' },
    { value: 'technology', label: 'Technology' },
    { value: 'case-study', label: 'Case Studies' },
  ];

  const featuredPosts = blogPosts.filter(post => post.featured);
  const regularPosts = blogPosts.filter(post => !post.featured);

  const filteredPosts = [...featuredPosts, ...regularPosts].filter(post => {
    const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         post.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || post.category === selectedCategory;
    
    return matchesSearch && matchesCategory;
  });

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'business': return TrendingUp;
      case 'marketing': return Lightbulb;
      case 'technology': return BookOpen;
      default: return BookOpen;
    }
  };

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'business': return 'from-blue-500 to-blue-600';
      case 'marketing': return 'from-green-500 to-green-600';
      case 'technology': return 'from-purple-500 to-purple-600';
      case 'case-study': return 'from-orange-500 to-orange-600';
      default: return 'from-gray-500 to-gray-600';
    }
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-background via-background to-muted/30 py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center space-y-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Badge variant="secondary">SaaSify Blog</Badge>
            <h1 className="text-4xl sm:text-6xl font-bold tracking-tight">
              Insights & Tips for
              <span className="bg-gradient-to-r from-primary to-primary/80 bg-clip-text text-transparent">
                {' '}Service Providers
              </span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Stay updated with the latest trends, tips, and strategies to grow your service business
            </p>
          </motion.div>
        </div>
      </section>

      {/* Search & Filters */}
      <section className="py-8 bg-muted/30 border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-4 items-center">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
              <Input
                placeholder="Search articles..."
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
          </div>
        </div>
      </section>

      {/* Featured Posts */}
      {featuredPosts.length > 0 && (
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center space-y-4 mb-16">
              <Badge variant="outline">Featured</Badge>
              <h2 className="text-3xl sm:text-4xl font-bold">Editor's Picks</h2>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {featuredPosts.slice(0, 2).map((post, index) => (
                <motion.div
                  key={post.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <Link to={`/blog/${post.slug}`}>
                    <Card className="group hover:shadow-xl transition-all duration-300 overflow-hidden h-full">
                      <div className="aspect-video bg-muted flex items-center justify-center overflow-hidden">
                        <div className={`w-full h-full bg-gradient-to-br ${getCategoryColor(post.category)} flex items-center justify-center`}>
                          <span className="text-white font-semibold">Featured Article</span>
                        </div>
                      </div>
                      
                      <CardContent className="p-8 space-y-4">
                        <div className="flex items-center space-x-3">
                          <Badge variant="secondary">{post.category}</Badge>
                          <Badge>Featured</Badge>
                        </div>
                        
                        <h3 className="text-2xl font-bold group-hover:text-primary transition-colors leading-tight">
                          {post.title}
                        </h3>
                        
                        <p className="text-muted-foreground text-lg leading-relaxed">{post.excerpt}</p>
                        
                        <div className="flex items-center justify-between text-sm text-muted-foreground">
                          <div className="flex items-center space-x-4">
                            <div className="flex items-center space-x-1">
                              <User className="w-3 h-3" />
                              <span>{post.author}</span>
                            </div>
                            <div className="flex items-center space-x-1">
                              <Calendar className="w-3 h-3" />
                              <span>{new Date(post.date).toLocaleDateString()}</span>
                            </div>
                          </div>
                          <span>{post.readTime}</span>
                        </div>
                      </CardContent>
                    </Card>
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* All Posts */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-2xl font-bold">All Articles</h2>
            <p className="text-muted-foreground">
              Showing {filteredPosts.length} of {blogPosts.length} articles
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPosts.map((post, index) => {
              const CategoryIcon = getCategoryIcon(post.category);
              return (
                <motion.div
                  key={post.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <Link to={`/blog/${post.slug}`}>
                    <Card className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1 h-full">
                      <div className="aspect-video bg-muted flex items-center justify-center overflow-hidden">
                        <div className={`w-full h-full bg-gradient-to-br ${getCategoryColor(post.category)} flex items-center justify-center`}>
                          <CategoryIcon className="w-8 h-8 text-white" />
                        </div>
                      </div>
                      
                      <CardContent className="p-6 space-y-4">
                        <Badge variant="secondary">{post.category}</Badge>
                        
                        <h3 className="text-xl font-semibold group-hover:text-primary transition-colors leading-tight">
                          {post.title}
                        </h3>
                        
                        <p className="text-muted-foreground leading-relaxed">{post.excerpt}</p>
                        
                        <div className="flex items-center justify-between text-sm text-muted-foreground pt-4 border-t">
                          <div className="flex items-center space-x-1">
                            <User className="w-3 h-3" />
                            <span>{post.author}</span>
                          </div>
                          <span>{post.readTime}</span>
                        </div>
                      </CardContent>
                    </Card>
                  </Link>
                </motion.div>
              );
            })}
          </div>

          {filteredPosts.length === 0 && (
            <div className="text-center py-12">
              <p className="text-xl text-muted-foreground">No articles found for your search criteria.</p>
              <Button 
                variant="outline" 
                className="mt-4"
                onClick={() => {
                  setSearchQuery('');
                  setSelectedCategory('all');
                }}
              >
                Clear Filters
              </Button>
            </div>
          )}
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8">
          <h2 className="text-3xl sm:text-4xl font-bold">Stay Updated</h2>
          <p className="text-xl text-muted-foreground">
            Get the latest insights and tips delivered directly to your inbox
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
            <Input placeholder="Enter your email" className="flex-1" />
            <Button>
              Subscribe
              <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Blog;
