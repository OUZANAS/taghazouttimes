
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { ArrowRight, Check, Mountain, Compass, Camera, Users, Map, Backpack } from 'lucide-react';

const HomeV5 = () => {
  const { t } = useTranslation(['home', 'common']);

  const features = [
    {
      icon: Mountain,
      title: 'Adventure Tours',
      description: 'Organize and manage hiking, trekking, and adventure experiences.',
    },
    {
      icon: Compass,
      title: 'Cultural Experiences',
      description: 'Curate authentic cultural tours and local immersion programs.',
    },
    {
      icon: Camera,
      title: 'Photography Tours',
      description: 'Specialized booking system for photography and wildlife tours.',
    },
    {
      icon: Map,
      title: 'Route Planning',
      description: 'Interactive itinerary builder with GPS integration and offline maps.',
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-emerald-50 to-teal-50">
      {/* Hero Section - Adventure Travel Theme */}
      <section className="relative overflow-hidden pt-20 pb-32 lg:pt-32 lg:pb-40">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <Badge variant="secondary" className="bg-green-100 text-green-800">
                Perfect for Adventure & Cultural Tours
              </Badge>
              <h1 className="text-4xl sm:text-6xl font-bold tracking-tight text-gray-900">
                Discover The
                <span className="bg-gradient-to-r from-green-600 to-teal-600 bg-clip-text text-transparent">
                  {' '}Adventure
                </span>
                <br />
                That Awaits
              </h1>
              <p className="text-xl text-gray-600 max-w-2xl">
                Complete platform for adventure travel agencies, cultural tour operators, and expedition organizers. Create unforgettable journeys.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="text-lg px-8 py-6 bg-green-600 hover:bg-green-700">
                  Start Your Adventure
                  <Backpack className="ml-2 w-5 h-5" />
                </Button>
                <Button size="lg" variant="outline" className="text-lg px-8 py-6 border-green-600 text-green-600 hover:bg-green-50">
                  Explore Tours
                </Button>
              </div>
              <div className="flex flex-wrap gap-6 pt-4">
                {['Local Guides Network', 'Safety Protocols', 'Cultural Partnerships'].map((benefit, index) => (
                  <div key={index} className="flex items-center gap-2 text-gray-600">
                    <Check className="w-4 h-4 text-green-500" />
                    <span>{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="relative">
              <div className="aspect-video bg-gradient-to-br from-green-200 to-teal-200 rounded-2xl shadow-2xl flex items-center justify-center relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-t from-green-600/20 to-transparent"></div>
                <div className="text-center space-y-4 relative z-10">
                  <Mountain className="w-16 h-16 text-green-600 mx-auto" />
                  <p className="text-gray-700 font-medium">Adventure Tour Booking</p>
                </div>
                <motion.div
                  animate={{ 
                    y: [0, -10, 0],
                  }}
                  transition={{ 
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                  className="absolute top-6 right-6"
                >
                  <Compass className="w-6 h-6 text-green-700" />
                </motion.div>
                <motion.div
                  animate={{ 
                    x: [0, 5, -5, 0],
                  }}
                  transition={{ 
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 1
                  }}
                  className="absolute bottom-6 left-6"
                >
                  <Camera className="w-6 h-6 text-teal-700" />
                </motion.div>
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
            <Badge variant="outline" className="border-green-600 text-green-600">Adventure & Culture</Badge>
            <h2 className="text-3xl sm:text-5xl font-bold text-gray-900">Everything for Your Travel Agency</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              From mountain expeditions to cultural immersions, manage every aspect of your tours.
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
                <Card className="text-center hover:shadow-xl transition-all duration-300 hover:scale-105 border-green-100">
                  <CardContent className="p-8 space-y-4">
                    <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mx-auto">
                      <feature.icon className="w-6 h-6 text-green-600" />
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
      <section className="py-24 bg-gradient-to-r from-green-600 via-emerald-600 to-teal-600">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8"
        >
          <h2 className="text-3xl sm:text-5xl font-bold text-white">
            Ready to Lead the Next Adventure?
          </h2>
          <p className="text-xl text-green-100">
            Join tour operators worldwide who've digitized their adventure experiences.
          </p>
          <Button size="lg" className="text-lg px-8 py-6 bg-white text-green-600 hover:bg-gray-100">
            Start Exploring
            <ArrowRight className="ml-2 w-5 h-5" />
          </Button>
        </motion.div>
      </section>
    </div>
  );
};

export default HomeV5;
