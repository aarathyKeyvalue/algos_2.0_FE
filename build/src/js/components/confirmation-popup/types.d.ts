/// <reference types="react" />
import { ButtonTypes } from 'app/atoms/button/types';
export type IConfirmationPopupProps = {
    primaryButtonText?: string;
    primaryButtonType?: ButtonTypes;
    primaryButtonOnClick?: () => void;
    primaryButtonClassName?: string;
    secondaryButtonText?: string;
    secondaryButtonType?: ButtonTypes;
    secondaryButtonOnClick?: () => void;
    secondaryButtonClassName?: string;
    mainText?: string;
    subText?: string;
    extraOptions?: JSX.Element | JSX.Element[];
    wrapperClassName?: string;
    subTextClassName?: string;
};
