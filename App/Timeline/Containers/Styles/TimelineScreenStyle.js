import { StyleSheet } from 'react-native'
import { Colors, Metrics, Fonts } from '../../../General/Themes'

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.background
  },
  flex: {
    flex: 1,
  },
  noPosts: {
    ...Fonts.style.normal
  },
  userPic: {
    marginRight: Metrics.baseMargin * 2,
    height: Metrics.images.small,
    width: Metrics.images.small,
    borderRadius: Metrics.images.small / 2
  },
  logo: {
    color: Colors.logoText,
    textAlign: 'center',
    ...Fonts.style.logo
  }
})