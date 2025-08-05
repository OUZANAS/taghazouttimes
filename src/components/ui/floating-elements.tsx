import React from 'react';
import { motion } from 'framer-motion';
import { Plane, MapPin, Star, Heart, Waves, Sun, Camera } from 'lucide-react';

export const FloatingElements: React.FC = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Floating Plane */}
      <motion.div
        className="absolute top-20 right-10 text-primary/20"
        animate={{ 
          x: [0, 30, 0],
          y: [0, -20, 0],
          rotate: [0, 10, 0]
        }}
        transition={{ 
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      >
        <Plane className="w-12 h-12" />
      </motion.div>

      {/* Floating Waves */}
      <motion.div
        className="absolute top-32 left-16 text-accent/30"
        animate={{ 
          y: [0, -15, 0],
          scale: [1, 1.1, 1],
          rotate: [0, 5, 0]
        }}
        transition={{ 
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1
        }}
      >
        <Waves className="w-10 h-10" />
      </motion.div>

      {/* Floating Map Pin */}
      <motion.div
        className="absolute top-40 left-20 text-accent/30"
        animate={{ 
          y: [0, -15, 0],
          scale: [1, 1.1, 1]
        }}
        transition={{ 
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1
        }}
      >
        <MapPin className="w-8 h-8" />
      </motion.div>

      {/* Floating Stars */}
      <motion.div
        className="absolute top-60 right-32 text-primary/25"
        animate={{ 
          rotate: [0, 360],
          scale: [1, 1.2, 1]
        }}
        transition={{ 
          duration: 10,
          repeat: Infinity,
          ease: "linear"
        }}
      >
        <Star className="w-6 h-6" />
      </motion.div>

      {/* Floating Sun */}
      <motion.div
        className="absolute top-24 right-1/4 text-accent/20"
        animate={{ 
          rotate: [0, 360],
          scale: [1, 1.1, 1]
        }}
        transition={{ 
          duration: 15,
          repeat: Infinity,
          ease: "linear"
        }}
      >
        <Sun className="w-8 h-8" />
      </motion.div>

      {/* Floating Camera */}
      <motion.div
        className="absolute bottom-40 left-16 text-accent/20"
        animate={{ 
          x: [0, 20, 0],
          y: [0, -10, 0],
          rotate: [0, -5, 0]
        }}
        transition={{ 
          duration: 7,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2
        }}
      >
        <Camera className="w-7 h-7" />
      </motion.div>

      {/* Floating Heart */}
      <motion.div
        className="absolute bottom-32 right-20 text-accent/20"
        animate={{ 
          scale: [1, 1.3, 1],
          rotate: [0, 10, 0]
        }}
        transition={{ 
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 3
        }}
      >
        <Heart className="w-6 h-6" />
      </motion.div>

      {/* Background geometric shapes */}
      <motion.div
        className="absolute top-32 left-1/3 w-32 h-32 rounded-full bg-gradient-to-r from-primary/5 to-accent/5 blur-xl"
        animate={{ 
          scale: [1, 1.3, 1],
          opacity: [0.3, 0.6, 0.3]
        }}
        transition={{ 
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />

      <motion.div
        className="absolute bottom-32 right-1/4 w-24 h-24 rounded-full bg-gradient-to-r from-accent/5 to-primary/5 blur-xl"
        animate={{ 
          scale: [1, 1.5, 1],
          opacity: [0.2, 0.5, 0.2]
        }}
        transition={{ 
          duration: 15,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 3
        }}
      />

      {/* Additional floating elements for more visual interest */}
      <motion.div
        className="absolute top-1/2 left-8 text-primary/15"
        animate={{ 
          y: [0, -25, 0],
          x: [0, 10, 0]
        }}
        transition={{ 
          duration: 9,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 4
        }}
      >
        <div className="w-4 h-4 bg-current rounded-full" />
      </motion.div>

      <motion.div
        className="absolute bottom-1/4 right-12 text-accent/15"
        animate={{ 
          scale: [1, 1.4, 1],
          rotate: [0, 180, 360]
        }}
        transition={{ 
          duration: 20,
          repeat: Infinity,
          ease: "linear"
        }}
      >
        <div className="w-3 h-3 bg-current rounded-full" />
      </motion.div>
    </div>
  );
};