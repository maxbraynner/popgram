// @flow

import * as React from 'react'
import { Image, View, Text } from 'react-native'
import styles from './Styles/HeaderStyle'
import { Images } from '../../General/Themes'

type Props = {
  userPic: { uri: string } | number
}

export default class Header extends React.Component<Props> {
  render () {
    const { userPic } = this.props

    return (
      <View style={styles.container}>
        <Image style={styles.userPic} source={userPic || Images.fallbackUserPic} />
        <Text style={styles.logo}>Popgram</Text>
      </View>
    )
  }
}