import { SharedProgramService } from '@/app/utils/sharedService/sharedProgram';
import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
@Component({
  selector: 'app-pump-selection',
  imports: [RouterModule, CommonModule, FormsModule],
  templateUrl: './pump-selection.component.html',
  styleUrl: './pump-selection.component.scss'
})
export class PumpSelectionComponent {
  program: any;

  constructor(
    private sharedProgramService: SharedProgramService,
  ) { }

  async ngOnInit() {
    this.program = this.sharedProgramService.getProgram();
  }
}
