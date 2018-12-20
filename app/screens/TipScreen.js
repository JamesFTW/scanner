import React, { Component } from 'react'
import {
  StyleSheet,
  Text,
  ScrollView,
  Image,
  TouchableOpacity,
  View
} from 'react-native';

import TipComponent    from '../components/tipComponent.js'
import TitleComponent  from '../components/titleComponent.js'
import TitleBackground from '../components/titleBackGround.js'

export default class TipScreen extends Component {
  testPress = () => {
    console.log(this)
  }
  render() {
    return(
      <TitleBackground>
        <TitleComponent title={"Select Tip Amount"}/>
          <View style={styles.tipContainer}>
            <TipComponent tip={this.testPress} />
          </View>
      </TitleBackground>
    )
  }
}

const styles = StyleSheet.create({
  tipContainer: {
    margin: 0,
    position: 'absolute',
    top: '25%'
  }
})
