import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import {animate, state, style, transition, trigger} from '@angular/animations';
import { IProductListItem } from 'src/app/models/product-list.model';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { SplitInterpolation } from '@angular/compiler';

@Component({
  selector: 'app-saleproduct-list',
  templateUrl: './saleproduct-list.component.html',
  styleUrls: ['./saleproduct-list.component.scss'],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({height: '0px', minHeight: '0'})),
      state('expanded', style({height: '*'})),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ],
})
export class SaleproductListComponent implements OnInit {

  @Input() saleproductList: IProductListItem[];
  @Output() updateProductProductSizeEvent: EventEmitter<{productId: number, productSizeId: number}> = new EventEmitter();
  expandedElement: IProductListItem | null;
  
  displayedColumns: string[] = [
    'id', 
    'productName',
    'productTypeName',
    'categoryName',
    'geographicOrigin',
    'abv',
    'isActive',
    'actions'
  ];

  constructor() { }

  ngOnInit(): void {
  }

  selectCategory = (r) => {

  }

  expandElement = (row) => {
    this.expandedElement = this.expandedElement === row ? null : row;
  }

  updateProductProductSize = (size, product) => {
    console.log(size);
    this.updateProductProductSizeEvent.emit({productId: product.id, productSizeId: size.size_ID});
  }
}
