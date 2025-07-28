import type { Route } from '@angular/router'
import { AlertsComponent } from './alerts/alerts.component'
import { TabsComponent } from './tabs/tabs.component'
import { AccordionComponent } from './accordion/accordion.component'
import { SpinnerComponent } from './spinner/spinner.component'
import { TooltipComponent } from './tooltip/tooltip.component'

export const UI_PAGES_ROUTES: Route[] = [
  {
    path: 'accordions',
    component: AccordionComponent,
    data: { title: 'Accordions' },
  },
  {
    path: 'alerts',
    component: AlertsComponent,
    data: { title: 'Alerts' },
  },
  {
    path: 'spinners',
    component: SpinnerComponent,
    data: { title: 'Spinners' },
  },
  {
    path: 'tabs',
    component: TabsComponent,
    data: { title: 'Tabs' },
  },
  {
    path: 'tooltips',
    component: TooltipComponent,
    data: { title: 'Tooltips' },
  },
  
]
