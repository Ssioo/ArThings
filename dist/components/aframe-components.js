"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ARCamera = exports.ARMarker = exports.ARGLFTEntity = exports.ARScene = void 0;
var react_1 = __importDefault(require("react"));
var ARScene = function (props) { return (react_1.default.createElement('a-scene', {
    'vr-mode-ui': 'enabled: false;',
    embedded: true,
    style: {
        display: 'block',
        position: 'relative',
        height: '100%',
        width: '100%',
    },
    renderer: 'logarithmicDepthBuffer: true;',
    arjs: 'trackingMethod: best; sourceType: webcam; debugUIEnabled: true;'
}, props.children)); };
exports.ARScene = ARScene;
var ARGLFTEntity = function (_a) {
    var src = _a.src, position = _a.position, scale = _a.scale, children = _a.children;
    return react_1.default.createElement('a-glft-model', {
        src: src,
        scale: scale ? scale.x + " " + scale.y + " " + scale.z : undefined,
        position: position.x + " " + position.y + " " + position.z
    }, children);
};
exports.ARGLFTEntity = ARGLFTEntity;
var ARMarker = function (_a) {
    var patternUrl = _a.patternUrl, barcodeUrl = _a.barcodeUrl, size = _a.size, type = _a.type, children = _a.children;
    return react_1.default.createElement('a-marker', {
        url: patternUrl,
        value: barcodeUrl,
        size: size,
        type: type,
    }, children);
};
exports.ARMarker = ARMarker;
var ARCamera = function (_a) {
    var far = _a.far, fov = _a.fov, near = _a.near, _b = _a.lookControl, lookControl = _b === void 0 ? true : _b, onCameraPositionChanged = _a.onCameraPositionChanged;
    var element = react_1.default.createElement('a-camera', {
        id: 'ar-camera',
        far: far,
        fov: fov,
        near: near,
        'wasd-controls': true,
        'look-controls': lookControl,
        position: '0 1.6 0',
        tick: function () {
            //const pos = element.el.object3D.position
            onCameraPositionChanged();
        }
    }, null);
    return element;
};
exports.ARCamera = ARCamera;
