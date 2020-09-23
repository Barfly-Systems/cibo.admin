import { Component, OnInit, Input } from '@angular/core';
import { IProductListItem } from 'src/app/models/product-list.model';
import { IProductSizeListItem } from 'src/app/models/product-size-list.model';

@Component({
  selector: 'app-product-size-list',
  templateUrl: './product-size-list.component.html',
  styleUrls: ['./product-size-list.component.scss']
})
export class ProductSizeListComponent implements OnInit {

  @Input() productSizeList: IProductSizeListItem[];

  displayedColumns: string[] = ['id', 'sizeName', 'sizeMl', 'isActive'];

  constructor() { }

  ngOnInit(): void {
  }

}
