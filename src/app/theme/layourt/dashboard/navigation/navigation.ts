export interface NavigationItem {
    title: string;
    route?: string;
    icon: string;
    children?: NavigationItem[];
  }
  
  export const NAVIGATION_ITEMS: NavigationItem[] = [
    {
      title: 'Dashboard',
      route: '/dashboard',
      icon: 'fa-solid fa-home'
    },
    {
      title: 'Profile',
      route: '/profile',
      icon: 'fa-solid fa-user'
    },
    {
      title: 'Settings',
      route: '/settings',
      icon: 'fa-solid fa-cog',
      children: [
        {
          title: 'General',
          route: '/settings/general',
          icon: 'fa-solid fa-wrench'
        },
        {
          title: 'Security',
          route: '/settings/security',
          icon: 'fa-solid fa-lock'
        }
      ]
    },
    {
      title: 'Messages',
      route: '/messages',
      icon: 'fa-solid fa-envelope'
    },
    {
      title: 'Help',
      route: '/help',
      icon: 'fa-solid fa-question-circle'
    }
  ];
  