import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin, Clock, Waves } from 'lucide-react';

export const Footer = () => {
  const { t } = useTranslation('common');

  const footerLinks = {
    product: [
      { name: t('services'), href: '/services' },
      { name: t('packages'), href: '/packages' },
      { name: t('listings'), href: '/listings' },
      { name: t('blog'), href: '/blog' },
    ],
    company: [
      { name: t('about'), href: '/about' },
      { name: t('contact'), href: '/contact' },
      { name: 'Privacy Policy', href: '/privacy' },
      { name: 'Terms of Service', href: '/terms' },
    ],
    support: [
      { name: 'Help Center', href: '/help' },
      { name: 'Documentation', href: '/docs' },
      { name: 'API Reference', href: '/api' },
      { name: 'Community', href: '/community' },
    ],
  };

  const contactInfo = [
    { icon: Phone, label: "Phone", value: "+212 528 123 456" },
    { icon: Mail, label: "Email", value: "hello@taghazouttimes.com" },
    { icon: MapPin, label: "Address", value: "Taghazout, Agadir, Morocco" },
    { icon: Clock, label: "Hours", value: "24/7 Customer Support" },
  ];

  const socialLinks = [
    { name: 'Facebook', icon: Facebook, href: '#' },
    { name: 'Twitter', icon: Twitter, href: '#' },
    { name: 'Instagram', icon: Instagram, href: '#' },
    { name: 'LinkedIn', icon: Linkedin, href: '#' },
  ];

  return (
    <footer className="relative bg-gradient-to-br from-muted/30 to-muted/60 border-t border-border overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-grid-pattern" />
      </div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8">
          {/* Brand & Contact Info */}
          <div className="lg:col-span-2 space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <Link to="/" className="flex items-center space-x-3 mb-6">
                <div className="w-12 h-12 bg-primary rounded-xl flex items-center justify-center shadow-lg">
                  <Waves className="w-7 h-7 text-primary-foreground" />
                </div>
                <span className="font-bold text-2xl text-foreground">{t('companyName')}</span>
              </Link>
              
              <p className="text-muted-foreground mb-6 text-lg leading-relaxed">
                {t('companyTagline')}
              </p>

              <div className="space-y-4">
                {contactInfo.map((contact, index) => (
                  <motion.div
                    key={contact.label}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-center space-x-3 text-sm"
                  >
                    <div className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center">
                      <contact.icon className="w-4 h-4 text-primary" />
                    </div>
                    <div>
                      <span className="text-muted-foreground">{contact.label}: </span>
                      <span className="text-foreground font-medium">{contact.value}</span>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Newsletter */}
          <div className="lg:col-span-2 space-y-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="floating-card p-6 rounded-2xl bg-gradient-to-br from-primary/5 to-primary/10"
            >
              <h4 className="font-bold text-foreground text-lg mb-3">{t('stayUpdated')}</h4>
              <p className="text-muted-foreground text-sm mb-4">
                Get exclusive deals, travel tips, and cultural insights delivered to your inbox.
              </p>
              <div className="space-y-3">
                <Input 
                  placeholder={t('enterEmail')}
                  className="bg-background/80 border-0"
                />
                <Button className="w-full btn-primary-glow">
                  <Mail className="w-4 h-4 mr-2" />
                  {t('subscribe')}
                </Button>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <h4 className="font-semibold text-foreground mb-4">Follow Our Journey</h4>
              <div className="flex items-center space-x-3">
                {socialLinks.map((social, index) => (
                  <motion.div
                    key={social.name}
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Link
                      to={social.href}
                      className="w-10 h-10 bg-primary/10 hover:bg-primary rounded-xl flex items-center justify-center transition-all duration-300 hover:text-primary-foreground group"
                    >
                      <social.icon className="w-5 h-5 text-primary group-hover:text-primary-foreground" />
                    </Link>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Product Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h4 className="font-bold text-foreground">Explore</h4>
            <ul className="space-y-3">
              {footerLinks.product.map((link, index) => (
                <motion.li
                  key={link.name}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: 0.5 + index * 0.05 }}
                  viewport={{ once: true }}
                >
                  <Link
                    to={link.href}
                    className="text-muted-foreground hover:text-primary transition-all duration-300 hover:translate-x-1 block"
                  >
                    {link.name}
                  </Link>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Company Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h4 className="font-bold text-foreground">Company</h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link, index) => (
                <motion.li
                  key={link.name}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: 0.6 + index * 0.05 }}
                  viewport={{ once: true }}
                >
                  <Link
                    to={link.href}
                    className="text-muted-foreground hover:text-primary transition-all duration-300 hover:translate-x-1 block"
                  >
                    {link.name}
                  </Link>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.7 }}
          viewport={{ once: true }}
          className="mt-16 pt-8 border-t border-border/50"
        >
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex items-center space-x-6">
              <p className="text-muted-foreground text-sm">
                © 2024 {t('companyName')}. {t('allRightsReserved')}.
              </p>
              <div className="hidden md:flex items-center space-x-4 text-xs text-muted-foreground">
                <span>Made with ❤️ in Morocco</span>
                <span>•</span>
                <span>🏄‍♂️ Surf • 🌊 Travel • 🏡 Stay</span>
              </div>
            </div>
            
            <div className="flex items-center space-x-4">
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="px-3 py-1 bg-primary/10 rounded-full text-xs text-primary font-medium"
              >
                🌐 Available in 3 Languages
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
      
      {/* Floating Elements */}
      <div className="absolute top-8 right-8 opacity-10">
        <motion.div
          animate={{ 
            y: [0, -10, 0],
            rotate: [0, 5, 0]
          }}
          transition={{ 
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          <Waves className="w-16 h-16 text-primary" />
        </motion.div>
      </div>
    </footer>
  );
};