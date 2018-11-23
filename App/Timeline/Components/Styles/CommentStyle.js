import { StyleSheet } from 'react-native'
import { Colors, Metrics, Fonts } from '../../../General/Themes'

export default StyleSheet.create({
  container: {
    alignItems: 'center',
    flexDirection: 'row'
  },
  userPic: {
    marginRight: Metrics.smallMargin,
    height: Metrics.images.regular,
    width: Metrics.images.regular,
    borderRadius: Metrics.images.regular / 2
  },
  comment: {
    flex: 1,
    ...Fonts.style.normal,
    color: Colors.secondaryText
  }
})