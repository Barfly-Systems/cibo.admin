import { Component, OnInit, Input } from '@angular/core';
import { IProductListItem } from 'src/app/models/product-list.model';

@Component({
  selector: 'app-saleproduct-list',
  templateUrl: './saleproduct-list.component.html',
  styleUrls: ['./saleproduct-list.component.scss']
})
export class SaleproductListComponent implements OnInit {

  @Input() saleproductList: IProductListItem[];

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

}
