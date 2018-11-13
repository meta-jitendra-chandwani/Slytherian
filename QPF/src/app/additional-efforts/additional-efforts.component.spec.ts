import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdditionalEffortsComponent } from './additional-efforts.component';

describe('AdditionalEffortsComponent', () => {
  let component: AdditionalEffortsComponent;
  let fixture: ComponentFixture<AdditionalEffortsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdditionalEffortsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdditionalEffortsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
