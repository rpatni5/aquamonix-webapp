import { ComponentFixture, TestBed } from '@angular/core/testing'

import { AveragesaleComponent } from './averagesale.component'

describe('AveragesaleComponent', () => {
  let component: AveragesaleComponent
  let fixture: ComponentFixture<AveragesaleComponent>

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AveragesaleComponent],
    }).compileComponents()

    fixture = TestBed.createComponent(AveragesaleComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
