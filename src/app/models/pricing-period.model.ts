export interface PricingPeriod {
    id?: number;
    organisationId: number;
    periodNumber: number;
    periodStart?: string;
    periodEnd?: string;
    isActive: boolean;
    isArchived: boolean;
    createdOn: string;
    editedOn: string;
    periodName: string;
}