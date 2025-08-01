import { Injectable } from '@angular/core';
import { CanDeactivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { UnsavedChanges } from '../models/unsaved-changes';
import { ConfirmationDialogService } from '../utils/confirmation-popup/confirmation-dialog.service';

@Injectable({ providedIn: 'root' })
export class UnsavedChangesGuard implements CanDeactivate<UnsavedChanges> {
  constructor(private confirmService: ConfirmationDialogService) { }

  canDeactivate(
    component: UnsavedChanges | null,
    currentRoute: ActivatedRouteSnapshot,
    currentState: RouterStateSnapshot,
    nextState: RouterStateSnapshot
  ): Observable<boolean> | Promise<boolean> | boolean {
    const currentUrl = currentState.url.toLowerCase();
    const nextUrl = nextState.url.toLowerCase();

    const allowedScreens = ['starttimes', 'groups', 'pump', 'program-description'];


    const current = this.extractProgramScreen(currentUrl);
    const next = this.extractProgramScreen(nextUrl);

    const isSameProgram =
      current &&
      next &&
      current.programId === next.programId &&
      allowedScreens.includes(current.screen) &&
      allowedScreens.includes(next.screen);

    if (component && component.hasChanges && component.hasChanges() && !isSameProgram) {
      return this.confirmService
        .confirm('Unsaved Changes', 'You have unsaved changes. Save or Discard before leaving?')
        .then((result) => {
          if (result === 'save') {
            component.saveStartTimes?.();
            return true;
          } else if (result === 'discard') {
            if (typeof component.markChangesSaved === 'function') {
              component.markChangesSaved();
            }
            const program = (component as any)['program'];
            if (program && program.name) {
              const programId = program.name.match(/\d+$/)?.[0] || '1';
              localStorage.removeItem('savedStartTimes_' + programId);
              localStorage.removeItem('startTimesStruct_' + programId);
              localStorage.removeItem('dayTableStruct_' + programId);
              localStorage.removeItem('selectedPumps');
              localStorage.removeItem('stationGroupDataAll');
            }

            return true;
          } else {
            return false;
          }
        });
    }

    return true;
  }
  private extractProgramScreen(url: string): { programId: string; screen: string } | null {
    const cleanUrl = url.split('?')[0].split('#')[0].replace(/\/+$/, '');
    const match = cleanUrl.match(/programs\/(program-\d+)(?:\/([^\/]+))?/);

    if (match) {
      const programId = match[1];
      const screen = match[2] ? match[2].toLowerCase() : 'program-description';
      return { programId, screen };
    }


    return null;
  }

}



