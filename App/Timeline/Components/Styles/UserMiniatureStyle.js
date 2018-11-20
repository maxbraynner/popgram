import { StyleSheet } from 'react-native'
import { Metrics, Fonts } from '../../../General/Themes'

export default StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  picture: {
    marginRight: Metrics.baseMargin,
    height: Metrics.images.medium,
    width: Metrics.images.medium,
    borderRadius: Metrics.images.medium / 2
  },
  username: {
    ...Fonts.style.username
  }
})