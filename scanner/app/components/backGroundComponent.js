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
    return (
      <ScrollView style={styles.backGround}>
        <Text>Hello World {this.props.message}</Text>
      </ScrollView>
    )
  }
}

const styles = StyleSheet.create({
  backGround: {
    backgroundColor: '#F2F2F2',
    display: 'flex',
    flexDirection: 'column',
    height: "100%"
  }
})
