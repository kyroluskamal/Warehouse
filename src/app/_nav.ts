import { INavData } from '@coreui/angular';

export const navItems: INavData[] = [
  {
    name: 'Home',
    url: '/home',
    icon: 'icon-home',
  },
  {
    name: 'Work order',
    url: '/workorders',
    icon: 'icon-plus',
    children: [
      {
        name: 'Ticket',
        url: '/workorders/Ticket',
      },
      {
        name: 'Workorder',
        url: '/workorders/workorder',
      },
    ]
  },

  // {
  //   name: 'Register',
  //   url: '/register',
  //   icon: 'icon-pencil',
  // },
  {
    name: 'Project managment',
    url: '/projectmanagment',
    icon: 'icon-share',
    children: [
      {
        name: 'Projects',
        url: '/projectmanagment/projects',
      },
      {
        name: 'Teams',
        url: '/projectmanagment/team',
      },
      {
        name: 'Tasks',
        url: '/projectmanagment/task',
      },
      {
        name: 'Contracts',
        url: '/projectmanagment/contracts',
      },
      {
        name: 'Assigned',
        url: '/projectmanagment/assignee',
      },
      {
        name: 'Packages',
        url: '/projectmanagment/package',
      },
    ],
  },
  {
    name: 'Purchases',
    url: '/purchases',
    icon: 'icon-credit-card',
    children: [
      {
        name: 'New purchases',
        url: '/purchases/newpurchases',
      },
      {
        name: 'Vendors',
        url: '/purchases/vendor',
      },
      {
        name: 'Purchases order',
        url: '/purchases/purchasesorder',
      },
    ],
  },
  {
    name: 'Financial & Invoices',
    url: '/purchases',
    icon: 'cil-cash',
    children: [
      {
        name: 'Expenses',
        url: '/purchases',
      },
      {
        name: 'Invoices',
        url: '/vendor',
      },
    ],
  },
  {
    name: 'Warehouse',
    url: '/warehouse',
    icon: 'cil-industry',
    children: [
      {
        name: 'New warehouse',
        url: '/warehouse/newwarehouse',
      },
      {
        name: 'Items cateogry',
        url: '/warehouse/category',
      },
      {
        name: 'Items',
        url: '/warehouse/item',
      },
      {
        name: 'inventory',
        url: '/warehouse/inventory',
      },
    ],
  },
  {
    name: 'New files',
    url: '/newfiles',
    icon: 'icon-docs',
    children: [
      {
        name: 'Countery',
        url: '/newfiles/countery',
      },
      {
        name: 'Cities',
        url: '/newfiles/cities',
      },
      {
        name: 'User types',
        url: '/newfiles/usertypes',
      },
      {
        name: 'Departments',
        url: '/newfiles/department',
      },
      {
        name: 'Priority',
        url: '/newfiles/priority',
      },
      {
        name: 'Work order type',
        url: '/newfiles/ordertype',
      },
      {
        name: 'Work order status',
        url: '/newfiles/Workorderstatus',
      },
      {
        name: 'Unit measurement',
        url: '/newfiles/unitmeasurement',
      },
      {
        name: 'Tickets status',
        url: '/newfiles/ticketstatus',
      },
      {
        name: 'Services types',
        url: '/newfiles/servicestypes',
      },
      {
        name: 'Main services',
        url: '/newfiles/mainservices',
      },
      {
        name: 'Sub services',
        url: '/newfiles/subservices',
      },

      {
        name: 'Services price',
        url: '/newfiles/serviceprice',
      },

      {
        name: 'Profession',
        url: '/newfiles/profession',
      },
    ],
  },
  {
    name: 'Users',
    url: '/users',
    icon: 'icon-people',
    children: [
      {
        name: 'Clients',
        url: '/users/clients',
      },
      {
        name: 'User Permission',
        url: '/users/userpermision',
      },
      {
        name: 'Employees',
        url: '/users/employee',
      },
    ],
  },
  {
    name: 'Settings',
    url: '/settings',
    icon: 'cil-settings',
    children: [
      {
        name: 'Users role',
        url: '/userrole',
      },
      {
        name: 'Users permissions',
        url: '/userpermissions',
      },
      {
        name: 'logout',
        url: '/logout',
      },
    ],
  },
  // {
  //   name: 'Buttons',
  //   url: '/buttons',
  //   icon: 'icon-cursor',
  //   children: [
  //     {
  //       name: 'Buttons',
  //       url: '/buttons/buttons',
  //       icon: 'icon-cursor'
  //     },
  //     {
  //       name: 'Dropdowns',
  //       url: '/buttons/dropdowns',
  //       icon: 'icon-cursor'
  //     },
  //     {
  //       name: 'Brand Buttons',
  //       url: '/buttons/brand-buttons',
  //       icon: 'icon-cursor'
  //     }
  //   ]
  // },
  // {
  //   name: 'Charts',
  //   url: '/charts',
  //   icon: 'icon-pie-chart'
  // },
  // {
  //   name: 'Icons',
  //   url: '/icons',
  //   icon: 'icon-star',
  //   children: [
  //     {
  //       name: 'CoreUI Icons',
  //       url: '/icons/coreui-icons',
  //       icon: 'icon-star',
  //       badge: {
  //         variant: 'success',
  //         text: 'NEW'
  //       }
  //     },
  //     {
  //       name: 'Flags',
  //       url: '/icons/flags',
  //       icon: 'icon-star'
  //     },
  //     {
  //       name: 'Font Awesome',
  //       url: '/icons/font-awesome',
  //       icon: 'icon-star',
  //       badge: {
  //         variant: 'secondary',
  //         text: '4.7'
  //       }
  //     },
  //     {
  //       name: 'Simple Line Icons',
  //       url: '/icons/simple-line-icons',
  //       icon: 'icon-star'
  //     }
  //   ]
  // },
  // {
  //   name: 'Notifications',
  //   url: '/notifications',
  //   icon: 'icon-bell',
  //   children: [
  //     {
  //       name: 'Alerts',
  //       url: '/notifications/alerts',
  //       icon: 'icon-bell'
  //     },
  //     {
  //       name: 'Badges',
  //       url: '/notifications/badges',
  //       icon: 'icon-bell'
  //     },
  //     {
  //       name: 'Modals',
  //       url: '/notifications/modals',
  //       icon: 'icon-bell'
  //     }
  //   ]
  // },
  // {
  //   name: 'Widgets',
  //   url: '/widgets',
  //   icon: 'icon-calculator',
  //   badge: {
  //     variant: 'info',
  //     text: 'NEW'
  //   }
  // },
  // {
  //   divider: true
  // },
  // {
  //   title: true,
  //   name: 'Extras',
  // },
  // {
  //   name: 'Pages',
  //   url: '/pages',
  //   icon: 'icon-star',
  //   children: [
  //     {
  //       name: 'Login',
  //       url: '/login',
  //       icon: 'icon-star'
  //     },
  //     {
  //       name: 'Register',
  //       url: '/register',
  //       icon: 'icon-star'
  //     },
  //     {
  //       name: 'Error 404',
  //       url: '/404',
  //       icon: 'icon-star'
  //     },
  //     {
  //       name: 'Error 500',
  //       url: '/500',
  //       icon: 'icon-star'
  //     }
  //   ]
  // }
];
