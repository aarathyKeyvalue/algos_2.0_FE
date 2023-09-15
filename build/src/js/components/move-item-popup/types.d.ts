import { IFile, IFolder } from 'app/components/folder-tree/types';
export type IMoveItemPopupProps = {
    onClose: () => void;
    movingItemData: IFolder | IFile | null;
    onMoveConfirmed: (targetFolderId: string | null) => void;
};
