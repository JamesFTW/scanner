import React, { PureComponent } from 'react';

import {
  StyleSheet,
  Text,
  View
} from 'react-native';


export default class PaperHeader extends PureComponent {

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.flexContainer}>
          <Text style={styles.text}>ORDERS</Text>
          <Text style={styles.text}>QUANITY</Text>
          <Text style={styles.text}>PRICE</Text>
        </View>
        <View style={styles.underLine}/>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  underLine: {
    position: 'relative',
    marginTop: 5,
    borderWidth: .5,
    borderColor: '#D5D5D5',
  },
  flexContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  text: {
    color: '#ADADAD',
    fontFamily: 'SanFranciscoText-SemiBold',
    fontSize: 14,
    marginLeft: 15,
    marginRight: 20,
    marginTop: 10,
    padding: 10
  }
})
