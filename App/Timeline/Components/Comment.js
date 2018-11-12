// @flow

import * as React from 'react'
import { TextInput, Image, View, Text } from 'react-native'
import styles from './Styles/CommentStyle'

type Props = {
  comment?: string,
  onComment?: () => {},
  userPic: { uri: string } | number
}

type State = {
  comment: ?string
}

export default class Comment extends React.Component<Props, State> {
  constructor (props: Props) {
    super(props)
    this.state = { comment: props.comment ? null : '' }
  }

  onChangeText = (comment) => {
    this.setState({ comment })
  }

  render () {
    const { userPic, comment, onComment } = this.props
    const MAX_LENGTH_COMMENT = 100

    return (
      <View style={styles.container}>
        <Image style={styles.userPic} source={userPic} />
        { comment ? (
          <Text style={styles.comment}>{comment}</Text>
        ) : (
          <TextInput
            returnKeyType={'send'}
            maxLength={MAX_LENGTH_COMMENT}
            style={styles.comment}
            onSubmitEditing={onComment}
            onChangeText={this.onChangeText}
            placeholder={'Adicione um comentário'} />
        )}
      </View>
    )
  }
}