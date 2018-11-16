import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SummarySelfDevelopmentComponent } from './summary-self-development.component';

describe('SummarySelfDevelopmentComponent', () => {
  let component: SummarySelfDevelopmentComponent;
  let fixture: ComponentFixture<SummarySelfDevelopmentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SummarySelfDevelopmentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SummarySelfDevelopmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
