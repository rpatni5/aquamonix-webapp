import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PumpSelectionComponent } from './pump-selection.component';

describe('PumpSelectionComponent', () => {
  let component: PumpSelectionComponent;
  let fixture: ComponentFixture<PumpSelectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PumpSelectionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PumpSelectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
