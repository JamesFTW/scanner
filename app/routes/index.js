import React from "react"

import { StyleSheet, Text, View, AppRegistry } from "react-native"
import { NativeRouter, Route, Link } from "react-router-native"

import ProfileScreen      from '../screens/ProfileScreen'
import ConfirmationScreen from '../screens/ConfirmationScreen'
import Camera             from '../containers/cameraComponent.js'
import TipScreen          from '../screens/TipScreen'


const App = () => (
  <NativeRouter>
    <View style={{position: 'absolute', height: '100%'}}>
      <Route exact path="/" component={ConfirmationScreen} />
      <Route path="/confirm" component={ConfirmationScreen} />
      <Route path="/tip" component={TipScreen} />
    </View>
  </NativeRouter>
)

export default App
