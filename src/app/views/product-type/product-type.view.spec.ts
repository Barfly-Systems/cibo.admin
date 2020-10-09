import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductTypeView } from './product-type.view';

describe('ProductTypeView', () => {
  let component: ProductTypeView;
  let fixture: ComponentFixture<ProductTypeView>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductTypeView ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductTypeView);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
