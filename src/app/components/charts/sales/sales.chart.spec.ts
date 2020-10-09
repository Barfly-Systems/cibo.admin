import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SalesChart } from './sales.chart';

describe('SalesChart', () => {
  let component: SalesChart;
  let fixture: ComponentFixture<SalesChart>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SalesChart ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SalesChart);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
