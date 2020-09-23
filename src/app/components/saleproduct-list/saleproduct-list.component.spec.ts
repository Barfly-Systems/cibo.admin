import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SaleproductListComponent } from './saleproduct-list.component';

describe('SaleproductListComponent', () => {
  let component: SaleproductListComponent;
  let fixture: ComponentFixture<SaleproductListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SaleproductListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SaleproductListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
