import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectPersonneComponent } from './select-personne.component';

describe('SelectPersonneComponent', () => {
  let component: SelectPersonneComponent;
  let fixture: ComponentFixture<SelectPersonneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SelectPersonneComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectPersonneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
