import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StarttimesComponent } from './starttimes.component';

describe('StarttimesComponent', () => {
  let component: StarttimesComponent;
  let fixture: ComponentFixture<StarttimesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StarttimesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StarttimesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
