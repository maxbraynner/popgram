import React from 'react'
import { TouchableOpacity, Text, StyleSheet } from 'react-native'

const Botao = ({ onPress }) => (
  <TouchableOpacity onPress={onPress} style={styles.container}>
    <Text style={styles.text}>Entrar</Text>
  </TouchableOpacity>
)

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#3897F0',
    borderRadius: 11,
    paddingVertical: 10,
    paddingHorizontal: 60
  },
  text: {
    fontSize: 14,
    color: '#fff',
    fontFamily: 'OpenSans-SemiBold'
  }
})

export default Botao
