import { IFile, IFolder } from 'app/components/folder-tree/types';
export declare enum frameworkSubItemKeys {
    overview = "overview",
    scope = "scope",
    ['risk-assessment'] = "risk-assessment",
    controls = "controls",
    policies = "policies",
    reviews = "reviews"
}
export declare enum controlSubItemKeys {
    ['control-categories'] = "control-categories",
    ['applicability-statement'] = "applicability-statement"
}
export declare const frameworkSubMenuItems: Array<IFolder | IFile>;
export declare const ControlsSubMenuItems: Array<IFile>;
export declare const Policies: {
    id: string;
    name: string;
    items: {
        id: string;
        name: string;
        items: {
            id: string;
            name: string;
            navigateTo: string;
        }[];
    }[];
}[];
