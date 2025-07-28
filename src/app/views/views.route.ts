import type { Route } from '@angular/router'

export const VIEWS_ROUTES: Route[] = [
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


]
