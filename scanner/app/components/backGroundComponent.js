import React, { Component } from 'react';

import {
  StyleSheet,
  Text,
  ScrollView,
  Image,
  TouchableOpacity,
  View
} from 'react-native';

export default class Background extends Component {

  render() {
    //This might not need to pass props
    return (
      <View style={styles.backGround}>
        <Text style={{textAlign: 'center'}}>Hello World {this.props.message}</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  backGround: {
    backgroundColor: '#F2F2F2',
    paddingTop: 80,
    height: 1000
  }
})
