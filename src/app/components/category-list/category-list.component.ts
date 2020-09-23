import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { IProductCategory } from 'src/app/models/product-category.model';

@Component({
  selector: 'app-category-list',
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.scss']
})
export class CategoryListComponent implements OnInit {

  @Input() productCategoryList: IProductCategory[];
  @Output() selectedCategoryEvent: EventEmitter<IProductCategory> = new EventEmitter<IProductCategory>();

  displayedColumns: string[] = ['categoryName', 'isActive'];
  constructor() { }

  ngOnInit(): void {
  }

  selectCategory = (productCategory: IProductCategory) => {
    this.selectedCategoryEvent.emit(productCategory);
    console.log(productCategory);
  }

}
