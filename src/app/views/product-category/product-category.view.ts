import { Component, OnInit } from '@angular/core';
import { ApiService } from './../../services/api.service';
import { AppState } from 'src/app/services/state.service';
import { IProductCategory } from 'src/app/models/product-category.model';

@Component({
  selector: 'app-product-category',
  templateUrl: './product-category.view.html',
  styleUrls: ['./product-category.view.scss']
})
export class ProductCategoryView implements OnInit {

  productCategoryList: IProductCategory[] = [];
  selectedCategory: IProductCategory;
  
  constructor(private store: AppState, private api: ApiService) { }

  ngOnInit(): void {
    this.api.getProductCategories(this.store.session.organisationId).subscribe((data: IProductCategory[]) => {
      this.productCategoryList = data;
    })
  }

  setSelectedCategory = (selectedCategory: IProductCategory) => {
    this.selectedCategory = selectedCategory;
  }
}
