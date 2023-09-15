/// <reference types="react" />
export type ICheckboxProps = {
    checked: boolean;
    height?: number;
    onClick?: (event: React.MouseEvent<HTMLElement>) => void;
    disabled?: boolean;
};
