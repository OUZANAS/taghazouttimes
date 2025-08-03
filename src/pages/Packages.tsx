
import { useState } from 'react';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Switch } from '@/components/ui/switch';
import { CheckCircle, Star, Users, Zap, Crown } from 'lucide-react';
import { motion } from 'framer-motion';

const Packages = () => {
  const [isYearly, setIsYearly] = useState(false);

  const packages = [
    {
      name: 'Starter',
      icon: Users,
      description: 'Perfect for small businesses getting started',
      monthlyPrice: 29,
      yearlyPrice: 290,
      popular: false,
      features: [
        'Up to 50 listings',
        'Basic booking system',
        'Email support',
        'Mobile responsive design',
        '2 languages supported',
        'Basic analytics',
        'SSL certificate',
        '99.5% uptime guarantee',
      ],
      limitations: [
        'Limited customization',
        'Basic templates only',
        'Email support only',
      ],
    },
    {
      name: 'Professional',
      icon: Star,
      description: 'Most popular choice for growing businesses',
      monthlyPrice: 79,
      yearlyPrice: 790,
      popular: true,
      features: [
        'Up to 500 listings',
        'Advanced booking system',
        'Priority email & chat support',
        'Custom branding',
        '5 languages supported',
        'Advanced analytics & reports',
        'Payment processing',
        'SEO optimization',
        'Social media integration',
        'Custom domain',
        '99.9% uptime guarantee',
      ],
      limitations: [],
    },
    {
      name: 'Enterprise',
      icon: Crown,
      description: 'For large businesses with custom needs',
      monthlyPrice: 199,
      yearlyPrice: 1990,
      popular: false,
      features: [
        'Unlimited listings',
        'White-label solution',
        'Dedicated account manager',
        'Custom integrations',
        'Unlimited languages',
        'Advanced API access',
        'Custom reporting',
        'Priority phone support',
        'Multi-location management',
        'Advanced user permissions',
        '99.99% uptime guarantee',
        'Custom development',
      ],
      limitations: [],
    },
  ];

  const faqs = [
    {
      question: 'Can I change plans anytime?',
      answer: 'Yes, you can upgrade or downgrade your plan at any time. Changes take effect immediately.',
    },
    {
      question: 'What happens if I exceed my listing limit?',
      answer: 'We\'ll notify you before you reach your limit. You can upgrade your plan or we\'ll help you optimize your listings.',
    },
    {
      question: 'Do you offer refunds?',
      answer: 'We offer a 30-day money-back guarantee on all plans. No questions asked.',
    },
    {
      question: 'Is there a setup fee?',
      answer: 'No setup fees! We believe in transparent pricing with no hidden costs.',
    },
  ];

  const getPrice = (pkg: typeof packages[0]) => {
    return isYearly ? pkg.yearlyPrice : pkg.monthlyPrice;
  };

  const getSavings = (pkg: typeof packages[0]) => {
    const monthlyTotal = pkg.monthlyPrice * 12;
    const savings = monthlyTotal - pkg.yearlyPrice;
    return Math.round((savings / monthlyTotal) * 100);
  };

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
            <Badge variant="secondary">Pricing Plans</Badge>
            <h1 className="text-4xl sm:text-6xl font-bold tracking-tight">
              Simple, Transparent
              <span className="bg-gradient-to-r from-primary to-primary/80 bg-clip-text text-transparent">
                {' '}Pricing
              </span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Choose the perfect plan for your business. Start free, upgrade anytime.
            </p>

            {/* Billing Toggle */}
            <div className="flex items-center justify-center space-x-4">
              <span className={`text-sm ${!isYearly ? 'text-foreground font-medium' : 'text-muted-foreground'}`}>
                Monthly
              </span>
              <Switch
                checked={isYearly}
                onCheckedChange={setIsYearly}
              />
              <span className={`text-sm ${isYearly ? 'text-foreground font-medium' : 'text-muted-foreground'}`}>
                Yearly
              </span>
              {isYearly && (
                <Badge variant="secondary" className="ml-2">
                  Save up to 25%
                </Badge>
              )}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="py-20 -mt-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {packages.map((pkg, index) => (
              <motion.div
                key={pkg.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={pkg.popular ? 'md:-mt-4' : ''}
              >
                <Card className={`relative h-full ${pkg.popular ? 'border-primary shadow-xl scale-105' : 'hover:shadow-lg'} transition-all duration-300`}>
                  {pkg.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <Badge className="px-4 py-1">Most Popular</Badge>
                    </div>
                  )}
                  
                  <CardHeader className="text-center space-y-4 pb-8">
                    <div className={`w-12 h-12 rounded-lg flex items-center justify-center mx-auto ${
                      pkg.popular ? 'bg-primary' : 'bg-primary/10'
                    }`}>
                      <pkg.icon className={`w-6 h-6 ${pkg.popular ? 'text-primary-foreground' : 'text-primary'}`} />
                    </div>
                    
                    <div className="space-y-2">
                      <CardTitle className="text-2xl">{pkg.name}</CardTitle>
                      <p className="text-muted-foreground text-sm">{pkg.description}</p>
                    </div>
                    
                    <div className="space-y-2">
                      <div className="flex items-baseline justify-center space-x-2">
                        <span className="text-4xl font-bold">${getPrice(pkg)}</span>
                        <span className="text-muted-foreground">/{isYearly ? 'year' : 'month'}</span>
                      </div>
                      {isYearly && (
                        <p className="text-sm text-green-600">
                          Save {getSavings(pkg)}% compared to monthly
                        </p>
                      )}
                    </div>
                  </CardHeader>
                  
                  <CardContent className="space-y-6">
                    <Button 
                      className={`w-full ${pkg.popular ? '' : 'variant-outline'}`}
                      size="lg"
                    >
                      {pkg.name === 'Enterprise' ? 'Contact Sales' : 'Start Free Trial'}
                    </Button>
                    
                    <div className="space-y-3">
                      <p className="font-medium text-sm">Everything in {pkg.name}:</p>
                      <ul className="space-y-2 text-sm">
                        {pkg.features.map((feature, idx) => (
                          <li key={idx} className="flex items-start space-x-2">
                            <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
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

      {/* Feature Comparison */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <Badge variant="outline">Compare Plans</Badge>
            <h2 className="text-3xl sm:text-4xl font-bold">Choose What's Right for You</h2>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b">
                  <th className="text-left py-4 px-6">Features</th>
                  <th className="text-center py-4 px-6">Starter</th>
                  <th className="text-center py-4 px-6">Professional</th>
                  <th className="text-center py-4 px-6">Enterprise</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ['Listings', '50', '500', 'Unlimited'],
                  ['Languages', '2', '5', 'Unlimited'],
                  ['Support', 'Email', 'Email & Chat', 'Phone & Dedicated Manager'],
                  ['Custom Branding', '❌', '✅', '✅'],
                  ['API Access', '❌', 'Limited', 'Full'],
                  ['Custom Integrations', '❌', '❌', '✅'],
                ].map(([feature, starter, pro, enterprise], index) => (
                  <tr key={index} className="border-b border-muted">
                    <td className="py-4 px-6 font-medium">{feature}</td>
                    <td className="py-4 px-6 text-center">{starter}</td>
                    <td className="py-4 px-6 text-center">{pro}</td>
                    <td className="py-4 px-6 text-center">{enterprise}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <Badge variant="outline">FAQ</Badge>
            <h2 className="text-3xl sm:text-4xl font-bold">Frequently Asked Questions</h2>
          </div>

          <div className="space-y-8">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card>
                  <CardContent className="p-6">
                    <h3 className="text-lg font-semibold mb-2">{faq.question}</h3>
                    <p className="text-muted-foreground">{faq.answer}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary/10 to-primary/5">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8">
          <h2 className="text-3xl sm:text-4xl font-bold">Ready to Get Started?</h2>
          <p className="text-xl text-muted-foreground">
            Join thousands of businesses already using our platform to grow their online presence
          </p>
          <Button size="lg" className="text-lg px-8">
            Start Your Free Trial
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Packages;
