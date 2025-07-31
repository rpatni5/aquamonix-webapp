import { SharedProgramService } from '@/app/utils/sharedService/sharedProgram';
import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, RouterModule } from '@angular/router';

@Component({
  selector: 'app-group',
  imports: [RouterModule, CommonModule, FormsModule],
  templateUrl: './group.component.html',
  styleUrl: './group.component.scss'
})

export class GroupComponent {
  program: any;
  group: any;
  constructor(private route: ActivatedRoute, private sharedProgramService: SharedProgramService) { }

  ngOnInit() {
    this.program = this.sharedProgramService.getProgram()?.name;
    this.group = this.sharedProgramService.getGroup();
    console.log('Group number:', this.program);
  }
}
