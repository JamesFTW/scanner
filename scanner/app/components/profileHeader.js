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
      <Image style={styles.profile_styles} source={profileHeader} />
    )
  }
}

const styles = StyleSheet.create({
  //Styles for component positioning
  profile_styles: {
    alignContent: 'center',
    justifyContent: 'center'
  }
})
