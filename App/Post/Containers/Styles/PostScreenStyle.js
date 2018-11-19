import { StyleSheet } from 'react-native'
import { Colors, Metrics, Fonts } from '../../../General/Themes'

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.background
  },
  backButton: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  headerText: {
    ...Fonts.style.h5,
    fontFamily: Fonts.type.semiBold,
    color: Colors.headerText
  },
  leftArrow: {
    width: Metrics.images.small,
    height: Metrics.images.small,
    marginHorizontal: Metrics.doubleBaseMargin
  }
})