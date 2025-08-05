import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { HeroSection } from '@/components/sections/HeroSection';
import { ListingsGrid } from '@/components/sections/ListingsGrid';
import { PackagesGrid } from '@/components/sections/PackagesGrid';
import { BlogGrid } from '@/components/sections/BlogGrid';
import { SEOHead } from '@/components/ui/seo-head';
import { PageTransition } from '@/components/ui/page-transition';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { ArrowRight, Check, Star, Zap, Shield, Globe, Users } from 'lucide-react';
import { Link } from 'react-router-dom';
import { mockListings, mockPackages, mockBlogPosts } from '@/data/mockData';

const Index = () => {
  const { t, i18n } = useTranslation(['home', 'common']);

  const features = [
    {
      icon: Zap,
      title: t('features.authentic.title'),
      description: t('features.authentic.description'),
    },
    {
      icon: Globe,
      title: t('features.verified.title'),
      description: t('features.verified.description'),
    },
    {
      icon: Shield,
      title: t('features.support.title'),
      description: t('features.support.description'),
    },
    {
      icon: Users,
      title: t('features.multilingual.title'),
      description: t('features.multilingual.description'),
    },
  ];

  const testimonials = [
    {
      name: 'Maria Rodriguez',
      role: 'Travel Blogger',
      content: {
        en: 'TaghazoutTimes made our Moroccan adventure unforgettable. The local guides were amazing and every detail was perfectly organized.',
        fr: 'TaghazoutTimes a rendu notre aventure marocaine inoubliable. Les guides locaux étaient incroyables et chaque détail était parfaitement organisé.',
        ar: 'جعلت TaghazoutTimes مغامرتنا المغربية لا تُنسى. كان المرشدون المحليون رائعين وكل التفاصيل منظمة بشكل مثالي.'
      },
      rating: 5,
      avatar: 'https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg',
    },
    {
      name: 'Ahmed El Mansouri',
      role: 'Surf Instructor',
      content: {
        en: 'As a local surf instructor, I appreciate how TaghazoutTimes showcases authentic Moroccan surf culture to international visitors.',
        fr: 'En tant qu\'instructeur de surf local, j\'apprécie la façon dont TaghazoutTimes présente la culture de surf marocaine authentique aux visiteurs internationaux.',
        ar: 'كمدرب ركوب أمواج محلي، أقدر كيف تعرض TaghazoutTimes ثقافة ركوب الأمواج المغربية الأصيلة للزوار الدوليين.'
      },
      rating: 5,
      avatar: 'https://images.pexels.com/photos/1040880/pexels-photo-1040880.jpeg',
    },
    {
      name: 'Sophie Dubois',
      role: 'Travel Photographer',
      content: {
        en: 'The photography tours were exceptional! I captured the most beautiful moments of Morocco with expert guidance.',
        fr: 'Les tours de photographie étaient exceptionnels! J\'ai capturé les plus beaux moments du Maroc avec des conseils d\'experts.',
        ar: 'كانت جولات التصوير استثنائية! التقطت أجمل لحظات المغرب بإرشاد خبير.'
      },
      rating: 5,
      avatar: 'https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg',
    },
  ];

  // Get featured content
  const featuredListings = mockListings.filter(listing => listing.featured).slice(0, 3);
  const featuredPackages = mockPackages.filter(pkg => pkg.featured).slice(0, 2);
  const featuredPosts = mockBlogPosts.filter(post => post.featured).slice(0, 3);

  return (
    <PageTransition>
      <SEOHead 
        title={t('common:companyName')}
        description={t('common:companyTagline')}
        keywords="Morocco travel, Taghazout surf, accommodation booking, cultural tours"
      />
      
      <div className="min-h-screen">
        {/* Hero Section */}
        <HeroSection variant="default" />

        {/* Features Section */}
        <section className="py-32 bg-muted/20 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-muted/10 to-transparent"></div>
          
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              viewport={{ once: true }}
              className="text-center space-y-6 mb-20"
            >
              <Badge variant="outline" className="bg-background/80 backdrop-blur-sm shadow-sm">
                ✨ {t('features.title')}
              </Badge>
              <h2 className="text-4xl sm:text-6xl font-bold leading-tight">
                {t('features.subtitle')}
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                {t('features.description')}
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 40, scale: 0.9 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  transition={{ duration: 0.6, delay: index * 0.15, ease: "easeOut" }}
                  viewport={{ once: true }}
                  whileHover={{ y: -10, scale: 1.02 }}
                >
                  <Card className="floating-card text-center border-0 h-full group">
                    <CardContent className="p-8 space-y-6">
                      <motion.div 
                        className="w-16 h-16 bg-gradient-to-br from-primary to-primary-glow rounded-2xl flex items-center justify-center mx-auto shadow-lg group-hover:shadow-xl group-hover:shadow-primary/25 transition-all duration-500"
                        whileHover={{ rotate: 360, scale: 1.1 }}
                        transition={{ duration: 0.6 }}
                      >
                        <feature.icon className="w-8 h-8 text-primary-foreground" />
                      </motion.div>
                      <h3 className="text-xl font-bold">{feature.title}</h3>
                      <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
                      <motion.div
                        className="w-12 h-1 bg-gradient-to-r from-primary to-accent mx-auto rounded-full"
                        initial={{ width: 0 }}
                        whileInView={{ width: 48 }}
                        transition={{ duration: 0.8, delay: index * 0.1 + 0.5 }}
                        viewport={{ once: true }}
                      />
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Featured Listings */}
        <section className="py-32">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              viewport={{ once: true }}
              className="text-center space-y-6 mb-16"
            >
              <Badge variant="outline">Featured Experiences</Badge>
              <h2 className="text-4xl sm:text-6xl font-bold">Popular Destinations</h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Discover our most loved accommodations and experiences
              </p>
            </motion.div>

            <ListingsGrid listings={featuredListings} />

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
              className="text-center mt-12"
            >
              <Button asChild size="lg" variant="outline">
                <Link to="/listings">
                  View All Listings
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
              </Button>
            </motion.div>
          </div>
        </section>

        {/* Featured Packages */}
        <section className="py-32 bg-muted/20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              viewport={{ once: true }}
              className="text-center space-y-6 mb-16"
            >
              <Badge variant="outline">Curated Packages</Badge>
              <h2 className="text-4xl sm:text-6xl font-bold">Complete Experiences</h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Thoughtfully designed packages for unforgettable journeys
              </p>
            </motion.div>

            <PackagesGrid packages={featuredPackages} />

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
              className="text-center mt-12"
            >
              <Button asChild size="lg" variant="outline">
                <Link to="/packages">
                  Explore All Packages
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
              </Button>
            </motion.div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-32 bg-gradient-to-br from-muted/20 via-background to-muted/20 relative overflow-hidden">
          <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
          
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              viewport={{ once: true }}
              className="text-center space-y-6 mb-20"
            >
              <Badge variant="outline" className="bg-background/80 backdrop-blur-sm">
                💬 {t('testimonials.title')}
              </Badge>
              <h2 className="text-4xl sm:text-6xl font-bold">{t('testimonials.subtitle')}</h2>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50, rotateY: -15 }}
                  whileInView={{ opacity: 1, y: 0, rotateY: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.2, ease: "easeOut" }}
                  viewport={{ once: true }}
                  whileHover={{ y: -10, rotateY: 5 }}
                  style={{ perspective: 1000 }}
                >
                  <Card className="floating-card border-0 h-full group relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    
                    <CardContent className="p-8 space-y-6 relative z-10">
                      <motion.div 
                        className="flex gap-1"
                        initial={{ opacity: 0, scale: 0 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5, delay: index * 0.2 + 0.3 }}
                        viewport={{ once: true }}
                      >
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <motion.div
                            key={i}
                            initial={{ opacity: 0, rotate: -180 }}
                            whileInView={{ opacity: 1, rotate: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.2 + 0.5 + i * 0.1 }}
                            viewport={{ once: true }}
                          >
                            <Star className="w-5 h-5 text-accent fill-current" />
                          </motion.div>
                        ))}
                      </motion.div>
                      
                      <blockquote className="text-lg text-muted-foreground italic leading-relaxed">
                        "{testimonial.content[i18n.language as keyof typeof testimonial.content]}"
                      </blockquote>
                      
                      <div className="flex items-center gap-4">
                        <div className="w-12 h-12 rounded-full overflow-hidden">
                          <img 
                            src={testimonial.avatar} 
                            alt={testimonial.name}
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <div>
                          <div className="font-bold text-foreground">{testimonial.name}</div>
                          <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Featured Blog Posts */}
        <section className="py-32 bg-muted/20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              viewport={{ once: true }}
              className="text-center space-y-6 mb-16"
            >
              <Badge variant="outline">Travel Insights</Badge>
              <h2 className="text-4xl sm:text-6xl font-bold">Latest Stories</h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Tips, guides, and stories from Morocco
              </p>
            </motion.div>

            <BlogGrid posts={featuredPosts} />

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
              className="text-center mt-12"
            >
              <Button asChild size="lg" variant="outline">
                <Link to="/blog">
                  Read More Stories
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
              </Button>
            </motion.div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-32 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-accent/5 to-primary/10"></div>
          <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
          
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
            className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-10 relative z-10"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl sm:text-6xl lg:text-7xl font-bold leading-tight">
                {t('cta.title')}
              </h2>
            </motion.div>
            
            <motion.p 
              className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
            >
              {t('cta.subtitle')}
            </motion.p>
            
            <motion.div 
              className="flex flex-col sm:flex-row gap-6 justify-center"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              viewport={{ once: true }}
            >
              <Button variant="glow" size="lg" className="text-xl px-12 py-8 shadow-2xl">
                {t('common:getStarted')}
                <ArrowRight className="ml-3 w-6 h-6" />
              </Button>
              <Button size="lg" variant="outline" className="text-xl px-12 py-8 backdrop-blur-sm bg-background/80">
                {t('common:contactSales')}
              </Button>
            </motion.div>
          </motion.div>
        </section>
      </div>
    </PageTransition>
  );
};

export default Index;