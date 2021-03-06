export interface IProductSizeListItem {
    id?: number;
    organisation_ID: number;
    sizeName: string;
    sizeMl: number;
    isActive: boolean;
    isNew?: boolean;
    isLocked?: boolean;
    productTypeID: number;
}