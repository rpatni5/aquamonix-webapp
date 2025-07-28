import { dummyData } from '@/app/data/device-data';
import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-programs',
  imports: [CommonModule],
  templateUrl: './programs.component.html',
  styleUrl: './programs.component.scss'
})
export class ProgramsComponent {
  programs: { id: string, name: string, status: string}[] = [];
  ngOnInit() {
    const device = dummyData.Devices.Items['MPG101'];
    const programsMeta = device.MetaData.Device.Programs.Items;
    const ProgramStatus = device.Stations.Items;

    this.programs = Object.keys(programsMeta).map(key => {
      return {
        id: key,
        name: programsMeta[key].Name,
        status: ProgramStatus[key]?.Status?.Value || 'Unknown',
      };
    });
  }
}
