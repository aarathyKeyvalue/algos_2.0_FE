import { PolicyStatuses, ReviewStatuses } from 'app/components/policy-overview-table/types';
export type IReviewStatusChipProps = {
    status: PolicyStatuses | ReviewStatuses;
    className?: string;
};
