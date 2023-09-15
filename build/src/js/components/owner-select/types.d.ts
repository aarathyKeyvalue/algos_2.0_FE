/// <reference types="react" />
export type IOwner = {
    id: string;
    name: string;
    title: string;
    avatarUrl?: string;
};
export interface OwnerPropType {
    owner: {
        name: string;
        title: string;
        id: string;
        avatarUrl?: string;
    };
    noRemoval: boolean;
    style?: {
        initial: () => React.CSSProperties;
    };
    onRemoveClick?: () => void;
}
export type IOwnerSelectProps = {
    onOwnerListUpdate: (newOwners: Array<IOwner>) => void;
    selectedOwners: Array<IOwner>;
    allOwnersList: Array<IOwner>;
};
