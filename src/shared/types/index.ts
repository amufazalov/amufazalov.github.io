export interface Technology {
  name: string;
  category: 'frontend' | 'backend' | 'database' | 'other' | 'ai' | 'mobile' | 'devops';
}

export interface Project {
  id: string;
  slug: string;
  title: string;
  description: string;
  shortDescription: string;
  type: string;
  technologies: Technology[];
  image: string;
  images: string[];
  siteUrl?: string;
  period: {
    start: string;
    end: string;
  };
  company?: {
    name: string;
    logo: string;
    url: string;
  };
  features: string[];
}

export interface Skill {
  name: string;
  level: number; // 0-100
  category: 'frontend' | 'backend' | 'database' | 'other' | 'ai';
  icon?: string;
}

export interface Experience {
  id: string;
  company: string;
  position: string;
  period: {
    start: string;
    end: string | null;
  };
  description: string;
  technologies: string[];
  logo?: string;
  url?: string;
}

export interface Certificate {
  id: string;
  title: string;
  description: string;
  issuer: string;
  issuerLogo: string;
  certifiedDate: string;
  expiryDate: string | null;
  verificationCode: string;
  verificationUrl?: string;
  certificateImage: string;
  credentialId?: string;
}

export interface ContactInfo {
  email: string;
  telegram: string;
  vk: string;
  whatsapp: string;
}

export interface PersonalInfo {
  name: string;
  title: string;
  photo: string;
  bio: string;
  yearsOfExperience: number;
  contact: ContactInfo;
} 