import { SharedProgramService } from '@/app/utils/sharedService/sharedProgram';
import { TimerComponent } from '@/app/utils/timer/timer.component';
import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { StationsComponent } from '@views/stations/stations.component';

@Component({
  selector: 'app-group',
  imports: [RouterModule, CommonModule, FormsModule, TimerComponent, StationsComponent],
  templateUrl: './group.component.html',
  styleUrl: './group.component.scss'
})

export class GroupComponent {
  program: any;
  groupName: any;
  group: any;
  openPopup = false;
  selectedHour: number = 0;
  selectedMinute: number = 0;
  selectedTimeDisplay = '00:00';
  constructor(private route: ActivatedRoute, private sharedProgramService: SharedProgramService) { }

  ngOnInit() {
    this.program = this.sharedProgramService.getProgram()?.name;
    this.group = this.sharedProgramService.getGroup();
    this.groupName = `Group ${this.group.groupNumber}`
    console.log('Group number:', this.group);
  }

  confirmTime(event: any) {
    const hourStr = event.hour;
    const minStr = event.minute;
    this.selectedTimeDisplay = `${hourStr}:${minStr}`;
    console.log("selected watering time is:", this.selectedTimeDisplay);
    this.openPopup = false;
  }
  convertToDateTime(data: any) {
    const timeInSeconds = parseInt(data.RuntTimeMinutes);
    if (timeInSeconds === 0) {
      return "00:00:00";
    }
    return new Date(timeInSeconds * 1000).toLocaleTimeString('en-GB', {
      hour12: false,
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit'
    });
  }
  openStationModal(): void {
    const modalElement = document.getElementById('stationModal') as HTMLElement;
    const modal = new (window as any).bootstrap.Modal(modalElement);
    modal.show();
  }

}
