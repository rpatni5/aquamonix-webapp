import type { Route } from '@angular/router'

export const VIEWS_ROUTES: Route[] = [
  {
    path: '',
    redirectTo: 'system-status',
    pathMatch: 'full',
  },
  {
    path: 'ui',
    loadChildren: () =>
      import('./ui/ui-pages.route').then((mod) => mod.UI_PAGES_ROUTES),
  },

  {
    path: 'icons',
    loadChildren: () =>
      import('./icons/icons.route').then((mod) => mod.ICONS_ROUTES),
  },
  {
    path: 'system-status',
    loadComponent: () => import('./system-status/system-status.component').then(m => m.SystemStatusComponent),
  },
  {
    path: 'alerts',
    loadComponent: () => import('./alerts/alerts.component').then(m => m.AlertsComponent),
  },
  {
    path: 'stations',
    loadChildren: () => import('./stations/station-routes').then(m => m.Station_Routes),
  },
  {
    path: 'programs',
    loadChildren: () => import('./programs/program-route').then(m => m.Program_Routes),
  },
  {
    path: 'settings',
    loadComponent: () => import('./settings/settings.component').then(m => m.SettingsComponent),
  },
  {
    path: '**',
    redirectTo: 'system-status',
    pathMatch: 'full'
  }


]
