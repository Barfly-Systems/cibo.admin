import { Component, OnInit } from '@angular/core';
import { IProductListItem } from 'src/app/models/product-list.model';
import { ApiService } from './../../services/api.service';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { AppState } from 'src/app/services/state.service';
import { HelperService } from 'src/app/services/helper.service';
import { IProductSizeListItem } from 'src/app/models/product-size-list.model';

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
      list.map((spl: IProductListItem) => {
        spl.allergens = [];
        for(const prop in spl){
          if(prop.includes('contains')){
            spl.allergens.push({name: prop, value: spl[prop]});
          }
        }
        spl.allergens = HelperService.chunk(spl.allergens, 10);
        console.log(spl.id);
        this.api.getProductSizesForProductType(this.store.organisationId, spl.id).subscribe((data: IProductSizeListItem[]) => {
          spl.sizes = data;
        })
      })
      this.productList = list;
      console.log(this.productList);
    });
  }

  updateProductProductSize = (productChange: {productId: number, productSizeId: number}) => {
    console.log(productChange);
    this.api.updateProductProductSize(this.store.organisationId, productChange.productId, productChange.productSizeId).subscribe(data => {
      console.log(data);
    })
  }

}
