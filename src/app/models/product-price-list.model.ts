import { IPricing } from './pricing.model';

export interface IProductPriceListItem {
    ProductId: number;
    ProductSizeId: number;
    ProductName: string;
    ProductSizeName: string;
    Pricing: IPricing[];
}