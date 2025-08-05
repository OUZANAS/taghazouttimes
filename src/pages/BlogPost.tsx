import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { SEOHead } from '@/components/ui/seo-head';
import { PageTransition } from '@/components/ui/page-transition';
import { LoadingSpinner } from '@/components/ui/loading-spinner';
import { 
  ArrowLeft, 
  Calendar, 
  User, 
  Clock, 
  Share2, 
  BookmarkPlus,
  ChevronRight,
  TrendingUp
} from 'lucide-react';
import { mockBlogPosts } from '@/data/mockData';
import { BlogPost as BlogPostType } from '@/types';

const BlogPost = () => {
  const { slug } = useParams();
  const { t, i18n } = useTranslation(['blog', 'common']);
  const [post, setPost] = useState<BlogPostType | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate API call to fetch blog post by slug
    setTimeout(() => {
      const foundPost = mockBlogPosts.find(p => p.slug === slug);
      setPost(foundPost || null);
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

  if (!post) {
    return (
      <PageTransition>
        <div className="min-h-screen flex items-center justify-center">
          <div className="text-center space-y-4">
            <h1 className="text-2xl font-bold">Post not found</h1>
            <p className="text-muted-foreground">The blog post you're looking for doesn't exist.</p>
            <Button asChild variant="outline">
              <Link to="/blog">Back to Blog</Link>
            </Button>
          </div>
        </div>
      </PageTransition>
    );
  }

  const relatedPosts = mockBlogPosts.filter(p => 
    p.id !== post.id && 
    p.category === post.category &&
    p.published
  ).slice(0, 3);

  return (
    <PageTransition>
      <SEOHead 
        title={post.title[i18n.language]}
        description={post.excerpt[i18n.language]}
        image={post.featuredImage}
        keywords={post.tags.join(', ')}
        type="article"
      />
      
      <div className="min-h-screen">
        {/* Breadcrumb */}
        <div className="bg-muted/30 py-4">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center space-x-2 text-sm">
              <Link to="/blog" className="text-muted-foreground hover:text-foreground transition-colors">
                {t('common:blog')}
              </Link>
              <ChevronRight className="w-4 h-4 text-muted-foreground" />
              <span className="text-foreground truncate">{post.title[i18n.language]}</span>
            </div>
          </div>
        </div>

        <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          {/* Back Button */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4 }}
          >
            <Button variant="ghost" asChild className="mb-8">
              <Link to="/blog">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Blog
              </Link>
            </Button>
          </motion.div>

          {/* Article Header */}
          <motion.header 
            className="space-y-6 mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center space-x-2">
              <Badge variant="secondary">{t(`categories.${post.category}`)}</Badge>
              {post.featured && <Badge>Featured</Badge>}
              <TrendingUp className="w-4 h-4 text-muted-foreground" />
            </div>

            <h1 className="text-4xl sm:text-5xl font-bold leading-tight">
              {post.title[i18n.language]}
            </h1>
            
            <p className="text-xl text-muted-foreground leading-relaxed">
              {post.excerpt[i18n.language]}
            </p>

            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
              <div className="flex items-center space-x-6 text-sm text-muted-foreground">
                <div className="flex items-center space-x-1">
                  <User className="w-4 h-4" />
                  <span>{post.author.name}</span>
                </div>
                <div className="flex items-center space-x-1">
                  <Calendar className="w-4 h-4" />
                  <span>{new Date(post.createdAt).toLocaleDateString()}</span>
                </div>
                <div className="flex items-center space-x-1">
                  <Clock className="w-4 h-4" />
                  <span>{post.readTime} {t('readTime')}</span>
                </div>
              </div>
              
              <div className="flex items-center space-x-2">
                <Button variant="ghost" size="sm">
                  <BookmarkPlus className="w-4 h-4 mr-2" />
                  Save
                </Button>
                <Button variant="ghost" size="sm">
                  <Share2 className="w-4 h-4 mr-2" />
                  Share
                </Button>
              </div>
            </div>
          </motion.header>

          {/* Featured Image */}
          <motion.div 
            className="aspect-video bg-muted rounded-lg overflow-hidden mb-12"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {post.featuredImage ? (
              <img 
                src={post.featuredImage} 
                alt={post.title[i18n.language]}
                className="w-full h-full object-cover"
              />
            ) : (
              <div className="w-full h-full bg-gradient-to-br from-primary/20 to-primary/40 flex items-center justify-center">
                <span className="text-muted-foreground">Featured Image</span>
              </div>
            )}
          </motion.div>

          {/* Article Content */}
          <motion.div 
            className="prose prose-lg max-w-none mb-12 prose-headings:text-foreground prose-p:text-muted-foreground prose-strong:text-foreground"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            dangerouslySetInnerHTML={{ __html: post.content[i18n.language] }}
          />

          {/* Tags */}
          <motion.div 
            className="flex flex-wrap gap-2 mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            {post.tags.map((tag, index) => (
              <Badge key={index} variant="outline">
                #{tag}
              </Badge>
            ))}
          </motion.div>

          <Separator className="mb-12" />

          {/* Author Info */}
          <motion.div 
            className="bg-muted/30 rounded-lg p-6 mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            <div className="flex items-start space-x-4">
              <div className="w-16 h-16 rounded-full overflow-hidden">
                {post.author.avatar ? (
                  <img 
                    src={post.author.avatar} 
                    alt={post.author.name}
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <div className="w-full h-full bg-primary/10 flex items-center justify-center">
                    <User className="w-8 h-8 text-primary" />
                  </div>
                )}
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-semibold mb-2">About {post.author.name}</h3>
                <p className="text-muted-foreground">
                  {post.author.bio?.[i18n.language] || 'Travel writer and Morocco enthusiast.'}
                </p>
              </div>
            </div>
          </motion.div>

          {/* Related Posts */}
          {relatedPosts.length > 0 && (
            <motion.section 
              className="space-y-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              <h2 className="text-2xl font-bold">{t('relatedPosts')}</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {relatedPosts.map((relatedPost, index) => (
                  <motion.div
                    key={relatedPost.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: 0.7 + index * 0.1 }}
                  >
                    <Link to={`/blog/${relatedPost.slug}`}>
                      <div className="group p-4 border rounded-lg hover:shadow-md transition-all duration-300 hover:-translate-y-1">
                        <Badge variant="secondary" className="mb-2">
                          {t(`categories.${relatedPost.category}`)}
                        </Badge>
                        <h3 className="font-semibold group-hover:text-primary transition-colors line-clamp-2">
                          {relatedPost.title[i18n.language]}
                        </h3>
                        <p className="text-sm text-muted-foreground mt-2 line-clamp-2">
                          {relatedPost.excerpt[i18n.language]}
                        </p>
                      </div>
                    </Link>
                  </motion.div>
                ))}
              </div>
            </motion.section>
          )}
        </article>
      </div>
    </PageTransition>
  );
};

export default BlogPost;