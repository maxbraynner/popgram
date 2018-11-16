import { Platform, StyleSheet } from 'react-native'
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
  }
})