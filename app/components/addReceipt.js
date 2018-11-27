
import React, { Component } from 'react'

import {
  StyleSheet,
  ScrollView,
  Image,
  TouchableOpacity,
  View,
  CameraRoll
} from 'react-native'

import {RNCamera} from 'react-native-camera'

const add_receipt = require('../img/add_receipt/Add_element.png')

export default class AddReceipt extends Component {

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

  componentDidMount = () => {
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
  /**************************************************************************************
  In order to get the camera working have to make a new screen with everything built out.
  Take photo button etc.
  ****************************************************************************************/

  render() {
    //This might not need to pass props
    return (
      <View style={styles.container}>
        <RNCamera
          ref={(ref) => {
            this.camera = ref
          }}
          style={styles.preview}/>
        <TouchableOpacity onPress={this.onClick} style={styles.circleContainer}>
          <Image style={styles.circle} source={add_receipt}/>
        </TouchableOpacity>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    alignSelf:'flex-end',
    alignItems: 'center',
    bottom:0,
    paddingRight:26,
    paddingBottom: 34
  },
  circleContainer: {
    borderRadius: 40,
    width: 80,
    height: 80,
    backgroundColor: '#2D9CDB',
    shadowColor: '#000000',
    shadowOffset: { width: 2, height: 4},
    shadowOpacity: 0.25,
    shadowRadius: 4
  },
  circle: {
    position: 'absolute',
    alignSelf: 'center',
    marginTop: 22
  },
  preview: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center'
  },
})
