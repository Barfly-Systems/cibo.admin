import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { CurrencyPipe } from '@angular/common';
import { HelperService } from './../../services/helper.service';
import { IProductPriceListItem } from 'src/app/models/product-price-list.model';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { IPricing } from 'src/app/models/pricing.model';

@Component({
  selector: 'app-price-list-table',
  templateUrl: './price-list-table.component.html',
  styleUrls: ['./price-list-table.component.scss']
})
export class PriceListTableComponent implements OnInit {

  @Input() PriceListData: any[] = [];
  @Output() PriceChangeEvent: EventEmitter<{pricingId: number, price: number}> = new EventEmitter();
  hasProp = HelperService.hasProperty;

  displayedColumns: any[] = [];
  columnWidth: string;
  constructor(private helpers: HelperService) { }

  ngOnInit(): void {
    for(let prop in this.PriceListData[0]){
      if(!prop.toLowerCase().includes('id')){
        if(prop !== 'Pricing'){
          this.displayedColumns.push(prop);
        }
        else{
          for(let innerProp in this.PriceListData[0].Pricing){
            this.displayedColumns.push(this.PriceListData[0].Pricing[innerProp].PeriodName);
          }
        }
      }
    }


    let resultArray = [];

    

    this.PriceListData.forEach((ppli: IProductPriceListItem) => {
      let result = {
        ProductId: ppli.ProductId,
        ProductName: ppli.ProductName,
        ProductSizeId: ppli.ProductSizeId,
        ProductSizeName: ppli.ProductSizeName
      };
      ppli.Pricing.forEach((p: IPricing) => {
        console.log(p);
        Object.defineProperty(result, p.PeriodName, {
          value: p
        })
      })
      resultArray.push(result);
    })

    this.PriceListData = resultArray;
    console.log(this.PriceListData);
  }
    
  tryParseNumber = (thing) => {
    let result = !isNaN(parseFloat(thing));
    return result;
  }

  updatePrice = (el, price) => {
    console.log(el);
    console.log(price);
    if(this.tryParseNumber(price) || price == null || price == 0){
      this.PriceChangeEvent.emit({pricingId: el.PricingId, price: price});
    }
  }

  showModel = (model) => {
  }

  transformAmount = (thing) => {
    
    // console.log(thing);
  } 

  test = (thing) => {
    // console.log("test:")
    // console.log(thing);
  }
}


