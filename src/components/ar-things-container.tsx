import React from 'react'

export interface ArThingsContainerProps {
  onStatusChange: (isOnline: boolean) => void
  onConnectionTypeChange: (type?: ConnectionType) => void
}

export interface ArThingsContainerStates {

}

export class ArThingsContainer extends React.Component<ArThingsContainerProps, ArThingsContainerStates>{
  private onStatusChange = this.props.onStatusChange.bind(this)
  private onlineListener = () => this.props.onStatusChange(true)
  private offlineListener = () => this.props.onStatusChange(false)

  constructor(props: ArThingsContainerProps | Readonly<ArThingsContainerProps>) {
    super(props)
  }


  componentDidMount() {
    window.addEventListener('online', this.onlineListener)
    window.addEventListener('offline', this.offlineListener)

    navigator.connection?.addEventListener('change', (e) => this.props.onConnectionTypeChange(navigator.connection?.type))
  }

  componentWillUnmount() {
    window.removeEventListener('online', this.onlineListener)
    window.removeEventListener('offline', this.offlineListener)
  }

  render() {
    return (
      <>
        {this.props.children}
      </>
    )
  }
}
