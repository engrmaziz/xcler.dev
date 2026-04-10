export interface Project {
  id: string;
  title: string;
  slug: string;
  category: 'web' | 'app' | 'automation' | 'wordpress' | 'shopify' | 'ai';
  shortDescription: string;
  fullDescription: string;
  problem: string;
  solution: string;
  results: string[];
  techStack: string[];
  imageUrl: string;
  images: string[];
  liveUrl?: string;
  githubUrl?: string;
  clientName?: string;
  clientIndustry: string;
  featured: boolean;
  order: number;
  createdAt: string;
  updatedAt: string;
}

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  bio: string;
  imageUrl: string;
  skills: string[];
  linkedin?: string;
  github?: string;
  order: number;
}

export interface BlogPost {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  coverImage: string;
  category: string;
  tags: string[];
  author: string;
  readTime: number;
  published: boolean;
  seoTitle: string;
  seoDescription: string;
  seoKeywords: string[];
  language: 'en' | 'de';
  createdAt: string;
  updatedAt: string;
}

export interface Testimonial {
  id: string;
  name: string;
  company: string;
  role: string;
  content: string;
  rating: number;
  imageUrl?: string;
  industry: string;
}

export interface ContactInquiry {
  id: string;
  name: string;
  email: string;
  whatsapp?: string;
  company?: string;
  website?: string;
  service: string;
  budget: string;
  timeline: string;
  message: string;
  source: string;
  status: 'new' | 'contacted' | 'qualified' | 'closed';
  createdAt: string;
}

export interface Service {
  id: string;
  number: string;
  title: string;
  titleDe: string;
  description: string;
  descriptionDe: string;
  features: string[];
  accent: string;
  icon: string;
  tags: string[];
  startingPrice: number;
}
