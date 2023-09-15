export declare enum ILocale {
    en = "en",
    fr = "fr"
}
export interface IBreadCrumbItem {
    label: string;
    path?: string;
}
export interface CommonCounterState {
    currentLang: ILocale;
    showAPView: boolean;
    breadcrumbs?: Array<IBreadCrumbItem>;
    toLogin?: boolean;
    loginError?: string;
}
