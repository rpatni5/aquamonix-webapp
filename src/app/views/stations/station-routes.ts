import { Component } from '@angular/core';
import { Route } from '@angular/router';

export const Station_Routes: Route[] = [
    {
        path: 'watering-timer',
        loadComponent: () =>
            import('./watering-timer/watering-timer.component').then(m => m.WateringTimerComponent),
    },
    {
        path: '',
        loadComponent: () => import('./stations.component').then(m => m.StationsComponent)
    }
]