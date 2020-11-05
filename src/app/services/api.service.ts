import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from './../../environments/environment';
import { ICredential } from '../models/credential.model';
import { IProductCategory } from '../models/product-category.model';
import { IProductListItem } from '../models/product-list.model';
import { IProductSizeListItem } from '../models/product-size-list.model';
import { IProductPriceListRaw } from '../models/get-product-price-list-result-raw.model';
import { IProductPriceListItem } from '../models/product-price-list.model';
import { ITradingHoursListItem } from '../models/trading-hours-list.model';
import { PricingPeriod } from '../models/pricing-period.model';
import { IProductSimple } from '../models/product-simple.model';
import { IInsertProduct_Request } from '../models/insert-product-request.model';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  _apiUrl = environment.apiUrl;

  constructor(private http: HttpClient) { }

  tryLogin = (credential: ICredential) => this.http.get(`${this._apiUrl}/auth/checkValidity/${credential.organisationId}`);

  //PRODUCT CATEGORIES
  getProductCategories = (organisationId: number) => this.http.get<IProductCategory[]>(`${this._apiUrl}/product/getCategories/${organisationId}/true/false`);
  getProductCategoryImages = () => this.http.get(`${this._apiUrl}/product/getProductCategoryImages`);
  addNewCategory =  (newCategory: IProductCategory) => this.http.post(`${this._apiUrl}/product/addProductCategory`, newCategory);
  upsertProductCategoryImage = (organisationId: number, productCategoryId: number, imageId: number) => this.http.get(`${this._apiUrl}/product/upsertProductCategoryImage/${organisationId}/${productCategoryId}/${imageId}`); 
  //PRODUCTS
  getProducListDetailed = (organisationId: number) => this.http.get<IProductListItem[]>(`${this._apiUrl}/product/getProductListDetailed/${organisationId}`);
  getProductSizeList = (organisationId: number) => this.http.get<IProductSizeListItem[]>(`${this._apiUrl}/product/getProductSizeList/${organisationId}`);
  insertProductSize = (productSize: IProductSizeListItem) => this.http.post(`${this._apiUrl}/product/insertProductSize`, productSize);
  getProductPriceList = (organisationId: number, includeInactive: boolean, includeArchived: boolean) => this.http.get<IProductPriceListRaw>(`${this._apiUrl}/product/getProductPricingList/${organisationId}/${includeInactive}/${includeArchived}`);
  getProductSizesForProduct = (organisationId: number, productId: number) => {console.log(productId); return this.http.get(`${this._apiUrl}/product/getProductSizesForProduct/${organisationId}/${productId}`);};
  getProductSizesForProductType = (organisationId: number, productTypeId: number) => {return this.http.get(`${this._apiUrl}/product/getProductSizesForProductType/${organisationId}/${productTypeId}`);};
  updateProductProductSize = (organisationId: number, productId: number, productSizeId: number) => this.http.get(`${this._apiUrl}/product/updateProductProductSize/${organisationId}/${productId}/${productSizeId}`);
  updateProductDescription = (productId: number, description: string) => this.http.get(`${this._apiUrl}/product/updateProductDescription/${productId}/${description}`);
  upsertProductSizeType = (organisationId: number, productTypeId: number, productSizeId: number) => 
  {
    console.log(productTypeId);
    console.log(productSizeId);
    return this.http.get(`${this._apiUrl}/product/upsertProductSizeType/${organisationId}/${productTypeId}/${productSizeId}`);  
  }
  getProductPriceListSync = async (organisationId: number, includeInactive: boolean, includeArchived: boolean) => {
    return this.http.get(`${this._apiUrl}/product/buildProductPricingList/${organisationId}`)
    .toPromise().then(resp => {
      console.log(resp);
      return resp;
    }) 
  } 
  checkPricingForProductExists = (organisationId: number, productId: number) => {
    return this.http.get(`${this._apiUrl}/product/pricingForProductExists/${organisationId}/${productId}`);
  }
  upsertProductProductType = (organisationId: number, productId: number, productTypeId: number) => {
    return this.http.get(`${this._apiUrl}/product/upsertProductProductType/${organisationId}/${productId}/${productTypeId}`);
  }
  insertProductSimple = (product: IProductSimple) => {
    console.log(product);
    return this.http.post(`${this._apiUrl}/product/insertProductSimple`, product);
  }
  insertProduct = (product: IInsertProduct_Request) => this.http.post(`${this._apiUrl}/product/insertProduct`, product);
  //PRICING PERIODS
  getOrganiationPricingPeriods = (organisationId: number, includeInactive: boolean, includeArchived: boolean) => this.http.get(`${this._apiUrl}/pricingPeriod/getOrganisationPricingPeriods/${organisationId}/${includeInactive}/${includeArchived}`);
  addBlankPricingPeriod = (organisationId: number) => this.http.get<number>(`${this._apiUrl}/pricingPeriod/addBlankPricingPeriod/${organisationId}`);
  addPricingPeriod = (pricingPeriod: PricingPeriod) => this.http.post<number>(`${this._apiUrl}/pricingPeriod/addPricingPeriod`, pricingPeriod);
  //PRODUCT PRICING
  upsertProductPrice = (pricingId: number, price: number) => this.http.get(`${this._apiUrl}/product/upsertProductPrice/${pricingId}/${price}`);
  checkPricingForProductSizeExists = (organisationId: number, productTypeId: number, productSizeId: number) => {
    return this.http.get(`${this._apiUrl}/product/pricingForProductSizeExists/${organisationId}/${productSizeId}/${productTypeId}`);
  }
  //PRODUCT TYPES
  getProductTypeList = (organisationId: number, includeInactive: boolean, includeArchived: boolean) => this.http.get(`${this._apiUrl}/product/getProductTypeList/${organisationId}/${includeInactive}/${includeArchived}`);
  addProductType = (organisationId: number, name: string) => this.http.get(`${this._apiUrl}/product/insertProductType/${organisationId}/${name}`);
  //ORGANISATION
  getOrganisationDetails = (organisationId: number ) => this.http.get(`${this._apiUrl}/organisation/getOrganisationDetails/${organisationId}`);
  //TABLES
  addTable = (organisationId: number, tableName: string) => this.http.get(`${this._apiUrl}/table/insertTable/${organisationId}/${tableName}`);
  getTablesList = (organisationId: number) => this.http.get(`${this._apiUrl}/table/getAllTables/${organisationId}`);
  //TRADING HOURS
  getOrganisationTradingHours = (organisationId: number, includeInactive: boolean, includeArchived: boolean) => this.http.get<ITradingHoursListItem[]>(`${this._apiUrl}/trading/getOrganisationTradingHours/${organisationId}/${includeInactive}/${includeArchived}`);
  upsertTradingHours = (organisationTradingHours: ITradingHoursListItem) => this.http.post(`${this._apiUrl}/trading/upsertOrganisationTradingHours`, organisationTradingHours); 
  getOrganisationTradingHoursTypes = () => this.http.get(`${this._apiUrl}/trading/getOrganisationTradingHoursTypes`);
  //TESTING
  buildProductPriceList = () => this.http.get(`${this._apiUrl}/product/buildProductPricingList`);


}
