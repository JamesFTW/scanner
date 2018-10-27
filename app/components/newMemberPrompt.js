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
    //This might not need to pass props
    return (
      <View>
        <Image style={styles.backGround} source={add_button}/>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  backGround: {
    marginTop: 10,
    marginBottom: 10
    // alignSelf: 'center'
  }
})
