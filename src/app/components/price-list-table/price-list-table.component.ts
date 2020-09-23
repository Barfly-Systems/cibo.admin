import { Component, OnInit, Input } from '@angular/core';
import { IProductPriceListItem } from 'src/app/models/product-price-list.model';
import { IPricingPeriod } from 'src/app/models/pricing-period.model';
import { HelperService } from './../../services/helper.service';

@Component({
  selector: 'app-price-list-table',
  templateUrl: './price-list-table.component.html',
  styleUrls: ['./price-list-table.component.scss']
})
export class PriceListTableComponent implements OnInit {

  @Input() PriceListData: any[][] = [];

  displayedColumns: any[] = [];
  columnWidth: string;
  constructor(private helpers: HelperService) { }

  ngOnInit(): void {
    for(let prop in this.PriceListData[0]){
      this.displayedColumns.push(prop);
    }
  };
    
  tryParseNumber = (thing) => {
    let result = !isNaN(parseFloat(thing));
    return result;
  }
  }


