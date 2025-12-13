export enum Page {
  Home = 'Home',
  Company = 'Company',
  Advantages = 'Advantages',
  Products = 'Products',
  Scenarios = 'Scenarios',
  Support = 'Support',
  Contact = 'Contact'
}

export type Language = 'zh' | 'en';

export interface NavItem {
  id: Page;
  label: {
    zh: string;
    en: string;
  };
}

export interface ProductItem {
  title: string;
  description: string;
  features: string[];
  icon: string;
  image: string;
}