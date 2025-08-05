import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { LoadingSpinner } from '@/components/ui/loading-spinner';
import { Calendar, User, Clock, ArrowRight, BookOpen } from 'lucide-react';
import { Link } from 'react-router-dom';
import { BlogPost } from '@/types';

interface BlogGridProps {
  posts: BlogPost[];
  loading?: boolean;
  columns?: 2 | 3;
  showExcerpt?: boolean;
}

export const BlogGrid = ({ 
  posts, 
  loading = false, 
  columns = 3,
  showExcerpt = true 
}: BlogGridProps) => {
  const { t, i18n } = useTranslation(['blog', 'common']);

  const gridCols = {
    2: 'grid-cols-1 md:grid-cols-2',
    3: 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3'
  };

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'travel': return BookOpen;
      case 'culture': return BookOpen;
      case 'food': return BookOpen;
      case 'adventure': return BookOpen;
      default: return BookOpen;
    }
  };

  if (loading) {
    return (
      <div className="flex justify-center py-12">
        <LoadingSpinner size="lg" />
      </div>
    );
  }

  if (posts.length === 0) {
    return (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="text-center py-12"
      >
        <div className="text-6xl text-muted-foreground/50 mb-4">📝</div>
        <h3 className="text-2xl font-semibold mb-2">No blog posts found</h3>
        <p className="text-muted-foreground">
          Check back later for new articles and insights
        </p>
      </motion.div>
    );
  }

  return (
    <div className={`grid ${gridCols[columns]} gap-8`}>
      {posts.map((post, index) => {
        const CategoryIcon = getCategoryIcon(post.category);
        
        return (
          <motion.div
            key={post.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            <Link to={`/blog/${post.slug}`}>
              <Card className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-1 h-full overflow-hidden">
                {/* Featured Image */}
                <div className="aspect-video bg-muted overflow-hidden relative">
                  {post.featuredImage ? (
                    <img 
                      src={post.featuredImage} 
                      alt={post.title[i18n.language]}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                  ) : (
                    <div className="w-full h-full bg-gradient-to-br from-primary/20 to-primary/40 flex items-center justify-center">
                      <CategoryIcon className="w-12 h-12 text-primary/60" />
                    </div>
                  )}
                  
                  {post.featured && (
                    <Badge className="absolute top-4 left-4 bg-primary text-primary-foreground">
                      Featured
                    </Badge>
                  )}
                </div>
                
                <CardContent className="p-6 space-y-4">
                  <div className="flex items-center gap-2">
                    <Badge variant="secondary">{t(`categories.${post.category}`)}</Badge>
                    {post.featured && <Badge>Featured</Badge>}
                  </div>
                  
                  <h3 className="text-xl font-semibold group-hover:text-primary transition-colors leading-tight">
                    {post.title[i18n.language]}
                  </h3>
                  
                  {showExcerpt && (
                    <p className="text-muted-foreground leading-relaxed line-clamp-3">
                      {post.excerpt[i18n.language]}
                    </p>
                  )}
                  
                  <div className="flex items-center justify-between text-sm text-muted-foreground pt-4 border-t">
                    <div className="flex items-center space-x-4">
                      <div className="flex items-center space-x-1">
                        <User className="w-3 h-3" />
                        <span>{post.author.name}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Calendar className="w-3 h-3" />
                        <span>{new Date(post.createdAt).toLocaleDateString()}</span>
                      </div>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Clock className="w-3 h-3" />
                      <span>{post.readTime} {t('readTime')}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </Link>
          </motion.div>
        );
      })}
    </div>
  );
};