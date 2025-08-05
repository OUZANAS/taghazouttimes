import { useState, useEffect } from 'react';
import { ApiResponse, SearchFilters } from '@/types';

// Mock API service - replace with actual Laravel API calls
class ApiService {
  private baseUrl = process.env.VITE_API_URL || 'http://localhost:8000/api';

  async get<T>(endpoint: string, params?: Record<string, any>): Promise<ApiResponse<T>> {
    // Mock implementation - replace with actual fetch
    await new Promise(resolve => setTimeout(resolve, 500)); // Simulate network delay
    
    // Return mock data based on endpoint
    return this.getMockData<T>(endpoint, params);
  }

  async post<T>(endpoint: string, data: any): Promise<ApiResponse<T>> {
    // Mock implementation
    await new Promise(resolve => setTimeout(resolve, 500));
    return { data: data as T, success: true };
  }

  async put<T>(endpoint: string, data: any): Promise<ApiResponse<T>> {
    // Mock implementation
    await new Promise(resolve => setTimeout(resolve, 500));
    return { data: data as T, success: true };
  }

  async delete<T>(endpoint: string): Promise<ApiResponse<T>> {
    // Mock implementation
    await new Promise(resolve => setTimeout(resolve, 500));
    return { data: null as T, success: true };
  }

  private getMockData<T>(endpoint: string, params?: Record<string, any>): ApiResponse<T> {
    // Mock data responses - replace with actual API calls
    const mockResponses: Record<string, any> = {
      '/listings': {
        data: [], // Will be populated by mock data
        success: true,
        pagination: { page: 1, limit: 12, total: 50, totalPages: 5 }
      },
      '/packages': {
        data: [],
        success: true,
        pagination: { page: 1, limit: 12, total: 20, totalPages: 2 }
      },
      '/blog': {
        data: [],
        success: true,
        pagination: { page: 1, limit: 10, total: 30, totalPages: 3 }
      }
    };

    return mockResponses[endpoint] || { data: null as T, success: false };
  }
}

export const apiService = new ApiService();

// Custom hooks for API calls
export const useApi = <T>(endpoint: string, params?: Record<string, any>) => {
  const [data, setData] = useState<T | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        setError(null);
        const response = await apiService.get<T>(endpoint, params);
        
        if (response.success) {
          setData(response.data);
        } else {
          setError(response.message || 'An error occurred');
        }
      } catch (err) {
        setError(err instanceof Error ? err.message : 'An error occurred');
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [endpoint, JSON.stringify(params)]);

  return { data, loading, error, refetch: () => fetchData() };
};

export const useListings = (filters?: SearchFilters) => {
  return useApi('/listings', filters);
};

export const usePackages = (filters?: SearchFilters) => {
  return useApi('/packages', filters);
};

export const useBlogPosts = (filters?: SearchFilters) => {
  return useApi('/blog', filters);
};