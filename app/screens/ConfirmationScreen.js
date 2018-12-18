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
import Totals          from '../components/totalsComponent.js'
import { payLoad }     from '../data/fakeapi.js'

export default class ConfirmationScreen extends Component {
  constructor(props) {
    super(props)
    this.state = {
      title: "Select Food Item",
      subTotal: 0,
      tax: 0,
      total: 0,
      order: []
    }
  }

  componentDidMount() {
    //this is where I would fetch from orc api
    this.setState({order: payLoad}, () => {
      const order = this.state.order

      const subTotal = this.getSubTotal(order).toFixed(2)
      const tax = this.getTax(subTotal)
      const total = this.getTotal(subTotal, tax)

      this.setState({
        subTotal,
        tax,
        total
      })
    })
  }

  getSubTotal = (order) => {
    let total = 0

    order.map((item) => {
      total += item.quanity * (parseFloat(item.price))
    })

    return total
  }

  getTax = (subTotal) => {
    const taxes = subTotal * .08
    return taxes.toFixed(2)
  }

  getTotal = (subTotal, tax) => {
    const total = Number(subTotal) + Number(tax)

    return total.toFixed(2)
  }

  render() {
    const { order, subTotal, tax, total } = this.state

    console.log(this.state)

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
          <Totals
            SUBTOTAL={subTotal}
            TAXES={tax}
            TOTAL={total}/>
        </PaperComponent>
      </TitleBackground>
    </ScrollView>
    )
  }
}
