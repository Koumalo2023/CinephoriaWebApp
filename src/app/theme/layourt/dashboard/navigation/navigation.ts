export interface NavigationItem {
  title: string;
  route?: string;
  icon: string;
  children?: NavigationItem[];
  isOpen?: boolean;
}

export const NAVIGATION_ITEMS: NavigationItem[] = [
  {
    title: 'Dashboard',
    route: '/dashboard',
    icon: 'bi bi-house'
  },
  {
    title: 'Profile',
    route: '/profile',
    icon: 'bi bi-person' 
  },
  {
    title: 'Messages',
    route: '/messages',
    icon: 'bi bi-envelope' 
  },
  {
    title: 'Help',
    route: '/help',
    icon: 'bi bi-question-circle' 
  }
];

  