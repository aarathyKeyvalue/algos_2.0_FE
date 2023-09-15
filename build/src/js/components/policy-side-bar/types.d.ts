import { IFile, IFolder } from 'app/components/folder-tree/types';
import { PolicyGroupSettingsActionTypes } from 'app/components/group-settings-popup/types';
export declare enum MoreOptions {
    'add-group' = 0,
    rename = 1,
    move = 2,
    remove = 3
}
export type IMoreOptionPopup = {
    nodeDetails: IFolder | IFile | null;
    onClose: () => void;
    onOptionSelect: (option: MoreOptions) => void;
    nodeLevel: number;
};
export type IPolicyFolderSettingsData = {
    folderData: IFolder;
    actionType: PolicyGroupSettingsActionTypes;
};
