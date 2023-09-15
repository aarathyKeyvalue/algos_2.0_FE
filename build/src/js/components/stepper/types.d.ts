export interface StepPropType {
    stepNumber: number;
    stepLabel: string;
    stepLabelKey: string;
    activeStep: number;
    handleOnClick?: (step: number) => void;
    navigateTo?: string;
}
export interface StepperPropType {
    steps?: StepPropType[];
    activeStep: number;
    handleStepChange?: (step: number) => void;
}
