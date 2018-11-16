export type Author = {
  username: string,
  picture: string,
  _id: string
}

export type Post = {
  _id: string,
  url: string,
  author: Author
  description: string,
  comments: number,
  createdAt: string,
  liked: boolean
}
