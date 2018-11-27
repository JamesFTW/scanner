import React, { Component } from 'react';

import {
  StyleSheet,
  Text,
  ScrollView,
  Image,
  TouchableOpacity,
  View
} from 'react-native';

import TitleBackground from '../components/titleBackGround.js'
import PaperComponent  from '../components/paperComponent.js'
import PaperHeader     from '../components/paperHeader.js'
import TitleComponent  from '../components/titleComponent.js'

export default class ConfirmationScreen extends Component {
  constructor(props) {
    super(props)
    this.state = {
      title: "Select Food Item"
    }
  }

  render() {
    return (
    <ScrollView contentContainerStyle={{flex: 1}}>
      <TitleComponent title={this.state.title}/>
      <TitleBackground>
        <PaperComponent/>
      </TitleBackground>
    </ScrollView>
    )
  }
}
