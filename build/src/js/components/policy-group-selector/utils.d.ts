import { IFolder } from 'app/components/folder-tree/types';
import { IUnFormattedFolder, IUnformattedFile } from './types';
export declare const formatItem: (item: IUnFormattedFolder | IUnformattedFile) => IFolder;
export declare const formatToPolicyFolderOptions: (policyRootItems: Array<IUnFormattedFolder | IUnformattedFile>) => IFolder[];
