import DOMPurify from 'dompurify';
import { z } from 'zod';

// Input sanitization utilities
export const sanitizeHtml = (input: string): string => {
  return DOMPurify.sanitize(input, {
    ALLOWED_TAGS: ['b', 'i', 'em', 'strong', 'span'],
    ALLOWED_ATTR: [],
  });
};

export const sanitizeText = (input: string): string => {
  return input.replace(/[<>]/g, '').trim();
};

// Secure localStorage utilities
export const secureStorage = {
  setItem: (key: string, value: any): void => {
    try {
      const serialized = JSON.stringify(value);
      localStorage.setItem(key, serialized);
    } catch (error) {
      console.error('Failed to store data securely:', error);
    }
  },

  getItem: <T>(key: string, defaultValue: T): T => {
    try {
      const item = localStorage.getItem(key);
      return item ? JSON.parse(item) : defaultValue;
    } catch (error) {
      console.error('Failed to retrieve data securely:', error);
      return defaultValue;
    }
  },

  removeItem: (key: string): void => {
    try {
      localStorage.removeItem(key);
    } catch (error) {
      console.error('Failed to remove data securely:', error);
    }
  },

  clear: (): void => {
    try {
      localStorage.clear();
    } catch (error) {
      console.error('Failed to clear storage securely:', error);
    }
  }
};

// Validation schemas
export const supplierValidation = z.object({
  name: z.string().min(2).max(100).regex(/^[a-zA-Z0-9\s\-&.]+$/, 'Invalid characters'),
  rating: z.number().min(0).max(5),
  distance: z.string().regex(/^\d+(\.\d+)?\s*(km|m)$/, 'Invalid distance format'),
  phone: z.string().regex(/^[+]?[\d\s\-()]+$/, 'Invalid phone format').optional(),
});

export const productValidation = z.object({
  name: z.string().min(1).max(100).regex(/^[a-zA-Z0-9\s\-&.,]+$/, 'Invalid characters'),
  price: z.number().min(0).max(999999),
  description: z.string().max(500).optional(),
  category: z.string().min(1).max(50).regex(/^[a-zA-Z\s]+$/, 'Invalid characters'),
});

export const searchValidation = z.object({
  query: z.string().min(1).max(100).regex(/^[a-zA-Z0-9\s\-]+$/, 'Invalid search characters'),
});

// Error handling utilities
export const safeError = (error: unknown): string => {
  if (error instanceof Error) {
    return error.message.replace(/[<>]/g, '');
  }
  return 'An unexpected error occurred';
};

// Rate limiting (client-side basic implementation)
export class RateLimiter {
  private attempts: Map<string, number[]> = new Map();
  
  constructor(private maxAttempts: number = 10, private windowMs: number = 60000) {}
  
  isAllowed(key: string): boolean {
    const now = Date.now();
    const attempts = this.attempts.get(key) || [];
    
    // Remove old attempts outside the window
    const validAttempts = attempts.filter(time => now - time < this.windowMs);
    
    if (validAttempts.length >= this.maxAttempts) {
      return false;
    }
    
    validAttempts.push(now);
    this.attempts.set(key, validAttempts);
    return true;
  }
  
  reset(key: string): void {
    this.attempts.delete(key);
  }
}

// Global rate limiter instance
export const globalRateLimiter = new RateLimiter();