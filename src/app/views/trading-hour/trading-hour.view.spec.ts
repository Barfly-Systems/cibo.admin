import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TradingHourView } from './trading-hour.view';

describe('TradingHourView', () => {
  let component: TradingHourView;
  let fixture: ComponentFixture<TradingHourView>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TradingHourView ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TradingHourView);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
