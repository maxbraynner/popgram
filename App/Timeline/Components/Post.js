// @flow

import * as React from 'react'
import { TouchableOpacity, Image, View, Text } from 'react-native'
import styles from './Styles/PostStyle'
import { Images } from '../../General/Themes'
import UserMiniature from './UserMiniature'
import ImageButton from './ImageButton'
import _ from 'lodash'
import moment from 'moment'
import Comment from './Comment'
import type { Post } from '../Types/PostsTypes'

type Props = {
  post: Post,
  onLike: string => void,
  onComment: string => void,
  showComments: () => void
}

type State = {
  limitDescription: boolean
}

export default class Header extends React.Component<Props, State> {
  constructor (props: Props) {
    super(props)
    this.state = { limitDescription: true }
  }

  get description () {
    const MAX_LENGTH = 115
    const { description } = this.props.post
    return this.state.limitDescription ? _.truncate(description, {length: MAX_LENGTH}) : description
  }

  toggleLimitDescription = () => {
    this.setState(prevState => ({ limitDescription: !prevState.limitDescription }))
  }

  render () {
    const { post, post: {author}, onLike, onComment, showComments } = this.props

    return (
      <View>
        <UserMiniature
          author={author}
          customStyle={styles.userMiniature} />
        <Image style={styles.photo} source={post.url} />
        <View style={styles.details}>
          <View style={styles.buttons}>
            <ImageButton
              onPress={onLike}
              containerStyle={styles.likeButton}
              source={post.liked ? Images.liked : Images.like} />
            <ImageButton source={Images.comment} onPress={showComments} />
          </View>
          <View style={styles.descriptionContainer}>
            <Text style={styles.description}>
              <Text style={styles.username}>{author.username + ' '}</Text>
              {this.description}
              <Text style={styles.showMoreText} onPress={this.toggleLimitDescription}>
                {` ${this.state.limitDescription? 'mais' : 'menos'}`}
                </Text>
            </Text>
          </View>
          <TouchableOpacity onPress={showComments}>
            <Text style={styles.comments}>
              {`Ver todos os ${post.comments} comentários`}
            </Text>
          </TouchableOpacity>
          <Comment userPic={Images.fallbackUserPic} onComment={onComment} />
          <Text style={styles.date}>{moment(post.createdAt).fromNow()}</Text>
        </View>
      </View>
    )
  }
}