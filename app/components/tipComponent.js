import React, { Component } from 'react'
import {
  StyleSheet,
  Text,
  ScrollView,
  Image,
  TouchableOpacity,
  View
} from 'react-native'

const NO_TIP = 'No Tip'
const TenPercent = '10%'
const TwentyPercent = '15%'
const FifteenPercent = '20%'
const OTHER = 'Other'

export default class TipComponent extends Component {
  render() {
    const { onTip } = this.props

    const tipTypes = [
      NO_TIP,
      TenPercent,
      TwentyPercent,
      FifteenPercent,
      OTHER
    ].map((type, i) => {
      if(type === 'Other') {
        return (
          <TouchableOpacity
            key={i.toString()}
            onPress={() => onTip(i.toString())}
            style={styles.other}>
            <Text style={styles.button}>{type}</Text>
          </TouchableOpacity>
        )
      } else {
        return (
          <TouchableOpacity
            key={i.toString()}
            onPress={() => onTip(i.toString())}
            style={styles.buttonBorader}>
            <Text style={styles.button}>{type}</Text>
          </TouchableOpacity>
        )
      }
    })

    return (
      <View style={styles.tipContainer}>
        <View style={styles.tipButton}>
          <View style={styles.buttons}>
            {tipTypes}
          </View>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  tipButton: {
    position: 'relative',
    width: '100%',
    backgroundColor: 'white',
    borderRadius: 10,
    borderColor: '#D5D5D5',
    borderWidth: 1
  },
  buttons: {
    position: 'relative',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  tipContainer: {
    height: 67,
    display: 'flex',
    flexDirection: 'row',
    paddingLeft: 10,
    paddingRight: 10
  },
  button: {
    position: 'relative',
    fontFamily: 'SanFranciscoText-Light',
    fontSize: 18,
    color: '#333333',
    lineHeight: 67,
    borderRightWidth: 1
  },
  buttonBorader: {
    position: 'relative',
    justifyContent: 'center',
    borderRightWidth: 1,
    borderRightColor: '#BDBDBD',
    paddingLeft: 15,
    paddingRight: 15
  },
  other: {
    paddingLeft: 15,
    paddingRight: 15
  },
  selectedButton: {
    position: 'relative',
    display: 'flex',
    flexDirection: 'row',
    backgroundColor: 'red'
  }
})
