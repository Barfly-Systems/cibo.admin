import { Component, OnInit } from '@angular/core';
import { IProductListItem } from 'src/app/models/product-list.model';
import { ApiService } from './../../services/api.service';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { AppState } from 'src/app/services/state.service';

@Component({
  selector: 'app-saleproduct',
  templateUrl: './saleproduct.view.html',
  styleUrls: ['./saleproduct.view.scss']
})
export class SaleproductView implements OnInit {

  productList: IProductListItem[];

  constructor(private api: ApiService, private store: AppState) { }

  ngOnInit(): void {
    this.api.getProducListDetailed(this.store.session.organisationId).subscribe((list: IProductListItem[]) => {
      this.productList = list;
    });
  }

}
