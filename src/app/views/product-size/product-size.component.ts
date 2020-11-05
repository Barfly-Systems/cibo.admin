import { Component, OnInit, ɵConsole } from '@angular/core';
import { IProductSizeListItem } from 'src/app/models/product-size-list.model';
import { ApiService } from 'src/app/services/api.service';
import { AppState } from 'src/app/services/state.service';
import { Subscriber } from 'rxjs';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { IGetProductTypeList_Result } from 'src/app/models/get-product-type-list.model';

@Component({
  selector: 'app-product-size',
  templateUrl: './product-size.component.html',
  styleUrls: ['./product-size.component.scss']
})
export class ProductSizeComponent implements OnInit {

  productSizeList: IProductSizeListItem[] = [];
  productTypeList: IGetProductTypeList_Result[] = [];

  constructor(private api: ApiService, private store: AppState) { }

  ngOnInit(): void {
    this.getProductList();
    this.getProductTypeList();
  }

  getProductList = () => {
    this.api.getProductSizeList(this.store.session.organisationId).subscribe((productSizeList: IProductSizeListItem[]) => {
      this.productSizeList = productSizeList;
      this.productSizeList.map(psli => {
        psli.isLocked = true;
      });
    });
  }

  getProductTypeList = () => {
    this.api.getProductTypeList(this.store.organisationId, false, false).subscribe((productTypesResult: IGetProductTypeList_Result[]) => {
      this.productTypeList = productTypesResult;
    })
  }

  addBlankProductSize = (blankProductSize: IProductSizeListItem) => {
    this.productSizeList = [...this.productSizeList, blankProductSize];
  }

  saveNewSize = (newSize: IProductSizeListItem) => {
    this.api.insertProductSize(newSize).subscribe(data => {
      this.getProductList();
    }, (err) => {
        console.error(err);
    })
  }

  removeRow = (index: number) => {
    this.productSizeList.splice(index, 1);
    this.productSizeList = [...this.productSizeList];
  }

  upsertPST = (change: {productSizeId: any, productTypeId: number, oldProductTypeId: number}) => {
    console.log(change);
    
  }
}
