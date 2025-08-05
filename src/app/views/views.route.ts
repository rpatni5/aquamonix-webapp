import type { Route } from '@angular/router'
import { AuthGuard } from '../guard/unsaved-changes.guard'


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
    canActivate: [AuthGuard],
  },
  {
    path: 'alerts',
    loadComponent: () => import('./alerts/alerts.component').then(m => m.AlertsComponent),
    canActivate: [AuthGuard],
  },
  {
    path: 'stations',
    loadChildren: () => import('./stations/station-routes').then(m => m.Station_Routes),
    canActivate: [AuthGuard],
  
  },
  {
    path: 'programs',
    loadChildren: () => import('./programs/program-route').then(m => m.Program_Routes),
  },
  {
    path: 'settings',
    loadComponent: () => import('./settings/settings.component').then(m => m.SettingsComponent),
    canActivate: [AuthGuard],
  },
  {
    path: '**',
    redirectTo: 'system-status',
    pathMatch: 'full'
  }


]
