import React, { Component } from 'react';

import {
  StyleSheet,
  Text,
  ScrollView,
  Image,
  TouchableOpacity,
  View
} from 'react-native';

export default class PaperComponent extends Component {

  constructor(props) {
    super(props)
    this.state = {
      newMember: true
    }
  }

  render() {
    const children = this.props.children

    return (
      <ScrollView contentContainerStyle={styles.backGround}>
        {children}
      </ScrollView>
    )
  }
}

const styles = StyleSheet.create({
  backGround: {
    position: 'relative',
    flexGrow: 1,
    flexDirection: 'column',
    backgroundColor: '#FFFFFF',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    marginLeft: 11,
    marginRight: 11,
    marginTop: 10,
    padding: 10
  }
})