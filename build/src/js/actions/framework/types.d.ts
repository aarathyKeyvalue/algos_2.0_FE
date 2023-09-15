import { entityTypes } from 'app/components/entity-card/types';
export type IControlEntityEditPromptData = {
    entityType: entityTypes;
    categoryId?: string;
    subCategoryId?: string;
    frameworkId: string;
    entityData: any;
    actionType: 'edit' | 'add';
};
export type IOwnerUser = {
    id: string;
    name?: string;
    title?: string;
};
export type IFrameworkEditPromptData = {
    id: string;
    name: string;
    compliancy: number;
    scope: string | null;
    nextReviewDate: string | null;
    owners: Array<IOwnerUser>;
};
