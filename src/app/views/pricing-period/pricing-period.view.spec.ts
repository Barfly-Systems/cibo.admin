import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PricingPeriodView } from './pricing-period.view';

describe('PricingPeriodView', () => {
  let component: PricingPeriodView;
  let fixture: ComponentFixture<PricingPeriodView>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PricingPeriodView ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PricingPeriodView);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
