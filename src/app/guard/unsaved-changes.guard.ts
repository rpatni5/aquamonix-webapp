import { Injectable } from '@angular/core';
import { CanDeactivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { UnsavedChanges } from '@/app/models/unsaved-changes';
import { ConfirmationDialogService } from '../utils/confirmation-popup/confirmation-dialog.service';

@Injectable({ providedIn: 'root' })
export class UnsavedChangesGuard implements CanDeactivate<UnsavedChanges> {
  constructor(private confirmService: ConfirmationDialogService) { }

  canDeactivate(
    component: UnsavedChanges,
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot,
    nextState?: RouterStateSnapshot
  ): Observable<boolean> | Promise<boolean> | boolean {
    const allowedRoutes = ['starttimes', 'groups', 'pump'];
    const goingToAllowedRoute = allowedRoutes.some(path => nextState?.url.includes(path));
    const goingToProgramDescription = nextState?.url?.match(/\/programs\/[^\/]+$/);

  if ((goingToAllowedRoute || goingToProgramDescription)) {
    return true; 
  }
    
    if (!goingToAllowedRoute && component.hasChanges()) {
      return this.confirmService
        .confirm('Unsaved Changes', 'You have unsaved changes. Do you want to save before leaving?')
        .then((result) => {
          if (result === 'save') {
            component.saveStartTimes();
            return true;
          } else if (result === 'discard') {
            if (typeof component.markChangesSaved === 'function') {
              component.markChangesSaved();
            }
            const program = (component as any)['program'];
            if (program && program.name) {
              const programId = program.name.match(/\d+$/)?.[0] || '1';
              localStorage.removeItem('savedStartTimes_' + programId);
            }

            return true;
          } else {
            return false;
          }
        });
    }

    return true;
  }
}
