import { useState } from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ArrowRight, Clock, Users, Star, MapPin, Camera, Utensils, Waves, Mountain, Crown } from 'lucide-react';

const Packages = () => {
  const { t } = useTranslation(['packages', 'common']);

  const packages = [
    {
      id: 'marrakech-cultural',
      title: '5-Day Marrakech Cultural Discovery',
      description: 'Immerse yourself in the rich culture and history of Marrakech with guided medina walks, traditional hammam, and authentic cooking classes.',
      duration: '5 Days / 4 Nights',
      groupSize: '2-8 People',
      price: '$599',
      rating: 4.9,
      reviews: 127,
      image: '/placeholder.svg?height=300&width=400&text=Marrakech+Medina',
      category: 'Cultural',
      highlights: [
        'Guided medina and souks exploration',
        'Traditional Moroccan cooking class',
        'Relaxing hammam spa experience',
        'Visit to Bahia Palace and Saadian Tombs',
        'Sunset at Jemaa el-Fnaa square'
      ],
      includes: [
        'Accommodation in traditional riad',
        'All meals and cooking class',
        'Professional local guide',
        'Transportation within Marrakech',
        'Hammam spa session'
      ],
      icon: Crown,
      color: 'from-amber-500 to-orange-500',
      bgColor: 'bg-amber-50'
    },
    {
      id: 'taghazout-surf-yoga',
      title: 'Surf & Yoga Retreat in Taghazout',
      description: 'Perfect blend of surfing and wellness in Morocco\'s premier surf destination. Daily surf lessons with experienced instructors and rejuvenating yoga sessions.',
      duration: '7 Days / 6 Nights',
      groupSize: '4-12 People',
      price: '$799',
      rating: 4.8,
      reviews: 89,
      image: '/placeholder.svg?height=300&width=400&text=Taghazout+Surf',
      category: 'Adventure',
      highlights: [
        'Daily surf lessons for all levels',
        'Morning yoga sessions on the beach',
        'Surfboard and wetsuit included',
        'Beachfront accommodation',
        'Healthy organic meals'
      ],
      includes: [
        'Surf lessons and equipment',
        'Daily yoga classes',
        'Beachfront accommodation',
        'All meals with healthy options',
        'Airport transfers'
      ],
      icon: Waves,
      color: 'from-blue-500 to-cyan-500',
      bgColor: 'bg-blue-50'
    },
    {
      id: 'rural-artisan-discovery',
      title: 'Rural Stay & Artisan Discovery',
      description: 'Experience authentic Moroccan rural life with homestay accommodation and visits to traditional artisan workshops in the Atlas Mountains.',
      duration: '4 Days / 3 Nights',
      groupSize: '2-6 People',
      price: '$449',
      rating: 4.7,
      reviews: 64,
      image: '/placeholder.svg?height=300&width=400&text=Atlas+Mountains',
      category: 'Cultural',
      highlights: [
        'Authentic homestay experience',
        'Pottery and weaving workshops',
        'Traditional Berber meals',
        'Guided mountain hikes',
        'Local market visits'
      ],
      includes: [
        'Homestay accommodation',
        'All meals with local families',
        'Artisan workshop experiences',
        'Transportation from Marrakech',
        'Professional guide'
      ],
      icon: Mountain,
      color: 'from-green-500 to-emerald-500',
      bgColor: 'bg-green-50'
    },
    {
      id: 'desert-photography-expedition',
      title: 'Sahara Desert Photography Expedition',
      description: 'Capture the magic of the Sahara Desert with professional photography guidance. Perfect for photographers of all levels.',
      duration: '6 Days / 5 Nights',
      groupSize: '3-8 People',
      price: '$899',
      rating: 4.9,
      reviews: 43,
      image: '/placeholder.svg?height=300&width=400&text=Sahara+Desert',
      category: 'Photography',
      highlights: [
        'Professional photography mentoring',
        'Camel trekking at golden hour',
        'Luxury desert camp experience',
        'Star photography sessions',
        'Local nomad encounters'
      ],
      includes: [
        'Photography workshop and guidance',
        'Luxury desert accommodation',
        'Camel trekking experience',
        'All meals including desert BBQ',
        '4WD transportation'
      ],
      icon: Camera,
      color: 'from-orange-500 to-red-500',
      bgColor: 'bg-orange-50'
    }
  ];

  const categories = ['All', 'Cultural', 'Adventure', 'Photography'];
  const [selectedCategory, setSelectedCategory] = useState('All');

  const filteredPackages = selectedCategory === 'All' 
    ? packages 
    : packages.filter(pkg => pkg.category === selectedCategory);

  return (
    <div className="min-h-screen bg-gradient-to-br from-background to-muted/30">
      {/* Hero Section */}
      <section className="relative overflow-hidden pt-20 pb-16 lg:pt-32 lg:pb-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center"
        >
          <Badge variant="secondary" className="mb-6">
            Curated Experiences
          </Badge>
          <h1 className="text-4xl sm:text-6xl font-bold tracking-tight mb-6">
            Unforgettable
            <span className="bg-gradient-to-r from-primary to-primary/80 bg-clip-text text-transparent">
              {' '}Packages
            </span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            Discover carefully crafted travel packages that showcase the best of Morocco. 
            From cultural immersions to adventure activities, each experience is designed to create lasting memories.
          </p>
          
          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category) => (
              <Button
                key={category}
                variant={selectedCategory === category ? "default" : "outline"}
                onClick={() => setSelectedCategory(category)}
                className="transition-all duration-300"
              >
                {category}
              </Button>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Packages Grid */}
      <section className="pb-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {filteredPackages.map((pkg, index) => (
              <motion.div
                key={pkg.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1, ease: "easeOut" }}
                viewport={{ once: true }}
              >
                <Card className={`group hover:shadow-2xl transition-all duration-500 hover:scale-[1.02] overflow-hidden ${pkg.bgColor} border-0`}>
                  {/* Image Section */}
                  <div className="relative overflow-hidden">
                    <div className="aspect-video bg-gradient-to-br from-muted to-muted-foreground/20 flex items-center justify-center relative">
                      <pkg.icon className="w-16 h-16 text-muted-foreground/60" />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
                    </div>
                    <Badge 
                      className={`absolute top-4 left-4 bg-gradient-to-r ${pkg.color} text-white border-0`}
                    >
                      {pkg.category}
                    </Badge>
                    <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full flex items-center gap-1">
                      <Star className="w-4 h-4 text-yellow-500 fill-current" />
                      <span className="text-sm font-medium">{pkg.rating}</span>
                      <span className="text-xs text-muted-foreground">({pkg.reviews})</span>
                    </div>
                  </div>

                  <CardContent className="p-8">
                    <div className="space-y-6">
                      {/* Header */}
                      <div>
                        <h3 className="text-2xl font-bold mb-3 group-hover:text-primary transition-colors">
                          {pkg.title}
                        </h3>
                        <p className="text-muted-foreground leading-relaxed">
                          {pkg.description}
                        </p>
                      </div>

                      {/* Package Info */}
                      <div className="flex flex-wrap gap-4 py-4 border-y border-border/50">
                        <div className="flex items-center gap-2 text-sm">
                          <Clock className="w-4 h-4 text-primary" />
                          <span>{pkg.duration}</span>
                        </div>
                        <div className="flex items-center gap-2 text-sm">
                          <Users className="w-4 h-4 text-primary" />
                          <span>{pkg.groupSize}</span>
                        </div>
                      </div>

                      {/* Highlights */}
                      <div>
                        <h4 className="font-semibold mb-3">Experience Highlights:</h4>
                        <ul className="space-y-2">
                          {pkg.highlights.map((highlight, idx) => (
                            <li key={idx} className="flex items-start gap-2 text-sm text-muted-foreground">
                              <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                              <span>{highlight}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Includes */}
                      <div>
                        <h4 className="font-semibold mb-3">Package Includes:</h4>
                        <ul className="space-y-2">
                          {pkg.includes.map((item, idx) => (
                            <li key={idx} className="flex items-start gap-2 text-sm text-muted-foreground">
                              <div className="w-1.5 h-1.5 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Price and CTA */}
                      <div className="flex items-center justify-between pt-4">
                        <div>
                          <div className="text-3xl font-bold text-primary">{pkg.price}</div>
                          <div className="text-sm text-muted-foreground">per person</div>
                        </div>
                        <Button 
                          size="lg"
                          className={`bg-gradient-to-r ${pkg.color} text-white border-0 hover:scale-105 transition-all duration-300`}
                        >
                          Book Now
                          <ArrowRight className="ml-2 w-5 h-5" />
                        </Button>
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
      <section className="py-24 bg-gradient-to-r from-primary to-primary/80">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8"
        >
          <h2 className="text-3xl sm:text-5xl font-bold text-white">
            Can't Find What You're Looking For?
          </h2>
          <p className="text-xl text-primary-foreground/80">
            We specialize in creating custom packages tailored to your unique interests and requirements.
          </p>
          <Button size="lg" variant="secondary" className="text-lg px-8 py-6">
            Create Custom Package
            <ArrowRight className="ml-2 w-5 h-5" />
          </Button>
        </motion.div>
      </section>
    </div>
  );
};

export default Packages;
