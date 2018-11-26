import { create } from 'apisauce'
import loginStore from '../../Login/Stores/LoginStore'

const api = create({
  baseURL: 'https://popgram.herokuapp.com/api',
  timeout: 5000
})

api.addRequestTransform(request => {
  request.headers['Authentication'] = `Bearer ${loginStore.token}`
})

export const carregarPosts = () =>
  api.get('/timeline')

export const logar = (usuario, senha) =>
  api.post('/login', { username: usuario, password: senha })
