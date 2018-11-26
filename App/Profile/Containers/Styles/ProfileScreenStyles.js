import { StyleSheet } from 'react-native'
import { Colors, Fonts, Metrics } from '../../../General/Themes'

export default StyleSheet.create({
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
  },
  statsContainers: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingTop: Metrics.doubleBaseMargin,
    paddingHorizontal: Metrics.largeMargin,
    justifyContent: 'space-between'
  },
  profilePicture: {
    width: 88,
    height: 88,
    borderRadius: 88 / 2,
    backgroundColor: '#ccc'
  },
  profileUsername: {
    marginTop: Metrics.baseMargin,
    fontSize: Fonts.size.regular,
    fontFamily: Fonts.type.bold,
    color: Colors.headerText
  },
  userStats: {
    flexDirection: 'row',
    marginBottom: Metrics.baseMargin,
    justifyContent: 'space-between'
  },
  userStatsItem: {
    marginHorizontal: Metrics.baseMargin
  },
  noRightMargin: {
    marginRight: 0
  },
  noLeftMargin: {
    marginLeft: 0
  },
  descriptionContainer: {
    paddingHorizontal: Metrics.largeMargin,
    marginVertical: Metrics.baseMargin
  },
  titleDescription: {
    fontSize: Fonts.size.small,
    fontFamily: Fonts.type.base,
    color: Colors.secondaryText,
    marginBottom: Metrics.baseMargin
  },
  textDescription: {
    fontSize: 13,
    fontFamily: Fonts.type.base
  },
  gridContentContainer: {
    alignItems: 'stretch',
    justifyContent: 'space-between'
  },
  gridContainer: {
    marginVertical: Metrics.baseMargin
  },
  postMiniatureContainer: {
    marginHorizontal: 2,
    marginVertical: 2
  },
  postMiniature: {
    width: 122,
    height: 122,
    backgroundColor: '#ccc'
  }
})