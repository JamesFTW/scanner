
import React, { Component } from 'react'

import {
  AppRegistry,
  Dimensions,
  StyleSheet,
  Text,
  ScrollView,
  Image,
  Button,
  TouchableOpacity,
  View,
  CameraRoll
} from 'react-native'

import {RNCamera} from 'react-native-camera'

const back_button = require('../img/back_button/noun_back_636001.png')

export default class Camera extends Component {

  constructor(props) {
    super(props)
    this.state = {
      newMember: true
    }
  }

  _requestPermissions = async () => {
    if (Platform.OS === 'android') {
      const result = await PermissionsAndroid.request(PermissionsAndroid.PERMISSIONS.CAMERA)
      return result === PermissionsAndroid.RESULTS.GRANTED || result === true
    }
    return true
  }

  componentDidMount() {
    ({ _, status }) => {
      if (status !== 'PERMISSION_GRANTED') {
        this._requestPermissions()
      }
    }
  }

  _onBarCodeRead = (e) => {
    console.log(`Barcode Found! Type: ${e.type}\nData: ${e.data}`)
  }

  onClick = async () => {
    if (this.camera) {
      const options = { quality: 0.5, base64: true }
      const data = await this.camera.takePictureAsync(options)
      console.log(data.uri)
    }

  }

  render() {
    //This might not need to pass props
    return (
      <View style={styles.container}>
        <RNCamera
            ref={ref => {
              this.camera = ref;
            }}
            style = {styles.preview}
            type={RNCamera.Constants.Type.back}
            flashMode={RNCamera.Constants.FlashMode.on}
            permissionDialogTitle={'Permission to use camera'}
            permissionDialogMessage={'We need your permission to use your camera phone'}
            onGoogleVisionBarcodesDetected={({ barcodes }) => {
              console.log("barcode", barcodes)
            }}
        />
        <View style={styles.photoContainer}>
          <TouchableOpacity style={styles.photoBar}>
            <TouchableOpacity style={styles.outterCapture}>
              <TouchableOpacity onPress={this.onClick} style={styles.capture}/>
            </TouchableOpacity>
          </TouchableOpacity>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column'
  },
  preview: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center'
  },
  capture: {
    backgroundColor: '#FFFFFF',
    padding: 15,
    height: 75,
    width: 75,
    borderRadius: 40,
    alignSelf: 'center',
    margin: 5,
    position: 'relative'
  },
  photoContainer: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
    justifyContent: 'center'
  },
  photoBar: {
    backgroundColor: 'rgba(0,0,0,.26)',
    width: '100%'
  },
  outterCapture: {
    height: 84,
    width: 84,
    borderRadius: 42,
    backgroundColor: 'rgba(255,250,250,.22)',
    margin: 5,
    alignSelf: 'center',
    position: 'relative'
  }
})
