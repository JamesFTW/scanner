'use strict'

import React, { Component } from 'react'
import { Screen } from '@shoutem/ui'

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

const add_receipt = require('../img/add_receipt/Add_element.png')

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
        <View style={styles.photoBar}>
        <TouchableOpacity onPress={this.onClick} style={styles.capture}>
            <Text style={{fontSize: 12}}> SNAP </Text>
        </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: 'black'
  },
  preview: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center'
  },
  capture: {
    flex: 0,
    backgroundColor: '#FFFFFF',
    borderRadius: 5,
    padding: 15,
    opacity: 1,
    height: 75,
    width: 75,
    borderRadius: 37.5,
    paddingHorizontal: 20,
    alignSelf: 'center',
    margin: 10,
    position: 'relative'
  },
  photoBar: {
    backgroundColor: 'black',
    position: 'absolute',
    opacity: 0.5,
    bottom: 0,
    width: '100%',
    justifyContent: 'center'
  }
});
