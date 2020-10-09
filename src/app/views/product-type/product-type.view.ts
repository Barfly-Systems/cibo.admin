import { Component, OnInit } from '@angular/core';
import { IGetProductTypeList_Result } from './../../models/get-product-type-list.model';
import { ApiService } from 'src/app/services/api.service';
import { AppState } from 'src/app/services/state.service';

@Component({
  selector: 'app-product-type',
  templateUrl: './product-type.view.html',
  styleUrls: ['./product-type.view.scss']
})
export class ProductTypeView implements OnInit {

  productTypeList: IGetProductTypeList_Result[] = [];

  constructor(private api: ApiService, private store: AppState) { }

  ngOnInit(): void {
    this.getProductTypeList();
  }

  getProductTypeList = () => {
    this.api.getProductTypeList(this.store.organisationId, false, false).subscribe((data: IGetProductTypeList_Result[]) => {
      this.productTypeList = data;
      console.log(this.productTypeList);
    })
  }

  addProductTypeBlankRow = (e) => {
    let newRow: IGetProductTypeList_Result = {
      name: null,
      isNew: true
    };
    this.productTypeList = [...this.productTypeList, newRow];
  }

  removeRow = (index: number) => {
    this.productTypeList.splice(index, 1);
    this.productTypeList = [...this.productTypeList];
  }

  saveNewType = (newProductType: IGetProductTypeList_Result) => {
    this.api.addProductType(this.store.organisationId, newProductType.name).subscribe((data: any) => {
      console.log(data);
      this.getProductTypeList();
    })

  }

}
