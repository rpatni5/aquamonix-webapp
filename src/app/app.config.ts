import {
  ApplicationConfig,
  importProvidersFrom,
  isDevMode,
  provideZoneChangeDetection,
} from '@angular/core'
import { InMemoryScrollingFeature, InMemoryScrollingOptions, provideRouter, withInMemoryScrolling } from '@angular/router'
import { provideStoreDevtools } from '@ngrx/store-devtools'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'

import { routes } from './app.routes'
import { provideStore } from '@ngrx/store'
import {
  HTTP_INTERCEPTORS,
  provideHttpClient,
  withFetch,
  withInterceptorsFromDi,
} from '@angular/common/http'
import { DecimalPipe } from '@angular/common'
import { CookieService } from 'ngx-cookie-service'
import { BrowserModule } from '@angular/platform-browser'
import { provideEffects } from '@ngrx/effects'
import { FakeBackendProvider } from './helper/fake-backend'
import { JwtInterceptor } from './helper/jwt.interceptor'
import { ErrorInterceptor } from './helper/error.interceptor'
const scrollConfig: InMemoryScrollingOptions = {
  scrollPositionRestoration: 'top',
  anchorScrolling: 'enabled',
}

const inMemoryScrollingFeatures: InMemoryScrollingFeature =
  withInMemoryScrolling (scrollConfig)

export const appConfig: ApplicationConfig = {
  providers: [
    FakeBackendProvider,
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },
    DecimalPipe,
    CookieService,
    provideZoneChangeDetection({   eventCoalescing: false,
      runCoalescing: false,
      ignoreChangesOutsideZone: true,}),
    provideRouter(routes,inMemoryScrollingFeatures),
    importProvidersFrom(BrowserAnimationsModule, BrowserModule),
    provideStoreDevtools({ maxAge: 25, logOnly: !isDevMode() }),
    provideHttpClient(withFetch(), withInterceptorsFromDi()),
  ],
}
