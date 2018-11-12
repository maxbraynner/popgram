import { Platform, StyleSheet } from 'react-native'
import { Colors, Metrics, Fonts } from '../../../General/Themes'

export default StyleSheet.create({
  container: {
    backgroundColor: Colors.header,
    justifyContent: 'center',
    alignItems: 'flex-end',
    height: Metrics.headerHeight,
    ...Platform.select({
      ios: {
        shadowColor: Colors.shaddow,
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 2,
      },
      android: {
        elevation: 4
      },
    })
  },
  userPic: {
    marginRight: Metrics.baseMargin * 2,
    height: Metrics.images.small,
    width: Metrics.images.small,
    borderRadius: Metrics.images.small / 2
  },
  logo: {
    color: Colors.logoText,
    position: 'absolute',
    left: 0,
    right: 0,
    textAlign: 'center',
    ...Fonts.style.logo
  }
})