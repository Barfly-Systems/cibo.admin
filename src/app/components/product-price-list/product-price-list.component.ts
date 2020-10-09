import { Component, OnInit, Input, OnChanges, SimpleChanges, Output, EventEmitter } from '@angular/core';
import { IProductPriceListItem } from './../../models/product-price-list.model';

@Component({
  selector: 'app-product-price-list',
  templateUrl: './product-price-list.component.html',
  styleUrls: ['./product-price-list.component.scss']
})
export class ProductPriceListComponent implements OnInit, OnChanges {

  @Input() productPriceList:IProductPriceListItem[] = [];
  @Output() priceChangeEvent: EventEmitter<{pricingId: number, price: number}> = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }

  ngOnChanges(changes: SimpleChanges){
  }

  emitPriceChange = (change: {pricingId: number, price: number}) => {
    this.priceChangeEvent.emit(change);
  }
}
