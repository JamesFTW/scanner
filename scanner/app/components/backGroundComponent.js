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
      <ScrollView style={styles.backGround}/>
    )
  }
}

const styles = StyleSheet.create({
  backGround: {
    display: 'flex',
    backgroundColor: '#F2F2F2',
    flex: 1
  }
})
