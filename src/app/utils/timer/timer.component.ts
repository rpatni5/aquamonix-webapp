import { CommonModule } from '@angular/common';
import { Component, ElementRef, EventEmitter, Input, Output, ViewChild } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-timer',
  imports: [CommonModule, FormsModule],
  templateUrl: './timer.component.html',
  styleUrl: './timer.component.scss'
})
export class TimerComponent {
  @Input() open = false;
  @Input() initialHour: number = 0;
  @Input() initialMinute: number = 0;

  @Output() close = new EventEmitter<void>();
  @Output() confirm = new EventEmitter<{ hour: string, minute: string }>();

  @ViewChild('hourPicker') hourPicker!: ElementRef;
  @ViewChild('minutePicker') minutePicker!: ElementRef;

  hours: number[] = Array.from({ length: 24 }, (_, i) => i);
  minutes: number[] = Array.from({ length: 60 }, (_, i) => i);

  selectedHour: number = 0;
  selectedMinute: number = 0;

  ngOnInit(): void {
    this.selectedHour = this.initialHour;
    this.selectedMinute = this.initialMinute;
  }

  onScrollHour(event: any) {
    const index = Math.round(event.target.scrollTop / 40);
    this.selectedHour = this.hours[index] || 0;
  }

  onScrollMinute(event: any) {
    const index = Math.round(event.target.scrollTop / 40);
    this.selectedMinute = this.minutes[index] || 0;
  }

  onConfirm() {
    const formattedHour = String(this.selectedHour).padStart(2, '0');
    const formattedMinute = String(this.selectedMinute).padStart(2, '0');

    this.confirm.emit({ hour: formattedHour, minute: formattedMinute });
    this.close.emit();
  }


  onCancel() {
    this.close.emit();
  }
}
