export type INode = {
    name: string;
    id: string;
};
export type ITreeSelectorProps = {
    frameworkId?: string;
    onControlSelect: (selectedControl: INode) => void;
    selectedControl?: INode;
};
