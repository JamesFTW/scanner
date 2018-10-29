import React, { Component } from 'react';

import {
  StyleSheet,
  Text,
  ScrollView,
  Image,
  TouchableOpacity,
  View
} from 'react-native';

const add_button  = require('../img/add_element/Add_element.png')
const add_receipt = require('../img/add_receipt/Add_element.png')

//Change name to something more descriptive later

export default class MemberInfo extends Component {

  constructor(props) {
    super(props)
    this.state = {
      newMember: true
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <Image style={styles.backGround} source={add_button}/>
        <Text style={styles.title}>Add receipt.</Text>
        <Text style={styles.description}>When you add receipts they will appear on your profile.</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    marginTop: 80
  },
  backGround: {
    marginTop: 10,
    marginBottom: 10
  },
  title: {
    fontFamily: 'SanFranciscoText-Regular',
    fontSize: 38,
    fontWeight: 'normal',
    color: '#333333',
    marginTop: 10,
    marginBottom: 10,
  },
  description: {
    fontFamily: 'SanFranciscoText-Regular',
    marginTop: 10,
    fontSize: 17,
    paddingLeft: 0,
    paddingRight: 0,
    fontWeight: 'normal',
    color: '#333333',
    alignSelf: 'center',
    textAlign: 'center'
  }
})
