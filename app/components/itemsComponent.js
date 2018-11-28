import React, { PureComponent } from 'react';

import {
  StyleSheet,
  Text,
  View
} from 'react-native';


export default class ItemComponent extends PureComponent {

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.flexContainer}>
          <Text style={styles.text}>{this.props.order}</Text>
          <Text style={styles.quanity}>{this.props.quanity}</Text>
          <Text style={styles.text}>{this.props.price}</Text>
        </View>
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
    marginBottom: 20
  },
  text: {
    color: '#333333',
    fontFamily: 'SanFranciscoText-SemiBold',
    fontSize: 18,
    marginLeft: 15,
    marginRight: 20,
    marginTop: 10
  },
  quanity: {
    position: 'absolute',
    marginLeft: '50%',
    paddingTop: 10,
    color: '#333333',
    fontFamily: 'SanFranciscoText-SemiBold',
    fontSize: 18,
  }
})
