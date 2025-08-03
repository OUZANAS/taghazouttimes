
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { ArrowRight, Check, Star, Home, Shield, Users, Wifi, Car, Coffee } from 'lucide-react';

const HomeV2 = () => {
  const { t } = useTranslation(['home', 'common']);

  const features = [
    {
      icon: Home,
      title: 'Property Management',
      description: 'Manage multiple properties with ease using our comprehensive dashboard.',
    },
    {
      icon: Shield,
      title: 'Secure Bookings',
      description: 'Protected payments and verified guests for your peace of mind.',
    },
    {
      icon: Users,
      title: 'Guest Communication',
      description: 'Automated messaging and guest support throughout their stay.',
    },
    {
      icon: Wifi,
      title: 'Smart Integration',
      description: 'Connect with smart locks, thermostats, and other IoT devices.',
    },
  ];

  const amenities = [
    { icon: Wifi, name: 'Free WiFi' },
    { icon: Car, name: 'Parking' },
    { icon: Coffee, name: 'Kitchen' },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 to-amber-50">
      {/* Hero Section - Apartment Rental Theme */}
      <section className="relative overflow-hidden pt-20 pb-32 lg:pt-32 lg:pb-40">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <Badge variant="secondary" className="bg-orange-100 text-orange-800">
                Perfect for Property Owners
              </Badge>
              <h1 className="text-4xl sm:text-6xl font-bold tracking-tight text-gray-900">
                Turn Your
                <span className="bg-gradient-to-r from-orange-600 to-amber-600 bg-clip-text text-transparent">
                  {' '}Properties
                </span>
                <br />
                Into Revenue
              </h1>
              <p className="text-xl text-gray-600 max-w-2xl">
                Professional booking platform for apartment rentals, vacation homes, and property management companies. Start earning more with less effort.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="text-lg px-8 py-6 bg-orange-600 hover:bg-orange-700">
                  Start Renting Today
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
                <Button size="lg" variant="outline" className="text-lg px-8 py-6 border-orange-600 text-orange-600 hover:bg-orange-50">
                  View Property Demo
                </Button>
              </div>
              <div className="flex flex-wrap gap-6 pt-4">
                {['No Commission Fees', '24/7 Guest Support', 'Insurance Protection'].map((benefit, index) => (
                  <div key={index} className="flex items-center gap-2 text-gray-600">
                    <Check className="w-4 h-4 text-green-500" />
                    <span>{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="relative">
              <div className="aspect-video bg-gradient-to-br from-orange-100 to-amber-100 rounded-2xl shadow-2xl flex items-center justify-center">
                <div className="text-center space-y-4">
                  <Home className="w-16 h-16 text-orange-600 mx-auto" />
                  <p className="text-gray-600 font-medium">Beautiful Property Showcase</p>
                </div>
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
            <Badge variant="outline" className="border-orange-600 text-orange-600">Everything You Need</Badge>
            <h2 className="text-3xl sm:text-5xl font-bold text-gray-900">Property Management Made Simple</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              All the tools you need to manage bookings, guests, and revenue in one place.
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
                <Card className="text-center hover:shadow-xl transition-all duration-300 hover:scale-105 border-orange-100">
                  <CardContent className="p-8 space-y-4">
                    <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mx-auto">
                      <feature.icon className="w-6 h-6 text-orange-600" />
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
      <section className="py-24 bg-gradient-to-r from-orange-600 to-amber-600">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8"
        >
          <h2 className="text-3xl sm:text-5xl font-bold text-white">
            Ready to Maximize Your Property Income?
          </h2>
          <p className="text-xl text-orange-100">
            Join thousands of property owners who've increased their revenue with our platform.
          </p>
          <Button size="lg" className="text-lg px-8 py-6 bg-white text-orange-600 hover:bg-gray-100">
            Get Started Free
            <ArrowRight className="ml-2 w-5 h-5" />
          </Button>
        </motion.div>
      </section>
    </div>
  );
};

export default HomeV2;
