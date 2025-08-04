import { dummyData } from '@/app/data/device-data';
import { SharedProgramService } from '@/app/utils/sharedService/sharedProgram';
import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-groups',
  standalone: true,
  imports: [RouterModule, CommonModule, FormsModule],
  templateUrl: './groups.component.html',
  styleUrls: ['./groups.component.scss']
})
export class GroupsComponent {
  program: any;
  groups: any[] = [];
  groupList: any[] = [];
  showClearConfirm = false;
  isValidRuntime: boolean = false;
  storedGroupData: any = {};

  constructor(
    private sharedProgramService: SharedProgramService,
    private router: Router
  ) { }

  ngOnInit() {
    this.init();
    this.program = this.sharedProgramService.getProgram();
    this.loadStoredGroupData();
  }

  init() {
    const device = dummyData.Devices.Items['MPG101'];
    this.groups = device.Programs.Items[1].StationGroups.Items as any;
    this.groupList = Object.entries(this.groups).map(([key, value]) => ({
      groupNumber: +key,
      data: value
    }));
  }

  goToGroupDetail(program: any, group: any) {
    const programSlug = this.slugify(program.name);
    localStorage.removeItem('selectedGroup');
    this.sharedProgramService.setGroup(group)
    const groupSlug = `group-${group.groupNumber}`;
    this.router.navigate(['programs', programSlug, 'groups', groupSlug]);
  }

  slugify(text: string | undefined | null): string {
    if (!text) return '';
    return text.toLowerCase().replace(/\s+/g, '-').replace(/[^\w\-]+/g, '');
  }

  loadStoredGroupData() {
    const key = 'stationGroupDataAll';
    const stored = localStorage.getItem(key);
    if (stored) {
      try {
        const parsedData = JSON.parse(stored);
        this.storedGroupData = parsedData.Items || {};
        this.isValidRuntime = Object.values(this.storedGroupData).some(
          (group: any) => group?.RuntTimeMinutes > 0
        );
        for (let i = 1; i <= 20; i++) {
          const group = parsedData.Items[i];
          if (group) {
            console.log(` Group ${i} has data:`, group);
          } else {
            console.log(` Group ${i} has no data.`);
          }
        }
      } catch (error) {
        console.error(' Error parsing stationGroupDataAll:', error);
      }
    } else {
      console.log('ℹ No data found for stationGroupDataAll in localStorage.');
    }
  }

  hasRuntime(groupNumber: number, group: any): boolean {
    const runtimeLive = group?.data?.RuntTimeMinutes || 0;
    const storedGroup = this.storedGroupData[groupNumber];
    const runtimeStored = storedGroup?.RuntTimeMinutes || 0;

    return runtimeLive > 0 || runtimeStored > 0;
  }

  clearGroups() {
    this.showClearConfirm = true;
  }

  confirmClearGroups() {
    localStorage.removeItem('stationGroupDataAll');
    this.showClearConfirm = false;
  }

  closeModal() {
    this.showClearConfirm = false;
  }

}
