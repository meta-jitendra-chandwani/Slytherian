import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RetrospectiveNotesChildOneComponent } from './retrospective-notes-child-one.component';

describe('RetrospectiveNotesChildOneComponent', () => {
  let component: RetrospectiveNotesChildOneComponent;
  let fixture: ComponentFixture<RetrospectiveNotesChildOneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RetrospectiveNotesChildOneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RetrospectiveNotesChildOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
