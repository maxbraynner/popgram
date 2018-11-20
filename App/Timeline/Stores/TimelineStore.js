import { observable, flow } from 'mobx'
import { carregarPosts } from '../../General/Services/Api'

class TimelineStore {
  @observable posts = []
  @observable carregando = false
  @observable erro = null

  carregarPosts = flow(function * () {
    this.carregando = true
    const resposta = yield carregarPosts()
    if (resposta.ok) {
      this.posts = resposta.data
    } else {
      this.erro = resposta.data.message
    }
    this.carregando = false
  })
}

const timelineStore = new TimelineStore()

export default timelineStore
