import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SaleproductView } from './saleproduct.view';

describe('SaleproductView', () => {
  let component: SaleproductView;
  let fixture: ComponentFixture<SaleproductView>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SaleproductView ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SaleproductView);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
