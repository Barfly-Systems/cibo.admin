import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import {animate, state, style, transition, trigger} from '@angular/animations';
import { IProductListItem } from 'src/app/models/product-list.model';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { SplitInterpolation } from '@angular/compiler';
import { IGetProductTypeList_Result } from 'src/app/models/get-product-type-list.model';
import { ApiService } from 'src/app/services/api.service';
import { AppState } from 'src/app/services/state.service';
import { IProductPriceListItem } from 'src/app/models/product-price-list.model';
import { IProductCategory } from 'src/app/models/product-category.model';
import { IProductSimple } from './../../models/product-simple.model';
import { TradingHoursListComponent } from '../trading-hours-list/trading-hours-list.component';
import { IInsertProduct_Request } from 'src/app/models/insert-product-request.model';

@Component({
  selector: 'app-saleproduct-list',
  templateUrl: './saleproduct-list.component.html',
  styleUrls: ['./saleproduct-list.component.scss'],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({height: '0px', minHeight: '0'})),
      state('expanded', style({height: '*'})),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ],
})
export class SaleproductListComponent implements OnInit {

  @Input() saleproductList: IProductListItem[] = [];
  @Input() productTypeList: IGetProductTypeList_Result[] = [];
  @Input() productCategoryList: IProductCategory[] = [];
  @Input() editMode: boolean = false;
  @Output() getProductListEvent: EventEmitter<boolean> = new EventEmitter();
  @Output() getProductSizesForProductTypeEvent: EventEmitter<number> = new EventEmitter();
  @Output() updateProductProductSizeEvent: EventEmitter<{productId: number, productSizeId: number}> = new EventEmitter();
  @Output() updateProductDescriptionEvent: EventEmitter<{productId: number, description: string}> = new EventEmitter();
  @Output() addNewRowEvent: EventEmitter<boolean> = new EventEmitter();
  @Input() expandedElement: IProductListItem | null;
  
  displayedColumns: string[] = [
    'id', 
    'productName',
    'productTypeName',
    'categoryName',
    'geographicOrigin',
    'abv',
    'isActive',
    'actions'
  ];

  constructor(private api: ApiService, private store: AppState) { }

  ngOnInit(): void {
  }

  selectCategory = (r) => {

  }

  expandElement = (row) => {
    this.expandedElement = this.expandedElement === row ? null : row;
  }

  updateProductProductSize = (size, product) => {
    console.log(size);
    this.updateProductProductSizeEvent.emit({productId: product.id, productSizeId: size.size_ID});
  }

  updateProductProductType = (productTypeId, product) => {
    console.log(product);
    if(true){
      this.api.upsertProductProductType(this.store.organisationId, product.id, productTypeId).subscribe((data) => {
        this.getProductListEvent.emit(true);
      })
    }
  }

  attemptToggle = (product: IProductListItem) => {
    this.api.checkPricingForProductExists(this.store.organisationId, product.id).subscribe((exists: boolean) => {
      if(exists){
        if(confirm("There are pricings for this product. Changing the type will delete them. Are you sure you want to continue?")){
          product.isLocked = !product.isLocked;          
        }
      }
      else{
        product.isLocked = !product.isLocked;
      }
    })
  }

  addNewProductRow = () => {
    this.addNewRowEvent.emit(true);
  }

  loadSizes = (e) => {
    console.log(e.productType_ID);
  }

  getProductSizes = (product) => {
    console.log(product);
    this.api.getProductSizesForProductType(this.store.organisationId, product.productType_ID).subscribe((data: any[]) => {
      product.sizes = data;
      console.log(data);
    })
  }
  
  test = (e) => {
    console.log(e);
  }

  insertProduct = (product: IProductListItem) => {
    let productIn: IInsertProduct_Request = {
      organisation_ID: this.store.organisationId,
      productType_ID: product.productType_ID,
      name: product.name,
      isActive: true,
      isArchived: false,
      productCategory_ID: product.productCategory_ID,
      language_ID: 1000000
    };
    // let simpleProduct: IProductSimple = {
    //    organisationId: this.store.organisationId,
    //    productType_Id: product.productType_ID,
    //    isActive: true,
    //    name: product.name,
    //    isArchived: false,
    //    productCategory_Id: product.productCategory_ID,
    //    size: '',
    //    geographicOrigin: product.geographicOrigin,
    //    abv: product.abv
    // };
    console.log(productIn);
    // this.api.insertProductSimple(simpleProduct).subscribe(data => {
    //   this.getProductListEvent.emit(true);
    //   this.expandedElement  = this.saleproductList.find(spl => spl.id == data);
    //   this.editMode = false;
    // })
    this.api.insertProduct(productIn).subscribe(data => {
      console.log(data);
      this.getProductListEvent.emit(true);
    })
  }

  updateDescription = (item: IProductListItem) => {
    this.updateProductDescriptionEvent.emit({productId: item.id, description: item.description});
  }
}

