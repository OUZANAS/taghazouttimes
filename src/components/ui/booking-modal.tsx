import { useState } from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { CalendarIcon, Users, CreditCard, Check } from 'lucide-react';
import { Listing, Package } from '@/types';

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  listing?: Listing;
  package?: Package;
}

export const BookingModal = ({ isOpen, onClose, listing, package: pkg }: BookingModalProps) => {
  const { t, i18n } = useTranslation('common');
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    guests: 2,
    checkIn: '',
    checkOut: '',
    specialRequests: ''
  });

  const onSubmit = async () => {
    try {
      // Mock booking submission - replace with actual API call
      console.log('Booking submitted:', { formData, listing, package: pkg });
      setStep(3); // Success step
    } catch (error) {
      console.error('Booking error:', error);
    }
  };

  const calculateTotal = () => {
    const basePrice = listing?.price || pkg?.price || 0;
    const nights = 1; // Simplified for now
    return basePrice * nights * formData.guests;
  };

  const renderStep = () => {
    switch (step) {
      case 1:
        return (
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="space-y-6"
          >
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label>{t('name')} *</Label>
                <Input 
                  value={formData.name}
                  onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
                />
              </div>
              <div className="space-y-2">
                <Label>{t('email')} *</Label>
                <Input 
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label>{t('phone')}</Label>
              <Input 
                value={formData.phone}
                onChange={(e) => setFormData(prev => ({ ...prev, phone: e.target.value }))}
              />
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label>Check-in</Label>
                <Input 
                  type="date"
                  value={formData.checkIn}
                  onChange={(e) => setFormData(prev => ({ ...prev, checkIn: e.target.value }))}
                />
              </div>

              <div className="space-y-2">
                <Label>Check-out</Label>
                <Input 
                  type="date"
                  value={formData.checkOut}
                  onChange={(e) => setFormData(prev => ({ ...prev, checkOut: e.target.value }))}
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label className="flex items-center gap-2">
                <Users className="w-4 h-4" />
                Guests
              </Label>
              <Input
                type="number"
                min="1"
                max={listing?.capacity || 20}
                value={formData.guests}
                onChange={(e) => setFormData(prev => ({ ...prev, guests: parseInt(e.target.value) || 2 }))}
              />
            </div>

            <div className="space-y-2">
              <Label>Special Requests</Label>
              <Textarea 
                value={formData.specialRequests}
                onChange={(e) => setFormData(prev => ({ ...prev, specialRequests: e.target.value }))}
                placeholder="Any special requirements or requests..." 
              />
            </div>

            <Button onClick={() => setStep(2)} className="w-full">
              Continue to Payment
            </Button>
          </motion.div>
        );

      case 2:
        return (
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="space-y-6"
          >
            <div className="bg-muted/50 p-4 rounded-lg space-y-3">
              <h3 className="font-semibold">Booking Summary</h3>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span>{listing?.title[i18n.language] || pkg?.title[i18n.language]}</span>
                </div>
                {formData.checkIn && formData.checkOut && (
                  <div className="flex justify-between">
                    <span>{formData.checkIn} - {formData.checkOut}</span>
                    <span>1 night</span>
                  </div>
                )}
                <div className="flex justify-between">
                  <span>{formData.guests} guests</span>
                </div>
                <div className="flex justify-between font-semibold pt-2 border-t">
                  <span>Total</span>
                  <span>${calculateTotal()}</span>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <CreditCard className="w-5 h-5 text-primary" />
                <h3 className="font-semibold">Payment Information</h3>
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                <div className="col-span-2">
                  <Label>Card Number</Label>
                  <Input placeholder="1234 5678 9012 3456" />
                </div>
                <div>
                  <Label>Expiry Date</Label>
                  <Input placeholder="MM/YY" />
                </div>
                <div>
                  <Label>CVV</Label>
                  <Input placeholder="123" />
                </div>
              </div>
            </div>

            <div className="flex gap-3">
              <Button variant="outline" onClick={() => setStep(1)} className="flex-1">
                Back
              </Button>
              <Button onClick={onSubmit} className="flex-1">
                Complete Booking
              </Button>
            </div>
          </motion.div>
        );

      case 3:
        return (
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="text-center space-y-6"
          >
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
              className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto"
            >
              <Check className="w-8 h-8 text-green-600" />
            </motion.div>
            
            <div className="space-y-2">
              <h3 className="text-2xl font-bold text-green-600">Booking Confirmed!</h3>
              <p className="text-muted-foreground">
                Your booking has been successfully submitted. You'll receive a confirmation email shortly.
              </p>
            </div>

            <Button onClick={onClose} className="w-full">
              Close
            </Button>
          </motion.div>
        );

      default:
        return null;
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>
            {step === 3 ? 'Booking Confirmation' : `Book ${listing?.title[i18n.language] || pkg?.title[i18n.language]}`}
          </DialogTitle>
          {step !== 3 && (
            <DialogDescription>
              Step {step} of 2 - {step === 1 ? 'Booking Details' : 'Payment'}
            </DialogDescription>
          )}
        </DialogHeader>

        {renderStep()}
      </DialogContent>
    </Dialog>
  );
};