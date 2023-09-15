import { ISection } from 'app/components/section-table/types';
export declare enum PolicyStatuses {
    APPROVED = "APPROVED",
    REVIEW_OVERDUE = "REVIEW_OVERDUE",
    UNDER_REVIEW = "UNDER_REVIEW",
    NOT_REVIEWED = "NOT_REVIEWED",
    UNAPPROVED = "UNAPPROVED"
}
export declare enum ReviewStatuses {
    COMPLETED = "COMPLETED",
    OPEN = "OPEN",
    REJECTED = "REJECTED"
}
export type IPolicyOverviewProps = {
    sections: Array<ISection>;
};
export type IStatusFilterPopupProps = {
    handleFilterUpdate: (option: 'All' | PolicyStatuses) => void;
    selectedFilter: 'All' | PolicyStatuses;
};
export type IStatusFilterOption = 'All' | PolicyStatuses;
