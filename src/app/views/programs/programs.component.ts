import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-programs',
  imports: [CommonModule],
  templateUrl: './programs.component.html',
  styleUrl: './programs.component.scss'
})
export class ProgramsComponent {
  programs = [
    { name: 'Test Program 1', status: 'Stopped' },
    { name: 'Program 2', status: 'Stopped' },
    { name: 'Program 3', status: 'Stopped' },
    { name: 'Program 4', status: 'Stopped' },
    { name: 'Program 5', status: 'Stopped' },
    { name: 'Program 6', status: 'Stopped' },
    { name: 'Program 7', status: 'Stopped' }
  ];
}
