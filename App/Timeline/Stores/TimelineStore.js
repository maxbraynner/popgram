import { observable } from 'mobx'
import { Images } from '../../General/Themes'

class TimelineStore {
  posts = observable([
    {
      _id: 'abc',
      url: Images.photoExample,
      author: {
        username: 'popcodemobile',
        picture: Images.logoExample,
        _id: 'abcdef'
      },
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec laoreet massa elit, ac mollis augue tincidunt ut. Sed nec massa et urna venenatis congue. Nullam quis suscipit elit. ',
      comments: 25,
      createdAt: '2018-11-16T18:26:34.158',
      liked: false
    },
    {
      _id: 'abcd',
      url: Images.photoExample,
      author: {
        username: 'popcodemobile',
        picture: Images.logoExample,
        _id: 'abcdef'
      },
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec laoreet massa elit, ac mollis augue tincidunt ut. Sed nec massa et urna venenatis congue. Nullam quis suscipit elit. ',
      comments: 25,
      createdAt: '2018-11-16T18:26:34.158',
      liked: false
    }
  ])
}

const timelineStore = new TimelineStore()

export default timelineStore
