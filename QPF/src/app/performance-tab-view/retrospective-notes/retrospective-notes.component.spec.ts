import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RetrospectiveNotesComponent } from './retrospective-notes.component';

describe('RetrospectiveNotesComponent', () => {
  let component: RetrospectiveNotesComponent;
  let fixture: ComponentFixture<RetrospectiveNotesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RetrospectiveNotesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RetrospectiveNotesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
