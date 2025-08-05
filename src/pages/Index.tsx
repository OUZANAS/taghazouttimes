
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { SearchForm } from '@/components/ui/search-form';
import { HeroStats } from '@/components/ui/hero-stats';
import { FloatingElements } from '@/components/ui/floating-elements';
import { ArrowRight, Check, Star, Users, Zap, Shield, Globe, Clock, Award, Play, MapPin, Camera, Compass } from 'lucide-react';
import { Link } from 'react-router-dom';

const Index = () => {
  const { t } = useTranslation(['home', 'common']);

  const features = [
    {
      icon: Zap,
      title: t('features.quickSetup.title'),
      description: t('features.quickSetup.description'),
    },
    {
      icon: Globe,
      title: t('features.multilingual.title'),
      description: t('features.multilingual.description'),
    },
    {
      icon: Shield,
      title: t('features.secure.title'),
      description: t('features.secure.description'),
    },
    {
      icon: Users,
      title: t('features.support.title'),
      description: t('features.support.description'),
    },
  ];

  const benefits = [
    t('benefits.noSetupFees'),
    t('benefits.freeTrial'),
    t('benefits.cancelAnytime'),
  ];

  const steps = [
    {
      number: '01',
      title: t('howItWorks.step1.title'),
      description: t('howItWorks.step1.description'),
    },
    {
      number: '02',
      title: t('howItWorks.step2.title'),
      description: t('howItWorks.step2.description'),
    },
    {
      number: '03',
      title: t('howItWorks.step3.title'),
      description: t('howItWorks.step3.description'),
    },
  ];

  const testimonials = [
    {
      name: 'Maria Rodriguez',
      role: 'Surf School Owner',
      content: 'SaaSify transformed our booking process. We now handle 3x more customers with less effort.',
      rating: 5,
    },
    {
      name: 'Ahmed El Mansouri',
      role: 'Riad Manager',
      content: 'The multilingual support helped us reach international guests. Our bookings increased by 200%.',
      rating: 5,
    },
    {
      name: 'Sophie Dubois',
      role: 'Tour Operator',
      content: 'Beautiful templates and easy customization. Our website looks more professional than ever.',
      rating: 5,
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative hero-bg pt-20 pb-40 lg:pt-32 lg:pb-48 overflow-hidden">
        <FloatingElements />
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10"
        >
          <div className="text-center space-y-8">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <Badge variant="secondary" className="animate-pulse-slow shadow-lg backdrop-blur-sm bg-primary/10 text-primary border-primary/20">
                🌍 {t('common:trustedBy')}
              </Badge>
            </motion.div>
            
            <motion.h1 
              className="text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              {t('heroTitle')}
              <span className="text-gradient block">
                {t('heroTitleHighlight')}
              </span>
            </motion.h1>
            
            <motion.p 
              className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              {t('heroSubtitle')}
            </motion.p>
            
            <motion.div 
              className="flex flex-col sm:flex-row gap-4 justify-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.7 }}
            >
              <Button variant="glow" size="lg" className="text-lg px-8 py-6 shadow-2xl">
                {t('common:startFreeTrial')}
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              <Button size="lg" variant="outline" className="text-lg px-8 py-6 group">
                <Play className="mr-2 w-5 h-5 group-hover:scale-110 transition-transform" />
                {t('common:viewDemo')}
              </Button>
            </motion.div>
            
            <motion.div 
              className="flex flex-wrap justify-center gap-6 pt-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.9 }}
            >
              {benefits.map((benefit, index) => (
                <motion.div 
                  key={index} 
                  className="flex items-center gap-2 text-muted-foreground"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.2 }}
                >
                  <Check className="w-4 h-4 text-primary" />
                  <span>{benefit}</span>
                </motion.div>
              ))}
            </motion.div>
            
            <HeroStats />
          </div>
        </motion.div>
        
        {/* Search Form */}
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 -mb-20 relative z-20">
          <SearchForm variant="floating" />
        </div>
      </section>

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

      {/* How It Works Section */}
      <section className="py-32 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
            className="text-center space-y-6 mb-20"
          >
            <Badge variant="outline" className="bg-accent/10 text-accent border-accent/20">
              🚀 {t('howItWorks.title')}
            </Badge>
            <h2 className="text-4xl sm:text-6xl font-bold">{t('howItWorks.subtitle')}</h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 relative">
            {/* Connection Lines */}
            <div className="hidden md:block absolute top-20 left-1/2 w-full h-0.5 bg-gradient-to-r from-primary via-accent to-primary transform -translate-x-1/2 -translate-y-1/2"></div>
            
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.3, ease: "easeOut" }}
                viewport={{ once: true }}
                className="text-center space-y-6 relative"
              >
                <motion.div 
                  className="w-20 h-20 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center mx-auto text-primary-foreground font-bold text-2xl shadow-2xl relative z-10"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ duration: 0.3 }}
                >
                  {step.number}
                  <motion.div 
                    className="absolute inset-0 rounded-full bg-gradient-to-br from-primary to-accent opacity-30 blur-xl"
                    animate={{ scale: [1, 1.2, 1] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  />
                </motion.div>
                <h3 className="text-2xl font-bold">{step.title}</h3>
                <p className="text-muted-foreground text-lg leading-relaxed">{step.description}</p>
                
                {/* Floating icons for visual appeal */}
                <motion.div
                  className="absolute -top-4 -right-4 text-primary/20"
                  animate={{ rotate: 360 }}
                  transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                >
                  {index === 0 && <MapPin className="w-6 h-6" />}
                  {index === 1 && <Camera className="w-6 h-6" />}
                  {index === 2 && <Compass className="w-6 h-6" />}
                </motion.div>
              </motion.div>
            ))}
          </div>
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
                      "{testimonial.content}"
                    </blockquote>
                    
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center text-primary-foreground font-bold text-lg">
                        {testimonial.name.charAt(0)}
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
              {t('common:startFreeTrial')}
              <ArrowRight className="ml-3 w-6 h-6" />
            </Button>
            <Button size="lg" variant="outline" className="text-xl px-12 py-8 backdrop-blur-sm bg-background/80">
              {t('common:contactSales')}
            </Button>
          </motion.div>
          
          {/* Floating CTA elements */}
          <motion.div
            className="absolute -top-10 left-10 text-primary/20"
            animate={{ 
              rotate: 360,
              scale: [1, 1.2, 1]
            }}
            transition={{ 
              duration: 15,
              repeat: Infinity,
              ease: "linear"
            }}
          >
            <Star className="w-16 h-16" />
          </motion.div>
          
          <motion.div
            className="absolute -bottom-10 right-10 text-accent/20"
            animate={{ 
              y: [0, -20, 0],
              rotate: [0, 10, 0]
            }}
            transition={{ 
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            <Globe className="w-12 h-12" />
          </motion.div>
        </motion.div>
      </section>
    </div>
  );
};

export default Index;
