import { observable } from 'mobx'

class PostStore {
  selectedPost = observable.box(0)
}

const postStore = new PostStore()

export default postStore
