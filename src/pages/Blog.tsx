import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { BlogGrid } from '@/components/sections/BlogGrid';
import { SEOHead } from '@/components/ui/seo-head';
import { PageTransition } from '@/components/ui/page-transition';
import { Search, ArrowRight, Mail } from 'lucide-react';
import { mockBlogPosts } from '@/data/mockData';
import { BlogPost } from '@/types';

const Blog = () => {
  const { t, i18n } = useTranslation(['blog', 'common']);
  
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);

  const categories = ['all', 'travel', 'culture', 'food', 'adventure'];

  useEffect(() => {
    // Simulate API call
    setTimeout(() => {
      const filtered = mockBlogPosts.filter(post => {
        const matchesSearch = !searchQuery || 
          post.title[i18n.language].toLowerCase().includes(searchQuery.toLowerCase()) ||
          post.excerpt[i18n.language].toLowerCase().includes(searchQuery.toLowerCase());
        
        const matchesCategory = selectedCategory === 'all' || post.category === selectedCategory;
        
        return matchesSearch && matchesCategory && post.published;
      });

      setPosts(filtered);
      setLoading(false);
    }, 500);
  }, [searchQuery, selectedCategory, i18n.language]);

  const featuredPosts = posts.filter(post => post.featured);
  const regularPosts = posts.filter(post => !post.featured);

  return (
    <PageTransition>
      <SEOHead 
        title={t('title')}
        description={t('subtitle')}
        keywords="Morocco travel blog, travel tips, cultural insights, adventure stories"
      />
      
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
              <Badge variant="secondary">Travel Stories</Badge>
              <h1 className="text-4xl sm:text-6xl font-bold tracking-tight">
                {t('title')}
              </h1>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                {t('subtitle')}
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
                    <SelectItem key={category} value={category}>
                      {t(`categories.${category}`)}
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

              <BlogGrid posts={featuredPosts} columns={2} />
            </div>
          </section>
        )}

        {/* All Posts */}
        <section className="py-20 bg-muted/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-2xl font-bold">All Articles</h2>
              <p className="text-muted-foreground">
                Showing {posts.length} articles
              </p>
            </div>

            <BlogGrid posts={regularPosts} loading={loading} />
          </div>
        </section>

        {/* Newsletter Signup */}
        <section className="py-20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8">
            <h2 className="text-3xl sm:text-4xl font-bold">Stay Updated</h2>
            <p className="text-xl text-muted-foreground">
              Get the latest travel insights and stories delivered to your inbox
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
              <Input placeholder={t('common:enterEmail')} className="flex-1" />
              <Button>
                <Mail className="w-4 h-4 mr-2" />
                {t('common:subscribe')}
              </Button>
            </div>
          </div>
        </section>
      </div>
    </PageTransition>
  );
};

export default Blog;