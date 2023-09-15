import React from 'react';
import { HeaderPropType } from 'app/components/listView/types';
export interface StyleProp {
    headerContainer?: () => React.CSSProperties;
    rowContainer?: () => React.CSSProperties;
    header?: () => React.CSSProperties;
    row?: () => React.CSSProperties;
    container?: () => React.CSSProperties;
}
export type ISection = {
    id: string;
    title: string;
    items: Array<any>;
};
export type ISectionTableProps = {
    sections: Array<ISection>;
    showHeader?: boolean;
    style?: StyleProp;
    headers?: Array<HeaderPropType>;
    renderSectionTitleAdornment?: (section: ISection) => JSX.Element;
    renderListItem?: (type: string, value: string | number) => JSX.Element | null;
    renderHeaderItem?: (item: HeaderPropType) => JSX.Element | null;
    emptyListText?: string;
    emptyListTextKey?: string;
    emptySectionsListText?: string;
    emptySectionsListTextKey?: string;
};
export type ISectionProps = {
    sectionData: ISection;
    renderSectionTitleAdornment?: (section: ISection) => JSX.Element;
    listHeaders?: Array<HeaderPropType>;
    renderListItem?: (type: string, value: string | number) => JSX.Element | null;
    style?: StyleProp;
    emptyListText?: string;
    emptyListTextKey?: string;
};
