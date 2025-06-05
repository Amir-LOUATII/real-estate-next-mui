export interface Property {
  id: string;
  title: string;
  description: string;
  price: number;
  location: string;
  address: string;
  bedrooms: number;
  bathrooms: number;
  area: number;
  type: 'apartment' | 'house' | 'condo' | 'villa';
  features: string[];
  images: string[];
  createdAt: string;
  updatedAt: string;
}

export interface User {
  id: string;
  name: string;
  email: string;
  image?: string;
  favorites: string[];
  createdAt: string;
  updatedAt: string;
}

export type PropertyFilterOptions = {
  minPrice?: number;
  maxPrice?: number;
  bedrooms?: number;
  bathrooms?: number;
  propertyType?: string;
  location?: string;
};