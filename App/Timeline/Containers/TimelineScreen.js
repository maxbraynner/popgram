// @flow
import * as React from 'react'
import { SafeAreaView, ScrollView, StatusBar, View, Text } from 'react-native'
import styles from './Styles/TimelineScreenStyle'
import alertaEmDesenvolvimento from '../../General/Helpers/Others/alertaEmDesenvolvimento'
import Header from '../Components/Header'
import Post from '../Components/Post'
import { Colors } from '../../General/Themes'
import timelineStore from '../Stores/TimelineStore'
import { observer } from 'mobx-react'


const TimelineScreenObserver = observer(class TimelineScreen extends React.Component<Props, State> {
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
                timelineStore.posts.map((post, index) => (
                  <Post
                    key={post._id}
                    post={post}
                    onLike={() => {
                      const { liked: prevLiked } = timelineStore.posts[index]
                      timelineStore.posts[index] = { ...timelineStore.posts[index], liked: !prevLiked }
                    }}
                    onComment={alertaEmDesenvolvimento}
                    showComments={alertaEmDesenvolvimento} />
                ))
            ) }
          </ScrollView>
        </SafeAreaView>
      </View>
    )
  }
})

export default TimelineScreenObserver
