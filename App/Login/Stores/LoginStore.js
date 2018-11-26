import { observable, flow } from 'mobx'
import { logar } from '../../General/Services/Api'
import _ from 'lodash'
import NavigationService from '../../General/Navigation/NavigationService'

class LoginStore {
  @observable carregando = false
  @observable token = null
  @observable erro = null

  logar = flow(function * (usuario, senha) {
    this.carregando = true
    this.erro = null
    const resposta = yield logar(usuario, senha)
    if (resposta.ok) {
      this.token = resposta.data.token
      NavigationService.navigate('TimelineScreen')
    } else {
      this.erro = _.get(resposta, 'data.message') || 'Erro de rede'
    }
    this.carregando = false
  })
}

const loginStore = new LoginStore()

export default loginStore
