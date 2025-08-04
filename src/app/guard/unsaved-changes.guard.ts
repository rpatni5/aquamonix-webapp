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

    if (component && (component as any).skipUnsavedCheck) {
      return true;
    }
    const currentUrl = currentState.url.toLowerCase();
    const nextUrl = nextState.url.toLowerCase();

    const allowedScreens = ['starttimes', 'groups', 'group', 'pump', 'root'];


    const current = this.extractProgramScreen(currentUrl);
    const next = this.extractProgramScreen(nextUrl);

    const isSameProgramNavigation =
      current && next && current.programId === next.programId && (
        allowedScreens.includes(current.screen) && allowedScreens.includes(next.screen) ||
        this.matchesAllowedPath(nextUrl)
      );

    console.log('Current:', current);
    console.log('Next:', next);
    console.log('IsSameProgramNav:', isSameProgramNavigation);

    if (isSameProgramNavigation) return true;

    if (component && component.hasChanges && component.hasChanges()) {
      return this.confirmDialog(component);
    }

    const hasLocalChanges = this.hasLocalStorageChanges(component);
    if (hasLocalChanges && component) {
      return this.confirmDialog(component);
    }


    return true;
  }
  private matchesAllowedPath(url: string): boolean {
    return /^\/(programs\/program-\d+|program-\d+\/groups\/group-\d+)$/.test(url);
  }

  private confirmDialog(component: UnsavedChanges): Promise<boolean> {
    return this.confirmService
      .confirm('Unsaved Changes', 'You have unsaved changes. Save or Discard before leaving?')
      .then((result) => {
        if (result === 'save') {
          //       this.skipUnsavedCheck = true;
          // this.confirmationDialogService
          //   .confirm('Save Program', 'Do you want to save this program?', 'saveOnly')
          //   .then((response) => {
          //     if (response === 'save') {
          //       this.programService.setSelectedPrograms([this.program]);
          //       this.programService.sendCommandSentSuccessfully();

          //       this.notificationService?.notify('Program data has been saved successfully!', 3000, 'success');

          //       this.skipUnsavedCheck = true;
          //       this.markChangesSaved();

          //       setTimeout(() => {
          //         this.router.navigate(['/programs']);
          //       }, 0);
          //     }
          //   });
          return true;
        } else if (result === 'discard') {
          component.markChangesSaved?.();

          const program = (component as any)['program'];
          const programId = program?.name?.match(/\d+$/)?.[0] || '1';

          localStorage.removeItem('savedStartTimes_' + programId);
          localStorage.removeItem('startTimesStruct_' + programId);
          localStorage.removeItem('dayTableStruct_' + programId);
          localStorage.removeItem('selectedPumps');
          localStorage.removeItem('stationGroupDataAll');

          return true;
        } else {
          return false;
        }
      });
  }

  private extractProgramScreen(url: string): { programId: string; screen: string } | null {
    const cleanUrl = url.split('?')[0].split('#')[0].replace(/\/+$/, '');

    // Match /program-1 or /program-1/starttimes
    let match = cleanUrl.match(/(?:programs\/)?(program-\d+)(?:\/([^\/]+))?/);
    if (match) {
      const programId = match[1];
      const screen = match[2]?.toLowerCase() || 'root'; // ✅ special screen name for base route
      return { programId, screen };
    }

    // Match /program-1/groups/group-1
    match = cleanUrl.match(/(program-\d+)\/groups\/(group-\d+)/);
    if (match) {
      return {
        programId: match[1],
        screen: 'group',
      };
    }

    return null;
  }


  private hasLocalStorageChanges(component: UnsavedChanges | null): boolean {
    const program = (component as any)['program'];
    const programId = program?.name?.match(/\d+$/)?.[0] || '1';

    const keysToCheck = [
      'startTimesStruct_' + programId,
      'dayTableStruct_' + programId,
      'selectedPumps',
      'stationGroupDataAll',
    ];

    return keysToCheck.some((key) => {
      const value = localStorage.getItem(key);
      if (!value) return false;
      return true;
    });
  }
}



