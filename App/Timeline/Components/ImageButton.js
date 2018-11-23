// @flow
import * as React from 'react'
import { Image, TouchableOpacity } from 'react-native'
import _ from 'lodash'
import generateHitSlop from '../../General/Helpers/Dimensions/GenerateHitSlop'

type Props = {
  source: number,
  onPress?: () => mixed,
  containerStyle?: Object,
  imageStyle?: Object
}

export default class ImageButton extends React.Component<Props> {
  render () {
    const { source, onPress, containerStyle, imageStyle } = this.props
    const sourceAsset = Image.resolveAssetSource(source)
    const width = _.get(sourceAsset, 'width') || 0
    const height = _.get(sourceAsset, 'height') || 0

    return (
      <TouchableOpacity
        onPress={onPress}
        style={containerStyle}
        hitSlop={generateHitSlop(width, height)}>
        <Image style={imageStyle} source={source} />
      </TouchableOpacity>
    )
  }
}
