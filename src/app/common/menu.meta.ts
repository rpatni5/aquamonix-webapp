export type MenuItemType = {
  key: string
  label: string
  isTitle?: boolean
  icon?: string
  url?: string
  badge?: {
    variant: string
    text: string
  }
  parentKey?: string
  isDisabled?: boolean
  collapsed?: boolean
  children?: MenuItemType[]
}
export const MENU_ITEMS: MenuItemType[] = [
  {
    key: 'sensor',
    label: 'Sensor',
    icon: 'home',
    url: '/index',
  },
  {
    key: 'alerts',
    label: 'Alerts',
    icon: 'alert-triangle',
    url: '/index',
  },
  {
    key: 'station',
    label: 'Station',
    icon: 'map-pin',
    url: '/index',
  },
  {
    key: 'program',
    label: 'Programs',
    icon: 'code',
    url: '/index',
  },
  {
    key: 'stations',
    label: 'Stations',
    icon: 'database',
    url: '/index',
  }
]

// export const MENU_ITEMS: MenuItemType[] = [
//   {
//     key: 'nav',
//     label: 'MENU',
//     isTitle: true,
//   },
//   {
//     key: 'dashboard',
//     label: 'Dashboard',
//     icon: 'home',
//     collapsed: false,
//     children: [
//       {
//         key: 'dashboard-crm',
//         label: 'CRM',
//         url: '/index',
//         parentKey: 'dashboard',
//       },
//       {
//         key: 'dashboard-analytics',
//         label: 'Analytics',
//         url: '/analytics',
//         parentKey: 'dashboard',
//       },
//       {
//         key: 'dashboard-ecommerce',
//         label: 'eCommerce',
//         url: '/ecommerce',
//         parentKey: 'dashboard',
//       },
//     ],
//   },
//   {
//     key: 'pages',
//     label: 'PAGES',
//     isTitle: true,
//   },
//   {
//     key: 'auth',
//     label: 'Authentication',
//     icon: 'users',
//     collapsed: true,
//     children: [
//       {
//         key: 'auth-login',
//         label: 'Log In',
//         url: '/auth/login',
//         parentKey: 'auth',
//       },
//       {
//         key: 'auth-register',
//         label: 'Register',
//         url: '/auth/register',
//         parentKey: 'auth',
//       },
//       {
//         key: 'auth-password',
//         label: 'Recover Password',
//         url: '/auth/recoverpw',
//         parentKey: 'auth',
//       },
//       {
//         key: 'auth-lockscreen',
//         label: 'Lock Screen',
//         url: '/auth/lock-screen',
//         parentKey: 'auth',
//       },
//       {
//         key: 'auth-confirm-mail',
//         label: 'Confirm Mail',
//         url: '/auth/confirm-mail',
//         parentKey: 'auth',
//       },
//       {
//         key: 'auth-email-verification',
//         label: 'Email Verification',
//         url: '/email-verification',
//         parentKey: 'auth',
//       },
//       {
//         key: 'auth-logout',
//         label: 'Logout',
//         url: '/auth/logout',
//         parentKey: 'auth',
//       },
//     ],
//   },

// ]
