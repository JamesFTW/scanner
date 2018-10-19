import React, { Component } from 'react';

import {
  StyleSheet,
  Text,
  ScrollView,
  Image,
  TouchableOpacity,
  View
} from 'react-native';

const profileHeader = require('../img/Profile_header/Profile_header.png')

export default class ProfileHeader extends Component {

  render() {
    return (
      <View style={styles.container}>
        <Image source={profileHeader} />
        <Text style={styles.text}>
          <Text>{this.props.username}</Text>
        </Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  //Styles for component positioning
  container: {
    position: 'relative',
    alignItems: 'center',
  },
  text: {
    color: '#F2F2F2',
    position: 'absolute',
    marginTop: 50,
    backgroundColor: 'rgba(0,0,0,0)',
    fontFamily: 'SanFranciscoText-Regular',
    fontSize: 24
  }
})
