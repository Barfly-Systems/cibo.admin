import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TradingHoursListComponent } from './trading-hours-list.component';

describe('TradingHoursListComponent', () => {
  let component: TradingHoursListComponent;
  let fixture: ComponentFixture<TradingHoursListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TradingHoursListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TradingHoursListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
