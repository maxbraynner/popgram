import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

const BotaoSeguir = ({ ativo = true, rotulo }) => (
  <View
    style={[styles.container, !ativo && { borderColor: '#707070' }]}
  >
    <Text
      style={[styles.rotulo, !ativo && { color: '#707070' }]}
    >
      {rotulo}
    </Text>
  </View>
)

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    borderWidth: 1,
    borderRadius: 4,
    borderColor: '#3897F0',
    paddingVertical: 4,
    paddingHorizontal: 25
  },
  rotulo: {
    fontSize: 13,
    color: '#3897F0'
  }
})

export default BotaoSeguir
