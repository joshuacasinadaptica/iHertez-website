import { Article, PressItem, NavItem } from './types';

export const NAV_ITEMS: NavItem[] = [
  { label: 'About', href: '#about' },
  { label: 'Stories', href: '#work' },
  { label: 'Awards', href: '#press' },
  { label: 'Contact', href: '#contact' },
];

export const ARTICLES: Article[] = [
  {
    id: '1',
    title: 'Pride of Olongapo: SNHS Athletes Qualify for Palarong Pambansa',
    summary: 'Following a sweeping victory at the regional meet, Subic National High School varsity teams are preparing to represent Central Luzon on the national stage.',
    category: 'Sports',
    date: 'Oct 12, 2023',
    imageUrl: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&q=80&w=800',
    readTime: '4 min read'
  },
  {
    id: '2',
    title: 'Subic Bay Coastal Clean-up: Students Lead the Charge',
    summary: 'Hundreds of student volunteers gathered at Moonbay Marina this weekend, collecting over 500kg of waste in a massive effort to protect our marine biodiversity.',
    category: 'Environment',
    date: 'Sep 28, 2023',
    imageUrl: 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?auto=format&fit=crop&q=80&w=800',
    readTime: '6 min read'
  },
  {
    id: '3',
    title: "The Spanish Gate: Preserving Subic's Historical Landmark",
    summary: "A look into the restoration efforts of one of the region's most iconic historical sites and why it matters to the youth of Olongapo today.",
    category: 'Culture & Heritage',
    date: 'Aug 15, 2023',
    imageUrl: 'https://images.unsplash.com/photo-1515542622106-78bda8ba0e5b?auto=format&fit=crop&q=80&w=800',
    readTime: '5 min read'
  },
  {
    id: '4',
    title: 'New Digital Learning Hub Opens at Subic National HS',
    summary: 'The Department of Education and local government units inaugurated the new e-library, promising better internet access and resources for senior high students.',
    category: 'Education',
    date: 'Jul 04, 2023',
    imageUrl: 'https://images.unsplash.com/photo-1481627834876-b7833e8f5570?auto=format&fit=crop&q=80&w=800',
    readTime: '3 min read'
  }
];

export const PRESS_ITEMS: PressItem[] = [
  {
    id: '1',
    publication: 'Division Schools Press Conference',
    title: 'Champion, News Broadcasting (English Category)',
    date: 'November 2023'
  },
  {
    id: '2',
    publication: 'Regional Schools Press Conference',
    title: 'Qualifier for National Schools Press Conference (NSPC)',
    date: 'May 2023'
  },
  {
    id: '3',
    publication: 'The Subic Standard',
    title: 'Awarded "Campus Journalist of the Year"',
    date: 'April 2023'
  }
];