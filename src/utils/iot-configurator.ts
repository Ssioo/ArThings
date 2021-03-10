export enum DeviceConnectionType {
  BLE,
  WIFI,
  LTE,
  UWB,
  UNKNOWN
}

export interface MyIotDevice extends IotDevice {

}

export interface LatLng {
  latitude: number
  longitude: number
  altitude?: number
}

export interface IotDevice {
  address: string
  networkType: DeviceConnectionType
  name?: string
  location?: LatLng
  estimatedDistance: number
  estimatedAzimuth: number
}

export class IotConfigurator {
  myDevice: MyIotDevice | null = null
  otherDevices: IotDevice[] = [] // 서비스에 알려진 다른 디바이스

  constructor() {
  }

  init() {

  }

  syncOtherDevices() {

  }

  async discoverDevices() {

  }
}
