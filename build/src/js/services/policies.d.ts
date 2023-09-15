import { MiddlewareAPI } from '@reduxjs/toolkit';
import type { BaseQueryFn } from '@reduxjs/toolkit/query';
import type { AxiosRequestConfig } from 'axios';
export declare const rtkQueryPoliciesErrorLogger: (api: MiddlewareAPI) => (next: any) => (action: any) => any;
export declare const policyApi: import("@reduxjs/toolkit/query").Api<BaseQueryFn<{
    url: string;
    method: AxiosRequestConfig['method'];
    data?: AxiosRequestConfig['data'];
    params?: AxiosRequestConfig['params'];
}, unknown, unknown>, {
    getPolicyFolders: import("@reduxjs/toolkit/query").QueryDefinition<any, BaseQueryFn<{
        url: string;
        method: AxiosRequestConfig['method'];
        data?: AxiosRequestConfig['data'];
        params?: AxiosRequestConfig['params'];
    }, unknown, unknown>, "Policy-Tree" | "Policy", any, "policyApi">;
    getPolicyDetails: import("@reduxjs/toolkit/query").QueryDefinition<any, BaseQueryFn<{
        url: string;
        method: AxiosRequestConfig['method'];
        data?: AxiosRequestConfig['data'];
        params?: AxiosRequestConfig['params'];
    }, unknown, unknown>, "Policy-Tree" | "Policy", any, "policyApi">;
    createPolicyFolder: import("@reduxjs/toolkit/query").MutationDefinition<any, BaseQueryFn<{
        url: string;
        method: AxiosRequestConfig['method'];
        data?: AxiosRequestConfig['data'];
        params?: AxiosRequestConfig['params'];
    }, unknown, unknown>, "Policy-Tree" | "Policy", any, "policyApi">;
    editPolicyFolder: import("@reduxjs/toolkit/query").MutationDefinition<any, BaseQueryFn<{
        url: string;
        method: AxiosRequestConfig['method'];
        data?: AxiosRequestConfig['data'];
        params?: AxiosRequestConfig['params'];
    }, unknown, unknown>, "Policy-Tree" | "Policy", any, "policyApi">;
    movePolicyFolder: import("@reduxjs/toolkit/query").MutationDefinition<any, BaseQueryFn<{
        url: string;
        method: AxiosRequestConfig['method'];
        data?: AxiosRequestConfig['data'];
        params?: AxiosRequestConfig['params'];
    }, unknown, unknown>, "Policy-Tree" | "Policy", any, "policyApi">;
    deletePolicyFolder: import("@reduxjs/toolkit/query").MutationDefinition<any, BaseQueryFn<{
        url: string;
        method: AxiosRequestConfig['method'];
        data?: AxiosRequestConfig['data'];
        params?: AxiosRequestConfig['params'];
    }, unknown, unknown>, "Policy-Tree" | "Policy", any, "policyApi">;
    createPolicy: import("@reduxjs/toolkit/query").MutationDefinition<any, BaseQueryFn<{
        url: string;
        method: AxiosRequestConfig['method'];
        data?: AxiosRequestConfig['data'];
        params?: AxiosRequestConfig['params'];
    }, unknown, unknown>, "Policy-Tree" | "Policy", any, "policyApi">;
    updatePolicy: import("@reduxjs/toolkit/query").MutationDefinition<any, BaseQueryFn<{
        url: string;
        method: AxiosRequestConfig['method'];
        data?: AxiosRequestConfig['data'];
        params?: AxiosRequestConfig['params'];
    }, unknown, unknown>, "Policy-Tree" | "Policy", any, "policyApi">;
    movePolicy: import("@reduxjs/toolkit/query").MutationDefinition<any, BaseQueryFn<{
        url: string;
        method: AxiosRequestConfig['method'];
        data?: AxiosRequestConfig['data'];
        params?: AxiosRequestConfig['params'];
    }, unknown, unknown>, "Policy-Tree" | "Policy", any, "policyApi">;
    deletePolicy: import("@reduxjs/toolkit/query").MutationDefinition<any, BaseQueryFn<{
        url: string;
        method: AxiosRequestConfig['method'];
        data?: AxiosRequestConfig['data'];
        params?: AxiosRequestConfig['params'];
    }, unknown, unknown>, "Policy-Tree" | "Policy", any, "policyApi">;
    updatePolicyDescription: import("@reduxjs/toolkit/query").MutationDefinition<any, BaseQueryFn<{
        url: string;
        method: AxiosRequestConfig['method'];
        data?: AxiosRequestConfig['data'];
        params?: AxiosRequestConfig['params'];
    }, unknown, unknown>, "Policy-Tree" | "Policy", any, "policyApi">;
    createActionablePoint: import("@reduxjs/toolkit/query").MutationDefinition<any, BaseQueryFn<{
        url: string;
        method: AxiosRequestConfig['method'];
        data?: AxiosRequestConfig['data'];
        params?: AxiosRequestConfig['params'];
    }, unknown, unknown>, "Policy-Tree" | "Policy", any, "policyApi">;
    updateActionablePoint: import("@reduxjs/toolkit/query").MutationDefinition<any, BaseQueryFn<{
        url: string;
        method: AxiosRequestConfig['method'];
        data?: AxiosRequestConfig['data'];
        params?: AxiosRequestConfig['params'];
    }, unknown, unknown>, "Policy-Tree" | "Policy", any, "policyApi">;
    getActionablePoint: import("@reduxjs/toolkit/query").QueryDefinition<any, BaseQueryFn<{
        url: string;
        method: AxiosRequestConfig['method'];
        data?: AxiosRequestConfig['data'];
        params?: AxiosRequestConfig['params'];
    }, unknown, unknown>, "Policy-Tree" | "Policy", any, "policyApi">;
    deleteActionablePoint: import("@reduxjs/toolkit/query").MutationDefinition<any, BaseQueryFn<{
        url: string;
        method: AxiosRequestConfig['method'];
        data?: AxiosRequestConfig['data'];
        params?: AxiosRequestConfig['params'];
    }, unknown, unknown>, "Policy-Tree" | "Policy", any, "policyApi">;
}, "policyApi", "Policy-Tree" | "Policy", typeof import("@reduxjs/toolkit/dist/query/core/module").coreModuleName | typeof import("@reduxjs/toolkit/dist/query/react/module").reactHooksModuleName>;
export declare const useGetPolicyFoldersQuery: import("@reduxjs/toolkit/dist/query/react/buildHooks").UseQuery<import("@reduxjs/toolkit/query").QueryDefinition<any, BaseQueryFn<{
    url: string;
    method: AxiosRequestConfig['method'];
    data?: AxiosRequestConfig['data'];
    params?: AxiosRequestConfig['params'];
}, unknown, unknown>, "Policy-Tree" | "Policy", any, "policyApi">>, useGetPolicyDetailsQuery: import("@reduxjs/toolkit/dist/query/react/buildHooks").UseQuery<import("@reduxjs/toolkit/query").QueryDefinition<any, BaseQueryFn<{
    url: string;
    method: AxiosRequestConfig['method'];
    data?: AxiosRequestConfig['data'];
    params?: AxiosRequestConfig['params'];
}, unknown, unknown>, "Policy-Tree" | "Policy", any, "policyApi">>, useLazyGetPolicyDetailsQuery: import("@reduxjs/toolkit/dist/query/react/buildHooks").UseLazyQuery<import("@reduxjs/toolkit/query").QueryDefinition<any, BaseQueryFn<{
    url: string;
    method: AxiosRequestConfig['method'];
    data?: AxiosRequestConfig['data'];
    params?: AxiosRequestConfig['params'];
}, unknown, unknown>, "Policy-Tree" | "Policy", any, "policyApi">>, useCreatePolicyFolderMutation: import("@reduxjs/toolkit/dist/query/react/buildHooks").UseMutation<import("@reduxjs/toolkit/query").MutationDefinition<any, BaseQueryFn<{
    url: string;
    method: AxiosRequestConfig['method'];
    data?: AxiosRequestConfig['data'];
    params?: AxiosRequestConfig['params'];
}, unknown, unknown>, "Policy-Tree" | "Policy", any, "policyApi">>, useEditPolicyFolderMutation: import("@reduxjs/toolkit/dist/query/react/buildHooks").UseMutation<import("@reduxjs/toolkit/query").MutationDefinition<any, BaseQueryFn<{
    url: string;
    method: AxiosRequestConfig['method'];
    data?: AxiosRequestConfig['data'];
    params?: AxiosRequestConfig['params'];
}, unknown, unknown>, "Policy-Tree" | "Policy", any, "policyApi">>, useMovePolicyFolderMutation: import("@reduxjs/toolkit/dist/query/react/buildHooks").UseMutation<import("@reduxjs/toolkit/query").MutationDefinition<any, BaseQueryFn<{
    url: string;
    method: AxiosRequestConfig['method'];
    data?: AxiosRequestConfig['data'];
    params?: AxiosRequestConfig['params'];
}, unknown, unknown>, "Policy-Tree" | "Policy", any, "policyApi">>, useDeletePolicyFolderMutation: import("@reduxjs/toolkit/dist/query/react/buildHooks").UseMutation<import("@reduxjs/toolkit/query").MutationDefinition<any, BaseQueryFn<{
    url: string;
    method: AxiosRequestConfig['method'];
    data?: AxiosRequestConfig['data'];
    params?: AxiosRequestConfig['params'];
}, unknown, unknown>, "Policy-Tree" | "Policy", any, "policyApi">>, useCreatePolicyMutation: import("@reduxjs/toolkit/dist/query/react/buildHooks").UseMutation<import("@reduxjs/toolkit/query").MutationDefinition<any, BaseQueryFn<{
    url: string;
    method: AxiosRequestConfig['method'];
    data?: AxiosRequestConfig['data'];
    params?: AxiosRequestConfig['params'];
}, unknown, unknown>, "Policy-Tree" | "Policy", any, "policyApi">>, useUpdatePolicyMutation: import("@reduxjs/toolkit/dist/query/react/buildHooks").UseMutation<import("@reduxjs/toolkit/query").MutationDefinition<any, BaseQueryFn<{
    url: string;
    method: AxiosRequestConfig['method'];
    data?: AxiosRequestConfig['data'];
    params?: AxiosRequestConfig['params'];
}, unknown, unknown>, "Policy-Tree" | "Policy", any, "policyApi">>, useMovePolicyMutation: import("@reduxjs/toolkit/dist/query/react/buildHooks").UseMutation<import("@reduxjs/toolkit/query").MutationDefinition<any, BaseQueryFn<{
    url: string;
    method: AxiosRequestConfig['method'];
    data?: AxiosRequestConfig['data'];
    params?: AxiosRequestConfig['params'];
}, unknown, unknown>, "Policy-Tree" | "Policy", any, "policyApi">>, useDeletePolicyMutation: import("@reduxjs/toolkit/dist/query/react/buildHooks").UseMutation<import("@reduxjs/toolkit/query").MutationDefinition<any, BaseQueryFn<{
    url: string;
    method: AxiosRequestConfig['method'];
    data?: AxiosRequestConfig['data'];
    params?: AxiosRequestConfig['params'];
}, unknown, unknown>, "Policy-Tree" | "Policy", any, "policyApi">>, useUpdatePolicyDescriptionMutation: import("@reduxjs/toolkit/dist/query/react/buildHooks").UseMutation<import("@reduxjs/toolkit/query").MutationDefinition<any, BaseQueryFn<{
    url: string;
    method: AxiosRequestConfig['method'];
    data?: AxiosRequestConfig['data'];
    params?: AxiosRequestConfig['params'];
}, unknown, unknown>, "Policy-Tree" | "Policy", any, "policyApi">>, useCreateActionablePointMutation: import("@reduxjs/toolkit/dist/query/react/buildHooks").UseMutation<import("@reduxjs/toolkit/query").MutationDefinition<any, BaseQueryFn<{
    url: string;
    method: AxiosRequestConfig['method'];
    data?: AxiosRequestConfig['data'];
    params?: AxiosRequestConfig['params'];
}, unknown, unknown>, "Policy-Tree" | "Policy", any, "policyApi">>, useUpdateActionablePointMutation: import("@reduxjs/toolkit/dist/query/react/buildHooks").UseMutation<import("@reduxjs/toolkit/query").MutationDefinition<any, BaseQueryFn<{
    url: string;
    method: AxiosRequestConfig['method'];
    data?: AxiosRequestConfig['data'];
    params?: AxiosRequestConfig['params'];
}, unknown, unknown>, "Policy-Tree" | "Policy", any, "policyApi">>, useLazyGetActionablePointQuery: import("@reduxjs/toolkit/dist/query/react/buildHooks").UseLazyQuery<import("@reduxjs/toolkit/query").QueryDefinition<any, BaseQueryFn<{
    url: string;
    method: AxiosRequestConfig['method'];
    data?: AxiosRequestConfig['data'];
    params?: AxiosRequestConfig['params'];
}, unknown, unknown>, "Policy-Tree" | "Policy", any, "policyApi">>, useDeleteActionablePointMutation: import("@reduxjs/toolkit/dist/query/react/buildHooks").UseMutation<import("@reduxjs/toolkit/query").MutationDefinition<any, BaseQueryFn<{
    url: string;
    method: AxiosRequestConfig['method'];
    data?: AxiosRequestConfig['data'];
    params?: AxiosRequestConfig['params'];
}, unknown, unknown>, "Policy-Tree" | "Policy", any, "policyApi">>;
