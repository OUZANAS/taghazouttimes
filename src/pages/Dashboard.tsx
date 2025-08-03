
import { useState } from 'react';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { 
  BarChart3, 
  Calendar, 
  Users, 
  DollarSign, 
  TrendingUp, 
  MapPin, 
  Star,
  Settings,
  Plus,
  Eye,
  Edit3
} from 'lucide-react';
import { motion } from 'framer-motion';

const Dashboard = () => {
  const [selectedTab, setSelectedTab] = useState('overview');

  const stats = [
    {
      title: 'Total Bookings',
      value: '156',
      change: '+12%',
      icon: Calendar,
      positive: true,
    },
    {
      title: 'Revenue',
      value: '$12,450',
      change: '+8%',
      icon: DollarSign,
      positive: true,
    },
    {
      title: 'Active Listings',
      value: '24',
      change: '+2',
      icon: MapPin,
      positive: true,
    },
    {
      title: 'Avg. Rating',
      value: '4.8',
      change: '+0.2',
      icon: Star,
      positive: true,
    },
  ];

  const recentBookings = [
    {
      id: 1,
      customer: 'Sarah Johnson',
      service: 'Ocean View Villa',
      date: '2024-01-20',
      amount: '$480',
      status: 'confirmed',
    },
    {
      id: 2,
      customer: 'Mike Chen',
      service: 'Surf Lessons',
      date: '2024-01-18',
      amount: '$120',
      status: 'pending',
    },
    {
      id: 3,
      customer: 'Elena Rodriguez',
      service: 'Desert Tour',
      date: '2024-01-15',
      amount: '$350',
      status: 'completed',
    },
  ];

  const listings = [
    {
      id: 1,
      title: 'Ocean View Villa Taghazout',
      status: 'active',
      bookings: 12,
      revenue: '$3,240',
      rating: 4.9,
    },
    {
      id: 2,
      title: 'Beginner Surf Lessons',
      status: 'active',
      bookings: 28,
      revenue: '$1,680',
      rating: 4.8,
    },
    {
      id: 3,
      title: 'Desert Adventure Tour',
      status: 'draft',
      bookings: 0,
      revenue: '$0',
      rating: 0,
    },
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'confirmed':
      case 'active':
        return 'bg-green-100 text-green-800';
      case 'pending':
      case 'draft':
        return 'bg-yellow-100 text-yellow-800';
      case 'completed':
        return 'bg-blue-100 text-blue-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="min-h-screen bg-muted/30">
      {/* Header */}
      <div className="bg-background border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between space-y-4 sm:space-y-0">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold">Dashboard</h1>
              <p className="text-muted-foreground">
                Welcome back! Here's what's happening with your business.
              </p>
            </div>
            
            <div className="flex items-center space-x-3">
              <Button variant="outline">
                <Settings className="w-4 h-4 mr-2" />
                Settings
              </Button>
              <Button>
                <Plus className="w-4 h-4 mr-2" />
                Add Listing
              </Button>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div className="space-y-2">
                      <p className="text-sm text-muted-foreground">{stat.title}</p>
                      <p className="text-3xl font-bold">{stat.value}</p>
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

        {/* Main Content */}
        <Tabs value={selectedTab} onValueChange={setSelectedTab} className="space-y-6">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="bookings">Bookings</TabsTrigger>
            <TabsTrigger value="listings">Listings</TabsTrigger>
            <TabsTrigger value="analytics">Analytics</TabsTrigger>
          </TabsList>

          <TabsContent value="overview" className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {/* Recent Bookings */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center justify-between">
                    Recent Bookings
                    <Button variant="ghost" size="sm">View All</Button>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {recentBookings.map((booking) => (
                      <div key={booking.id} className="flex items-center justify-between p-4 border rounded-lg">
                        <div className="space-y-1">
                          <p className="font-medium">{booking.customer}</p>
                          <p className="text-sm text-muted-foreground">{booking.service}</p>
                          <p className="text-xs text-muted-foreground">{booking.date}</p>
                        </div>
                        <div className="text-right space-y-2">
                          <p className="font-semibold">{booking.amount}</p>
                          <Badge className={getStatusColor(booking.status)}>
                            {booking.status}
                          </Badge>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Performance Chart Placeholder */}
              <Card>
                <CardHeader>
                  <CardTitle>Revenue Overview</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="aspect-video bg-muted rounded-lg flex items-center justify-center">
                    <div className="text-center space-y-2">
                      <BarChart3 className="w-12 h-12 text-muted-foreground mx-auto" />
                      <p className="text-muted-foreground">Chart visualization would go here</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="bookings" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>All Bookings</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {recentBookings.map((booking) => (
                    <div key={booking.id} className="flex items-center justify-between p-4 border rounded-lg">
                      <div className="space-y-1">
                        <p className="font-medium">{booking.customer}</p>
                        <p className="text-sm text-muted-foreground">{booking.service}</p>
                        <p className="text-xs text-muted-foreground">{booking.date}</p>
                      </div>
                      <div className="flex items-center space-x-4">
                        <div className="text-right">
                          <p className="font-semibold">{booking.amount}</p>
                          <Badge className={getStatusColor(booking.status)}>
                            {booking.status}
                          </Badge>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Button variant="ghost" size="sm">
                            <Eye className="w-4 h-4" />
                          </Button>
                          <Button variant="ghost" size="sm">
                            <Edit3 className="w-4 h-4" />
                          </Button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="listings" className="space-y-6">
            <div className="flex items-center justify-between">
              <h2 className="text-2xl font-bold">Your Listings</h2>
              <Button>
                <Plus className="w-4 h-4 mr-2" />
                Add New Listing
              </Button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {listings.map((listing) => (
                <Card key={listing.id} className="hover:shadow-md transition-shadow">
                  <CardContent className="p-6 space-y-4">
                    <div className="flex items-center justify-between">
                      <Badge className={getStatusColor(listing.status)}>
                        {listing.status}
                      </Badge>
                      <div className="flex items-center space-x-1">
                        <Button variant="ghost" size="sm">
                          <Eye className="w-4 h-4" />
                        </Button>
                        <Button variant="ghost" size="sm">
                          <Edit3 className="w-4 h-4" />
                        </Button>
                      </div>
                    </div>
                    
                    <h3 className="font-semibold">{listing.title}</h3>
                    
                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Bookings:</span>
                        <span>{listing.bookings}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Revenue:</span>
                        <span className="font-medium">{listing.revenue}</span>
                      </div>
                      {listing.rating > 0 && (
                        <div className="flex justify-between">
                          <span className="text-muted-foreground">Rating:</span>
                          <div className="flex items-center space-x-1">
                            <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                            <span>{listing.rating}</span>
                          </div>
                        </div>
                      )}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="analytics" className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Booking Trends</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="aspect-video bg-muted rounded-lg flex items-center justify-center">
                    <div className="text-center space-y-2">
                      <TrendingUp className="w-12 h-12 text-muted-foreground mx-auto" />
                      <p className="text-muted-foreground">Analytics chart would go here</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Customer Demographics</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="aspect-video bg-muted rounded-lg flex items-center justify-center">
                    <div className="text-center space-y-2">
                      <Users className="w-12 h-12 text-muted-foreground mx-auto" />
                      <p className="text-muted-foreground">Demographics chart would go here</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default Dashboard;
