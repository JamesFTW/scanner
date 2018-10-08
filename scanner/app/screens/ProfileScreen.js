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
const Message = ({value}) => <Text>{value}</Text>

export default class ProfileScreen extends Component {
  render() {
    return (
    <View style={styles.container}>
      <ProfileHeader/>
      <Background message={<Message value='James'/>}/>
    </View>
    )
  }
}

const styles = StyleSheet.create({
  //Styles for component positioning
  contanier: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0
  },
  header: {
    height: 55,
    alignContent: 'center',
    justifyContent: 'center'
  }
})
