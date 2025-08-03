
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { ArrowRight, CheckCircle, Star, Users, Building, Waves, Camera, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';

const Index = () => {
  const { t } = useTranslation(['home', 'common']);

  const features = [
    {
      icon: Building,
      title: 'Property Management',
      description: 'Complete rental and accommodation management system',
    },
    {
      icon: Waves,
      title: 'Activity Booking',
      description: 'Surf lessons, tours, and experience bookings made easy',
    },
    {
      icon: Users,
      title: 'Client Management',
      description: 'Track customers, reservations, and preferences',
    },
    {
      icon: Camera,
      title: 'Visual Showcase',
      description: 'Beautiful galleries and listing presentations',
    },
  ];

  const steps = [
    {
      step: '01',
      title: t('home:step1Title'),
      description: t('home:step1Description'),
    },
    {
      step: '02',
      title: t('home:step2Title'),
      description: t('home:step2Description'),
    },
    {
      step: '03',
      title: t('home:step3Title'),
      description: t('home:step3Description'),
    },
  ];

  const testimonials = [
    {
      name: 'Sarah Johnson',
      role: 'Surf Instructor',
      location: 'Taghazout, Morocco',
      content: 'SaaSify transformed my surf school business. I can now manage bookings, showcase my services, and focus on what I love - teaching surfing!',
      rating: 5,
    },
    {
      name: 'Ahmed El Mansouri',
      role: 'Property Manager',
      location: 'Agadir, Morocco',
      content: 'Managing multiple rental properties has never been easier. The platform is intuitive and my guests love the booking experience.',
      rating: 5,
    },
    {
      name: 'Lisa Chen',
      role: 'Tour Operator',
      location: 'Essaouira, Morocco',
      content: 'The multilingual support and beautiful interface helped me reach international clients. My bookings increased by 200%!',
      rating: 5,
    },
  ];

  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6, ease: "easeOut" }
  };

  const staggerChildren = {
    animate: {
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-background via-background to-muted/30 py-20 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-grid-black/[0.02] bg-[size:50px_50px]" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-8">
            <motion.div {...fadeInUp}>
              <Badge variant="secondary" className="animate-fade-in">
                🚀 {t('home:trustedBy')}
              </Badge>
            </motion.div>
            
            <motion.div 
              className="space-y-6"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight">
                {t('home:heroTitle').split(' ').slice(0, 2).join(' ')}
                <span className="bg-gradient-to-r from-primary to-primary/80 bg-clip-text text-transparent">
                  {' ' + t('home:heroTitle').split(' ').slice(2, 5).join(' ')}
                </span>
                <br />
                {t('home:heroTitle').split(' ').slice(5).join(' ')}
              </h1>
              
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                {t('home:heroSubtitle')}
              </p>
            </motion.div>

            <motion.div 
              className="flex flex-col sm:flex-row gap-4 justify-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              <Button size="lg" className="text-lg px-8 hover:scale-105 transition-transform">
                {t('common:startFreeTrial')}
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              <Button size="lg" variant="outline" className="text-lg px-8 hover:scale-105 transition-transform">
                {t('common:viewDemo')}
              </Button>
            </motion.div>

            <motion.div 
              className="flex items-center justify-center space-x-8 text-muted-foreground"
              variants={staggerChildren}
              initial="initial"
              animate="animate"
            >
              <motion.div className="flex items-center space-x-2" variants={fadeInUp}>
                <CheckCircle className="w-5 h-5 text-green-500" />
                <span>{t('home:noSetupFees')}</span>
              </motion.div>
              <motion.div className="flex items-center space-x-2" variants={fadeInUp}>
                <CheckCircle className="w-5 h-5 text-green-500" />
                <span>{t('home:freeTrial')}</span>
              </motion.div>
              <motion.div className="flex items-center space-x-2" variants={fadeInUp}>
                <CheckCircle className="w-5 h-5 text-green-500" />
                <span>{t('home:cancelAnytime')}</span>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center space-y-4 mb-16"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Badge variant="outline">Features</Badge>
            <h2 className="text-3xl sm:text-4xl font-bold">
              {t('home:featuresTitle')}
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              {t('home:featuresSubtitle')}
            </p>
          </motion.div>

          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
            variants={staggerChildren}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            {features.map((feature, index) => (
              <motion.div key={index} variants={fadeInUp}>
                <Card className="hover:shadow-lg transition-all duration-300 hover:-translate-y-2 group">
                  <CardContent className="p-6 text-center space-y-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto group-hover:scale-110 transition-transform duration-300">
                      <feature.icon className="w-6 h-6 text-primary" />
                    </div>
                    <h3 className="text-xl font-semibold">{feature.title}</h3>
                    <p className="text-muted-foreground">{feature.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center space-y-4 mb-16"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Badge variant="outline">Process</Badge>
            <h2 className="text-3xl sm:text-4xl font-bold">{t('home:howItWorksTitle')}</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              {t('home:howItWorksSubtitle')}
            </p>
          </motion.div>

          <motion.div 
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
            variants={staggerChildren}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            {steps.map((step, index) => (
              <motion.div key={index} className="text-center space-y-4" variants={fadeInUp}>
                <div className="relative">
                  <motion.div 
                    className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto text-primary-foreground font-bold text-xl"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    {step.step}
                  </motion.div>
                  {index < steps.length - 1 && (
                    <div className="hidden md:block absolute top-8 left-1/2 w-full h-0.5 bg-border transform translate-x-8" />
                  )}
                </div>
                <h3 className="text-xl font-semibold">{step.title}</h3>
                <p className="text-muted-foreground">{step.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center space-y-4 mb-16"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Badge variant="outline">Testimonials</Badge>
            <h2 className="text-3xl sm:text-4xl font-bold">
              {t('home:testimonialsTitle')}
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              {t('home:testimonialsSubtitle')}
            </p>
          </motion.div>

          <motion.div 
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
            variants={staggerChildren}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            {testimonials.map((testimonial, index) => (
              <motion.div key={index} variants={fadeInUp}>
                <Card className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1 group">
                  <CardContent className="p-6 space-y-4">
                    <div className="flex items-center space-x-1">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>
                    <p className="text-muted-foreground italic">"{testimonial.content}"</p>
                    <div className="space-y-1">
                      <p className="font-semibold">{testimonial.name}</p>
                      <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                      <div className="flex items-center space-x-1 text-sm text-muted-foreground">
                        <MapPin className="w-3 h-3" />
                        <span>{testimonial.location}</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8">
          <motion.h2 
            className="text-3xl sm:text-4xl font-bold"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            {t('home:ctaTitle')}
          </motion.h2>
          <motion.p 
            className="text-xl text-muted-foreground"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {t('home:ctaSubtitle')}
          </motion.p>
          <motion.div 
            className="flex flex-col sm:flex-row gap-4 justify-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <Button size="lg" className="text-lg px-8 hover:scale-105 transition-transform">
              {t('common:startFreeTrial')}
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            <Button size="lg" variant="outline" asChild className="text-lg px-8 hover:scale-105 transition-transform">
              <Link to="/contact">{t('common:contactSales')}</Link>
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Index;
