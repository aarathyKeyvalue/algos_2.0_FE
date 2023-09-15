/// <reference types="react" />
export type ISearchFieldProps = {
    value: string;
    placeholder?: string;
    onChange?: (value: string) => void;
    onFocus?: () => void;
    onBlur?: (value: string) => void;
    onKeyUp?: (e: React.KeyboardEvent<HTMLInputElement>) => void;
    onKeyPress?: (e: React.KeyboardEvent<HTMLInputElement>) => void;
    className?: string;
    showSearchIcon?: boolean;
    placeholderKey?: string;
};
