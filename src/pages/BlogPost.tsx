
import { useParams, Link } from 'react-router-dom';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
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
import { motion } from 'framer-motion';

const BlogPost = () => {
  const { slug } = useParams();

  // Mock data - in real app, this would be fetched based on slug
  const post = {
    id: 1,
    slug: 'boost-booking-rates-2024',
    title: '10 Proven Strategies to Boost Your Booking Rates in 2024',
    excerpt: 'Discover the latest techniques successful service providers use to increase their bookings and revenue.',
    content: `
      <p>In the competitive world of service-based businesses, maximizing your booking rates is crucial for success. Whether you're running a surf school in Taghazout, managing vacation rentals in Marrakech, or organizing tours in Essaouira, these proven strategies will help you attract more customers and increase your revenue.</p>

      <h2>1. Optimize Your Online Presence</h2>
      <p>Your website is often the first impression potential customers have of your business. Ensure it's mobile-friendly, loads quickly, and clearly showcases your services. High-quality photos and detailed descriptions can significantly impact booking decisions.</p>

      <h2>2. Implement Dynamic Pricing</h2>
      <p>Adjust your prices based on demand, seasonality, and local events. This strategy helps maximize revenue during peak times while attracting price-sensitive customers during slower periods.</p>

      <h2>3. Leverage Customer Reviews</h2>
      <p>Positive reviews build trust and credibility. Encourage satisfied customers to leave reviews and respond professionally to all feedback, both positive and negative.</p>

      <h2>4. Offer Package Deals</h2>
      <p>Bundle related services or create multi-day packages to increase the average booking value and provide better value for customers.</p>

      <h2>5. Use Social Media Effectively</h2>
      <p>Share engaging content, customer stories, and behind-the-scenes glimpses of your business. Social media is a powerful tool for building relationships and attracting new customers.</p>

      <h2>6. Implement a Loyalty Program</h2>
      <p>Reward repeat customers with discounts, exclusive offers, or priority booking. This encourages customer retention and increases lifetime value.</p>

      <h2>7. Partner with Local Businesses</h2>
      <p>Create referral partnerships with complementary businesses. For example, a surf school could partner with local accommodations or restaurants.</p>

      <h2>8. Optimize for Local SEO</h2>
      <p>Ensure your business appears in local search results by optimizing your Google My Business profile and using location-specific keywords.</p>

      <h2>9. Offer Flexible Booking Options</h2>
      <p>Provide multiple payment options, flexible cancellation policies, and easy rebooking to reduce barriers to reservation.</p>

      <h2>10. Analyze and Adapt</h2>
      <p>Regularly review your booking data, customer feedback, and market trends. Use these insights to continuously improve your offerings and marketing strategies.</p>

      <h2>Conclusion</h2>
      <p>Implementing these strategies requires time and effort, but the results speak for themselves. Businesses that focus on customer experience, online presence, and data-driven decisions consistently see higher booking rates and revenue growth.</p>
    `,
    category: 'business',
    author: 'Sarah Mitchell',
    authorBio: 'Sarah is a digital marketing specialist with 10+ years of experience helping service businesses grow their online presence.',
    date: '2024-01-15',
    readTime: '8 min read',
    tags: ['booking optimization', 'business growth', 'digital marketing', 'revenue'],
    image: '/placeholder.svg',
  };

  const relatedPosts = [
    {
      slug: 'mobile-booking-optimization',
      title: 'Mobile-First Booking: Essential for Modern Travelers',
      category: 'technology',
    },
    {
      slug: 'seasonal-pricing-strategies',
      title: 'Seasonal Pricing Strategies That Actually Work',
      category: 'business',
    },
    {
      slug: 'guest-review-management',
      title: 'Turning Negative Reviews into Positive Outcomes',
      category: 'marketing',
    },
  ];

  if (!post) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Post not found</h1>
          <Link to="/blog">
            <Button variant="outline">Back to Blog</Button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      {/* Breadcrumb */}
      <div className="bg-muted/30 py-4">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center space-x-2 text-sm">
            <Link to="/blog" className="text-muted-foreground hover:text-foreground">
              Blog
            </Link>
            <ChevronRight className="w-4 h-4 text-muted-foreground" />
            <span className="text-foreground truncate">{post.title}</span>
          </div>
        </div>
      </div>

      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Back Button */}
        <Button variant="ghost" asChild className="mb-8">
          <Link to="/blog">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Blog
          </Link>
        </Button>

        {/* Article Header */}
        <motion.header 
          className="space-y-6 mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center space-x-2">
            <Badge variant="secondary">{post.category}</Badge>
            <TrendingUp className="w-4 h-4 text-muted-foreground" />
          </div>

          <h1 className="text-4xl sm:text-5xl font-bold leading-tight">{post.title}</h1>
          
          <p className="text-xl text-muted-foreground leading-relaxed">{post.excerpt}</p>

          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <div className="flex items-center space-x-6 text-sm text-muted-foreground">
              <div className="flex items-center space-x-1">
                <User className="w-4 h-4" />
                <span>{post.author}</span>
              </div>
              <div className="flex items-center space-x-1">
                <Calendar className="w-4 h-4" />
                <span>{new Date(post.date).toLocaleDateString()}</span>
              </div>
              <div className="flex items-center space-x-1">
                <Clock className="w-4 h-4" />
                <span>{post.readTime}</span>
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
          <div className="w-full h-full bg-gradient-to-br from-primary/20 to-primary/40 flex items-center justify-center">
            <span className="text-muted-foreground">Featured Image</span>
          </div>
        </motion.div>

        {/* Article Content */}
        <motion.div 
          className="prose prose-lg max-w-none mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          dangerouslySetInnerHTML={{ __html: post.content }}
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
              {tag}
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
            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center">
              <User className="w-8 h-8 text-primary" />
            </div>
            <div className="flex-1">
              <h3 className="text-xl font-semibold mb-2">About {post.author}</h3>
              <p className="text-muted-foreground">{post.authorBio}</p>
            </div>
          </div>
        </motion.div>

        {/* Related Posts */}
        <motion.section 
          className="space-y-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <h2 className="text-2xl font-bold">Related Articles</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {relatedPosts.map((relatedPost, index) => (
              <Link key={index} to={`/blog/${relatedPost.slug}`}>
                <div className="group p-4 border rounded-lg hover:shadow-md transition-shadow">
                  <Badge variant="secondary" className="mb-2">
                    {relatedPost.category}
                  </Badge>
                  <h3 className="font-semibold group-hover:text-primary transition-colors">
                    {relatedPost.title}
                  </h3>
                </div>
              </Link>
            ))}
          </div>
        </motion.section>
      </article>
    </div>
  );
};

export default BlogPost;
