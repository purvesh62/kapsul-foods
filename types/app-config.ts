export interface Product {
  id: number;
  name: string;
  tagline: string;
  images: string[];
  description: string;
  features: string[];
  color: string;
  amazonUrl: string;
}

export interface TrustItem {
  icon: 'Leaf' | 'Shield' | 'Star';
  title: string;
  description: string;
  bgColor: string;
  iconColor: string;
}

export interface SiteConfig {
  headerTitle: string;
  headerSubtitle: string;
  sectionTitles: {
    productsSection: string;
    productsSubtitle: string;
    productsDescription: string;
    amazonLink: string;
    whatappLink: string;
  };
  footerTitle: string;
  footerDescription: string;
  copyright: string;
}

export interface AppConfig {
  siteConfig: SiteConfig;
  products: Product[];
  trustSection: TrustItem[];
}
