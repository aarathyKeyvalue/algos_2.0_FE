import { MiddlewareAPI } from '@reduxjs/toolkit';
import type { BaseQueryFn } from '@reduxjs/toolkit/query';
import type { AxiosRequestConfig } from 'axios';
export declare const rtkQueryErrorLogger: (api: MiddlewareAPI) => (next: any) => (action: any) => any;
export declare const frameworkApi: import("@reduxjs/toolkit/query").Api<BaseQueryFn<{
    url: string;
    method: AxiosRequestConfig['method'];
    data?: AxiosRequestConfig['data'];
    params?: AxiosRequestConfig['params'];
}, unknown, unknown>, {
    getAllFrameworks: import("@reduxjs/toolkit/query").QueryDefinition<any, BaseQueryFn<{
        url: string;
        method: AxiosRequestConfig['method'];
        data?: AxiosRequestConfig['data'];
        params?: AxiosRequestConfig['params'];
    }, unknown, unknown>, "Frameworks" | "Framework" | "Control-Categories" | "Control-Category" | "Control-Sub-Category" | "Policies-Under-Framework", any, "frameworkApi">;
    getFramework: import("@reduxjs/toolkit/query").QueryDefinition<any, BaseQueryFn<{
        url: string;
        method: AxiosRequestConfig['method'];
        data?: AxiosRequestConfig['data'];
        params?: AxiosRequestConfig['params'];
    }, unknown, unknown>, "Frameworks" | "Framework" | "Control-Categories" | "Control-Category" | "Control-Sub-Category" | "Policies-Under-Framework", any, "frameworkApi">;
    createFramework: import("@reduxjs/toolkit/query").MutationDefinition<any, BaseQueryFn<{
        url: string;
        method: AxiosRequestConfig['method'];
        data?: AxiosRequestConfig['data'];
        params?: AxiosRequestConfig['params'];
    }, unknown, unknown>, "Frameworks" | "Framework" | "Control-Categories" | "Control-Category" | "Control-Sub-Category" | "Policies-Under-Framework", any, "frameworkApi">;
    updateFramework: import("@reduxjs/toolkit/query").MutationDefinition<any, BaseQueryFn<{
        url: string;
        method: AxiosRequestConfig['method'];
        data?: AxiosRequestConfig['data'];
        params?: AxiosRequestConfig['params'];
    }, unknown, unknown>, "Frameworks" | "Framework" | "Control-Categories" | "Control-Category" | "Control-Sub-Category" | "Policies-Under-Framework", any, "frameworkApi">;
    deleteFramework: import("@reduxjs/toolkit/query").MutationDefinition<any, BaseQueryFn<{
        url: string;
        method: AxiosRequestConfig['method'];
        data?: AxiosRequestConfig['data'];
        params?: AxiosRequestConfig['params'];
    }, unknown, unknown>, "Frameworks" | "Framework" | "Control-Categories" | "Control-Category" | "Control-Sub-Category" | "Policies-Under-Framework", any, "frameworkApi">;
    getControlCategories: import("@reduxjs/toolkit/query").QueryDefinition<any, BaseQueryFn<{
        url: string;
        method: AxiosRequestConfig['method'];
        data?: AxiosRequestConfig['data'];
        params?: AxiosRequestConfig['params'];
    }, unknown, unknown>, "Frameworks" | "Framework" | "Control-Categories" | "Control-Category" | "Control-Sub-Category" | "Policies-Under-Framework", any, "frameworkApi">;
    createControlCategory: import("@reduxjs/toolkit/query").MutationDefinition<any, BaseQueryFn<{
        url: string;
        method: AxiosRequestConfig['method'];
        data?: AxiosRequestConfig['data'];
        params?: AxiosRequestConfig['params'];
    }, unknown, unknown>, "Frameworks" | "Framework" | "Control-Categories" | "Control-Category" | "Control-Sub-Category" | "Policies-Under-Framework", any, "frameworkApi">;
    updateControlCategory: import("@reduxjs/toolkit/query").MutationDefinition<any, BaseQueryFn<{
        url: string;
        method: AxiosRequestConfig['method'];
        data?: AxiosRequestConfig['data'];
        params?: AxiosRequestConfig['params'];
    }, unknown, unknown>, "Frameworks" | "Framework" | "Control-Categories" | "Control-Category" | "Control-Sub-Category" | "Policies-Under-Framework", any, "frameworkApi">;
    getControlCategoryDetails: import("@reduxjs/toolkit/query").QueryDefinition<any, BaseQueryFn<{
        url: string;
        method: AxiosRequestConfig['method'];
        data?: AxiosRequestConfig['data'];
        params?: AxiosRequestConfig['params'];
    }, unknown, unknown>, "Frameworks" | "Framework" | "Control-Categories" | "Control-Category" | "Control-Sub-Category" | "Policies-Under-Framework", any, "frameworkApi">;
    createControlSubCategory: import("@reduxjs/toolkit/query").MutationDefinition<any, BaseQueryFn<{
        url: string;
        method: AxiosRequestConfig['method'];
        data?: AxiosRequestConfig['data'];
        params?: AxiosRequestConfig['params'];
    }, unknown, unknown>, "Frameworks" | "Framework" | "Control-Categories" | "Control-Category" | "Control-Sub-Category" | "Policies-Under-Framework", any, "frameworkApi">;
    updateControlSubCategory: import("@reduxjs/toolkit/query").MutationDefinition<any, BaseQueryFn<{
        url: string;
        method: AxiosRequestConfig['method'];
        data?: AxiosRequestConfig['data'];
        params?: AxiosRequestConfig['params'];
    }, unknown, unknown>, "Frameworks" | "Framework" | "Control-Categories" | "Control-Category" | "Control-Sub-Category" | "Policies-Under-Framework", any, "frameworkApi">;
    getControlSubCategoryDetails: import("@reduxjs/toolkit/query").QueryDefinition<any, BaseQueryFn<{
        url: string;
        method: AxiosRequestConfig['method'];
        data?: AxiosRequestConfig['data'];
        params?: AxiosRequestConfig['params'];
    }, unknown, unknown>, "Frameworks" | "Framework" | "Control-Categories" | "Control-Category" | "Control-Sub-Category" | "Policies-Under-Framework", any, "frameworkApi">;
    createControl: import("@reduxjs/toolkit/query").MutationDefinition<any, BaseQueryFn<{
        url: string;
        method: AxiosRequestConfig['method'];
        data?: AxiosRequestConfig['data'];
        params?: AxiosRequestConfig['params'];
    }, unknown, unknown>, "Frameworks" | "Framework" | "Control-Categories" | "Control-Category" | "Control-Sub-Category" | "Policies-Under-Framework", any, "frameworkApi">;
    updateControl: import("@reduxjs/toolkit/query").MutationDefinition<any, BaseQueryFn<{
        url: string;
        method: AxiosRequestConfig['method'];
        data?: AxiosRequestConfig['data'];
        params?: AxiosRequestConfig['params'];
    }, unknown, unknown>, "Frameworks" | "Framework" | "Control-Categories" | "Control-Category" | "Control-Sub-Category" | "Policies-Under-Framework", any, "frameworkApi">;
    getAllPoliciesUnderFramework: import("@reduxjs/toolkit/query").QueryDefinition<any, BaseQueryFn<{
        url: string;
        method: AxiosRequestConfig['method'];
        data?: AxiosRequestConfig['data'];
        params?: AxiosRequestConfig['params'];
    }, unknown, unknown>, "Frameworks" | "Framework" | "Control-Categories" | "Control-Category" | "Control-Sub-Category" | "Policies-Under-Framework", any, "frameworkApi">;
    addPoliciesToControl: import("@reduxjs/toolkit/query").MutationDefinition<any, BaseQueryFn<{
        url: string;
        method: AxiosRequestConfig['method'];
        data?: AxiosRequestConfig['data'];
        params?: AxiosRequestConfig['params'];
    }, unknown, unknown>, "Frameworks" | "Framework" | "Control-Categories" | "Control-Category" | "Control-Sub-Category" | "Policies-Under-Framework", any, "frameworkApi">;
    removePolicyFromControl: import("@reduxjs/toolkit/query").MutationDefinition<any, BaseQueryFn<{
        url: string;
        method: AxiosRequestConfig['method'];
        data?: AxiosRequestConfig['data'];
        params?: AxiosRequestConfig['params'];
    }, unknown, unknown>, "Frameworks" | "Framework" | "Control-Categories" | "Control-Category" | "Control-Sub-Category" | "Policies-Under-Framework", any, "frameworkApi">;
}, "frameworkApi", "Frameworks" | "Framework" | "Control-Categories" | "Control-Category" | "Control-Sub-Category" | "Policies-Under-Framework", typeof import("@reduxjs/toolkit/dist/query/core/module").coreModuleName | typeof import("@reduxjs/toolkit/dist/query/react/module").reactHooksModuleName>;
export declare const useGetAllFrameworksQuery: import("@reduxjs/toolkit/dist/query/react/buildHooks").UseQuery<import("@reduxjs/toolkit/query").QueryDefinition<any, BaseQueryFn<{
    url: string;
    method: AxiosRequestConfig['method'];
    data?: AxiosRequestConfig['data'];
    params?: AxiosRequestConfig['params'];
}, unknown, unknown>, "Frameworks" | "Framework" | "Control-Categories" | "Control-Category" | "Control-Sub-Category" | "Policies-Under-Framework", any, "frameworkApi">>, useGetFrameworkQuery: import("@reduxjs/toolkit/dist/query/react/buildHooks").UseQuery<import("@reduxjs/toolkit/query").QueryDefinition<any, BaseQueryFn<{
    url: string;
    method: AxiosRequestConfig['method'];
    data?: AxiosRequestConfig['data'];
    params?: AxiosRequestConfig['params'];
}, unknown, unknown>, "Frameworks" | "Framework" | "Control-Categories" | "Control-Category" | "Control-Sub-Category" | "Policies-Under-Framework", any, "frameworkApi">>, useCreateFrameworkMutation: import("@reduxjs/toolkit/dist/query/react/buildHooks").UseMutation<import("@reduxjs/toolkit/query").MutationDefinition<any, BaseQueryFn<{
    url: string;
    method: AxiosRequestConfig['method'];
    data?: AxiosRequestConfig['data'];
    params?: AxiosRequestConfig['params'];
}, unknown, unknown>, "Frameworks" | "Framework" | "Control-Categories" | "Control-Category" | "Control-Sub-Category" | "Policies-Under-Framework", any, "frameworkApi">>, useUpdateFrameworkMutation: import("@reduxjs/toolkit/dist/query/react/buildHooks").UseMutation<import("@reduxjs/toolkit/query").MutationDefinition<any, BaseQueryFn<{
    url: string;
    method: AxiosRequestConfig['method'];
    data?: AxiosRequestConfig['data'];
    params?: AxiosRequestConfig['params'];
}, unknown, unknown>, "Frameworks" | "Framework" | "Control-Categories" | "Control-Category" | "Control-Sub-Category" | "Policies-Under-Framework", any, "frameworkApi">>, useDeleteFrameworkMutation: import("@reduxjs/toolkit/dist/query/react/buildHooks").UseMutation<import("@reduxjs/toolkit/query").MutationDefinition<any, BaseQueryFn<{
    url: string;
    method: AxiosRequestConfig['method'];
    data?: AxiosRequestConfig['data'];
    params?: AxiosRequestConfig['params'];
}, unknown, unknown>, "Frameworks" | "Framework" | "Control-Categories" | "Control-Category" | "Control-Sub-Category" | "Policies-Under-Framework", any, "frameworkApi">>, useGetControlCategoriesQuery: import("@reduxjs/toolkit/dist/query/react/buildHooks").UseQuery<import("@reduxjs/toolkit/query").QueryDefinition<any, BaseQueryFn<{
    url: string;
    method: AxiosRequestConfig['method'];
    data?: AxiosRequestConfig['data'];
    params?: AxiosRequestConfig['params'];
}, unknown, unknown>, "Frameworks" | "Framework" | "Control-Categories" | "Control-Category" | "Control-Sub-Category" | "Policies-Under-Framework", any, "frameworkApi">>, useCreateControlCategoryMutation: import("@reduxjs/toolkit/dist/query/react/buildHooks").UseMutation<import("@reduxjs/toolkit/query").MutationDefinition<any, BaseQueryFn<{
    url: string;
    method: AxiosRequestConfig['method'];
    data?: AxiosRequestConfig['data'];
    params?: AxiosRequestConfig['params'];
}, unknown, unknown>, "Frameworks" | "Framework" | "Control-Categories" | "Control-Category" | "Control-Sub-Category" | "Policies-Under-Framework", any, "frameworkApi">>, useCreateControlSubCategoryMutation: import("@reduxjs/toolkit/dist/query/react/buildHooks").UseMutation<import("@reduxjs/toolkit/query").MutationDefinition<any, BaseQueryFn<{
    url: string;
    method: AxiosRequestConfig['method'];
    data?: AxiosRequestConfig['data'];
    params?: AxiosRequestConfig['params'];
}, unknown, unknown>, "Frameworks" | "Framework" | "Control-Categories" | "Control-Category" | "Control-Sub-Category" | "Policies-Under-Framework", any, "frameworkApi">>, useUpdateControlCategoryMutation: import("@reduxjs/toolkit/dist/query/react/buildHooks").UseMutation<import("@reduxjs/toolkit/query").MutationDefinition<any, BaseQueryFn<{
    url: string;
    method: AxiosRequestConfig['method'];
    data?: AxiosRequestConfig['data'];
    params?: AxiosRequestConfig['params'];
}, unknown, unknown>, "Frameworks" | "Framework" | "Control-Categories" | "Control-Category" | "Control-Sub-Category" | "Policies-Under-Framework", any, "frameworkApi">>, useGetControlCategoryDetailsQuery: import("@reduxjs/toolkit/dist/query/react/buildHooks").UseQuery<import("@reduxjs/toolkit/query").QueryDefinition<any, BaseQueryFn<{
    url: string;
    method: AxiosRequestConfig['method'];
    data?: AxiosRequestConfig['data'];
    params?: AxiosRequestConfig['params'];
}, unknown, unknown>, "Frameworks" | "Framework" | "Control-Categories" | "Control-Category" | "Control-Sub-Category" | "Policies-Under-Framework", any, "frameworkApi">>, useLazyGetControlCategoryDetailsQuery: import("@reduxjs/toolkit/dist/query/react/buildHooks").UseLazyQuery<import("@reduxjs/toolkit/query").QueryDefinition<any, BaseQueryFn<{
    url: string;
    method: AxiosRequestConfig['method'];
    data?: AxiosRequestConfig['data'];
    params?: AxiosRequestConfig['params'];
}, unknown, unknown>, "Frameworks" | "Framework" | "Control-Categories" | "Control-Category" | "Control-Sub-Category" | "Policies-Under-Framework", any, "frameworkApi">>, useUpdateControlSubCategoryMutation: import("@reduxjs/toolkit/dist/query/react/buildHooks").UseMutation<import("@reduxjs/toolkit/query").MutationDefinition<any, BaseQueryFn<{
    url: string;
    method: AxiosRequestConfig['method'];
    data?: AxiosRequestConfig['data'];
    params?: AxiosRequestConfig['params'];
}, unknown, unknown>, "Frameworks" | "Framework" | "Control-Categories" | "Control-Category" | "Control-Sub-Category" | "Policies-Under-Framework", any, "frameworkApi">>, useGetControlSubCategoryDetailsQuery: import("@reduxjs/toolkit/dist/query/react/buildHooks").UseQuery<import("@reduxjs/toolkit/query").QueryDefinition<any, BaseQueryFn<{
    url: string;
    method: AxiosRequestConfig['method'];
    data?: AxiosRequestConfig['data'];
    params?: AxiosRequestConfig['params'];
}, unknown, unknown>, "Frameworks" | "Framework" | "Control-Categories" | "Control-Category" | "Control-Sub-Category" | "Policies-Under-Framework", any, "frameworkApi">>, useLazyGetControlSubCategoryDetailsQuery: import("@reduxjs/toolkit/dist/query/react/buildHooks").UseLazyQuery<import("@reduxjs/toolkit/query").QueryDefinition<any, BaseQueryFn<{
    url: string;
    method: AxiosRequestConfig['method'];
    data?: AxiosRequestConfig['data'];
    params?: AxiosRequestConfig['params'];
}, unknown, unknown>, "Frameworks" | "Framework" | "Control-Categories" | "Control-Category" | "Control-Sub-Category" | "Policies-Under-Framework", any, "frameworkApi">>, useCreateControlMutation: import("@reduxjs/toolkit/dist/query/react/buildHooks").UseMutation<import("@reduxjs/toolkit/query").MutationDefinition<any, BaseQueryFn<{
    url: string;
    method: AxiosRequestConfig['method'];
    data?: AxiosRequestConfig['data'];
    params?: AxiosRequestConfig['params'];
}, unknown, unknown>, "Frameworks" | "Framework" | "Control-Categories" | "Control-Category" | "Control-Sub-Category" | "Policies-Under-Framework", any, "frameworkApi">>, useUpdateControlMutation: import("@reduxjs/toolkit/dist/query/react/buildHooks").UseMutation<import("@reduxjs/toolkit/query").MutationDefinition<any, BaseQueryFn<{
    url: string;
    method: AxiosRequestConfig['method'];
    data?: AxiosRequestConfig['data'];
    params?: AxiosRequestConfig['params'];
}, unknown, unknown>, "Frameworks" | "Framework" | "Control-Categories" | "Control-Category" | "Control-Sub-Category" | "Policies-Under-Framework", any, "frameworkApi">>, useGetAllPoliciesUnderFrameworkQuery: import("@reduxjs/toolkit/dist/query/react/buildHooks").UseQuery<import("@reduxjs/toolkit/query").QueryDefinition<any, BaseQueryFn<{
    url: string;
    method: AxiosRequestConfig['method'];
    data?: AxiosRequestConfig['data'];
    params?: AxiosRequestConfig['params'];
}, unknown, unknown>, "Frameworks" | "Framework" | "Control-Categories" | "Control-Category" | "Control-Sub-Category" | "Policies-Under-Framework", any, "frameworkApi">>, useAddPoliciesToControlMutation: import("@reduxjs/toolkit/dist/query/react/buildHooks").UseMutation<import("@reduxjs/toolkit/query").MutationDefinition<any, BaseQueryFn<{
    url: string;
    method: AxiosRequestConfig['method'];
    data?: AxiosRequestConfig['data'];
    params?: AxiosRequestConfig['params'];
}, unknown, unknown>, "Frameworks" | "Framework" | "Control-Categories" | "Control-Category" | "Control-Sub-Category" | "Policies-Under-Framework", any, "frameworkApi">>, useRemovePolicyFromControlMutation: import("@reduxjs/toolkit/dist/query/react/buildHooks").UseMutation<import("@reduxjs/toolkit/query").MutationDefinition<any, BaseQueryFn<{
    url: string;
    method: AxiosRequestConfig['method'];
    data?: AxiosRequestConfig['data'];
    params?: AxiosRequestConfig['params'];
}, unknown, unknown>, "Frameworks" | "Framework" | "Control-Categories" | "Control-Category" | "Control-Sub-Category" | "Policies-Under-Framework", any, "frameworkApi">>;
