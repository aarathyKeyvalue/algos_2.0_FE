export type CommentItemPropType = {
    userName: string;
    comment: string;
    commentMentions: string[];
};
export type CommentPopoverPropType = {
    commentList: CommentItemPropType[];
    isResolved: boolean;
    isRead: boolean;
};
