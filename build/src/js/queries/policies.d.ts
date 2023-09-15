export declare const getPolicyFoldersMutation: () => {
    query: string;
};
export declare const createPolicyFolderMutation: (folderName: any, parentFolderId: any) => {
    query: string;
    variables: {
        folderName: any;
        parentFolderId: any;
    };
};
export declare const updatePolicyDescriptionMutation: (id: any, description: any) => {
    query: string;
    variables: {
        id: any;
        description: any;
    };
};
export declare const createActionablePointMutation: (input: any) => {
    query: string;
    variables: {
        input: any;
    };
};
export declare const updateActionablePointMutation: ({ input, id }: {
    input: any;
    id: any;
}) => {
    query: string;
    variables: {
        id: any;
        input: any;
    };
};
export declare const getActionablePointDetailsQuery: (id: string) => {
    query: string;
    variables: {
        id: string;
    };
};
export declare const deleteActionablePointMutation: (id: any) => {
    query: string;
    variables: {
        id: any;
    };
};
export declare const editPolicyFolderMutation: (folderName: string, folderId: string) => {
    query: string;
    variables: {
        folderId: string;
        folderName: string;
    };
};
export declare const movePolicyFolderMutation: (folderId: string, destinationFolderId: string | null) => {
    query: string;
    variables: {
        folderId: string;
        destinationFolderId: string | null;
    };
};
export declare const deletePolicyFolderMutation: (folderId: string, shouldMoveToUncategorised: boolean) => {
    query: string;
    variables: {
        folderId: string;
        shouldMoveToUncategorised: boolean;
    };
};
export declare const getPolicyDetailsQuery: (policyId: string) => {
    query: string;
    variables: {
        policyId: string;
    };
};
export declare const createPolicyMutation: (policyDetails: any) => {
    query: string;
    variables: {
        policyDetails: any;
    };
};
export declare const updatePolicyMutation: (policyId: string, policyDetails: any) => {
    query: string;
    variables: {
        policyId: string;
        policyDetails: any;
    };
};
export declare const movePolicyMutation: (policyId: string, destinationFolderId: string | null) => {
    query: string;
    variables: {
        policyId: string;
        destinationFolderId: string | null;
    };
};
export declare const deletePolicyMutation: (policyId: string) => {
    query: string;
    variables: {
        policyId: string;
    };
};
