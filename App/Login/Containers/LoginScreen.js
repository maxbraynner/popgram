// @flow

import * as React from 'react'
import {
  View,
  Text,
  TextInput,
  ActivityIndicator
} from 'react-native'
import styles from './Styles/LoginScreenStyle'
import Separador from '../Components/Separador'
import Botao from '../Components/Botao'
import loginStore from '../Stores/LoginStore'
import { observer } from 'mobx-react'

type Props = {}
type State = {}

@observer
export default class LoginScreen extends
  React.Component<Props, State> {

  state = {
    usuario: '',
    senha: ''
  }

  logar = () => {
    const { usuario, senha } = this.state
    loginStore.logar(usuario, senha)
  }

  render () {
    return (
      <View style={styles.container}>
        <View style={styles.logoContainer}>
          <Text style={styles.logo}>
            Popgram
          </Text>
        </View>
        <Separador />
        <View style={styles.formContainer}>
          <TextInput
            onChangeText={usuario => this.setState({ usuario })}
            placeholder={'Usuário'}
            style={[styles.inputContainer, { marginBottom: 19 }]}
          />
          <TextInput
            secureTextEntry
            onChangeText={senha => this.setState({ senha })}
            placeholder={'Senha'}
            style={styles.inputContainer}
          />
          {!!loginStore.erro && (
            <Text style={styles.erro}>{loginStore.erro}</Text>
          )}
          <View style={styles.botaoContainer}>
            {loginStore.carregando ? (
              <ActivityIndicator
                size={'large'}
                color={'blue'}
              />
            ) : (
              <Botao onPress={this.logar} />
            )}
          </View>
        </View>
      </View>
    )
  }
}