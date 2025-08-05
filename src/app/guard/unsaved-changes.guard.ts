import { Injectable, NgZone } from '@angular/core';
import { CanDeactivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router, CanActivate, GuardResult, MaybeAsync } from '@angular/router';
import { Observable } from 'rxjs';
import { UnsavedChanges } from '../models/unsaved-changes';
import { ConfirmationDialogService } from '../utils/confirmation-popup/confirmation-dialog.service';
import { ProgramService } from '../services/program.service';
import { NotificationService } from '../utils/notification.service';
import { PreviousRouteService } from '../services/previous-route.service';
import { dummyData } from '../data/device-data';


@Injectable({ providedIn: 'root' })
export class AuthGuard implements CanActivate {

  constructor(private confirmService: ConfirmationDialogService,
    private programService: ProgramService,
    private notificationService: NotificationService,
    private ngZone: NgZone,
    private router: Router,
    private previousRouteService: PreviousRouteService

  ) { }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> | Promise<boolean> | boolean {
    const currentUrl = this.router.url.toLowerCase();
    const nextUrl = state.url.toLowerCase();

    const allowedScreens = ['starttimes', 'groups', 'group', 'pump', 'root'];

    const current = this.extractProgramScreen(currentUrl);
    const next = this.extractProgramScreen(nextUrl);

    const isSameProgramNavigation =
      current &&
      next &&
      current.programId === next.programId &&
      (
        allowedScreens.includes(current.screen) && allowedScreens.includes(next.screen) ||
        this.matchesAllowedPath(nextUrl)
      );

    if (isSameProgramNavigation) {
      return true;
    }

    const hasLocalChanges = this.hasLocalStorageChanges();

    if (hasLocalChanges) {
      return this.confirmService
        .confirm('Unsaved Changes', 'You have unsaved changes. Do you want to save before leaving?')
        .then((result) => {
          if (result === 'save') {
            this.handleSave();
            return true;
          } else if (result === 'discard') {
            this.handleDiscard();
            return true;
          } else {
            let returnUrl = this.previousRouteService.getCurrentUrl();

            const validSlugs = this.getValidProgramSlugs();

            if (!returnUrl || returnUrl === '/') {
              const match = this.router.url.match(/program-(\d+)/);
              const programId = match ? match[1] : '1';
              returnUrl = `/programs/program-${programId}`;
            }

            const slugMatch = returnUrl.match(/program-\d+/);
            const slug = slugMatch ? slugMatch[0] : null;
            
            if (!slug || !validSlugs.includes(slug)) {
              this.handleDiscard();
            }else{
              this.ngZone.run(() => {
                this.router.navigateByUrl(returnUrl!);
              });
  
            }

            return false;
          }
        });
    }

    return true;
  }

  private hasLocalStorageChanges(): boolean {
    const keysToCheck = [
      'startTimesStruct_1',
      'dayTableStruct_1',
      'selectedPumps',
      'stationGroupDataAll',
      'waterBoost',

    ];
    return keysToCheck.some((key) => !!localStorage.getItem(key));
  }

  private handleSave(): void {
    this.programService.sendCommandSentSuccessfully();
    this.clearProgramLocalStorage();
    this.notificationService?.notify(
      'Program data has been saved successfully!',
      3000,
      'success'
    );
    this.ngZone.run(() => {
      this.router.navigate(['/programs']);
    });
  }

  private handleDiscard(): void {
    this.clearProgramLocalStorage();
    this.ngZone.run(() => {
      this.router.navigate(['/programs']);
    });
  }

  private clearProgramLocalStorage(): void {
    const keys = [
      'savedStartTimes_1',
      'startTimesStruct_1',
      'dayTableStruct_1',
      'selectedPumps',
      'stationGroupDataAll',
      'waterBoost',
    ];
    keys.forEach((key) => localStorage.removeItem(key));
  }

  private matchesAllowedPath(url: string): boolean {
    return /^\/(programs\/program-\d+|program-\d+\/groups\/group-\d+)$/.test(url);
  }

  private extractProgramScreen(url: string): { programId: string; screen: string } | null {
    const cleanUrl = url.split('?')[0].split('#')[0].replace(/\/+$/, '');

    let match = cleanUrl.match(/(?:programs\/)?(program-\d+)(?:\/([^\/]+))?/);
    if (match) {
      const programId = match[1];
      const screen = match[2]?.toLowerCase() || 'root';
      return { programId, screen };
    }

    match = cleanUrl.match(/(program-\d+)\/groups\/(group-\d+)/);
    if (match) {
      return {
        programId: match[1],
        screen: 'group',
      };
    }

    return null;
  }

  getValidProgramSlugs(): string[] {
    const device = dummyData.Devices.Items['MPG101'];
    const programsMeta = device.MetaData.Device.Programs.Items;

    return Object.values(programsMeta).map((p: any) =>
      this.slugify(p.Name)
    );
  }

  getProgramFromSlug(slug: string): any {
    const device = dummyData.Devices.Items['MPG101'];
    const programsMeta = device.MetaData.Device.Programs.Items;

    return Object.entries(programsMeta).find(
      ([, p]: any) => this.slugify(p.Name) === slug
    )?.[1];
  }

  slugify(name: string): string {
    return name.toLowerCase().replace(/\s+/g, '-');
  }
}

