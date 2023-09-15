import { entityTypes } from '../entity-card/types';
export declare const getHeaderTextKey: (entityType: entityTypes | undefined, actionType: 'edit' | 'add' | undefined) => string;
export declare const getDefaultHeaderText: (entityType: entityTypes | undefined, actionType: 'edit' | 'add' | undefined) => string;
export declare const getEntityNameLabelKey: (entityType: entityTypes | undefined) => "FRAMEWORKS.ADD_CONTROL_PROMPT.CONTROL_NAME_LABEL" | "FRAMEWORKS.ADD_CONTROL_PROMPT.CATEGORY_NAME_LABEL" | "FRAMEWORKS.ADD_CONTROL_PROMPT.SUB_CATEGORY_NAME_LABEL";
export declare const getDefaultEntityNameLabel: (entityType: entityTypes | undefined) => "Control name" | "Category name" | "Sub-category name";
export declare const getEntityNamePlaceholderKey: (entityType: entityTypes | undefined) => "FRAMEWORKS.ADD_CONTROL_PROMPT.CONTROL_NAME_PLACEHOLDER" | "FRAMEWORKS.ADD_CONTROL_PROMPT.CATEGORY_NAME_PLACEHOLDER" | "FRAMEWORKS.ADD_CONTROL_PROMPT.SUB_CATEGORY_NAME_PLACEHOLDER";
export declare const getDefaultEntityNamePlaceholder: (entityType: entityTypes | undefined) => "Enter control name" | "Enter sub-category name" | "Enter category name";
export declare const getEntityObjectiveLabelKey: (entityType: entityTypes | undefined) => "FRAMEWORKS.ADD_CONTROL_PROMPT.CONTROL_OBJECTIVE_LABEL" | "FRAMEWORKS.ADD_CONTROL_PROMPT.SUB_CATEGORY_OBJECTIVE_LABEL";
export declare const getDefaultEntityObjectiveLabel: (entityType: entityTypes | undefined) => "Control objective" | "Sub-category objective";
