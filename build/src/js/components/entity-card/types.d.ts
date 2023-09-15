export type IEntity = {
    id: string;
    referenceCode: string;
    name: string;
    description?: string;
    subEntities?: Array<any>;
    subEntityCount?: number;
};
export declare enum entityTypes {
    'control-category' = "control-category",
    'control-sub-category' = "control-sub-category",
    control = "control",
    policy = "policy"
}
export type IEntityCardProps = {
    entity: IEntity;
    handleEdit?: () => void;
    handleDelete?: () => void;
    entityType?: entityTypes;
    onViewSubEntityClick?: () => void;
    onAddSubEntityClick?: () => void;
    showAddSubEntityBtn?: boolean;
    showViewSubEntityBtn?: boolean;
    parentEntityId?: string;
};
export type IPolicyListProps = {
    policyList?: Array<any>;
    onAddPolicyClick?: () => void;
    controlId: string;
    subCategoryId?: string;
};
