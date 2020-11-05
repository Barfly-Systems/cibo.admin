import { Component, OnInit, OnChanges, Input, Output, EventEmitter, SimpleChanges, ViewChild } from '@angular/core';
import { IProductListItem } from 'src/app/models/product-list.model';
import { IProductSizeListItem } from 'src/app/models/product-size-list.model';
import { StateKey } from '@angular/platform-browser';
import { AppState } from 'src/app/services/state.service';
import { IGetProductTypeList_Result } from 'src/app/models/get-product-type-list.model';
import { Subject, Observable } from 'rxjs';
import { pairwise } from 'rxjs/operators';
import { NumberValueAccessor } from '@angular/forms';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-product-size-list',
  templateUrl: './product-size-list.component.html',
  styleUrls: ['./product-size-list.component.scss']
})
export class ProductSizeListComponent implements OnInit, OnChanges {

  @Input() productSizeList: IProductSizeListItem[];
  @Input() productTypeList: IGetProductTypeList_Result[];
  @Output() addProductSizeEvent: EventEmitter<IProductSizeListItem> = new EventEmitter();
  @Output() saveNewProductSizeEvent: EventEmitter<IProductSizeListItem> = new EventEmitter();
  @Output() deleteRowEvent: EventEmitter<number> = new EventEmitter();
  @Output() updateProductSizeTypeEvent: EventEmitter<{productSizeId: number, productTypeId: number, oldProductTypeId: number}> = new EventEmitter();
  @Output() getProductSizeListEvent: EventEmitter<boolean> = new EventEmitter();
  displayedColumns: string[] = ['id', 'sizeName', 'sizeMl', 'type', 'isActive', 'actions'];

  workingProductTypePreviousValue: number;
  inFocusSelect: any;

  constructor(private store: AppState, private api: ApiService) { }

  ngOnInit(): void {
  }

  ngOnChanges(change:SimpleChanges){
  }

  addRow = () => {
    let newRowItem: IProductSizeListItem = {
      productTypeID: 3,
      organisation_ID: this.store.organisationId,
      sizeName: null,
      isActive: true,
      sizeMl: null,
      isNew: true,
      isLocked: false
    }
    this.addProductSizeEvent.emit(newRowItem);
  }

  saveNewSize = (newSize: IProductSizeListItem) => {
    this.saveNewProductSizeEvent.emit(newSize);
  }

  removeRow = (index: number) => {
    this.deleteRowEvent.emit(index);
  }

  updateProductSizeType = (el, productTypeId, productSize) => {
    console.log(productTypeId);
    console.log(productSize.id);
    if(this.workingProductTypePreviousValue != productTypeId){
      // this.updateProductSizeTypeEvent.emit({productSizeId: productSizeId, productTypeId: productTypeId.value, oldProductTypeId: this.workingProductTypePreviousValue});
      this.api.upsertProductSizeType(this.store.organisationId, productSize.id, productTypeId).subscribe((data) => {
        console.log(data);
        this.getProductList();
      })
    }
  }

  getProductList = () => {
    this.getProductSizeListEvent.emit(true);
  }

  test = (e) => {
    if(this.inFocusSelect == null){
      this.workingProductTypePreviousValue = e.productTypeID;
      this.inFocusSelect = e;
    }
  }
  
  removeFocus = () => {
    console.log("blur");
    this.workingProductTypePreviousValue, this.inFocusSelect = null;
  }

  attemptToggle = (e: IProductSizeListItem) => {
    this.api.checkPricingForProductSizeExists(this.store.organisationId, e.productTypeID, e.id).subscribe((exists: boolean) => {
      if(exists){
        if(confirm("There are pricings for this size. Changing the type will delete them. Are you sure you want to continue?")){
          e.isLocked = !e.isLocked;          
        }
      }
      else{
        e.isLocked = !e.isLocked;
      }
    })
    console.log(e);

    // 
    // e.isLocked = !e.isLocked;
  }
}
