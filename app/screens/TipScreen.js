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
      tipPercent: 0,
      showTip: false
    }
  }

  componentDidMount() {
    // console.log(this.props.location.state.total)
  }

  onTip = (tip) => {
    switch (tip) {
      case '0':
      this.setState({
        tipPercent: 'No Tip',
        showTip: false
      })
        break
      case '1':
      this.setState({
        tipPercent: .1,
        showTip: true
      })
        break
      case '2':
      this.setState({
        tipPercent: .15,
        showTip: true
      })
        break
      case '3':
      this.setState({
        tipPercent: .2,
        showTip: true
      })
        break
      case '4':
      this.setState({
        tipPercent: 'Other',
        showTip: false
      })
        break
    }
  }

  back = () => {
    const { tipPercent } = this.state
    this.props.history.goBack()
    this.props.history.push({
      pathname: '/confirm',
      state: {
        tipPercent
      }
    })
  }
  
  render() {
    const { showTip, tipPercent } = this.state
    const { total } = this.props.location.state
    const tipAmount = (total * tipPercent).toFixed(2)
    const totalWithTip = (Number(total) + Number(tipAmount)).toFixed(2)

    return(
      <TitleBackground>
        <TitleComponent
          backButton={true}
          title={"Select Tip Amount"}
          backPress={this.back}
        />
          <View style={styles.tipContainer}>
            <TipComponent onTip={this.onTip} />
            <View style={styles.totalsContainer2}>
              {showTip? <Text style={styles.bill}>Tip amount:</Text>: null}
              {showTip? <Text style={styles.Tip}>{`$${tipAmount}`}</Text> : null}
            </View>
            <View style={styles.totalsContainer}>
              <Text style={styles.bill}>Bill Total:</Text>
              {showTip? <Text style={styles.total}>{`$${totalWithTip}`}</Text>:
               <Text style={styles.total}>{`$${total}`}</Text>}
            </View>
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
  },
  Tip: {
    fontFamily: 'SanFranciscoText-Regular',
    color: '#333333',
    fontSize: 48
  },
  total: {
    fontFamily: 'SanFranciscoText-Bold',
    color: '#333333',
    fontSize: 48
  },
  bill: {
    fontFamily: 'SanFranciscoText-Regular',
    fontSize: 36,
    marginTop: 10,
    marginRight: 20
  },
  totalsContainer: {
    position: 'absolute',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: '50%',
    marginLeft: '12%'
  },
  totalsContainer2: {
    position: 'absolute',
    marginTop: '25%',
    marginLeft: '10%',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
  }
})
