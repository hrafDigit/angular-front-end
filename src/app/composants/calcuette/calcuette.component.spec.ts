import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CalcuetteComponent } from './calcuette.component';

describe('CalcuetteComponent', () => {
  let component: CalcuetteComponent;
  let fixture: ComponentFixture<CalcuetteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CalcuetteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CalcuetteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
