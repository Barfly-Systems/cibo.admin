import { IPricingPeriod } from './pricing-period.model';

export interface ISize {
    Size_ID: number;
    SizeName: string;
    PricingPeriods: IPricingPeriod[];
}