export interface ComponentData {
    props: {
        [key: string]: any;
    };
    id: string;
    name: string;
    layerName?: string;
    isHidden?: boolean;
    isLocked?: boolean;
}
export interface PageData {
    props: {
        [key: string]: any;
    };
    setting: {
        [key: string]: any;
    };
    id?: number;
    title?: string;
    desc?: string;
    coverImg?: string;
    uuid?: string;
    latestPublishAt?: string;
    updatedAt?: string;
    isTemplate?: boolean;
    isHot?: boolean;
    isNew?: boolean;
    author?: string;
    status?: string;
}
export declare const commonDefaultProps: {
    actionType: string;
    url: string;
    height: string;
    width: string;
    paddingLeft: string;
    paddingRight: string;
    paddingTop: string;
    paddingBottom: string;
    borderStyle: string;
    borderColor: string;
    borderWidth: string;
    borderRadius: string;
    boxShadow: string;
    opacity: number;
    position: string;
    left: string;
    top: string;
    right: string;
};
export declare const textDefaultProps: {
    actionType: string;
    url: string;
    height: string;
    width: string;
    paddingLeft: string;
    paddingRight: string;
    paddingTop: string;
    paddingBottom: string;
    borderStyle: string;
    borderColor: string;
    borderWidth: string;
    borderRadius: string;
    boxShadow: string;
    opacity: number;
    position: string;
    left: string;
    top: string;
    right: string;
    text: string;
    fontSize: string;
    fontFamily: string;
    fontWeight: string;
    fontStyle: string;
    textDecoration: string;
    lineHeight: string;
    textAlign: string;
    color: string;
    backgroundColor: string;
};
export declare const imageDefaultProps: {
    actionType: string;
    url: string;
    height: string;
    width: string;
    paddingLeft: string;
    paddingRight: string;
    paddingTop: string;
    paddingBottom: string;
    borderStyle: string;
    borderColor: string;
    borderWidth: string;
    borderRadius: string;
    boxShadow: string;
    opacity: number;
    position: string;
    left: string;
    top: string;
    right: string;
    imageSrc: string;
};
export declare const shapeDefaultProps: {
    actionType: string;
    url: string;
    height: string;
    width: string;
    paddingLeft: string;
    paddingRight: string;
    paddingTop: string;
    paddingBottom: string;
    borderStyle: string;
    borderColor: string;
    borderWidth: string;
    borderRadius: string;
    boxShadow: string;
    opacity: number;
    position: string;
    left: string;
    top: string;
    right: string;
    backgroundColor: string;
};
export declare const componentsDefaultProps: {
    'l-text': {
        props: {
            actionType: string;
            url: string;
            height: string;
            width: string;
            paddingLeft: string;
            paddingRight: string;
            paddingTop: string;
            paddingBottom: string;
            borderStyle: string;
            borderColor: string;
            borderWidth: string;
            borderRadius: string;
            boxShadow: string;
            opacity: number;
            position: string;
            left: string;
            top: string;
            right: string;
            text: string;
            fontSize: string;
            fontFamily: string;
            fontWeight: string;
            fontStyle: string;
            textDecoration: string;
            lineHeight: string;
            textAlign: string;
            color: string;
            backgroundColor: string;
        };
    };
    'l-image': {
        props: {
            actionType: string;
            url: string;
            height: string;
            width: string;
            paddingLeft: string;
            paddingRight: string;
            paddingTop: string;
            paddingBottom: string;
            borderStyle: string;
            borderColor: string;
            borderWidth: string;
            borderRadius: string;
            boxShadow: string;
            opacity: number;
            position: string;
            left: string;
            top: string;
            right: string;
            imageSrc: string;
        };
    };
    'l-shape': {
        props: {
            actionType: string;
            url: string;
            height: string;
            width: string;
            paddingLeft: string;
            paddingRight: string;
            paddingTop: string;
            paddingBottom: string;
            borderStyle: string;
            borderColor: string;
            borderWidth: string;
            borderRadius: string;
            boxShadow: string;
            opacity: number;
            position: string;
            left: string;
            top: string;
            right: string;
        };
    };
};
export declare const isEditingProp: {
    isEditing: {
        type: BooleanConstructor;
        default: boolean;
    };
};
export declare const transformToComponentProps: (props: {
    [key: string]: any;
}, extraProps?: {
    [key: string]: any;
} | undefined) => {
    [x: string]: any;
};
export default componentsDefaultProps;
