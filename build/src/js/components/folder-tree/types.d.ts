/// <reference types="react" />
export type IFile = {
    id: string;
    name: string;
    subItems: null;
    parentFolderId?: string | null;
    navigateTo?: string | null;
};
export type IFolder = {
    id: string | null;
    name: string;
    subItems: Array<IFolder | IFile>;
    parentFolderId?: string | null;
    navigateTo?: string | null;
};
export type IFolderTreeProps = {
    rootItems: Array<IFolder | IFile>;
    selectedFileId?: string;
    handleFileClick?: (fileId: string, navigateTo: string | null | undefined) => void;
    renderCallToActions?: (nodeData: IFolder | IFile, level: number) => JSX.Element;
    ctaActiveNodeData?: IFolder | IFile | null;
    emptyFolderText?: string;
    enableMultiSelectFiles?: boolean;
    handleCheckBoxClick?: (file: IFile) => void;
    checkedFileIds?: Array<string>;
    checkDisabledFileIds?: Array<string>;
    showFolderIcon?: boolean;
    paddingOffset?: number;
};
export type ITreeNodeProps = {
    item: IFolder | IFile;
    level?: number;
    selectedFileId?: string;
    handleFileClick?: (fileId: string, navigateTo: string | null | undefined) => void;
    openParentNode?: () => void;
    hideChildNodes: boolean;
    renderCallToActions?: (nodeData: IFolder | IFile, level: number) => JSX.Element;
    ctaActiveNodeData?: IFolder | IFile | null;
    emptyFolderText?: string;
    paddingOffset?: number;
    enableMultiSelectFiles?: boolean;
    handleCheckBoxClick?: (file: IFile) => void;
    checkedFileIds?: Array<string>;
    checkDisabledFileIds?: Array<string>;
    showFolderIcon?: boolean;
};
