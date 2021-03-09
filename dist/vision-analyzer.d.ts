import '@tensorflow/tfjs-backend-cpu';
import '@tensorflow/tfjs-backend-webgl';
import * as CocoSsd from '@tensorflow-models/coco-ssd';
import React from 'react';
export interface IotAnalyzerProps {
    onPredicted: (predicted: CocoSsd.DetectedObject[]) => void;
    onInitialized: () => void;
    modelUrl: string;
    throttle?: number;
}
export interface IotAnalyzerStates {
    predicted: CocoSsd.DetectedObject[];
}
export declare class IoTAnalyzer extends React.Component<IotAnalyzerProps, IotAnalyzerStates> {
    private analyzer;
    private videoRef;
    constructor(props: IotAnalyzerProps | Readonly<IotAnalyzerProps>);
    intervals: any[];
    componentDidMount(): void;
    componentWillUnmount(): void;
    render(): JSX.Element;
}
