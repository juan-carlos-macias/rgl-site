export interface LocaleString {
  es: string;
  en: string;
}

export interface LocaleText {
  es: string;
  en: string;
}

export interface LocaleBullets {
  es: string[];
  en: string[];
}

export interface SeoFields {
  title: string;
  description: string;
}

export interface SeoConfig {
  es: SeoFields;
  en: SeoFields;
}

export interface Service {
  _id: string;
  title: LocaleString;
  slug: { current: string };
  category: string;
  shortDescription: LocaleString;
  fullDescription: LocaleText;
  bullets: LocaleBullets;
  icon?: string;
  order: number;
  featured: boolean;
  seo: SeoConfig;
}

export interface Project {
  _id: string;
  title: LocaleString;
  slug: { current: string };
  category: string;
  location: string;
  client: any; // Reference or expanded
  year: string;
  description: LocaleText;
  scopeBullets: LocaleBullets;
  gallery: any[];
  featured: boolean;
  seo: SeoConfig;
}

export interface Client {
  _id: string;
  name: string;
  logo: any;
  industry?: string;
  featured: boolean;
}

export interface TeamMember {
  _id: string;
  name: string;
  role: LocaleString;
  photo: any;
  bio: LocaleText;
  order: number;
  leadership: boolean;
}

export interface Certification {
  _id: string;
  name: string;
  description: LocaleText;
  issuer?: string;
  badge?: any;
  order: number;
}

export interface SiteSettings {
  companyName: string;
  phones: { label: string; number: string }[];
  emails: { label: string; email: string }[];
  address: string;
  whatsappNumber: string;
  serviceCities: string[];
  socialLinks: { platform: string; url: string }[];
  defaultSeo: SeoConfig;
  heroImages: any[];
}
