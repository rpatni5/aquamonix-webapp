import { SharedProgramService } from '@/app/utils/sharedService/sharedProgram';
import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-groups',
  imports: [RouterModule, CommonModule, FormsModule],
  templateUrl: './groups.component.html',
  styleUrl: './groups.component.scss'
})
export class GroupsComponent {
  program: any;

  constructor(
    private sharedProgramService: SharedProgramService,
  ) { }

  async ngOnInit() {
    this.program = this.sharedProgramService.getProgram();
  }
}
