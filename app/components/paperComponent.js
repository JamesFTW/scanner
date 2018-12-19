import React, { PureComponent } from 'react';

import {
  StyleSheet,
  Text,
  ScrollView,
  Image,
  TouchableOpacity,
  View
} from 'react-native';

export default class PaperComponent extends PureComponent {

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
    display: 'flex',
    height: '100%',
    flexDirection: 'column',
    backgroundColor: '#FFFFFF',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    marginLeft: 11,
    marginRight: 11,
    marginTop: 10,
    marginBottom: '90%'
  }
})
