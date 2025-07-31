import { SharedProgramService } from '@/app/utils/sharedService/sharedProgram';
import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-group',
  imports: [RouterModule, CommonModule, FormsModule],
  templateUrl: './group.component.html',
  styleUrl: './group.component.scss'
})

export class GroupComponent {

}
