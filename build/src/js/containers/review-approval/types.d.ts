import { ReviewStatuses } from 'app/components/policy-overview-table/types';
export interface ApprovalReviewList {
    title: string;
    titleKey: string;
    status: ReviewStatuses;
    remarks?: string;
}
export interface ReviewApprovalPropTypes {
    approvalReviewList: ApprovalReviewList[];
}
