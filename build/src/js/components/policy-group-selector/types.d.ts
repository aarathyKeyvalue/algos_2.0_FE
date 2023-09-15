export type INode = {
    name: string;
    id: string | null;
};
export type IPolicyGroupSelectorProps = {
    onPolicyGroupSelect: (selectedFolderItem: INode) => void;
    selectedPolicyGroup?: INode | null;
    showSearch?: boolean;
    migratingFileOrFolder?: {
        id: string;
        name: string;
        parentFolderId: string | null;
        isFolder: boolean;
    };
};
export type IUnformattedFile = {
    id: string;
    name: string;
    subFolders?: null;
    parentFolderId?: null;
    policies?: null;
};
export type IUnFormattedFolder = {
    id: string;
    name: string;
    parentFolderId: string | null;
    subFolders: Array<IUnFormattedFolder>;
    policies: Array<IUnformattedFile>;
};
