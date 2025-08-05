import { useState } from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
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
import { Calendar } from '@/components/ui/calendar';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { CalendarIcon, Users, CreditCard, Check } from 'lucide-react';
import { format } from 'date-fns';
import { Listing, Package } from '@/types';

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  listing?: Listing;
  package?: Package;
}

const bookingSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Invalid email address'),
  phone: z.string().optional(),
  guests: z.number().min(1, 'At least 1 guest required'),
  checkIn: z.date().optional(),
  checkOut: z.date().optional(),
  specialRequests: z.string().optional(),
});

type BookingFormData = z.infer<typeof bookingSchema>;

export const BookingModal = ({ isOpen, onClose, listing, package: pkg }: BookingModalProps) => {
  const { t, i18n } = useTranslation('common');
  const [step, setStep] = useState(1);
  const [checkIn, setCheckIn] = useState<Date>();
  const [checkOut, setCheckOut] = useState<Date>();

  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
    watch
  } = useForm<BookingFormData>({
    resolver: zodResolver(bookingSchema),
    defaultValues: {
      guests: 2
    }
  });

  const guests = watch('guests');

  const onSubmit = async (data: BookingFormData) => {
    try {
      // Mock booking submission - replace with actual API call
      console.log('Booking submitted:', { ...data, checkIn, checkOut, listing, package: pkg });
      setStep(3); // Success step
    } catch (error) {
      console.error('Booking error:', error);
    }
  };

  const calculateTotal = () => {
    const basePrice = listing?.price || pkg?.price || 0;
    const nights = checkIn && checkOut ? 
      Math.ceil((checkOut.getTime() - checkIn.getTime()) / (1000 * 60 * 60 * 24)) : 1;
    return basePrice * nights * guests;
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
                <Input {...register('name')} />
                {errors.name && <p className="text-sm text-destructive">{errors.name.message}</p>}
              </div>
              <div className="space-y-2">
                <Label>{t('email')} *</Label>
                <Input type="email" {...register('email')} />
                {errors.email && <p className="text-sm text-destructive">{errors.email.message}</p>}
              </div>
            </div>

            <div className="space-y-2">
              <Label>{t('phone')}</Label>
              <Input {...register('phone')} />
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label>Check-in</Label>
                <Popover>
                  <PopoverTrigger asChild>
                    <Button variant="outline" className="w-full justify-start text-left">
                      <CalendarIcon className="mr-2 h-4 w-4" />
                      {checkIn ? format(checkIn, 'PPP') : 'Select date'}
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent className="w-auto p-0">
                    <Calendar
                      mode="single"
                      selected={checkIn}
                      onSelect={setCheckIn}
                      disabled={(date) => date < new Date()}
                    />
                  </PopoverContent>
                </Popover>
              </div>

              <div className="space-y-2">
                <Label>Check-out</Label>
                <Popover>
                  <PopoverTrigger asChild>
                    <Button variant="outline" className="w-full justify-start text-left">
                      <CalendarIcon className="mr-2 h-4 w-4" />
                      {checkOut ? format(checkOut, 'PPP') : 'Select date'}
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent className="w-auto p-0">
                    <Calendar
                      mode="single"
                      selected={checkOut}
                      onSelect={setCheckOut}
                      disabled={(date) => date < (checkIn || new Date())}
                    />
                  </PopoverContent>
                </Popover>
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
                {...register('guests', { valueAsNumber: true })}
              />
            </div>

            <div className="space-y-2">
              <Label>Special Requests</Label>
              <Textarea {...register('specialRequests')} placeholder="Any special requirements or requests..." />
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
                {checkIn && checkOut && (
                  <div className="flex justify-between">
                    <span>{format(checkIn, 'MMM dd')} - {format(checkOut, 'MMM dd')}</span>
                    <span>{Math.ceil((checkOut.getTime() - checkIn.getTime()) / (1000 * 60 * 60 * 24))} nights</span>
                  </div>
                )}
                <div className="flex justify-between">
                  <span>{guests} guests</span>
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
              <Button onClick={handleSubmit(onSubmit)} className="flex-1">
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