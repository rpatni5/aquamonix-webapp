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
    console.log("Initalize program component")
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
        console.log('All Stored Station Group Data:', parsedData);

        for (let i = 1; i <= 20; i++) {
          const group = parsedData.Items[i];
          if (group && group.Stations?.Items) {
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

  clearGroups() {
    this.showClearConfirm = true;
  }

  confirmClearGroups() {
    localStorage.removeItem('stationGroupDataAll');
    this.showClearConfirm = false;
    // Optionally, refresh data or give feedback
  }

  closeModal() {
    this.showClearConfirm = false;
  }

}
