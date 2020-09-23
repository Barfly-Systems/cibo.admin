import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PricingPeriodListComponent } from './pricing-period-list.component';

describe('PricingPeriodListComponent', () => {
  let component: PricingPeriodListComponent;
  let fixture: ComponentFixture<PricingPeriodListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PricingPeriodListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PricingPeriodListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
