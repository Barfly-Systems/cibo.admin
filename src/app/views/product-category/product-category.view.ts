import { Component, OnInit } from '@angular/core';
import { ApiService } from './../../services/api.service';
import { AppState } from 'src/app/services/state.service';
import { IProductCategory } from 'src/app/models/product-category.model';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';

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
    this.loadCategories(false, null);
  }

  setSelectedCategory = (selectedCategory: IProductCategory) => {
    this.selectedCategory = selectedCategory;
  }

  addNewCategoryRow = () => {
    let newCategory: IProductCategory = {
      organisation_ID: this.store.organisationId,
      categoryName: null,
      imagePath: null,
      backgroundImage_ID: null,
      isActive: true,
      isNew: true
    };
    // this.productCategoryList.push(newCategory);
    this.productCategoryList = [...this.productCategoryList, newCategory];
  }

  addNewCategory = (newCategory: IProductCategory) => {
    this.api.addNewCategory(newCategory).subscribe(data => {
      this.loadCategories(false, null);
    })
  }

  loadCategories = (isReload:boolean, id: number) => {
    this.api.getProductCategories(this.store.session.organisationId).subscribe((data: IProductCategory[]) => {
      console.log(data);
      this.productCategoryList = [...data];
      if(isReload){
        this.selectedCategory = this.productCategoryList.find(pcl => pcl.id == id);
      }
    })
  }

  reloadCategoryCard = (id) => {
    console.log(`ID: ${id}`);
    this.loadCategories(true, id);
  }
}
