import { IFolder } from 'app/components/folder-tree/types';
export declare enum PolicyGroupSettingsActionTypes {
    create = 0,
    rename = 1
}
export type IPolicyGroupSettingsPopupProps = {
    actionType: PolicyGroupSettingsActionTypes;
    groupData: IFolder;
    onClose: () => void;
    onSave: () => void;
};
