import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployesSelectComponent } from './employes-select.component';

describe('EmployesSelectComponent', () => {
  let component: EmployesSelectComponent;
  let fixture: ComponentFixture<EmployesSelectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmployesSelectComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployesSelectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
