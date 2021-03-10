import * as CocoSsd from '@tensorflow-models/coco-ssd'
import React, { createRef } from 'react'
import { VisionAnalyzer } from '../utils/vision-analyzer'
import { ARGLFTEntity, ARScene } from './aframe-components'

export interface IotAnalyzerProps {
  onPredicted: (predicted: CocoSsd.DetectedObject[]) => void
  onInitialized: () => void
  modelUrl: string
  throttle?: number
}

export interface IotAnalyzerStates {
  predicted: CocoSsd.DetectedObject[]
}

export class IoTVisionOverlay extends React.Component<IotAnalyzerProps, IotAnalyzerStates> {
  private analyzer = new VisionAnalyzer()
  private videoRef = createRef<HTMLVideoElement>()

  constructor(props: IotAnalyzerProps | Readonly<IotAnalyzerProps>) {
    super(props)
    this.analyzer.init(this.props.onInitialized)
  }

  intervals: any[] = []

  componentDidMount() {
    this.intervals.push(
      setInterval(() => {
        this.analyzer.predictFromVideo(this.videoRef.current)
          .then((predicted) => {
            this.props.onPredicted(predicted)
            this.setState({ predicted })
          })
      }, this.props.throttle || 1000 / 30)
    )
  }

  componentWillUnmount() {
    this.intervals.forEach((d) => clearInterval(d))
    this.analyzer.clear()
  }

  render() {
    return (
      <div>
        <video
          ref={this.videoRef}
          autoPlay
          muted
          playsInline
          controls={false}
        />
        <ARScene>
          {this.state.predicted.map((p, idx) => {
            return (
              <ARGLFTEntity
                key={idx.toString()}
                src={this.props.modelUrl}
                position={{ x: 0, y: 1.6, z: -10 }}
                scale={{ x: 2, y: 2, z: 2 }}
              />
            )
          })}
        </ARScene>
      </div>
    )
  }
}
