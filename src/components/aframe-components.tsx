import React from 'react'

export interface Coord {
  x: number
  y: number
  z: number
}

export const ARScene: React.FC = (props) => (
  React.createElement(
    'a-scene',
    {
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
    },
    props.children
  )
)

export const ARGLFTEntity: React.FC<{
  src: string,
  position: Coord,
  scale?: Coord
}> = ({ src, position, scale, children }) => {
  return React.createElement(
    'a-glft-model',
    {
      src: src,
      scale: scale ? `${scale.x} ${scale.y} ${scale.z}` : undefined,
      position: `${position.x} ${position.y} ${position.z}`
    },
    children
  )
}

export const ARMarker: React.FC<{
  patternUrl?: string,
  barcodeUrl?: string,
  size: number,
  type: 'pattern' | 'barcode' | 'unknown'
}> = ({ patternUrl, barcodeUrl, size, type, children }) => {
  return React.createElement(
    'a-marker',
    {
      url: patternUrl,
      value: barcodeUrl,
      size,
      type,
    },
    children
  )
}

export const ARCamera: React.FC<{
  far?: number
  fov?: number
  near?: number
  lookControl?: boolean,
  onCameraPositionChanged: () => void,
}> = ({ far , fov, near, lookControl = true, onCameraPositionChanged }) => {

  const element = React.createElement(
    'a-camera',
    {
      id: 'ar-camera',
      far,
      fov,
      near,
      'wasd-controls': true,
      'look-controls': lookControl,
      position: '0 1.6 0',
      tick: () => {
        //const pos = element.el.object3D.position
        onCameraPositionChanged()
      }
    },
    null
  )
  return element
}
