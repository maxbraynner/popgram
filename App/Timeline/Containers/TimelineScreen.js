// @flow
import * as React from 'react'
import { FlatList, Image, View, Text, ActivityIndicator } from 'react-native'
import styles from './Styles/TimelineScreenStyle'
import alertaEmDesenvolvimento from '../../General/Helpers/Others/alertaEmDesenvolvimento'
import Header from '../../General/Components/Header'
import Post from '../../General/Components/Post'
import { Images } from '../../General/Themes'
import timelineStore from '../Stores/TimelineStore'
import { observer } from 'mobx-react'

@observer
export default class TimelineScreen extends React.Component<Props, State> {
  componentDidMount () {
    timelineStore.carregarPosts()
  }

  render () {
    const thereAreNoPosts = false

    return (
      <View style={styles.container}>
        <Header
          left={<View />}
          right={<Image style={styles.userPic} source={Images.fallbackUserPic} />}
          center={<Text style={styles.logo}>Popgram</Text>} />
        <View style={styles.flex}>
          {timelineStore.carregando ? (
            <ActivityIndicator style={{ marginTop: 40 }} size={'large'} color={'blue'} />
          ) : (
            <FlatList
              data={timelineStore.posts}
              keyExtractor={post => post._id}
              renderItem={({ item: post, index }) => (
                <Post
                  showCommentBox
                  post={post}
                  onLike={() => {
                    const { liked: prevLiked } = timelineStore.posts[index]
                    timelineStore.posts[index] = { ...timelineStore.posts[index], liked: !prevLiked }
                  }}
                  onComment={alertaEmDesenvolvimento}
                  showComments={alertaEmDesenvolvimento} />
              )}
            />
          )}
        </View>
      </View>
    )
  }
}
