import React, { PureComponent } from 'react';

import {
  StyleSheet,
  Text,
  ScrollView,
  Image,
  TouchableOpacity,
  View
} from 'react-native';

const titleHeader = require('../img/title/title.png')
const back_button = require('../img/back_button/noun_back_636001.png')

export default class TitleComponent extends PureComponent {
  render() {
    const { children, backButton, backPress } = this.props

    return (
      <View style={styles.container}>
        {backButton?
          <TouchableOpacity onPress={() => backPress()} style={styles.backButton}>
            <Image source={back_button}/>
          </TouchableOpacity>: null}
        <Image source={titleHeader}/>
        <Text style={styles.text}>
          <Text>{this.props.title}</Text>
        </Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  backButton: {
    position: 'absolute',
    left: 0,
    top: 15,
    zIndex: 103,
    marginLeft: 10
  },
  container: {
    position: 'relative',
    alignItems: 'center',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center'
  },
  text: {
    color: '#FFFFFF',
    position: 'absolute',
    marginTop: 20,
    backgroundColor: 'rgba(0,0,0,0)',
    fontFamily: 'SanFranciscoText-Regular',
    fontSize: 28
  }
})
