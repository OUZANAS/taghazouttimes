export interface User {
  id: string;
  email: string;
  name: string;
  role: 'admin' | 'client' | 'user';
  avatar?: string;
  createdAt: string;
  updatedAt: string;
}

export interface Client extends User {
  businessName: string;
  subdomain: string;
  selectedPages: string[];
  customization: {
    logo?: string;
    primaryColor: string;
    secondaryColor: string;
    heroImage?: string;
    aboutText?: string;
    contactInfo?: ContactInfo;
  };
}

export interface ContactInfo {
  phone?: string;
  email?: string;
  address?: string;
  socialMedia?: {
    facebook?: string;
    instagram?: string;
    twitter?: string;
  };
}

export interface Listing {
  id: string;
  slug: string;
  title: Record<string, string>; // Multilingual titles
  description: Record<string, string>; // Multilingual descriptions
  shortDescription: Record<string, string>;
  category: 'accommodation' | 'activity' | 'surf-lesson' | 'tour' | 'rental';
  location: string;
  price: number;
  currency: string;
  priceUnit: string;
  rating: number;
  reviewCount: number;
  images: string[];
  amenities: string[];
  capacity?: number;
  duration?: string;
  featured: boolean;
  status: 'active' | 'draft' | 'archived';
  clientId: string;
  createdAt: string;
  updatedAt: string;
}

export interface Package {
  id: string;
  slug: string;
  title: Record<string, string>;
  description: Record<string, string>;
  shortDescription: Record<string, string>;
  duration: string;
  groupSize: string;
  price: number;
  currency: string;
  rating: number;
  reviewCount: number;
  images: string[];
  highlights: Record<string, string[]>;
  includes: Record<string, string[]>;
  category: string;
  featured: boolean;
  clientId: string;
  createdAt: string;
  updatedAt: string;
}

export interface BlogPost {
  id: string;
  slug: string;
  title: Record<string, string>;
  excerpt: Record<string, string>;
  content: Record<string, string>;
  category: string;
  tags: string[];
  author: {
    name: string;
    avatar?: string;
    bio?: Record<string, string>;
  };
  featuredImage: string;
  published: boolean;
  featured: boolean;
  readTime: number;
  createdAt: string;
  updatedAt: string;
}

export interface Booking {
  id: string;
  userId: string;
  listingId: string;
  packageId?: string;
  checkIn?: string;
  checkOut?: string;
  guests: number;
  totalPrice: number;
  currency: string;
  status: 'pending' | 'confirmed' | 'cancelled' | 'completed';
  customerInfo: {
    name: string;
    email: string;
    phone?: string;
  };
  createdAt: string;
  updatedAt: string;
}

export interface Review {
  id: string;
  userId: string;
  listingId?: string;
  packageId?: string;
  rating: number;
  comment: Record<string, string>;
  images?: string[];
  verified: boolean;
  createdAt: string;
}

export interface Page {
  id: string;
  slug: string;
  title: Record<string, string>;
  content: Record<string, any>; // Flexible content structure
  template: string;
  published: boolean;
  seoMeta: {
    title: Record<string, string>;
    description: Record<string, string>;
    keywords: Record<string, string>;
    image?: string;
  };
  clientId: string;
  createdAt: string;
  updatedAt: string;
}

export interface ApiResponse<T> {
  data: T;
  message?: string;
  success: boolean;
  pagination?: {
    page: number;
    limit: number;
    total: number;
    totalPages: number;
  };
}

export interface SearchFilters {
  query?: string;
  category?: string;
  location?: string;
  minPrice?: number;
  maxPrice?: number;
  rating?: number;
  amenities?: string[];
  sortBy?: 'price' | 'rating' | 'featured' | 'newest';
  sortOrder?: 'asc' | 'desc';
}