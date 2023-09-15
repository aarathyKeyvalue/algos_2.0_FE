/// <reference types="react" />
export type IDropDownItem = {
    label: string;
    value: string;
    id?: string;
    labelKey?: string;
};
export type IDropDownProps = {
    items: IDropDownItem[];
    optionsHeaderText?: string;
    showSearch?: boolean;
    searchPlaceholder?: string;
    selectedItem?: IDropDownItem;
    handleItemSelect?: (item: IDropDownItem) => void;
    renderItem?: (item: IDropDownItem) => JSX.Element;
    noOptionsText?: string;
    placeholderKey?: string;
    containerClass?: string;
};
