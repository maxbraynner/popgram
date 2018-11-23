// @flow

import * as React from 'react'
import {
  View,
  Text,
  TouchableOpacity,
  TextInput
} from 'react-native'
import styles from './Styles/LoginScreenStyle'
import Separador from '../Components/Separador'
import Botao from '../Components/Botao'

type Props = {}
type State = {}

export default class LoginScreen extends
  React.Component<Props, State> {
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
            placeholder={'Usuário'}
            style={[styles.inputContainer, { marginBottom: 19 }]}
          />
          <TextInput
            secureTextEntry
            placeholder={'Senha'}
            style={styles.inputContainer}
          />
          <View style={styles.botaoContainer}>
            <Botao />
          </View>
        </View>
      </View>
    )
  }
}