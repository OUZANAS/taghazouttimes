
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { ArrowRight, Check, Waves, Users, Calendar, Award, Sun, Camera } from 'lucide-react';

const HomeV3 = () => {
  const { t } = useTranslation(['home', 'common']);

  const features = [
    {
      icon: Waves,
      title: 'Surf Lessons',
      description: 'Professional surf instruction for all levels, from beginners to advanced.',
    },
    {
      icon: Calendar,
      title: 'Easy Booking',
      description: 'Simple online booking system for classes, equipment, and packages.',
    },
    {
      icon: Users,
      title: 'Group Sessions',
      description: 'Organize group lessons and surf camps with automated scheduling.',
    },
    {
      icon: Award,
      title: 'Certified Instructors',
      description: 'Professional certification tracking and instructor management.',
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-cyan-50 to-teal-50">
      {/* Hero Section - Surf School Theme */}
      <section className="relative overflow-hidden pt-20 pb-32 lg:pt-32 lg:pb-40">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <Badge variant="secondary" className="bg-blue-100 text-blue-800">
                Perfect for Surf Schools & Water Sports
              </Badge>
              <h1 className="text-4xl sm:text-6xl font-bold tracking-tight text-gray-900">
                Ride The
                <span className="bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
                  {' '}Perfect Wave
                </span>
                <br />
                of Success
              </h1>
              <p className="text-xl text-gray-600 max-w-2xl">
                Complete booking platform for surf schools, water sports centers, and adventure activities. Manage lessons, equipment, and customers effortlessly.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="text-lg px-8 py-6 bg-blue-600 hover:bg-blue-700">
                  Start Teaching Today
                  <Waves className="ml-2 w-5 h-5" />
                </Button>
                <Button size="lg" variant="outline" className="text-lg px-8 py-6 border-blue-600 text-blue-600 hover:bg-blue-50">
                  Watch Surf Demo
                </Button>
              </div>
              <div className="flex flex-wrap gap-6 pt-4">
                {['Weather Integration', 'Equipment Tracking', 'Safety Management'].map((benefit, index) => (
                  <div key={index} className="flex items-center gap-2 text-gray-600">
                    <Check className="w-4 h-4 text-green-500" />
                    <span>{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="relative">
              <div className="aspect-video bg-gradient-to-br from-blue-200 to-cyan-200 rounded-2xl shadow-2xl flex items-center justify-center relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-t from-blue-600/20 to-transparent"></div>
                <div className="text-center space-y-4 relative z-10">
                  <Waves className="w-16 h-16 text-blue-600 mx-auto" />
                  <p className="text-gray-700 font-medium">Surf Lesson Booking</p>
                </div>
                <motion.div
                  animate={{ 
                    scale: [1, 1.1, 1],
                    rotate: [0, 5, -5, 0]
                  }}
                  transition={{ 
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                  className="absolute top-4 right-4"
                >
                  <Sun className="w-8 h-8 text-yellow-500" />
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
            <Badge variant="outline" className="border-blue-600 text-blue-600">Surf & Water Sports</Badge>
            <h2 className="text-3xl sm:text-5xl font-bold text-gray-900">Everything for Your Surf School</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              From beginner lessons to advanced coaching, manage your entire surf school operation.
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
                <Card className="text-center hover:shadow-xl transition-all duration-300 hover:scale-105 border-blue-100">
                  <CardContent className="p-8 space-y-4">
                    <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto">
                      <feature.icon className="w-6 h-6 text-blue-600" />
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
      <section className="py-24 bg-gradient-to-r from-blue-600 via-cyan-600 to-teal-600">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8"
        >
          <h2 className="text-3xl sm:text-5xl font-bold text-white">
            Ready to Catch the Wave of Digital Success?
          </h2>
          <p className="text-xl text-blue-100">
            Join surf schools worldwide who've revolutionized their booking process.
          </p>
          <Button size="lg" className="text-lg px-8 py-6 bg-white text-blue-600 hover:bg-gray-100">
            Dive In Now
            <ArrowRight className="ml-2 w-5 h-5" />
          </Button>
        </motion.div>
      </section>
    </div>
  );
};

export default HomeV3;
