// @flow

import * as React from 'react'
import { ScrollView, View, Text, Image, TouchableOpacity } from 'react-native'
import styles from './Styles/PostScreenStyle'
import Header from '../../General/Components/Header'
import Post from '../../General/Components/Post'
import { Images } from '../../General/Themes'
import alertaEmDesenvolvimento from '../../General/Helpers/Others/alertaEmDesenvolvimento'
import timelineStore from '../../Timeline/Stores/TimelineStore'
import postStore from '../Stores/PostStore'
import { observer } from 'mobx-react'

type Props = {}
type State = {}

const PostScreenObserver = observer(class PostScreen extends React.Component<Props, State> {
  render () {
    const post = timelineStore.posts[postStore.selectedPost.get()]
    return (
      <View style={styles.container}>
        <Header
          left={
            <TouchableOpacity
              onPress={() => this.props.navigation.goBack()}
              style={styles.backButton}>
              <Image source={Images.leftArrow} style={styles.leftArrow} />
              <Text style={styles.headerText}>Foto</Text>
            </TouchableOpacity>
          }
          right={<View />} />
        <ScrollView>
          <Post
            key={post._id}
            post={post}
            onLike={alertaEmDesenvolvimento}
            onComment={alertaEmDesenvolvimento}
            showComments={alertaEmDesenvolvimento} />
        </ScrollView>
      </View>
    )
  }
})

export default PostScreenObserver
