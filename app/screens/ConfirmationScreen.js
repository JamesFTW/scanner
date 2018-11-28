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
import ProfilePhoto    from '../components/profilePhoto.js'
import ItemComponent   from '../components/itemsComponent.js'
import { payLoad }     from '../data/fakeapi.js'

const profilePhoto = require('../img/myProfilePic.jpg')
const total = 0

export default class ConfirmationScreen extends Component {
  constructor(props) {
    super(props)
    this.state = {
      title: "Select Food Item",
      total: 0,
      order: []
    }
  }

  componentDidMount() {
    //this is where I would fetch from orc api
    this.setState({order: payLoad}, () => {
      const order = this.state.order

      order.map((item) => {
        total += item.price
      })

      this.setState({
        total: total.toFixed(2)
      })
    })
  }

  render() {
    const order = this.state.order

    return (
    <ScrollView contentContainerStyle={{flex: 1}}>
      <TitleComponent title={this.state.title}/>
      <TitleBackground>
        <PaperComponent>
          <PaperHeader/>
          {order.map((item, i) => {
            return (
              <ItemComponent key={i}
                order={item.order}
                quanity={item.quanity}
                price={`$${item.price.toFixed(2)}`}
              />
            )
          })}
        </PaperComponent>
      </TitleBackground>
    </ScrollView>
    )
  }
}
