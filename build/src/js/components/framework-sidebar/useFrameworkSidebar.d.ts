import { IFile, IFolder } from 'app/components/folder-tree/types';
export declare function useFrameworkSideBar(): {
    createSideBarItems: (frameworks: any) => any;
    sidebarItems: (IFolder | IFile)[];
    selectedItemId: string;
};
