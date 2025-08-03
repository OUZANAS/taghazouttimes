
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Users, Target, Award, Globe, ArrowRight, Heart, Zap, Shield } from 'lucide-react';
import { Link } from 'react-router-dom';

const About = () => {
  const values = [
    {
      icon: Heart,
      title: 'Customer First',
      description: 'Everything we build is designed with our customers\' success in mind.',
    },
    {
      icon: Zap,
      title: 'Innovation',
      description: 'We constantly evolve our platform with cutting-edge technology.',
    },
    {
      icon: Shield,
      title: 'Reliability',
      description: 'Trust and security are at the core of everything we do.',
    },
    {
      icon: Globe,
      title: 'Global Reach',
      description: 'Supporting businesses worldwide with multilingual capabilities.',
    },
  ];

  const team = [
    {
      name: 'Alex Rodriguez',
      role: 'CEO & Co-Founder',
      bio: 'Former hospitality industry executive with 15+ years of experience.',
      image: '/placeholder.svg',
    },
    {
      name: 'Sarah Chen',
      role: 'CTO & Co-Founder',
      bio: 'Tech leader specializing in scalable SaaS platforms and user experience.',
      image: '/placeholder.svg',
    },
    {
      name: 'Marcus Thompson',
      role: 'Head of Product',
      bio: 'Product strategist focused on service industry digital transformation.',
      image: '/placeholder.svg',
    },
    {
      name: 'Lisa Patel',
      role: 'Head of Design',
      bio: 'Design expert creating beautiful, user-centered experiences.',
      image: '/placeholder.svg',
    },
  ];

  const stats = [
    { number: '1000+', label: 'Active Businesses' },
    { number: '50K+', label: 'Bookings Processed' },
    { number: '15+', label: 'Countries Served' },
    { number: '99.9%', label: 'Uptime Guarantee' },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-background via-background to-muted/30 py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-8">
            <Badge variant="secondary">About SaaSify</Badge>
            <h1 className="text-4xl sm:text-6xl font-bold tracking-tight">
              Empowering Service
              <span className="bg-gradient-to-r from-primary to-primary/80 bg-clip-text text-transparent">
                {' '}Businesses
              </span>
              <br />
              Around the World
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              We believe every service provider deserves professional tools to grow their business. 
              Our mission is to democratize technology for the hospitality and service industries.
            </p>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <Badge variant="outline">Our Mission</Badge>
              <h2 className="text-3xl sm:text-4xl font-bold">
                Making Professional Websites Accessible to Everyone
              </h2>
              <p className="text-lg text-muted-foreground">
                We started SaaSify because we saw talented service providers struggling with outdated booking systems 
                and unprofessional websites. Small surf schools, local tour guides, and accommodation owners were 
                losing business to competitors simply because they lacked the right technology.
              </p>
              <p className="text-lg text-muted-foreground">
                Our platform bridges this gap, offering enterprise-level features at affordable prices, 
                specifically designed for service-based businesses.
              </p>
              <Button size="lg" asChild>
                <Link to="/services">
                  Explore Our Services
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
              </Button>
            </div>
            
            <div className="relative">
              <div className="aspect-video bg-muted rounded-2xl flex items-center justify-center">
                <div className="text-center space-y-4">
                  <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto">
                    <Target className="w-8 h-8 text-primary-foreground" />
                  </div>
                  <p className="text-muted-foreground">Mission Illustration</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-12">
            <Badge variant="outline">Our Impact</Badge>
            <h2 className="text-3xl sm:text-4xl font-bold">Growing Together</h2>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center space-y-2">
                <div className="text-4xl sm:text-5xl font-bold text-primary">{stat.number}</div>
                <div className="text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <Badge variant="outline">Our Values</Badge>
            <h2 className="text-3xl sm:text-4xl font-bold">What Drives Us</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              These core values guide every decision we make and every feature we build
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardContent className="p-6 space-y-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto">
                    <value.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold">{value.title}</h3>
                  <p className="text-muted-foreground">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <Badge variant="outline">Our Team</Badge>
            <h2 className="text-3xl sm:text-4xl font-bold">Meet the People Behind SaaSify</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              A diverse team of entrepreneurs, engineers, and designers passionate about empowering businesses
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6 text-center space-y-4">
                  <div className="w-20 h-20 bg-muted rounded-full mx-auto flex items-center justify-center">
                    <Users className="w-8 h-8 text-muted-foreground" />
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-xl font-semibold">{member.name}</h3>
                    <p className="text-primary font-medium">{member.role}</p>
                    <p className="text-sm text-muted-foreground">{member.bio}</p>
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
            Ready to Join Our Mission?
          </h2>
          <p className="text-xl text-muted-foreground">
            Whether you're a service provider or want to join our team, we'd love to hear from you
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" asChild>
              <Link to="/">
                Start Your Journey
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link to="/contact">Get in Touch</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
