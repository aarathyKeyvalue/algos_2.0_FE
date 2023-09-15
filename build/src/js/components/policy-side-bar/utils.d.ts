import { IFile, IFolder } from 'app/components/folder-tree/types';
type IUnformattedFile = {
    id: string;
    name: string;
    subFolders?: null;
    parentFolderId?: null;
    policies?: null;
};
type IUnFormattedFolder = {
    id: string;
    name: string;
    parentFolderId: string | null;
    subFolders: Array<IUnFormattedFolder>;
    policies: Array<IUnformattedFile>;
};
export declare const formatItem: (item: IUnFormattedFolder | IUnformattedFile) => IFile | IFolder;
export declare const formatPolicyFolders: (policyRootItems: Array<IUnFormattedFolder | IUnformattedFile>) => (IFolder | IFile)[];
export {};
