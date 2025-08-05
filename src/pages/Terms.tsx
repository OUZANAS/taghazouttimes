import { motion } from 'framer-motion';
import { FileText, Scale, Users, AlertTriangle } from 'lucide-react';

const Terms = () => {
  const sections = [
    {
      icon: Users,
      title: "User Accounts",
      content: "You are responsible for maintaining the confidentiality of your account and password and for restricting access to your computer."
    },
    {
      icon: Scale,
      title: "Acceptable Use",
      content: "You agree to use our services only for lawful purposes and in accordance with these Terms of Service."
    },
    {
      icon: FileText,
      title: "Booking Terms",
      content: "All bookings are subject to availability and confirmation. Cancellation policies vary by service provider."
    },
    {
      icon: AlertTriangle,
      title: "Limitation of Liability",
      content: "We shall not be liable for any indirect, incidental, special, consequential, or punitive damages."
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-background to-muted/30">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl font-bold text-foreground mb-4">Terms of Service</h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Please read these terms carefully before using our services. By using TaghazoutTimes, you agree to these terms.
          </p>
        </motion.div>

        <div className="space-y-8">
          {sections.map((section, index) => (
            <motion.div
              key={section.title}
              initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="floating-card p-8 rounded-2xl"
            >
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                  <section.icon className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-3">{section.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{section.content}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-16 text-center"
        >
          <p className="text-sm text-muted-foreground">
            Last updated: January 2024. These terms are subject to change. Continued use of our services constitutes acceptance of any changes.
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default Terms;