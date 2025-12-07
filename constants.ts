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
    title: 'SNHS Track Team Dominates Central Luzon Regional Athletic Association Meet',
    summary: 'Subic National High School athletes secured 8 gold medals and qualified for Palarong Pambansa 2024, with standout performances in track and field, swimming, and volleyball. The team will represent Region III in Cebu this April.',
    category: 'Sports',
    date: 'Dec 15, 2023',
    imageUrl: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&q=80&w=800',
    readTime: '5 min read'
  },
  {
    id: '2',
    title: 'Subic Bay Coastal Clean-up: 500+ Students Remove 1.2 Tons of Marine Debris',
    summary: 'In partnership with SBMA and Ocean Adventure, students from SNHS and neighboring schools gathered at All Hands Beach and Moonbay Marina for the largest youth-led environmental initiative in Subic Bay Freeport Zone this year.',
    category: 'Environment',
    date: 'Nov 22, 2023',
    imageUrl: 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?auto=format&fit=crop&q=80&w=800',
    readTime: '6 min read'
  },
  {
    id: '3',
    title: "Spanish Gate Restoration: Preserving Subic's 138-Year-Old Heritage",
    summary: "The National Historical Commission of the Philippines announces a 2.5 million peso restoration project for the Spanish Gate, built in 1885. Local historians and SNHS students collaborate on documenting the landmark's significance to Olongapo's identity.",
    category: 'Culture & Heritage',
    date: 'Oct 18, 2023',
    imageUrl: 'https://images.unsplash.com/photo-1515542622106-78bda8ba0e5b?auto=format&fit=crop&q=80&w=800',
    readTime: '7 min read'
  },
  {
    id: '4',
    title: 'DepEd Inaugurates New E-Library at Subic National High School',
    summary: 'The Department of Education Region III, in partnership with the Local Government of Olongapo, opens a state-of-the-art digital learning hub with 50 computers, high-speed internet, and access to DepEd Commons. The facility serves over 3,000 students.',
    category: 'Education',
    date: 'Sep 10, 2023',
    imageUrl: 'https://images.unsplash.com/photo-1481627834876-b7833e8f5570?auto=format&fit=crop&q=80&w=800',
    readTime: '4 min read'
  },
  {
    id: '5',
    title: 'Capones Island Lighthouse: SNHS Students Document Historical Landmark',
    summary: 'Grade 10 students from Subic National High School embark on a field trip to Capones Island, documenting the 1890 lighthouse for their history project. The trip highlights the importance of maritime heritage in Zambales.',
    category: 'Culture & Heritage',
    date: 'Aug 25, 2023',
    imageUrl: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?auto=format&fit=crop&q=80&w=800',
    readTime: '5 min read'
  },
  {
    id: '6',
    title: 'Ocean Adventure Partners with SNHS for Marine Conservation Program',
    summary: 'Subic Bay Freeport Zone\'s Ocean Adventure launches a student ambassador program with Subic National High School, training 20 students in marine conservation and dolphin behavior. The program aims to raise awareness about protecting Subic Bay\'s marine ecosystem.',
    category: 'Environment',
    date: 'Jul 14, 2023',
    imageUrl: 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?auto=format&fit=crop&q=80&w=800',
    readTime: '6 min read'
  },
  {
    id: '7',
    title: 'Malawaan Park Cleanup Initiative: Students Restore Olongapo Landmark',
    summary: 'Over 200 SNHS students volunteer to restore Malawaan Park, planting 150 native trees and installing new benches. The initiative is part of the school\'s commitment to community service and environmental stewardship in Olongapo City.',
    category: 'Community',
    date: 'Jun 8, 2023',
    imageUrl: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?auto=format&fit=crop&q=80&w=800',
    readTime: '4 min read'
  },
  {
    id: '8',
    title: 'Subic Bay International Airport: New Direct Flights Boost Local Tourism',
    summary: 'The Subic Bay Metropolitan Authority announces new direct flights from Clark to Subic Bay International Airport, expected to increase tourism and create opportunities for local businesses. SNHS journalism students cover the economic impact on Olongapo.',
    category: 'Local News',
    date: 'May 20, 2023',
    imageUrl: 'https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&q=80&w=800',
    readTime: '5 min read'
  }
];

export const PRESS_ITEMS: PressItem[] = [
  {
    id: '1',
    publication: 'Division Schools Press Conference (DSPC)',
    title: 'Champion, News Broadcasting (English Category) - Olongapo City Division',
    date: 'November 2023'
  },
  {
    id: '2',
    publication: 'Regional Schools Press Conference (RSPC)',
    title: '1st Place, News Broadcasting - Central Luzon Region III',
    date: 'May 2023'
  },
  {
    id: '3',
    publication: 'National Schools Press Conference (NSPC)',
    title: 'Finalist, News Broadcasting - National Level',
    date: 'March 2023'
  },
  {
    id: '4',
    publication: 'The Subic Standard',
    title: 'Featured: "Young Voice of Olongapo: Campus Journalist Making Waves"',
    date: 'February 2023'
  },
  {
    id: '5',
    publication: 'Zambales Times',
    title: 'Awarded "Outstanding Campus Journalist" - Zambales Province',
    date: 'January 2023'
  },
  {
    id: '6',
    publication: 'DepEd Region III',
    title: 'Recipient, Excellence in Campus Journalism Award',
    date: 'December 2022'
  }
];