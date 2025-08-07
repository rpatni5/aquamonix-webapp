import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-confirmation-popup',
  imports: [CommonModule],
  template: `
    <div class="modal-backdrop" (click)="onCancel()">
      <div class="modal-content p-4" (click)="$event.stopPropagation()">
        <div class="position-relative  mb-3">
          <h5 class="mb-0">{{ title }}</h5>
        </div>
        <p class="confirmation-msg">{{ message }}</p>
        <div class="d-flex justify-content-end gap-2 mt-3">
          <button *ngIf="mode === 'confirm' || mode === 'saveOnly'" type="button" class="btn cancel-btn fw-semibold " (click)="onCancel()">Cancel</button>
          <button *ngIf="mode === 'confirm'" type="button" class="btn error-btn fw-semibold " (click)="onDiscard()">Discard</button>
          <button *ngIf="mode === 'confirm' || mode === 'saveOnly'" type="button" class="btn success-btn fw-semibold " (click)="onSave()">Save</button>
          <button *ngIf="mode === 'alert'" type="button" class="btn cancel-btn fw-semibold " (click)="onCancel()">OK</button>
</div>


      </div>
    </div>
  `,
  styleUrls: ['./confirmation-popup.component.scss'],
})
export class ConfirmationPopupComponent {
  @Input() title: string = 'Unsaved Changes';
  @Input() message: string = 'You have unsaved changes. Do you want to save before leaving?';
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
