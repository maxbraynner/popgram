import { Platform, StyleSheet } from 'react-native'
import { Colors, Metrics, Fonts } from '../../Themes/index'

export default StyleSheet.create({
  userMiniature: {
    marginLeft: Metrics.baseMargin,
    marginTop: Metrics.baseMargin * 2,
    marginBottom: Metrics.baseMargin
  },
  photo: {
    height: 375,
    width: '100%',
    backgroundColor: 'red'
  },
  details: {
    marginTop: Metrics.baseMargin,
    marginHorizontal: Metrics.baseMargin
  },
  buttons: {
    flexDirection: 'row',
    marginBottom: Metrics.baseMargin
  },
  likeButton: {
    marginRight: Metrics.baseMargin * 2
  },
  username: {
    ...Fonts.style.username
  },
  descriptionContainer: {
    marginBottom: Metrics.baseMargin / 2
  },
  description: {
    ...Fonts.style.description
  },
  showMoreText: {
    color: '#A8A8A8',
    ...Fonts.style.description
  },
  comments: {
    ...Fonts.style.normal
  },
  date: {
    ...Fonts.style.date
  }
})