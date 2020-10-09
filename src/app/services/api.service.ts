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
  //PRODUCTS
  getProducListDetailed = (organisationId: number) => this.http.get<IProductListItem[]>(`${this._apiUrl}/product/getProductListDetailed/${organisationId}`);
  getProductSizeList = (organisationId: number) => this.http.get<IProductSizeListItem[]>(`${this._apiUrl}/product/getProductSizeList/${organisationId}`);
  insertProductSize = (productSize: IProductSizeListItem) => this.http.post(`${this._apiUrl}/product/insertProductSize`, productSize);
  getProductPriceList = (organisationId: number, includeInactive: boolean, includeArchived: boolean) => this.http.get<IProductPriceListRaw>(`${this._apiUrl}/product/getProductPricingList/${organisationId}/${includeInactive}/${includeArchived}`);
  getProductSizesForProductType = (organisationId: number, productId: number) => {console.log(productId); return this.http.get(`${this._apiUrl}/product/getProductSizesForProductType/${organisationId}/${productId}`);};
  updateProductProductSize = (organisationId: number, productId: number, productSizeId: number) => this.http.get(`${this._apiUrl}/product/updateProductProductSize/${organisationId}/${productId}/${productSizeId}`);
  getProductPriceListSync = async (organisationId: number, includeInactive: boolean, includeArchived: boolean) => {
    return this.http.get(`${this._apiUrl}/product/buildProductPricingList`)
    .toPromise().then(resp => {
      console.log(resp);
      return resp;
    }) 
  } 
  //PRICING PERIODS
  getOrganiationPricingPeriods = (organisationId: number, includeInactive: boolean, includeArchived: boolean) => this.http.get(`${this._apiUrl}/pricingPeriod/getOrganisationPricingPeriods/${organisationId}/${includeInactive}/${includeArchived}`);
  addBlankPricingPeriod = (organisationId: number) => this.http.get<number>(`${this._apiUrl}/pricingPeriod/addBlankPricingPeriod/${organisationId}`);
  addPricingPeriod = (pricingPeriod: PricingPeriod) => this.http.post<number>(`${this._apiUrl}/pricingPeriod/addPricingPeriod`, pricingPeriod);
  //PRODUCT PRICING
  upsertProductPrice = (pricingId: number, price: number) => this.http.get(`${this._apiUrl}/product/upsertProductPrice/${pricingId}/${price}`);
  //PRODUCT TYPES
  getProductTypeList = (organisationId: number, includeInactive: boolean, includeArchived: boolean) => this.http.get(`${this._apiUrl}/product/getProductTypeList/${organisationId}/${includeInactive}/${includeArchived}`);
  addProductType = (organisationId: number, name: string) => this.http.get(`${this._apiUrl}/product/insertProductType/${organisationId}/${name}`);
  //TRADING HOURS
  getOrganisationTradingHours = (organisationId: number, includeInactive: boolean, includeArchived: boolean) => this.http.get<ITradingHoursListItem[]>(`${this._apiUrl}/trading/getOrganisationTradingHours/${organisationId}/${includeInactive}/${includeArchived}`);
  upsertTradingHours = (organisationId: number, tradingHoursId: number, pricingPeriodId: number) => this.http.get(`${this._apiUrl}/trading/upsertOrganisationTradingHours/${organisationId}/${tradingHoursId}/${pricingPeriodId}`); 
  //TESTING
  buildProductPriceList = () => this.http.get(`${this._apiUrl}/product/buildProductPricingList`);


}
