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
  @Output() addNewCategoryRowEvent: EventEmitter<boolean> = new EventEmitter();
  @Output() addNewCategoryEvent: EventEmitter<IProductCategory> = new EventEmitter();
  @Output() loadCategoriesEvent: EventEmitter<boolean> = new EventEmitter();

  displayedColumns: string[] = ['categoryName', 'isActive', 'actions'];
  constructor() { }

  ngOnInit(): void {
  }

  selectCategory = (productCategory: IProductCategory) => {
    this.selectedCategoryEvent.emit(productCategory);
    console.log(productCategory);
  }

  addNewCategoryRow = () => {
    this.addNewCategoryRowEvent.emit(true);
  }

  addNewCategory = (newCategory: IProductCategory) => {
    this.addNewCategoryEvent.emit(newCategory);
    this.loadCategoriesEvent.emit(true);
  }

}
