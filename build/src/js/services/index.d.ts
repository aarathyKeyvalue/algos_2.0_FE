export declare const reducers: {
    frameworkApi: import("redux").Reducer<import("@reduxjs/toolkit/dist/query/core/apiState").CombinedState<{
        getAllFrameworks: import("@reduxjs/toolkit/dist/query").QueryDefinition<any, import("@reduxjs/toolkit/dist/query").BaseQueryFn<{
            url: string;
            method: string | undefined;
            data?: any;
            params?: any;
        }, unknown, unknown>, "Frameworks" | "Framework" | "Control-Categories" | "Control-Category" | "Control-Sub-Category" | "Policies-Under-Framework", any, "frameworkApi">;
        getFramework: import("@reduxjs/toolkit/dist/query").QueryDefinition<any, import("@reduxjs/toolkit/dist/query").BaseQueryFn<{
            url: string;
            method: string | undefined;
            data?: any;
            params?: any;
        }, unknown, unknown>, "Frameworks" | "Framework" | "Control-Categories" | "Control-Category" | "Control-Sub-Category" | "Policies-Under-Framework", any, "frameworkApi">;
        createFramework: import("@reduxjs/toolkit/dist/query").MutationDefinition<any, import("@reduxjs/toolkit/dist/query").BaseQueryFn<{
            url: string;
            method: string | undefined;
            data?: any;
            params?: any;
        }, unknown, unknown>, "Frameworks" | "Framework" | "Control-Categories" | "Control-Category" | "Control-Sub-Category" | "Policies-Under-Framework", any, "frameworkApi">;
        updateFramework: import("@reduxjs/toolkit/dist/query").MutationDefinition<any, import("@reduxjs/toolkit/dist/query").BaseQueryFn<{
            url: string;
            method: string | undefined;
            data?: any;
            params?: any;
        }, unknown, unknown>, "Frameworks" | "Framework" | "Control-Categories" | "Control-Category" | "Control-Sub-Category" | "Policies-Under-Framework", any, "frameworkApi">;
        deleteFramework: import("@reduxjs/toolkit/dist/query").MutationDefinition<any, import("@reduxjs/toolkit/dist/query").BaseQueryFn<{
            url: string;
            method: string | undefined;
            data?: any;
            params?: any;
        }, unknown, unknown>, "Frameworks" | "Framework" | "Control-Categories" | "Control-Category" | "Control-Sub-Category" | "Policies-Under-Framework", any, "frameworkApi">;
        getControlCategories: import("@reduxjs/toolkit/dist/query").QueryDefinition<any, import("@reduxjs/toolkit/dist/query").BaseQueryFn<{
            url: string;
            method: string | undefined;
            data?: any;
            params?: any;
        }, unknown, unknown>, "Frameworks" | "Framework" | "Control-Categories" | "Control-Category" | "Control-Sub-Category" | "Policies-Under-Framework", any, "frameworkApi">;
        createControlCategory: import("@reduxjs/toolkit/dist/query").MutationDefinition<any, import("@reduxjs/toolkit/dist/query").BaseQueryFn<{
            url: string;
            method: string | undefined;
            data?: any;
            params?: any;
        }, unknown, unknown>, "Frameworks" | "Framework" | "Control-Categories" | "Control-Category" | "Control-Sub-Category" | "Policies-Under-Framework", any, "frameworkApi">;
        updateControlCategory: import("@reduxjs/toolkit/dist/query").MutationDefinition<any, import("@reduxjs/toolkit/dist/query").BaseQueryFn<{
            url: string;
            method: string | undefined;
            data?: any;
            params?: any;
        }, unknown, unknown>, "Frameworks" | "Framework" | "Control-Categories" | "Control-Category" | "Control-Sub-Category" | "Policies-Under-Framework", any, "frameworkApi">;
        getControlCategoryDetails: import("@reduxjs/toolkit/dist/query").QueryDefinition<any, import("@reduxjs/toolkit/dist/query").BaseQueryFn<{
            url: string;
            method: string | undefined;
            data?: any;
            params?: any;
        }, unknown, unknown>, "Frameworks" | "Framework" | "Control-Categories" | "Control-Category" | "Control-Sub-Category" | "Policies-Under-Framework", any, "frameworkApi">;
        createControlSubCategory: import("@reduxjs/toolkit/dist/query").MutationDefinition<any, import("@reduxjs/toolkit/dist/query").BaseQueryFn<{
            url: string;
            method: string | undefined;
            data?: any;
            params?: any;
        }, unknown, unknown>, "Frameworks" | "Framework" | "Control-Categories" | "Control-Category" | "Control-Sub-Category" | "Policies-Under-Framework", any, "frameworkApi">;
        updateControlSubCategory: import("@reduxjs/toolkit/dist/query").MutationDefinition<any, import("@reduxjs/toolkit/dist/query").BaseQueryFn<{
            url: string;
            method: string | undefined;
            data?: any;
            params?: any;
        }, unknown, unknown>, "Frameworks" | "Framework" | "Control-Categories" | "Control-Category" | "Control-Sub-Category" | "Policies-Under-Framework", any, "frameworkApi">;
        getControlSubCategoryDetails: import("@reduxjs/toolkit/dist/query").QueryDefinition<any, import("@reduxjs/toolkit/dist/query").BaseQueryFn<{
            url: string;
            method: string | undefined;
            data?: any;
            params?: any;
        }, unknown, unknown>, "Frameworks" | "Framework" | "Control-Categories" | "Control-Category" | "Control-Sub-Category" | "Policies-Under-Framework", any, "frameworkApi">;
        createControl: import("@reduxjs/toolkit/dist/query").MutationDefinition<any, import("@reduxjs/toolkit/dist/query").BaseQueryFn<{
            url: string;
            method: string | undefined;
            data?: any;
            params?: any;
        }, unknown, unknown>, "Frameworks" | "Framework" | "Control-Categories" | "Control-Category" | "Control-Sub-Category" | "Policies-Under-Framework", any, "frameworkApi">;
        updateControl: import("@reduxjs/toolkit/dist/query").MutationDefinition<any, import("@reduxjs/toolkit/dist/query").BaseQueryFn<{
            url: string;
            method: string | undefined;
            data?: any;
            params?: any;
        }, unknown, unknown>, "Frameworks" | "Framework" | "Control-Categories" | "Control-Category" | "Control-Sub-Category" | "Policies-Under-Framework", any, "frameworkApi">;
        getAllPoliciesUnderFramework: import("@reduxjs/toolkit/dist/query").QueryDefinition<any, import("@reduxjs/toolkit/dist/query").BaseQueryFn<{
            url: string;
            method: string | undefined;
            data?: any;
            params?: any;
        }, unknown, unknown>, "Frameworks" | "Framework" | "Control-Categories" | "Control-Category" | "Control-Sub-Category" | "Policies-Under-Framework", any, "frameworkApi">;
        addPoliciesToControl: import("@reduxjs/toolkit/dist/query").MutationDefinition<any, import("@reduxjs/toolkit/dist/query").BaseQueryFn<{
            url: string;
            method: string | undefined;
            data?: any;
            params?: any;
        }, unknown, unknown>, "Frameworks" | "Framework" | "Control-Categories" | "Control-Category" | "Control-Sub-Category" | "Policies-Under-Framework", any, "frameworkApi">;
        removePolicyFromControl: import("@reduxjs/toolkit/dist/query").MutationDefinition<any, import("@reduxjs/toolkit/dist/query").BaseQueryFn<{
            url: string;
            method: string | undefined;
            data?: any;
            params?: any;
        }, unknown, unknown>, "Frameworks" | "Framework" | "Control-Categories" | "Control-Category" | "Control-Sub-Category" | "Policies-Under-Framework", any, "frameworkApi">;
    }, "Frameworks" | "Framework" | "Control-Categories" | "Control-Category" | "Control-Sub-Category" | "Policies-Under-Framework", "frameworkApi">, import("redux").AnyAction>;
    policyApi: import("redux").Reducer<import("@reduxjs/toolkit/dist/query/core/apiState").CombinedState<{
        getPolicyFolders: import("@reduxjs/toolkit/dist/query").QueryDefinition<any, import("@reduxjs/toolkit/dist/query").BaseQueryFn<{
            url: string;
            method: string | undefined;
            data?: any;
            params?: any;
        }, unknown, unknown>, "Policy-Tree" | "Policy", any, "policyApi">;
        getPolicyDetails: import("@reduxjs/toolkit/dist/query").QueryDefinition<any, import("@reduxjs/toolkit/dist/query").BaseQueryFn<{
            url: string;
            method: string | undefined;
            data?: any;
            params?: any;
        }, unknown, unknown>, "Policy-Tree" | "Policy", any, "policyApi">;
        createPolicyFolder: import("@reduxjs/toolkit/dist/query").MutationDefinition<any, import("@reduxjs/toolkit/dist/query").BaseQueryFn<{
            url: string;
            method: string | undefined;
            data?: any;
            params?: any;
        }, unknown, unknown>, "Policy-Tree" | "Policy", any, "policyApi">;
        editPolicyFolder: import("@reduxjs/toolkit/dist/query").MutationDefinition<any, import("@reduxjs/toolkit/dist/query").BaseQueryFn<{
            url: string;
            method: string | undefined;
            data?: any;
            params?: any;
        }, unknown, unknown>, "Policy-Tree" | "Policy", any, "policyApi">;
        movePolicyFolder: import("@reduxjs/toolkit/dist/query").MutationDefinition<any, import("@reduxjs/toolkit/dist/query").BaseQueryFn<{
            url: string;
            method: string | undefined;
            data?: any;
            params?: any;
        }, unknown, unknown>, "Policy-Tree" | "Policy", any, "policyApi">;
        deletePolicyFolder: import("@reduxjs/toolkit/dist/query").MutationDefinition<any, import("@reduxjs/toolkit/dist/query").BaseQueryFn<{
            url: string;
            method: string | undefined;
            data?: any;
            params?: any;
        }, unknown, unknown>, "Policy-Tree" | "Policy", any, "policyApi">;
        createPolicy: import("@reduxjs/toolkit/dist/query").MutationDefinition<any, import("@reduxjs/toolkit/dist/query").BaseQueryFn<{
            url: string;
            method: string | undefined;
            data?: any;
            params?: any;
        }, unknown, unknown>, "Policy-Tree" | "Policy", any, "policyApi">;
        updatePolicy: import("@reduxjs/toolkit/dist/query").MutationDefinition<any, import("@reduxjs/toolkit/dist/query").BaseQueryFn<{
            url: string;
            method: string | undefined;
            data?: any;
            params?: any;
        }, unknown, unknown>, "Policy-Tree" | "Policy", any, "policyApi">;
        movePolicy: import("@reduxjs/toolkit/dist/query").MutationDefinition<any, import("@reduxjs/toolkit/dist/query").BaseQueryFn<{
            url: string;
            method: string | undefined;
            data?: any;
            params?: any;
        }, unknown, unknown>, "Policy-Tree" | "Policy", any, "policyApi">;
        deletePolicy: import("@reduxjs/toolkit/dist/query").MutationDefinition<any, import("@reduxjs/toolkit/dist/query").BaseQueryFn<{
            url: string;
            method: string | undefined;
            data?: any;
            params?: any;
        }, unknown, unknown>, "Policy-Tree" | "Policy", any, "policyApi">;
        updatePolicyDescription: import("@reduxjs/toolkit/dist/query").MutationDefinition<any, import("@reduxjs/toolkit/dist/query").BaseQueryFn<{
            url: string;
            method: string | undefined;
            data?: any;
            params?: any;
        }, unknown, unknown>, "Policy-Tree" | "Policy", any, "policyApi">;
        createActionablePoint: import("@reduxjs/toolkit/dist/query").MutationDefinition<any, import("@reduxjs/toolkit/dist/query").BaseQueryFn<{
            url: string;
            method: string | undefined;
            data?: any;
            params?: any;
        }, unknown, unknown>, "Policy-Tree" | "Policy", any, "policyApi">;
        updateActionablePoint: import("@reduxjs/toolkit/dist/query").MutationDefinition<any, import("@reduxjs/toolkit/dist/query").BaseQueryFn<{
            url: string;
            method: string | undefined;
            data?: any;
            params?: any;
        }, unknown, unknown>, "Policy-Tree" | "Policy", any, "policyApi">;
        getActionablePoint: import("@reduxjs/toolkit/dist/query").QueryDefinition<any, import("@reduxjs/toolkit/dist/query").BaseQueryFn<{
            url: string;
            method: string | undefined;
            data?: any;
            params?: any;
        }, unknown, unknown>, "Policy-Tree" | "Policy", any, "policyApi">;
        deleteActionablePoint: import("@reduxjs/toolkit/dist/query").MutationDefinition<any, import("@reduxjs/toolkit/dist/query").BaseQueryFn<{
            url: string;
            method: string | undefined;
            data?: any;
            params?: any;
        }, unknown, unknown>, "Policy-Tree" | "Policy", any, "policyApi">;
    }, "Policy-Tree" | "Policy", "policyApi">, import("redux").AnyAction>;
    loginApi: import("redux").Reducer<import("@reduxjs/toolkit/dist/query/core/apiState").CombinedState<{
        login: import("@reduxjs/toolkit/dist/query").MutationDefinition<any, import("@reduxjs/toolkit/dist/query").BaseQueryFn<string | import("@reduxjs/toolkit/dist/query").FetchArgs, unknown, import("@reduxjs/toolkit/dist/query").FetchBaseQueryError, {}, import("@reduxjs/toolkit/dist/query").FetchBaseQueryMeta>, never, any, "loginApi">;
    }, never, "loginApi">, import("redux").AnyAction>;
};
export declare const middlewares: (defaultMiddleWare: any) => any;
