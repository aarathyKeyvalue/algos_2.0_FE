export declare enum TooltipRenderStyles {
    rightBottom = "rightBottom"
}
export type ITooltipProps = {
    text: string;
    textKey?: string;
    top?: number;
    bottom?: number;
    left?: number;
    right?: number;
    renderStyle?: TooltipRenderStyles;
};
