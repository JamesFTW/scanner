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
import ProfilePhoto  from '../components/profilePhoto.js'
import MemberInfo    from '../components/newMemberPrompt.js'
import AddReceipt    from '../components/addReceipt.js'

//Pass recipts and what not
  //Array of Objects for all the details needed for recipts

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
    <ScrollView contentContainerStyle={{flex: 1}}>
      <Background>
        <ProfileHeader username="@jamesftw"/>
        <ProfilePhoto height={105} imageUrl={this.state.imageUrl}/>
        <MemberInfo message="james"/>

      </Background>
      <AddReceipt />
    </ScrollView>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    flexDirection: 'column',
    alignItems: 'center',
  }
})
