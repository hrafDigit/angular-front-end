import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CommentsformcorrectionBSComponent } from './commentsformcorrection-bs.component';

describe('CommentsformcorrectionBSComponent', () => {
  let component: CommentsformcorrectionBSComponent;
  let fixture: ComponentFixture<CommentsformcorrectionBSComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CommentsformcorrectionBSComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CommentsformcorrectionBSComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
