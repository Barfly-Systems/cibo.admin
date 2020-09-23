import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';
import { IProductPriceListItem } from './../../models/product-price-list.model';

@Component({
  selector: 'app-product-price-list',
  templateUrl: './product-price-list.component.html',
  styleUrls: ['./product-price-list.component.scss']
})
export class ProductPriceListComponent implements OnInit, OnChanges {

  @Input() productPriceList:any[] = [];

  constructor() { }

  ngOnInit(): void {
    console.log(this.productPriceList);
  }

  ngOnChanges(changes: SimpleChanges){
    console.log(changes);
  }

}
