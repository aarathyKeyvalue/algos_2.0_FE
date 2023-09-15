export type IButton = {
    id: string;
    labelKey: string;
    defaultLabel: string;
};
export type IToggleButtonProps = {
    buttons: Array<IButton>;
    onButtonClick?: (button: IButton) => void;
    initialSelectedButton?: IButton;
};
