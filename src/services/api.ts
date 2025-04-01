/**
 * API Service for CreatorBridge
 * Handles all API calls to the backend
 */

// Base URL for API calls
const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || 'https://api.creatorbridge.example';

/**
 * Generic fetch wrapper with error handling
 */
async function fetchAPI<T>(
  endpoint: string, 
  options: RequestInit = {}
): Promise<T> {
  const url = `${API_BASE_URL}${endpoint}`;
  
  const defaultHeaders = {
    'Content-Type': 'application/json',
  };

  const response = await fetch(url, {
    ...options,
    headers: {
      ...defaultHeaders,
      ...options.headers,
    },
  });

  if (!response.ok) {
    const error = await response.json();
    throw new Error(error.message || 'Une erreur est survenue lors de la requête API');
  }

  return response.json();
}

/**
 * Creator API Services
 */
export const creatorService = {
  // Get creator dashboard data
  getDashboard: () => 
    fetchAPI<any>('/creator/dashboard', { method: 'GET' }),
  
  // Get content list for a creator
  getContent: (page = 1, limit = 10) => 
    fetchAPI<any>(`/creator/content?page=${page}&limit=${limit}`, { method: 'GET' }),
  
  // Get a single content item by ID
  getContentById: (id: string) => 
    fetchAPI<any>(`/creator/content/${id}`, { method: 'GET' }),
  
  // Create new content
  createContent: (data: any) => 
    fetchAPI<any>('/creator/content', { 
      method: 'POST',
      body: JSON.stringify(data),
    }),
  
  // Update content
  updateContent: (id: string, data: any) => 
    fetchAPI<any>(`/creator/content/${id}`, { 
      method: 'PUT',
      body: JSON.stringify(data),
    }),
  
  // Delete content
  deleteContent: (id: string) => 
    fetchAPI<any>(`/creator/content/${id}`, { method: 'DELETE' }),
  
  // Get analytics data
  getAnalytics: (startDate?: string, endDate?: string) => {
    let endpoint = '/creator/analytics';
    if (startDate && endDate) {
      endpoint += `?startDate=${startDate}&endDate=${endDate}`;
    }
    return fetchAPI<any>(endpoint, { method: 'GET' });
  },
};

/**
 * Community API Services
 */
export const communityService = {
  // Get featured creators
  getFeaturedCreators: () => 
    fetchAPI<any>('/community/featured-creators', { method: 'GET' }),
  
  // Get trending content
  getTrendingContent: () => 
    fetchAPI<any>('/community/trending', { method: 'GET' }),
  
  // Get creator profile by ID
  getCreatorProfile: (id: string) => 
    fetchAPI<any>(`/community/creator/${id}`, { method: 'GET' }),
  
  // Follow a creator
  followCreator: (creatorId: string) => 
    fetchAPI<any>(`/community/creator/${creatorId}/follow`, { method: 'POST' }),
  
  // Unfollow a creator
  unfollowCreator: (creatorId: string) => 
    fetchAPI<any>(`/community/creator/${creatorId}/unfollow`, { method: 'POST' }),
  
  // Get content from creators the user follows
  getFollowingContent: (page = 1, limit = 10) => 
    fetchAPI<any>(`/community/following?page=${page}&limit=${limit}`, { method: 'GET' }),
  
  // Search creators or content
  search: (query: string, type?: 'creator' | 'content') => {
    let endpoint = `/community/search?q=${encodeURIComponent(query)}`;
    if (type) {
      endpoint += `&type=${type}`;
    }
    return fetchAPI<any>(endpoint, { method: 'GET' });
  },
};

/**
 * Auth API Services
 */
export const authService = {
  // User login
  login: (email: string, password: string) => 
    fetchAPI<any>('/auth/login', {
      method: 'POST',
      body: JSON.stringify({ email, password }),
    }),
  
  // User registration
  register: (userData: any) => 
    fetchAPI<any>('/auth/register', {
      method: 'POST',
      body: JSON.stringify(userData),
    }),
  
  // User logout
  logout: () => 
    fetchAPI<any>('/auth/logout', { method: 'POST' }),
  
  // Get current user profile
  getCurrentUser: () => 
    fetchAPI<any>('/auth/me', { method: 'GET' }),
  
  // Update user profile
  updateProfile: (data: any) => 
    fetchAPI<any>('/auth/profile', {
      method: 'PUT',
      body: JSON.stringify(data),
    }),
};
