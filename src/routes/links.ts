interface AppLink {
  icons: string[];
  label: string;
  to: string;
  exact: boolean;
}

const defaultRoutes: AppLink[] = [
  {
    icons: ['las la-fw la-home'],
    label: 'Home',
    to: '/',
    exact: true,
  },
  {
    icons: ['las la-fw la-calendar'],
    label: 'Dashboard',
    to: '/dashboard',
    exact: true,
  },
  {
    icons: ['las la-fw la-user-circle'],
    label: 'Profile',
    to: '/profile',
    exact: true,
  },
];

const elevatedRoutes: AppLink[] = [
  {
    icons: ['las la-fw la-1x la-calendar-plus'],
    label: 'Requests',
    to: '/admin/requests',
    exact: true,
  },
  {
    icons: ['las la-fw la-1x la-calendar-check'],
    label: 'Bookings',
    to: '/admin/bookings',
    exact: true,
  },
];

const adminRoutes: AppLink[] = [
  {
    icons: ['las la-fw la-1x la-users-cog'],
    label: 'Users',
    to: '/admin/users',
    exact: true,
  },
  {
    icons: ['las la-fw la-1x la-tasks'],
    label: 'Tasks',
    to: '/admin/tasks',
    exact: true,
  },
];

export function buildSidebarLinks(
  isElevated: boolean,
  isAdmin: boolean,
): AppLink[] {
  const links = [...defaultRoutes];

  if (isElevated) {
    links.push(...elevatedRoutes);
  }

  if (isAdmin) {
    links.push(...adminRoutes);
  }

  return links;
}

export function buildRoutes(
  isElevated: boolean,
  isAdmin: boolean,
): { user: AppLink[]; elevated: AppLink[]; admin: AppLink[] } {
  const routes = {
    user: [...defaultRoutes],
    elevated: [] as AppLink[],
    admin: [] as AppLink[],
  };

  if (isElevated) {
    routes.elevated = [...elevatedRoutes];
  }

  if (isAdmin) {
    routes.admin = [...adminRoutes];
  }

  return routes;
}
