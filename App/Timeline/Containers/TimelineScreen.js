// @flow
import * as React from 'react'
import { SafeAreaView, ScrollView, StatusBar, View, Text } from 'react-native'
import styles from './Styles/TimelineScreenStyle'
import alertaEmDesenvolvimento from '../../General/Helpers/Others/alertaEmDesenvolvimento'
import Header from '../Components/Header'
import Post from '../Components/Post'
import { Images, Colors } from '../../General/Themes'

const post = {
  _id: 'abc',
  url: Images.photoExample,
  author: {
    username: 'popcodemobile',
    picture: Images.logoExample,
    _id: 'abcdef'
  },
  description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec laoreet massa elit, ac mollis augue tincidunt ut. Sed nec massa et urna venenatis congue. Nullam quis suscipit elit. ',
  comments: 25,
  createdAt: '2018-11-16T18:26:34.158',
  liked: true
}


class TimelineScreen extends React.Component<Props, State> {
  render () {
    const thereAreNoPosts = false

    return (
      <View style={styles.container}>
        <StatusBar backgroundColor={Colors.statusBar} barStyle='light-content' />
        <SafeAreaView style={styles.flex}>
          <Header />
          <ScrollView bounces={false} style={styles.flex}>
            { thereAreNoPosts ? (
                <Text style={styles.noPosts}>Não há postagens disponíveis :(</Text>
              ) : (
                <Post
                  post={post}
                  onLike={alertaEmDesenvolvimento}
                  onComment={alertaEmDesenvolvimento}
                  showComments={alertaEmDesenvolvimento} />
            ) }
          </ScrollView>
        </SafeAreaView>
      </View>
    )
  }
}

export default TimelineScreen
