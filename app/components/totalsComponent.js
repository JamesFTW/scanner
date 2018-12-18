import React, { PureComponent } from 'react';

import {
  StyleSheet,
  Text,
  View
} from 'react-native';


export default class Totals extends PureComponent {

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.flexContainer}>
          <Text style={styles.text}>SUBTOTAL: </Text>
          <Text style={styles.text}>TAXES: </Text>
          <Text style={styles.text}>TOTAL: </Text>
        </View>
        <View style={styles.flexContainer}>
          <Text style={styles.text}>{this.props.SUBTOTAL}</Text>
          <Text style={styles.text}>{this.props.TAXES}</Text>
          <Text style={styles.total}>{this.props.TOTAL}</Text>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-end'
  },
  flexContainer: {
    marginBottom: 20,
    marginTop: 30
  },
  text: {
    color: '#ADADAD',
    fontFamily: 'SanFranciscoText-SemiBold',
    fontSize: 18,
    marginLeft: 15,
    marginRight: 20,
    marginTop: 10,
    textAlign: 'right'
  },
  prices: {
    color: '#ADADAD',
    fontFamily: 'SanFranciscoText-SemiBold',
    fontSize: 18,
    marginLeft: 15,
    marginRight: 20,
    marginTop: 10
  },
  total: {
    color: '#2D9CDB',
    fontFamily: 'SanFranciscoText-SemiBold',
    fontSize: 18,
    marginLeft: 15,
    marginRight: 20,
    marginTop: 10,
    textAlign: 'right'
  },
})
