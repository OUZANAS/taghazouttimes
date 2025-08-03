
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { ArrowRight, CheckCircle, Star, Users, Building, Waves, Camera, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';

const Index = () => {
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
      title: 'Sign Up',
      description: 'Create your account and choose your plan',
    },
    {
      step: '02',
      title: 'Customize',
      description: 'Set up your brand and configure your services',
    },
    {
      step: '03',
      title: 'Launch',
      description: 'Go live and start accepting bookings',
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

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-background via-background to-muted/30 py-20 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-grid-black/[0.02] bg-[size:50px_50px]" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-8">
            <Badge variant="secondary" className="animate-fade-in">
              🚀 Trusted by 1000+ Service Providers
            </Badge>
            
            <div className="space-y-6 animate-fade-in">
              <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight">
                Build Your
                <span className="bg-gradient-to-r from-primary to-primary/80 bg-clip-text text-transparent">
                  {' '}Service Business
                </span>
                <br />
                Website in Minutes
              </h1>
              
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Perfect for surf schools, rental properties, tour operators, and hospitality businesses. 
                Create stunning websites with integrated booking systems.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in">
              <Button size="lg" className="text-lg px-8">
                Start Free Trial
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              <Button size="lg" variant="outline" className="text-lg px-8">
                View Demo
              </Button>
            </div>

            <div className="flex items-center justify-center space-x-8 text-muted-foreground animate-fade-in">
              <div className="flex items-center space-x-2">
                <CheckCircle className="w-5 h-5 text-green-500" />
                <span>No setup fees</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle className="w-5 h-5 text-green-500" />
                <span>14-day free trial</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle className="w-5 h-5 text-green-500" />
                <span>Cancel anytime</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <Badge variant="outline">Features</Badge>
            <h2 className="text-3xl sm:text-4xl font-bold">
              Everything You Need to Succeed
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Built specifically for service-based businesses with all the tools you need
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                <CardContent className="p-6 text-center space-y-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto">
                    <feature.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold">{feature.title}</h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <Badge variant="outline">Process</Badge>
            <h2 className="text-3xl sm:text-4xl font-bold">How It Works</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Get started in just three simple steps
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {steps.map((step, index) => (
              <div key={index} className="text-center space-y-4">
                <div className="relative">
                  <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto text-primary-foreground font-bold text-xl">
                    {step.step}
                  </div>
                  {index < steps.length - 1 && (
                    <div className="hidden md:block absolute top-8 left-1/2 w-full h-0.5 bg-border transform translate-x-8" />
                  )}
                </div>
                <h3 className="text-xl font-semibold">{step.title}</h3>
                <p className="text-muted-foreground">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <Badge variant="outline">Testimonials</Badge>
            <h2 className="text-3xl sm:text-4xl font-bold">
              Loved by Service Providers Worldwide
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              See what our customers say about their experience
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
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
                    <p className="text-sm text-muted-foreground">{testimonial.role}</p>
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
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8">
          <h2 className="text-3xl sm:text-4xl font-bold">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-muted-foreground">
            Join thousands of service providers who have grown their business with our platform
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="text-lg px-8">
              Start Your Free Trial
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            <Button size="lg" variant="outline" asChild className="text-lg px-8">
              <Link to="/contact">Contact Sales</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
