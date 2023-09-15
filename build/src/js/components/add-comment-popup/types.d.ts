export type IAddCommentPopupProps = {
    initialCommentText?: string;
    onSave: (comment: string) => void;
    onCancel: () => void;
};
