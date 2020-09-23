export interface IProductListItem {
    id: number;
    productType_ID: number;
    productTypeName: string;
    productName: string;
    isActive: boolean;
    productCategory_ID?: number;
    categoryName: string;
    description: string;
    containsCelery: boolean;
    containsGluten: boolean;
    containsCrustaceans: boolean;
    containsEggs: boolean;
    containsFish: boolean;
    containsLupin: boolean;
    containsMilk: boolean;
    containsMolluscs: boolean;
    containsMustard: boolean;
    containsPeanuts: boolean;
    containsSesame: boolean;
    containsSoybeans: boolean;
    containsSulphurDioxide: boolean;
    containsSulphites: boolean;
    containsAlcohol: boolean;
    geographicOrigin: string;
    abv?: number;
}