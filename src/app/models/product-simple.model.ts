export interface IProductSimple{
    id?: number;
    organisationId: number;
    productType_Id: number;
    name: string;
    size?: string;
    isActive: boolean;
    isArchived: boolean;
    productCategory_Id: number;
    geographicOrigin?: string;
    abv?: number;
}