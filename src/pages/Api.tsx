import { motion } from 'framer-motion';
import { Code, Key, Zap, Shield, Database, Globe } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const Api = () => {
  const features = [
    {
      icon: Zap,
      title: "Fast & Reliable",
      description: "99.9% uptime with lightning-fast response times"
    },
    {
      icon: Shield,
      title: "Secure",
      description: "Enterprise-grade security with OAuth 2.0 authentication"
    },
    {
      icon: Database,
      title: "Rich Data",
      description: "Access to comprehensive travel and accommodation data"
    },
    {
      icon: Globe,
      title: "Global Coverage",
      description: "Worldwide destinations and services at your fingertips"
    }
  ];

  const endpoints = [
    {
      method: "GET",
      endpoint: "/api/v1/listings",
      description: "Retrieve all available listings",
      response: "Array of listing objects"
    },
    {
      method: "GET",
      endpoint: "/api/v1/listings/{id}",
      description: "Get specific listing details",
      response: "Single listing object"
    },
    {
      method: "POST",
      endpoint: "/api/v1/bookings",
      description: "Create a new booking",
      response: "Booking confirmation object"
    },
    {
      method: "GET",
      endpoint: "/api/v1/user/bookings",
      description: "Get user's booking history",
      response: "Array of booking objects"
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
          <h1 className="text-4xl font-bold text-foreground mb-4">API Reference</h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Integrate TaghazoutTimes services into your applications with our powerful REST API
          </p>
        </motion.div>

        {/* Features */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16"
        >
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
            >
              <Card className="floating-card text-center h-full">
                <CardHeader>
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                    <feature.icon className="w-6 h-6 text-primary" />
                  </div>
                  <CardTitle className="text-lg">{feature.title}</CardTitle>
                  <CardDescription>{feature.description}</CardDescription>
                </CardHeader>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* Getting Started */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mb-16"
        >
          <Card className="floating-card">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Key className="w-5 h-5 text-primary" />
                <span>Getting Started</span>
              </CardTitle>
              <CardDescription>Follow these steps to start using our API</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid md:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center mx-auto mb-3 text-primary-foreground font-bold">
                    1
                  </div>
                  <h4 className="font-semibold mb-2">Get API Key</h4>
                  <p className="text-sm text-muted-foreground">Sign up and generate your API key from the dashboard</p>
                </div>
                <div className="text-center">
                  <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center mx-auto mb-3 text-primary-foreground font-bold">
                    2
                  </div>
                  <h4 className="font-semibold mb-2">Make Request</h4>
                  <p className="text-sm text-muted-foreground">Include your API key in the Authorization header</p>
                </div>
                <div className="text-center">
                  <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center mx-auto mb-3 text-primary-foreground font-bold">
                    3
                  </div>
                  <h4 className="font-semibold mb-2">Get Response</h4>
                  <p className="text-sm text-muted-foreground">Receive JSON responses with rich data</p>
                </div>
              </div>
              
              <div className="bg-muted/50 p-4 rounded-lg">
                <pre className="text-sm">
                  <code>
{`curl -H "Authorization: Bearer YOUR_API_KEY" \\
     -H "Content-Type: application/json" \\
     https://api.taghazout times.com/v1/listings`}
                  </code>
                </pre>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Endpoints */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mb-16"
        >
          <Card className="floating-card">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Code className="w-5 h-5 text-primary" />
                <span>Available Endpoints</span>
              </CardTitle>
              <CardDescription>Core API endpoints for accessing our services</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {endpoints.map((endpoint, index) => (
                  <motion.div
                    key={endpoint.endpoint}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: 0.5 + index * 0.1 }}
                    className="border border-border rounded-lg p-4 hover:bg-accent/50 transition-colors"
                  >
                    <div className="flex items-center space-x-4 mb-2">
                      <span className={`px-2 py-1 rounded text-xs font-mono ${
                        endpoint.method === 'GET' ? 'bg-green-100 text-green-800' : 'bg-blue-100 text-blue-800'
                      }`}>
                        {endpoint.method}
                      </span>
                      <code className="text-sm font-mono">{endpoint.endpoint}</code>
                    </div>
                    <p className="text-sm text-muted-foreground mb-1">{endpoint.description}</p>
                    <p className="text-xs text-muted-foreground">Returns: {endpoint.response}</p>
                  </motion.div>
                ))}
              </div>
            </CardContent>
          </Card>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-center"
        >
          <div className="floating-card p-8 rounded-2xl">
            <h3 className="text-2xl font-bold text-foreground mb-4">Ready to Get Started?</h3>
            <p className="text-muted-foreground mb-6">
              Join thousands of developers building amazing travel applications with our API
            </p>
            <div className="flex justify-center space-x-4">
              <Button size="lg" className="btn-primary-glow">
                Get API Key
              </Button>
              <Button variant="outline" size="lg">
                View Full Docs
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Api;