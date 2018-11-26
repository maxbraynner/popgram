import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

const Contador = ({ valor, rotulo, customStyle }) => (
  <View style={[styles.container, customStyle]}>
    <Text style={styles.valor}>{valor}</Text>
    <Text style={styles.rotulo}>{rotulo}</Text>
  </View>
)

const styles = StyleSheet.create({
  container: {
    alignItems: 'center'
  },
  valor: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#000'
  },
  rotulo: {
    fontSize: 13,
    color: '#707070'
  }
})

export default Contador