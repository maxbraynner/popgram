/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react'
import { StatusBar, View } from 'react-native'
import AppNavigation from './App/General/Navigation/AppNavigation'
import { Colors, Metrics } from './App/General/Themes'

export default class App extends Component<> {
  render() {
    return (
      <View style={styles.flex}>
        <View style={styles.statusBar}>
          <StatusBar backgroundColor={Colors.statusBar} barStyle='light-content' />
        </View>
        <AppNavigation />
      </View>
    )
  }
}

const styles = {
  statusBar: {
    backgroundColor: Colors.statusBar,
    height: Metrics.statusBarHeight
  },
  flex: {
    flex: 1,
  }
}