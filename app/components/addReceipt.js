import React, { Component } from 'react';

import {
  StyleSheet,
  Text,
  ScrollView,
  Image,
  TouchableOpacity,
  View
} from 'react-native';

const add_receipt = require('../img/add_receipt/Add_element.png')

export default class AddReceipt extends Component {

  constructor(props) {
    super(props)
    this.state = {
      newMember: true
    }
  }

  render() {
    //This might not need to pass props
    return (
      <View style={styles.container}>
        <View style={styles.circleContainer}>
          <Image style={styles.circle} source={add_receipt}/>
        </View>
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
  }
})
