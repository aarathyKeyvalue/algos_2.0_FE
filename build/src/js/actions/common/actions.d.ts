import { IBreadCrumbItem } from 'app/reducers/common/types';
export declare const setLanguage: import("@reduxjs/toolkit").ActionCreatorWithPayload<string, string>;
export declare const toggleActionablePointView: import("@reduxjs/toolkit").ActionCreatorWithPayload<boolean, string>;
export declare const setBreadcrumbs: import("@reduxjs/toolkit").ActionCreatorWithPayload<IBreadCrumbItem[], string>;
export declare const clearBreadcrumbs: import("@reduxjs/toolkit").ActionCreatorWithoutPayload<"CLEAR_BREADCRUMBS">;
export declare const navigateToLogin: import("@reduxjs/toolkit").ActionCreatorWithPayload<{
    status: number;
}, string>;
export declare const loginError: import("@reduxjs/toolkit").ActionCreatorWithPayload<{
    message: string;
}, string>;
export declare const logout: import("@reduxjs/toolkit").ActionCreatorWithoutPayload<"LOGOUT">;
export declare const clearLoginStatus: import("@reduxjs/toolkit").ActionCreatorWithoutPayload<"CLEAR_LOGIN_STATUS">;
