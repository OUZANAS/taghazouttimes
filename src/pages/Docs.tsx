import { motion } from 'framer-motion';
import { Book, Code, Settings, Zap, Globe, Shield } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

const Docs = () => {
  const sections = [
    {
      icon: Zap,
      title: "Getting Started",
      description: "Quick start guide to begin your journey with TaghazoutTimes",
      items: ["Account Setup", "Profile Creation", "First Booking", "Platform Navigation"]
    },
    {
      icon: Book,
      title: "User Guide",
      description: "Comprehensive guide for all platform features",
      items: ["Booking Process", "Payment Methods", "Cancellation Policy", "Support Resources"]
    },
    {
      icon: Settings,
      title: "Account Management",
      description: "Manage your account settings and preferences",
      items: ["Profile Settings", "Privacy Controls", "Notification Preferences", "Security Settings"]
    },
    {
      icon: Globe,
      title: "Platform Features",
      description: "Explore all available features and services",
      items: ["Search & Filters", "Reviews & Ratings", "Favorites", "Recommendations"]
    },
    {
      icon: Shield,
      title: "Safety & Security",
      description: "Guidelines for safe and secure platform usage",
      items: ["Verified Listings", "Secure Payments", "Safety Tips", "Report Issues"]
    },
    {
      icon: Code,
      title: "API Documentation",
      description: "Technical documentation for developers",
      items: ["API Endpoints", "Authentication", "Rate Limits", "Response Formats"]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-background to-muted/30">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl font-bold text-foreground mb-4">Documentation</h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Everything you need to know about using TaghazoutTimes platform effectively
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {sections.map((section, index) => (
            <motion.div
              key={section.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Card className="floating-card h-full hover:shadow-lg transition-all duration-300">
                <CardHeader>
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-4">
                    <section.icon className="w-6 h-6 text-primary" />
                  </div>
                  <CardTitle>{section.title}</CardTitle>
                  <CardDescription>{section.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {section.items.map((item) => (
                      <li key={item} className="text-sm text-muted-foreground hover:text-primary cursor-pointer transition-colors">
                        • {item}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-16 text-center"
        >
          <div className="floating-card p-8 rounded-2xl">
            <h3 className="text-xl font-semibold text-foreground mb-4">Need More Help?</h3>
            <p className="text-muted-foreground mb-6">
              Can't find what you're looking for? Our support team is here to help.
            </p>
            <div className="flex justify-center space-x-4">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="btn-primary-glow px-6 py-3 rounded-lg text-primary-foreground font-medium"
              >
                Contact Support
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-6 py-3 rounded-lg border border-border bg-background hover:bg-accent transition-colors font-medium"
              >
                Join Community
              </motion.button>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Docs;