import { MentionData, MentionPluginTheme } from '@draft-js-plugins/mention';
export interface EntryComponentProps {
    className?: string;
    onMouseDown(event: any): void;
    onMouseUp(event: any): void;
    onMouseEnter(event: any): void;
    role: string;
    id: string;
    'aria-selected'?: boolean | 'false' | 'true';
    theme?: MentionPluginTheme;
    mention: MentionData;
    isFocused: boolean;
    searchValue?: string;
}
export interface CommentInputPropTypes {
    placeholder?: string;
    containerClass?: string;
}
