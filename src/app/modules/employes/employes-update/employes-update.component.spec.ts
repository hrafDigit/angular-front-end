import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployesUpdateComponent } from './employes-update.component';

describe('EmployesUpdateComponent', () => {
  let component: EmployesUpdateComponent;
  let fixture: ComponentFixture<EmployesUpdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmployesUpdateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployesUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
