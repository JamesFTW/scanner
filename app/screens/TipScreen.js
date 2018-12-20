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
  constructor() {
    super()
    this.state = {
      tipPercent: 0
    }
  }
  
  onTip = (tip) => {
    switch (tip) {
      case '0':
      this.setState({tipPercent: 'No Tip'})
        break
      case '1':
      this.setState({tipPercent: .1})
        break
      case '2':
      this.setState({tipPercent: .15})
        break
      case '3':
      this.setState({tipPercent: .2})
      break
      case '4':
      this.setState({tipPercent: 'Other'})
        break
    }
  }
  render() {
    return(
      <TitleBackground>
        <TitleComponent title={"Select Tip Amount"}/>
          <View style={styles.tipContainer}>
            <TipComponent onTip={this.onTip} />
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
