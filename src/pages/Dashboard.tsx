import { useState } from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { DashboardLayout } from '@/components/dashboard/DashboardLayout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { AnimatedCounter } from '@/components/ui/animated-counter';
import { SEOHead } from '@/components/ui/seo-head';
import { 
  Calendar, 
  DollarSign, 
  MapPin, 
  Star,
  TrendingUp,
  User,
  BarChart3
} from 'lucide-react';
import { mockBookings } from '@/data/mockData';

const Dashboard = () => {
  const { t } = useTranslation(['dashboard', 'common']);

  const stats = [
    {
      title: t('totalBookings'),
      value: 156,
      change: '+12%',
      icon: Calendar,
      positive: true,
    },
    {
      title: t('totalSpent'),
      value: 12450,
      change: '+8%',
      icon: DollarSign,
      positive: true,
      prefix: '$',
    },
    {
      title: 'Active Listings',
      value: 24,
      change: '+2',
      icon: MapPin,
      positive: true,
    },
    {
      title: 'Avg. Rating',
      value: 4.8,
      change: '+0.2',
      icon: Star,
      positive: true,
    },
  ];

  const recentBookings = mockBookings.slice(0, 5);

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'confirmed':
        return 'bg-green-100 text-green-800';
      case 'pending':
        return 'bg-yellow-100 text-yellow-800';
      case 'completed':
        return 'bg-blue-100 text-blue-800';
      case 'cancelled':
        return 'bg-red-100 text-red-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <DashboardLayout>
      <SEOHead 
        title={t('title')}
        description="Manage your bookings, favorites, and profile"
      />
      
      <div className="space-y-8">
        {/* Welcome Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="space-y-2"
        >
          <h1 className="text-3xl font-bold">{t('welcome')}, John!</h1>
          <p className="text-muted-foreground">
            Here's what's happening with your account today.
          </p>
        </motion.div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Card className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div className="space-y-2">
                      <p className="text-sm text-muted-foreground">{stat.title}</p>
                      <p className="text-3xl font-bold">
                        <AnimatedCounter 
                          end={stat.value} 
                          prefix={stat.prefix}
                          suffix={stat.title.includes('Rating') ? '' : ''}
                        />
                      </p>
                      <div className="flex items-center space-x-1 text-sm">
                        <TrendingUp className={`w-4 h-4 ${stat.positive ? 'text-green-500' : 'text-red-500'}`} />
                        <span className={stat.positive ? 'text-green-500' : 'text-red-500'}>
                          {stat.change}
                        </span>
                        <span className="text-muted-foreground">vs last month</span>
                      </div>
                    </div>
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                      <stat.icon className="w-6 h-6 text-primary" />
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Recent Bookings */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center justify-between">
                  {t('recentActivity')}
                  <Button variant="ghost" size="sm">View All</Button>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {recentBookings.map((booking) => (
                    <motion.div
                      key={booking.id}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.4 }}
                      className="flex items-center justify-between p-4 border rounded-lg hover:bg-accent/50 transition-colors"
                    >
                      <div className="space-y-1">
                        <p className="font-medium">{booking.customerInfo.name}</p>
                        <p className="text-sm text-muted-foreground">
                          {booking.checkIn} - {booking.checkOut}
                        </p>
                        <p className="text-xs text-muted-foreground">{booking.guests} guests</p>
                      </div>
                      <div className="text-right space-y-2">
                        <p className="font-semibold">${booking.totalPrice}</p>
                        <Badge className={getStatusColor(booking.status)}>
                          {t(`common:${booking.status}`)}
                        </Badge>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Quick Actions */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <Card>
              <CardHeader>
                <CardTitle>Quick Actions</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <Button className="w-full justify-start" size="lg">
                  <Calendar className="w-5 h-5 mr-3" />
                  New Booking
                </Button>
                <Button variant="outline" className="w-full justify-start" size="lg">
                  <Heart className="w-5 h-5 mr-3" />
                  View Favorites
                </Button>
                <Button variant="outline" className="w-full justify-start" size="lg">
                  <User className="w-5 h-5 mr-3" />
                  Update Profile
                </Button>
                <Button variant="outline" className="w-full justify-start" size="lg">
                  <Settings className="w-5 h-5 mr-3" />
                  Account Settings
                </Button>
              </CardContent>
            </Card>
          </motion.div>
        </div>

        {/* Analytics Chart Placeholder */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          <Card>
            <CardHeader>
              <CardTitle>Booking Trends</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="aspect-video bg-muted rounded-lg flex items-center justify-center">
                <div className="text-center space-y-2">
                  <BarChart3 className="w-12 h-12 text-muted-foreground mx-auto" />
                  <p className="text-muted-foreground">Analytics chart will be integrated here</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </DashboardLayout>
  );
};

export default Dashboard;