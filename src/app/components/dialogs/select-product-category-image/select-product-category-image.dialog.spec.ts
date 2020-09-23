import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectProductCategoryImageDialog } from './select-product-category-image.dialog';

describe('SelectProductCategoryImageDialog', () => {
  let component: SelectProductCategoryImageDialog;
  let fixture: ComponentFixture<SelectProductCategoryImageDialog>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SelectProductCategoryImageDialog ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectProductCategoryImageDialog);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
