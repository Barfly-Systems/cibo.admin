import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductCategoryView } from './product-category.view';

describe('ProductCategoryView', () => {
  let component: ProductCategoryView;
  let fixture: ComponentFixture<ProductCategoryView>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductCategoryView ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductCategoryView);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
