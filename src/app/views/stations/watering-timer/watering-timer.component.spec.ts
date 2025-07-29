import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WateringTimerComponent } from './watering-timer.component';

describe('WateringTimerComponent', () => {
  let component: WateringTimerComponent;
  let fixture: ComponentFixture<WateringTimerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WateringTimerComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WateringTimerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
