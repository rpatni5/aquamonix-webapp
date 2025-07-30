import { Router, Routes } from '@angular/router'
import { LayoutComponent } from './layout/layout.component'
import { ErrorLayoutComponent } from './error-layout/error-layout.component'
import { inject } from '@angular/core'

export const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    loadChildren: () =>
      import('./views/views.route').then((mod) => mod.VIEWS_ROUTES),
    canActivate: [
      (url: any) => {
        const router = inject(Router)

        return true
      }
    ]
  },

]
