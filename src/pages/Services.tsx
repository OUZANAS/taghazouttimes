
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Building, Waves, Camera, Users, MapPin, Clock, Star, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const Services = () => {
  const services = [
    {
      icon: Building,
      title: 'Accommodation Management',
      description: 'Complete property rental management with booking system, calendar sync, and guest communication.',
      features: ['Property listings', 'Booking calendar', 'Guest messaging', 'Payment processing'],
      color: 'from-blue-500 to-blue-600',
    },
    {
      icon: Waves,
      title: 'Surf Schools & Lessons',
      description: 'Specialized tools for surf instructors and schools to manage lessons, equipment, and student progress.',
      features: ['Lesson scheduling', 'Equipment tracking', 'Student progress', 'Weather integration'],
      color: 'from-teal-500 to-teal-600',
    },
    {
      icon: Camera,
      title: 'Tours & Activities',
      description: 'Organize and sell tours, excursions, and unique experiences with automated booking workflows.',
      features: ['Tour packages', 'Group management', 'Route planning', 'Photo galleries'],
      color: 'from-purple-500 to-purple-600',
    },
    {
      icon: Users,
      title: 'Event Management',
      description: 'Host workshops, retreats, and events with comprehensive attendee and resource management.',
      features: ['Event scheduling', 'Attendee tracking', 'Resource booking', 'Certificate generation'],
      color: 'from-orange-500 to-orange-600',
    },
  ];

  const testimonials = [
    {
      name: 'Maria Santos',
      business: 'Casa del Mar Rentals',
      location: 'Taghazout, Morocco',
      content: 'Managing our 12 properties has never been easier. The booking system is intuitive and our guests love it.',
      rating: 5,
    },
    {
      name: 'Ahmed Benali',
      business: 'Atlantic Surf School',
      location: 'Agadir, Morocco',
      content: 'Perfect for surf schools! The lesson scheduling and equipment tracking features save us hours each day.',
      rating: 5,
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-background via-background to-muted/30 py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center space-y-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Badge variant="secondary">Our Services</Badge>
            <h1 className="text-4xl sm:text-6xl font-bold tracking-tight">
              Tailored Solutions for
              <span className="bg-gradient-to-r from-primary to-primary/80 bg-clip-text text-transparent">
                {' '}Every Business
              </span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Whether you run accommodations, teach surfing, organize tours, or host events, 
              we have the perfect tools to digitize and grow your service business.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="h-full hover:shadow-xl transition-all duration-300">
                  <CardContent className="p-8 space-y-6">
                    <div className="flex items-center space-x-4">
                      <div className={`w-12 h-12 rounded-lg bg-gradient-to-r ${service.color} flex items-center justify-center`}>
                        <service.icon className="w-6 h-6 text-white" />
                      </div>
                      <h3 className="text-2xl font-bold">{service.title}</h3>
                    </div>
                    
                    <p className="text-muted-foreground text-lg">{service.description}</p>
                    
                    <div className="space-y-3">
                      <h4 className="font-semibold text-foreground">Key Features:</h4>
                      <ul className="space-y-2">
                        {service.features.map((feature, idx) => (
                          <li key={idx} className="flex items-center space-x-2">
                            <div className="w-2 h-2 bg-primary rounded-full" />
                            <span className="text-muted-foreground">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <Badge variant="outline">How It Works</Badge>
            <h2 className="text-3xl sm:text-4xl font-bold">Get Started in Minutes</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { step: '01', title: 'Choose Your Service Type', desc: 'Select the business model that fits your needs' },
              { step: '02', title: 'Customize Your Platform', desc: 'Set up your branding, services, and pricing' },
              { step: '03', title: 'Start Accepting Bookings', desc: 'Go live and begin serving customers immediately' },
            ].map((item, index) => (
              <motion.div
                key={index}
                className="text-center space-y-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
              >
                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto text-primary-foreground font-bold text-xl">
                  {item.step}
                </div>
                <h3 className="text-xl font-semibold">{item.title}</h3>
                <p className="text-muted-foreground">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <Badge variant="outline">Success Stories</Badge>
            <h2 className="text-3xl sm:text-4xl font-bold">Trusted by Service Providers</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6 space-y-4">
                  <div className="flex items-center space-x-1">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <p className="text-muted-foreground italic">"{testimonial.content}"</p>
                  <div className="space-y-1">
                    <p className="font-semibold">{testimonial.name}</p>
                    <p className="text-sm text-primary">{testimonial.business}</p>
                    <div className="flex items-center space-x-1 text-sm text-muted-foreground">
                      <MapPin className="w-3 h-3" />
                      <span>{testimonial.location}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary/10 to-primary/5">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8">
          <h2 className="text-3xl sm:text-4xl font-bold">Ready to Transform Your Business?</h2>
          <p className="text-xl text-muted-foreground">
            Join thousands of service providers who have digitized their operations with our platform
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="text-lg px-8">
              Start Free Trial
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            <Button size="lg" variant="outline" asChild className="text-lg px-8">
              <Link to="/packages">View Pricing</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
