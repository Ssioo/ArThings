import '@tensorflow/tfjs-backend-cpu'
import '@tensorflow/tfjs-backend-webgl'
import * as CocoSsd from '@tensorflow-models/coco-ssd'
import React, { Component, createRef, useRef } from 'react'
import { ARGLFTEntity, ARScene } from '../components/aframe-components'

export class VisionAnalyzer {
  model: CocoSsd.ObjectDetection | null = null
  isModelLoaded: boolean = false

  public init(onLoaded: () => void) {
    CocoSsd.load({ base: 'lite_mobilenet_v2' })
      .then((m) => {
        this.model = m
        this.isModelLoaded = true
        onLoaded()
      })
  }

  public clear() {
    this.model?.dispose()
  }

  async predictFromVideo(video: HTMLVideoElement | null): Promise<CocoSsd.DetectedObject[]> {
    if (video && this.isModelLoaded) {
      return await this.model!.detect(video)
    } else {
      return []
    }
  }
}
