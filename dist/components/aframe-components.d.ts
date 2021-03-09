import React from 'react';
export interface Coord {
    x: number;
    y: number;
    z: number;
}
export declare const ARScene: React.FC;
export declare const ARGLFTEntity: React.FC<{
    src: string;
    position: Coord;
    scale?: Coord;
}>;
export declare const ARMarker: React.FC<{
    patternUrl?: string;
    barcodeUrl?: string;
    size: number;
    type: 'pattern' | 'barcode' | 'unknown';
}>;
export declare const ARCamera: React.FC<{
    far?: number;
    fov?: number;
    near?: number;
    lookControl?: boolean;
    onCameraPositionChanged: () => void;
}>;
