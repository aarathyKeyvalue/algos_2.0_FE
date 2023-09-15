/// <reference types="react" />
export declare enum ButtonTypes {
    Primary = "Primary",
    'Primary-disabled' = "Primary-disabled",
    'Primary-negative' = "Primary-negative",
    Secondary = "Secondary",
    'Secondary-Green' = "Secondary-Green",
    GreenOutline = "GreenOutline",
    RedOutline = "RedOutline"
}
export type IButtonProps = {
    children?: JSX.Element | string | (JSX.Element | string)[];
    type?: ButtonTypes;
    onClick?: (event: React.MouseEvent<HTMLElement>) => void;
    className?: string;
    width?: number;
    height?: number;
};
