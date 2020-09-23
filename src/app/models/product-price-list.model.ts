import {  ISize } from './product-size.model';

export interface IProductPriceListItem {
    product_ID: number;
    name: string;
    size_ID?: number;
    sizeName: string;
    pricingPeriod_ID?: number;
    periodName: string;
    standardPriceGross?: number;
    standardPriceNet?: number;
}