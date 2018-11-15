import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RetrospectiveNotesChildTwoComponent } from './retrospective-notes-child-two.component';

describe('RetrospectiveNotesChildTwoComponent', () => {
  let component: RetrospectiveNotesChildTwoComponent;
  let fixture: ComponentFixture<RetrospectiveNotesChildTwoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RetrospectiveNotesChildTwoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RetrospectiveNotesChildTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
