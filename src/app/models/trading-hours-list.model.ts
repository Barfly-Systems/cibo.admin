export interface ITradingHoursListItem {
    organisationTradingHoursID: number;
    organsationTradingHoursTypeID: number;
    organisationTradingHoursTypeLabel: string;
    tradingHoursStart: any;
    tradingHoursEnd: any;
    specificDay?: number;
    pricingPeriod_ID: number;
}