
import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Button } from '@/components/ui/button';
import { Menu, X, User, Waves } from 'lucide-react';
import { AuthModal } from '@/components/auth/AuthModal';
import { HomeSelector } from '@/components/ui/home-selector';
import { LanguageSwitcher } from './LanguageSwitcher';

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showAuth, setShowAuth] = useState(false);
  const [authMode, setAuthMode] = useState<'login' | 'signup'>('login');
  const location = useLocation();
  const { t } = useTranslation('common');

  const navItems = [
    { name: t('about'), href: '/about' },
    { name: t('services'), href: '/services' },
    { name: t('listings'), href: '/listings' },
    { name: t('packages'), href: '/packages' },
    { name: t('blog'), href: '/blog' },
    { name: t('contact'), href: '/contact' },
  ];

  const isActive = (path: string) => location.pathname === path;

  const handleAuthClick = (mode: 'login' | 'signup') => {
    setAuthMode(mode);
    setShowAuth(true);
  };

  return (
    <>
      <nav className="bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b border-border sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <Link to="/" className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-primary rounded-xl flex items-center justify-center shadow-lg">
                <Waves className="w-6 h-6 text-primary-foreground" />
              </div>
              <span className="font-bold text-xl text-foreground">TaghazoutTimes</span>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              <HomeSelector />
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`text-sm font-medium transition-colors hover:text-primary ${
                    isActive(item.href) ? 'text-primary' : 'text-muted-foreground'
                  }`}
                >
                  {item.name}
                </Link>
              ))}
            </div>

            {/* Desktop Actions */}
            <div className="hidden md:flex items-center space-x-4">
              <Button
                variant="ghost"
                onClick={() => handleAuthClick('login')}
                className="text-sm"
              >
                <User className="w-4 h-4 mr-2" />
                {t('signin')}
              </Button>
              <Button onClick={() => handleAuthClick('signup')} className="text-sm">
                {t('signup')}
              </Button>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setIsOpen(!isOpen)}
              >
                {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </Button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden border-t border-border bg-background">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <div className="px-3 py-2">
                <HomeSelector />
              </div>
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  onClick={() => setIsOpen(false)}
                  className={`block px-3 py-2 text-base font-medium rounded-md transition-colors ${
                    isActive(item.href)
                      ? 'text-primary bg-accent'
                      : 'text-muted-foreground hover:text-foreground hover:bg-accent'
                  }`}
                >
                  {item.name}
                </Link>
              ))}
              <div className="pt-4 pb-3 border-t border-border">
                <div className="px-3 space-y-2">
                  <Button
                    variant="ghost"
                    onClick={() => {
                      setIsOpen(false);
                      handleAuthClick('login');
                    }}
                    className="w-full justify-start"
                  >
                    <User className="w-4 h-4 mr-2" />
                    {t('signin')}
                  </Button>
                  <Button
                    onClick={() => {
                      setIsOpen(false);
                      handleAuthClick('signup');
                    }}
                    className="w-full"
                  >
                    {t('signup')}
                  </Button>
                </div>
              </div>
            </div>
          </div>
        )}
      </nav>
      
      {/* Language Switcher Below Navbar */}
      <div className="bg-muted/30 border-b border-border py-2">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-end">
            <LanguageSwitcher />
          </div>
        </div>
      </div>

      <AuthModal
        isOpen={showAuth}
        onClose={() => setShowAuth(false)}
        mode={authMode}
        onModeChange={setAuthMode}
      />
    </>
  );
};
