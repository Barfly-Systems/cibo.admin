import { Component, OnInit } from '@angular/core';
import { IProductSizeListItem } from 'src/app/models/product-size-list.model';
import { ApiService } from 'src/app/services/api.service';
import { AppState } from 'src/app/services/state.service';
import { Subscriber } from 'rxjs';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';

@Component({
  selector: 'app-product-size',
  templateUrl: './product-size.component.html',
  styleUrls: ['./product-size.component.scss']
})
export class ProductSizeComponent implements OnInit {

  productSizeList: IProductSizeListItem[] = [];

  constructor(private api: ApiService, private store: AppState) { }

  ngOnInit(): void {
    this.getProductList();
  }

  getProductList = () => {
    this.api.getProductSizeList(this.store.session.organisationId).subscribe((productSizeList: IProductSizeListItem[]) => {
      this.productSizeList = productSizeList;
    });
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
}
