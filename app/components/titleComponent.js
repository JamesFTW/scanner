import React, { Component } from 'react';

import {
  StyleSheet,
  Text,
  ScrollView,
  Image,
  TouchableOpacity,
  View
} from 'react-native';

const titleHeader = require('../img/title/title.png')

export default class TitleComponent extends Component {

  constructor(props) {
    super(props)
    this.state = {
      newMember: true
    }
  }

  render() {
    const children = this.props.children

    return (
      <View style={styles.container}>
        <Image source={titleHeader} />
        <Text style={styles.text}>
          <Text>{this.props.title}</Text>
        </Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    position: 'relative',
    alignItems: 'center'
  },
  text: {
    color: '#F2F2F2',
    position: 'absolute',
    marginTop: 20,
    backgroundColor: 'rgba(0,0,0,0)',
    fontFamily: 'SanFranciscoText-Regular',
    fontSize: 28
  }
})
