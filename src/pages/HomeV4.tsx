
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { ArrowRight, Check, Crown, Users, Wifi, Utensils, Car, Shield } from 'lucide-react';

const HomeV4 = () => {
  const { t } = useTranslation(['home', 'common']);

  const features = [
    {
      icon: Crown,
      title: 'Luxury Management',
      description: 'Premium guest experience management for riads, hotels, and boutique accommodations.',
    },
    {
      icon: Users,
      title: 'Concierge Services',
      description: 'Integrated concierge booking and guest service management.',
    },
    {
      icon: Utensils,
      title: 'Dining Integration',
      description: 'Restaurant reservations and room service management system.',
    },
    {
      icon: Shield,
      title: 'VIP Protection',
      description: 'Enhanced security features for high-value guests and properties.',
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-yellow-50 to-orange-50">
      {/* Hero Section - Hospitality/Hotels Theme */}
      <section className="relative overflow-hidden pt-20 pb-32 lg:pt-32 lg:pb-40">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <Badge variant="secondary" className="bg-amber-100 text-amber-800">
                Perfect for Hotels, Riads & Guest Houses
              </Badge>
              <h1 className="text-4xl sm:text-6xl font-bold tracking-tight text-gray-900">
                Elevate Your
                <span className="bg-gradient-to-r from-amber-600 to-orange-600 bg-clip-text text-transparent">
                  {' '}Hospitality
                </span>
                <br />
                Experience
              </h1>
              <p className="text-xl text-gray-600 max-w-2xl">
                Comprehensive booking and management platform for luxury hotels, traditional riads, boutique guest houses, and hospitality businesses.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="text-lg px-8 py-6 bg-amber-600 hover:bg-amber-700">
                  Welcome Guests Today
                  <Crown className="ml-2 w-5 h-5" />
                </Button>
                <Button size="lg" variant="outline" className="text-lg px-8 py-6 border-amber-600 text-amber-600 hover:bg-amber-50">
                  Tour Virtual Riad
                </Button>
              </div>
              <div className="flex flex-wrap gap-6 pt-4">
                {['Multi-language Support', 'Cultural Integration', 'Premium Support'].map((benefit, index) => (
                  <div key={index} className="flex items-center gap-2 text-gray-600">
                    <Check className="w-4 h-4 text-green-500" />
                    <span>{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="relative">
              <div className="aspect-video bg-gradient-to-br from-amber-200 to-orange-200 rounded-2xl shadow-2xl flex items-center justify-center relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-t from-amber-600/20 to-transparent"></div>
                <div className="text-center space-y-4 relative z-10">
                  <Crown className="w-16 h-16 text-amber-600 mx-auto" />
                  <p className="text-gray-700 font-medium">Luxury Hotel Management</p>
                </div>
                <div className="absolute top-4 left-4 w-3 h-3 bg-amber-400 rounded-full animate-pulse"></div>
                <div className="absolute bottom-4 right-4 w-2 h-2 bg-orange-400 rounded-full animate-pulse delay-300"></div>
              </div>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Features Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            viewport={{ once: true }}
            className="text-center space-y-4 mb-16"
          >
            <Badge variant="outline" className="border-amber-600 text-amber-600">Hospitality Excellence</Badge>
            <h2 className="text-3xl sm:text-5xl font-bold text-gray-900">Luxury Hotel Management Made Simple</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Everything you need to provide world-class hospitality experiences.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1, ease: "easeOut" }}
                viewport={{ once: true }}
              >
                <Card className="text-center hover:shadow-xl transition-all duration-300 hover:scale-105 border-amber-100">
                  <CardContent className="p-8 space-y-4">
                    <div className="w-12 h-12 bg-amber-100 rounded-lg flex items-center justify-center mx-auto">
                      <feature.icon className="w-6 h-6 text-amber-600" />
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900">{feature.title}</h3>
                    <p className="text-gray-600">{feature.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-r from-amber-600 to-orange-600">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8"
        >
          <h2 className="text-3xl sm:text-5xl font-bold text-white">
            Ready to Provide Unforgettable Experiences?
          </h2>
          <p className="text-xl text-amber-100">
            Join prestigious hotels and riads who've enhanced their guest experience with our platform.
          </p>
          <Button size="lg" className="text-lg px-8 py-6 bg-white text-amber-600 hover:bg-gray-100">
            Begin Your Journey
            <ArrowRight className="ml-2 w-5 h-5" />
          </Button>
        </motion.div>
      </section>
    </div>
  );
};

export default HomeV4;
