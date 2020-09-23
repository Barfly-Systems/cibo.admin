import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from './../../services/api.service';
import { AppState } from './../../services/state.service';
import { IProductPriceListRaw } from './../../models/get-product-price-list-result-raw.model';
import { IProductPriceListItem } from './../../models/product-price-list.model';
import { switchMap } from 'rxjs/operators';
import { HelperService } from './../../services/helper.service';

@Component({
  selector: 'app-product-price',
  templateUrl: './product-price.view.html',
  styleUrls: ['./product-price.view.scss']
})
export class ProductPriceView implements OnInit {

  productPriceList: string;

  constructor(
    private activatedRoute: ActivatedRoute
  ) 
  {
    this.activatedRoute.data.subscribe(data => {
      this.productPriceList = JSON.parse(data.priceList[0].jsonResult);
    })
   }

  ngOnInit(): void {}



}
