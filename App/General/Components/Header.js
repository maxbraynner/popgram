// @flow

import * as React from 'react'
import { Image, View, Text } from 'react-native'
import styles from './Styles/HeaderStyle'
import { Images } from '../Themes/index'

type Props = {
}

export default class Header extends React.Component<Props> {
  render () {
    const { left, center, right } = this.props

    return (
      <View style={styles.container}>
        {left}
        {right}
        <View style={styles.center}>{center}</View>
      </View>
    )
  }
}