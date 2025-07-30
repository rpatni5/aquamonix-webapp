import { Component } from '@angular/core';
import { Route } from '@angular/router';

export const Program_Routes: Route[] = [
    {
        path: 'program-description',
        loadComponent: () =>
            import('./program-description/program-description.component').then(m => m.ProgramDescriptionComponent),
    },
    {
        path: '',
        loadComponent: () => import('./programs.component').then(m => m.ProgramsComponent)
    }
]