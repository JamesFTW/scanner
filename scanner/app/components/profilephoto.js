import React, { Component } from 'react';

import {
  StyleSheet,
  Text,
  ScrollView,
  Image,
  TouchableOpacity,
  View
} from 'react-native';

export default class ProfilePhoto extends Component {

  render() {
    return (
      <View style={styles.profileWrapper}>
        <View style={styles.photoPlaceHolder}>
          <Image style={styles.photo} source={this.props.imageUrl} />
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  backGround: {
    backgroundColor: '#F2F2F2',
    paddingTop: 80,
    height: 1000
  },
  photo: {
    height: 104.64,
    width: 104.64,
    marginTop: 5,
    borderRadius: 105/2,
    alignSelf: 'center'
  },
  photoPlaceHolder: {
    width: 116,
    height: 116,
    borderRadius: 116/2,
    backgroundColor: '#F2F2F2',
    marginBottom: 20,
  },
  profileWrapper: {
    alignSelf: 'center',
    position: 'absolute',
    paddingBottom: 100,
    marginTop: 110,
  },
  photoBoarder: {
    height: 104.64,
    width: 104.64,
    marginTop: 5,
    borderRadius: 105/2,
    alignSelf: 'center'
  }
})
