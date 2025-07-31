import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-confirmation-popup',
  imports: [CommonModule],
  template: `
    <div class="modal-backdrop" (click)="onCancel()">
      <div class="modal-content p-4" (click)="$event.stopPropagation()">
        <div class="position-relative text-center mb-3">
          <h5 class="mb-0">{{ title }}</h5>
          <button class="btn-close position-absolute end-0 top-0 mt-1 me-1" (click)="onCancel()"></button>
        </div>
        <p class="text-center">{{ message }}</p>
        <div class="d-flex justify-content-around mt-4">
          <button *ngIf="mode === 'confirm' || mode === 'saveOnly'" type="button" class="btn btn-light border rounded-pill px-4" (click)="onCancel()">Cancel</button>
          <button *ngIf="mode === 'confirm'" type="button" class="btn btn-danger rounded-pill px-4" (click)="onDiscard()">Discard</button>
          <button *ngIf="mode === 'confirm' || mode === 'saveOnly'" type="button" class="btn btn-success rounded-pill px-4" (click)="onSave()">Save</button>
          <button *ngIf="mode === 'alert'" type="button" class="btn btn-primary rounded-pill px-4" (click)="onCancel()">OK</button>
</div>


      </div>
    </div>
  `,
  styleUrls: ['./confirmation-popup.component.scss'],
})
export class ConfirmationPopupComponent {
  @Input() title: string = 'Unsaved Changes';
  @Input() message: string = 'You have unsaved changes. What would you like to do?';
  @Input() mode: 'confirm' | 'alert' | 'saveOnly' = 'confirm';

  @Output() save = new EventEmitter<void>();
  @Output() discard = new EventEmitter<void>();
  @Output() cancel = new EventEmitter<void>();

  onSave() {
    this.save.emit();
  }

  onDiscard() {
    this.discard.emit();
  }

  onCancel() {
    this.cancel.emit();
  }
}
