import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from './../../environments/environment';
import { ICredential } from '../models/credential.model';
import { IProductCategory } from '../models/product-category.model';
import { IProductListItem } from '../models/product-list.model';
import { IProductSizeListItem } from '../models/product-size-list.model';
import { IProductPriceListRaw } from '../models/get-product-price-list-result-raw.model';
import { IProductPriceListItem } from '../models/product-price-list.model';
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
  getProductPriceList = (organisationId: number, includeInactive: boolean, includeArchived: boolean) => this.http.get<IProductPriceListRaw>(`${this._apiUrl}/product/getProductPricingList/${organisationId}/${includeInactive}/${includeArchived}`);
  getProductPriceListSync = async (organisationId: number, includeInactive: boolean, includeArchived: boolean) => {
    return this.http.get(`${this._apiUrl}/product/getProductPricingList/${organisationId}/${includeInactive}/${includeArchived}`)
    .toPromise().then(resp => {
      return resp;
    }) 
  } 
  getOrganiationPricingPeriods = (organisationId: number, includeInactive: boolean, includeArchived: boolean) => this.http.get(`${this._apiUrl}/pricingPeriod/getOrganisationPricingPeriods/${organisationId}/${includeInactive}/${includeArchived}`);
}
