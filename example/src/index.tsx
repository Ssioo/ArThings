import React from 'react'
import ReactDOM from 'react-dom'
import { IoTAnalyzer } from 'ar-things'

const App = () => {

  return (
    <div>
      <IoTAnalyzer
        modelUrl='interpolationTest.glb'
        onInitialized={() => {
          console.log('Model Initialized')
        }}
        onPredicted={(ps) => {

        }}
      />
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))
