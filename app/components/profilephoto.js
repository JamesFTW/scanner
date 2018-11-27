import React, { PureComponent } from 'react';

import {
  StyleSheet,
  Text,
  ScrollView,
  Image,
  TouchableOpacity,
  View
} from 'react-native';

export default class ProfilePhoto extends PureComponent {
  render() {
    const photoDems = StyleSheet.create({
      photo: {
        height: this.props.height,
        width: this.props.height,
        marginTop: 5,
        borderRadius: this.props.height/2,
        alignSelf: 'center'
      }
    })
    return (
      <View style={styles.profileWrapper}>
        <View style={styles.photoPlaceHolder}>
          <Image height={this.props.height} style={photoDems.photo} source={this.props.imageUrl} />
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
