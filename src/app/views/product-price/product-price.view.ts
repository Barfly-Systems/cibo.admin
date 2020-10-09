import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from './../../services/api.service';
import { AppState } from './../../services/state.service';
import { IProductPriceListRaw } from './../../models/get-product-price-list-result-raw.model';
import { IProductPriceListItem } from './../../models/product-price-list.model';
import { switchMap } from 'rxjs/operators';
import { HelperService } from './../../services/helper.service';
import { IProductListItem } from 'src/app/models/product-list.model';
import { IPricing } from 'src/app/models/pricing.model';


@Component({
  selector: 'app-product-price',
  templateUrl: './product-price.view.html',
  styleUrls: ['./product-price.view.scss']
})
export class ProductPriceView implements OnInit {

  productPriceList: IProductPriceListItem[] = [];

  constructor(
    private activatedRoute: ActivatedRoute,
    private api: ApiService
  ) 
  {
    this.activatedRoute.data.subscribe(data => {
      this.productPriceList = JSON.parse(data.priceList.jsonResult);
      console.log(this.productPriceList);
    })
   }

  ngOnInit(): void {
    }
  updatePrice = (change: {pricingId: number, price: number}) => {
    this.api.upsertProductPrice(change.pricingId, change.price).subscribe((data) => {
      console.log(data);
    })
  }

}
