import { entityTypes } from '../entity-card/types';
export type IControlEntitySettingsProps = {
    entityType?: entityTypes;
    entityDetails?: any;
    actionType?: 'edit' | 'add';
    categoryId?: string;
    subCategoryId?: string;
    frameworkId: string;
    onClose: () => void;
    isPopup?: boolean;
};
