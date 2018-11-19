// @flow

import * as React from 'react'
import { Image, View, Text } from 'react-native'
import styles from './Styles/UserMiniatureStyle'
import { Images } from '../../General/Themes'
import type { ViewStyleProp } from 'react-native/Libraries/StyleSheet/StyleSheet'
import type { Author } from '../Types/PostsTypes'

type Props = {
  author: Author,
  customStyle: ViewStyleProp
}

export default class UserMiniature extends React.Component<Props, State> {
  render () {
    const { author: { picture, username }, customStyle } = this.props

    return (
      <View style={[styles.container, customStyle]}>
        <Image style={styles.picture} source={picture || Images.fallbackUserPic} />
        <Text style={styles.username}>{username}</Text>
      </View>
    )
  }
}