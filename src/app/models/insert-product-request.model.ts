export interface IInsertProduct_Request {
    organisation_ID: number;
    productType_ID: number;
    name: string;
    isActive: boolean;
    isArchived: boolean;
    productCategory_ID: number;
    language_ID: number;
}