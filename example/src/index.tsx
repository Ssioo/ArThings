import React from 'react'
import ReactDOM from 'react-dom'
import { IoTVisionOverlay } from 'ar-things/src'

const App = () => {

  return (
    <div>
      <IoTVisionOverlay
        modelUrl='interpolationTest.glb'
        onInitialized={() => {
          console.log('Model Initialized')
        }}
        onPredicted={(ps) => {
          console.log(ps)
        }}
      />
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))
