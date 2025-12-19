// TypeScript interfaces for application data structures

export interface Project {
  title: string;
  location: string;
  image: string;
  tags: string[];
}

export interface Service {
  title: string;
  description: string;
  image: string;
  link: string;
}

export interface ServiceDetail {
  title: string;
  hero: {
    title: string;
    image: string;
  };
  whatIsWork: {
    title: string;
    description: string;
    image: string;
  };
  keyServices: {
    title: string;
    services: KeyServiceItem[];
  };
  realConditions: {
    title: string;
    images: string[];
  };
  whyChoose: {
    title: string;
    reasons: string[];
    cta: string;
  };
  faq: {
    title: string;
    questions: FAQItem[];
  };
}

export interface KeyServiceItem {
  title: string;
  description: string;
}

export interface FAQItem {
  question: string;
  answer: string;
}

export interface Testimonial {
  name: string;
  company: string;
  text: string;
  rating: number;
  image?: string;
}

export interface Benefit {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  description: string;
}

export interface NavItem {
  path: string;
  label: string;
}

export interface ContactInfo {
  email: string;
  phone: string[];
  location: string;
  instagram: string;
}

export interface FormData {
  name: string;
  email: string;
  message: string;
}
