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
import ProfilePhoto  from '../components/profilephoto.js'

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
      imageUrl: profilePhoto,
      test: ''
    }
  }

  render() {
    return (
    <ScrollView>
      <ScrollView contentContainer={styles.container}>
        <ProfileHeader username="@jamesftw"/>
        <Background message={<Message value='James'/>}/>
      </ScrollView>

      <ProfilePhoto imageUrl={this.state.imageUrl}/>
    </ScrollView>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center'
  }
})
