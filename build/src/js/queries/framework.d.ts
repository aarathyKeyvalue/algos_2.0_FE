export declare const getFrameworksQuery: () => {
    query: string;
};
export declare const getFrameworkQuery: (frameworkId: string) => {
    query: string;
    variables: {
        frameworkId: string;
    };
};
export declare const createFrameworkMutation: (frameworkDetails: any) => {
    query: string;
    variables: {
        frameworkDetails: any;
    };
};
export declare const updateFrameworkMutation: (frameworkId: any, frameworkDetails: any) => {
    query: string;
    variables: {
        frameworkId: any;
        frameworkDetails: any;
    };
};
export declare const deleteFrameworkMutation: (frameworkId: string) => {
    query: string;
    variables: {
        frameworkId: string;
    };
};
export declare const getControlCategoriesQuery: (frameworkId: string) => {
    query: string;
    variables: {
        frameworkId: string;
    };
};
export declare const createControlCategoryMutation: (categoryDetails: any) => {
    query: string;
    variables: {
        categoryDetails: any;
    };
};
export declare const updateControlCategoryMutation: (categoryId: any, categoryDetails: any) => {
    query: string;
    variables: {
        categoryId: any;
        categoryDetails: any;
    };
};
export declare const createControlSubCategoryMutation: (subCategoryDetails: any, categoryId: any, frameworkId: any) => {
    query: string;
    variables: {
        subCategoryDetails: any;
        categoryId: any;
        frameworkId: any;
    };
};
export declare const updateControlSubCategoryMutation: (subCategoryDetails: any, subCategoryId: any) => {
    query: string;
    variables: {
        subCategoryDetails: any;
        subCategoryId: any;
    };
};
export declare const getControlCategoryDetailsQuery: (categoryId: any) => {
    query: string;
    variables: {
        categoryId: any;
    };
};
export declare const createControlMutation: (controlDetails: any, controlSubCategoryId: any, frameworkId: any) => {
    query: string;
    variables: {
        controlDetails: any;
        controlSubCategoryId: any;
        frameworkId: any;
    };
};
export declare const getControlSubCategoryDetailsQuery: (subCategoryId: any) => {
    query: string;
    variables: {
        subCategoryId: any;
    };
};
export declare const updateControlMutation: (controlDetails: any, controlId: any) => {
    query: string;
    variables: {
        controlDetails: any;
        controlId: any;
    };
};
export declare const getAllPoliciesUnderFrameworkQuery: (frameworkId: string) => {
    query: string;
    variables: {
        frameworkId: string;
    };
};
export declare const addPoliciesToControlMutation: (controlId: string, policyIds: Array<string>) => {
    query: string;
    variables: {
        controlId: string;
        policyIds: string[];
    };
};
export declare const removePolicyFromControlMutation: (controlId: string, policyId: string) => {
    query: string;
    variables: {
        controlId: string;
        policyId: string;
    };
};
