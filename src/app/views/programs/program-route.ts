import { UnsavedChangesGuard } from '@/app/guard/unsaved-changes.guard';
import { Component } from '@angular/core';
import { Route } from '@angular/router';

export const Program_Routes: Route[] = [
    {
        path: ':programName',
        loadComponent: () =>
            import('./program-description/program-description.component').then(m => m.ProgramDescriptionComponent),
        canDeactivate: [UnsavedChangesGuard]
    },
    {
        path: '',
        loadComponent: () => import('./programs.component').then(m => m.ProgramsComponent)
    },
    {
        path: ':programName/groups',
        children: [
            {
                path: '',
                loadComponent: () =>
                    import('./program-description/groups/groups.component').then(m => m.GroupsComponent),
            },
            {
                path: ':group',
                loadComponent: () =>
                    import('./program-description/groups/group/group.component').then(m => m.GroupComponent),
            },
        ]
    },
    {
        path: ':programName/pump',
        loadComponent: () =>
            import('./program-description/pump-selection/pump-selection.component').then(m => m.PumpSelectionComponent),
    },
    {
        path: ':programName/starttimes',
        loadComponent: () =>
            import('./program-description/starttimes/starttimes.component').then(m => m.StarttimesComponent),

    },

]