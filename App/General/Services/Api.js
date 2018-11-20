import { create } from 'apisauce'

const api = create({
  baseURL: 'https://popgram.herokuapp.com/api',
  timeout: 45000
})

export const carregarPosts = () =>
  api.get('/timeline')
