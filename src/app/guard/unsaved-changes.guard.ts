import { Injectable } from '@angular/core';
import { CanDeactivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { ProgramDescriptionComponent } from '@views/programs/program-description/program-description.component';

@Injectable({
  providedIn: 'root',
})
export class UnsavedChangesGuard implements CanDeactivate<ProgramDescriptionComponent> {
  canDeactivate(
    component: ProgramDescriptionComponent,
    currentRoute: ActivatedRouteSnapshot,
    currentState: RouterStateSnapshot,
    nextState?: RouterStateSnapshot
  ): boolean {
    const goingToStartTimes = nextState?.url.includes('starttimes');

    if (!goingToStartTimes && component.hasChanges()) {
      return confirm('You have unsaved changes. Are you sure you want to leave?');
    }

    return true;
  }
}
