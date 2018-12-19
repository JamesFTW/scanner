import React, { Component } from 'react'
import {
  StyleSheet,
  Text,
  ScrollView,
  Image,
  TouchableOpacity,
  View
} from 'react-native'

const checkmark = require('../img/checkmark/Yes.png')
const x         = require('../img/x/Group.png')

export default class TotalConfirmation extends Component {
  render() {
    return (
      <View style={styles.backGround}>
        <View style={styles.title}>
          <Text style={styles.text}>Is this amount correct?</Text>
        </View>
        <View style={styles.flexButtons}>
          <View style={styles.line}></View>
            <Image style={styles.check} source={x} />
          <Text style={styles.no}>No</Text>
          <View style={styles.line}></View>
            <Image style={styles.check} source={checkmark} />
          <Text style={styles.yes}>Yes</Text>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  flexButtons: {
    display: 'flex',
    flexDirection: 'row',
    height: '50%'
  },
  line: {
    borderRightWidth: 1,
    borderRightColor: '#BDBDBD'
  },
  no : {
    fontFamily: 'SanFranciscoText-Bold',
    color: '#EB5757',
    fontSize: 18,
    marginTop: 10,
    paddingRight: '24%',
    marginLeft: 50
  },
  yes: {
    fontFamily: 'SanFranciscoText-Bold',
    color: '#6FCF97',
    fontSize: 18,
    marginTop: 10,
    marginLeft: 40
  },
  check: {
    marginLeft: 10,
    marginTop: 10
  },
  backGround: {
    position: 'absolute',
    width: '100%',
    height: 98.01,
    backgroundColor: '#F2F2F2',
    borderRadius: 5,
    display: 'flex',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.25,
    shadowRadius: 8,
    bottom: 0,
    marginBottom: 100,
  },
  title: {
    marginTop: 10,
    borderBottomWidth: 1,
    paddingBottom: 10,
    borderBottomColor: '#BDBDBD'
  },
  text: {
    alignSelf: 'center',
    color: '#4F4F4F',
    fontFamily: 'SanFranciscoText-SemiBold',
    fontSize: 24,
    borderBottomColor: '#4F4F4F'
  }
})
