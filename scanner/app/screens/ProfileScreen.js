import React, { Component } from 'react';

import {
  StyleSheet,
  Text,
  ScrollView,
  Image,
  TouchableOpacity,
  View
} from 'react-native';

import Background    from '../components/backGroundComponent.js'
import ProfileHeader from '../components/profileHeader.js'

//Passing a component as props.
//Could just pass a sting if I wanted
//Will use to pass stuff later
  //Pass recipts and what not
    //Array of Objects for all the details needed for recipts

  //Research if screens should fetch data or should that happen in the
  //component
    //Looks like screens fetch data

    //Try again doing this fetch stuff with require
const Message = ({value}) => <Text>{value}</Text>

const profilePhoto = require('../img/myProfilePic.jpg')

export default class ProfileScreen extends Component {
  constructor(props) {
    super(props)
    this.state = {
      imageUrl: profilePhoto
    }
  }

  render() {
    return (
    <ScrollView>
      <ScrollView contentContainer={styles.container}>
        <ProfileHeader username="@jamesftw"/>
        <Background message={<Message value='James'/>}/>
      </ScrollView>

      <View style={styles.profileWrapper}>
        <View style={styles.photoPlaceHolder}>
          <Image style={styles.photo} source={this.state.imageUrl} />
        </View>
      </View>
    </ScrollView>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center'
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
