import { dummyData } from '@/app/data/device-data';
import { SharedProgramService } from '@/app/utils/sharedService/sharedProgram';
import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-groups',
  imports: [RouterModule, CommonModule, FormsModule],
  templateUrl: './groups.component.html',
  styleUrl: './groups.component.scss'
})
export class GroupsComponent {
  program: any;
  groups: any[] = [];
  groupList: any[] = [];
  constructor(
    private sharedProgramService: SharedProgramService,
    private router: Router
  ) { }

  ngOnInit() {
    this.init();
    this.program = this.sharedProgramService.getProgram();
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


}
