export interface Article {
  id: string;
  title: string;
  summary: string;
  category: string;
  date: string;
  imageUrl: string;
  readTime: string;
}

export interface PressItem {
  id: string;
  publication: string;
  title: string;
  date: string;
  link?: string;
}

export interface NavItem {
  label: string;
  href: string;
}