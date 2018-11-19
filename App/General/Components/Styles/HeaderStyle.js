import { Platform, StyleSheet } from 'react-native'
import { Colors, Metrics, Fonts } from '../../Themes/index'

export default StyleSheet.create({
  container: {
    backgroundColor: Colors.header,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
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
  center: {
    position: 'absolute',
    left: 0,
    right: 0
  }
})