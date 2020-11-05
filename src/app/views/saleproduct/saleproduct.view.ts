import { Component, OnInit } from '@angular/core';
import { IProductListItem } from 'src/app/models/product-list.model';
import { ApiService } from './../../services/api.service';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { AppState } from 'src/app/services/state.service';
import { HelperService } from 'src/app/services/helper.service';
import { IProductSizeListItem } from 'src/app/models/product-size-list.model';
import { IGetProductTypeList_Result } from 'src/app/models/get-product-type-list.model';
import { IProductCategory } from 'src/app/models/product-category.model';

@Component({
  selector: 'app-saleproduct',
  templateUrl: './saleproduct.view.html',
  styleUrls: ['./saleproduct.view.scss']
})
export class SaleproductView implements OnInit {

  productList: IProductListItem[];
  productTypeList: IGetProductTypeList_Result[] = [];
  productCategoryList: IProductCategory[] = [];

  listEditMode: boolean = false;
  listExpandedElement: IProductListItem;

  constructor(private api: ApiService, private store: AppState) { }

  ngOnInit(): void {
    this.getProductList();
  }

  getProductList = () => {
    this.api.getProducListDetailed(this.store.session.organisationId).subscribe((list: IProductListItem[]) => {
      console.log(list);
      list.map((spl: IProductListItem) => {
        spl.isLocked = true;
        spl.isNew = false;
        spl.allergens = [];
        for(const prop in spl){
          if(prop.includes('contains')){
            spl.allergens.push({name: prop, value: spl[prop]});
          }
        }
        spl.allergens = HelperService.chunk(spl.allergens, 10);
        console.log(spl.id);
        this.api.getProductSizesForProduct(this.store.organisationId, spl.id).subscribe((data: IProductSizeListItem[]) => {
          spl.sizes = data;
        })
      })
      this.productList = list;
      this.getProductTypeList();
      this.getProductCategoryList();
    });
  }

  getProductTypeList = () => {
    this.api.getProductTypeList(this.store.organisationId, false, false).subscribe((productTypesResult: IGetProductTypeList_Result[]) => {
      this.productTypeList = productTypesResult;
    })
  }

  getProductCategoryList = () => {
    this.api.getProductCategories(this.store.organisationId).subscribe(data => {
      this.productCategoryList = data;
      console.log(this.productCategoryList);
    })
  }

  updateProductProductSize = (productChange: {productId: number, productSizeId: number}) => {
    console.log(productChange);
    this.api.updateProductProductSize(this.store.organisationId, productChange.productId, productChange.productSizeId).subscribe(data => {
      console.log(data);
    })
  }

  updateProductDescription = (change: {productId: number, description: string}) => {
    this.api.updateProductDescription(change.productId, change.description).subscribe(data => {
      console.log(data);
    },
    err => {
      console.log(err);
    })
  }

  addNewRow = () => {
    let newRow: IProductListItem = {
      productType_ID: null,
      productTypeName: null,
      name: null,
      isActive: false,
      productCategory_ID: null,
      categoryName: null,
      description: null,
      containsCelery: null,
      containsGluten: null,
      containsCrustaceans: null,
      containsEggs: null,
      containsFish: null,
      containsLupin: null,
      containsMilk: null,
      containsMolluscs: null,
      containsMustard: null,
      containsPeanuts: null,
      containsSesame: null,
      containsSoybeans: null,
      containsSulphurDioxide: null,
      containsSulphites: null,
      containsAlcohol: null,
      geographicOrigin: null,
      abv: null,
      isLocked: false,
      isNew: true
    };
    newRow.allergens = [];
    for(const prop in newRow){
      if(prop.includes('contains')){
        newRow.allergens.push({name: prop, value: newRow[prop]});
      }
    }
    newRow.allergens = HelperService.chunk(newRow.allergens, 10);
    this.productList.push(newRow);
    this.productList = [...this.productList];
    this.listEditMode = true;
    // this.listExpandedElement = newRow;
    console.log(newRow);
  }

}
