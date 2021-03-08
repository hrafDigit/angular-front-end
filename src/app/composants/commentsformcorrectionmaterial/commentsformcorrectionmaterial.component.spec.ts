import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CommentsformcorrectionmaterialComponent } from './commentsformcorrectionmaterial.component';

describe('CommentsformcorrectionmaterialComponent', () => {
  let component: CommentsformcorrectionmaterialComponent;
  let fixture: ComponentFixture<CommentsformcorrectionmaterialComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CommentsformcorrectionmaterialComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CommentsformcorrectionmaterialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
