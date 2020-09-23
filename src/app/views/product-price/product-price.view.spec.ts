import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductPriceView } from './product-price.view';

describe('ProductPriceView', () => {
  let component: ProductPriceView;
  let fixture: ComponentFixture<ProductPriceView>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductPriceView ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductPriceView);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
