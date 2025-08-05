import { motion } from 'framer-motion';
import { Users, MessageSquare, Heart, Trophy, Star, Calendar } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

const Community = () => {
  const stats = [
    { icon: Users, value: "10K+", label: "Active Members" },
    { icon: MessageSquare, value: "500+", label: "Daily Discussions" },
    { icon: Heart, value: "95%", label: "Satisfaction Rate" },
    { icon: Trophy, value: "50+", label: "Community Events" }
  ];

  const discussions = [
    {
      title: "Best surf spots in Taghazout",
      author: "SurfMaster",
      replies: 23,
      time: "2 hours ago",
      category: "Surfing"
    },
    {
      title: "Local food recommendations",
      author: "FoodLover",
      replies: 15,
      time: "4 hours ago",
      category: "Food & Drink"
    },
    {
      title: "Accommodation booking tips",
      author: "Traveler99",
      replies: 8,
      time: "6 hours ago",
      category: "Accommodation"
    }
  ];

  const events = [
    {
      title: "Weekly Surf Meetup",
      date: "Every Sunday",
      time: "8:00 AM",
      participants: 25
    },
    {
      title: "Cultural Exchange Night",
      date: "Jan 15, 2024",
      time: "7:00 PM",
      participants: 40
    },
    {
      title: "Photography Workshop",
      date: "Jan 20, 2024",
      time: "2:00 PM",
      participants: 15
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
          <h1 className="text-4xl font-bold text-foreground mb-4">Community</h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Connect with fellow travelers, locals, and surf enthusiasts in our vibrant community
          </p>
        </motion.div>

        {/* Community Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
              className="text-center"
            >
              <div className="floating-card p-6 rounded-2xl">
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <stat.icon className="w-6 h-6 text-primary" />
                </div>
                <div className="text-2xl font-bold text-foreground">{stat.value}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Recent Discussions */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <Card className="floating-card">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <MessageSquare className="w-5 h-5 text-primary" />
                  <span>Recent Discussions</span>
                </CardTitle>
                <CardDescription>Join the conversation with our community</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                {discussions.map((discussion, index) => (
                  <motion.div
                    key={discussion.title}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: 0.4 + index * 0.1 }}
                    className="p-4 border border-border rounded-lg hover:bg-accent/50 transition-colors cursor-pointer"
                  >
                    <div className="flex justify-between items-start mb-2">
                      <h4 className="font-semibold text-foreground">{discussion.title}</h4>
                      <span className="text-xs text-muted-foreground">{discussion.time}</span>
                    </div>
                    <div className="flex items-center justify-between text-sm text-muted-foreground">
                      <span>by {discussion.author}</span>
                      <div className="flex items-center space-x-4">
                        <span className="bg-primary/10 text-primary px-2 py-1 rounded-full text-xs">
                          {discussion.category}
                        </span>
                        <span>{discussion.replies} replies</span>
                      </div>
                    </div>
                  </motion.div>
                ))}
                <Button variant="outline" className="w-full mt-4">
                  View All Discussions
                </Button>
              </CardContent>
            </Card>
          </motion.div>

          {/* Upcoming Events */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <Card className="floating-card">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Calendar className="w-5 h-5 text-primary" />
                  <span>Upcoming Events</span>
                </CardTitle>
                <CardDescription>Don't miss out on community gatherings</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                {events.map((event, index) => (
                  <motion.div
                    key={event.title}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: 0.5 + index * 0.1 }}
                    className="p-4 border border-border rounded-lg hover:bg-accent/50 transition-colors"
                  >
                    <h4 className="font-semibold text-foreground mb-2">{event.title}</h4>
                    <div className="text-sm text-muted-foreground space-y-1">
                      <div>📅 {event.date}</div>
                      <div>🕐 {event.time}</div>
                      <div className="flex items-center space-x-2">
                        <Users className="w-4 h-4" />
                        <span>{event.participants} participants</span>
                      </div>
                    </div>
                  </motion.div>
                ))}
                <Button className="w-full mt-4">
                  Create Event
                </Button>
              </CardContent>
            </Card>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-16 text-center"
        >
          <div className="floating-card p-8 rounded-2xl">
            <h3 className="text-2xl font-bold text-foreground mb-4">Join Our Community</h3>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              Connect with like-minded travelers, share experiences, get local insights, and be part of something special.
            </p>
            <Button size="lg" className="btn-primary-glow">
              Join Now
            </Button>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Community;