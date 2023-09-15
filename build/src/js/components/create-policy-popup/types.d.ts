import { IFolder } from 'app/components/folder-tree/types';
export type ICreatePolicyProps = {
    onClose: () => void;
    hideFrameworkAndControlSelection?: boolean;
    hidePolicyFolderSelection?: boolean;
    defaultTargetFolder?: IFolder | null;
};
