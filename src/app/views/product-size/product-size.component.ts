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
    this.api.getProductSizeList(this.store.session.organisationId).subscribe((productSizeList: IProductSizeListItem[]) => {
      this.productSizeList = productSizeList;
      console.log(this.productSizeList);
    });
  }

}
