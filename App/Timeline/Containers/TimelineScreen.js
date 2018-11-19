// @flow
import * as React from 'react'
import { ScrollView, Image, View, Text } from 'react-native'
import styles from './Styles/TimelineScreenStyle'
import alertaEmDesenvolvimento from '../../General/Helpers/Others/alertaEmDesenvolvimento'
import Header from '../../General/Components/Header'
import Post from '../../General/Components/Post'
import { Images } from '../../General/Themes'
import timelineStore from '../Stores/TimelineStore'
import { observer } from 'mobx-react'

const TimelineScreenObserver = observer(class TimelineScreen extends React.Component<Props, State> {
  render () {
    const thereAreNoPosts = false

    return (
      <View style={styles.container}>
        <Header
          left={<View />}
          right={<Image style={styles.userPic} source={Images.fallbackUserPic} />}
          center={<Text style={styles.logo}>Popgram</Text>} />
        <ScrollView bounces={false} style={styles.flex}>
          { thereAreNoPosts ? (
              <Text style={styles.noPosts}>Não há postagens disponíveis :(</Text>
            ) : (
              timelineStore.posts.map((post, index) => (
                <Post
                  showCommentBox
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
      </View>
    )
  }
})

export default TimelineScreenObserver
