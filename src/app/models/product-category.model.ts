export interface IProductCategory {
    organisation_ID: number;
    id?: number;
    categoryName: string;
    imagePath: string;
    backgroundImage_ID: number;
    isActive: boolean;
    isNew?: boolean;
}