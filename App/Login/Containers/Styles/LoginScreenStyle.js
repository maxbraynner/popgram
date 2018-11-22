import { StyleSheet } from 'react-native'
import { Colors } from '../../../General/Themes'

export default StyleSheet.create({
  container: {
    flex: 1
  },
  logoContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Colors.header
  },
  logo: {
    color: '#2E2E2E',
    fontSize: 60,
    fontFamily: 'Pacifico-Regular'
  },
  formContainer: {
    flex: 1,
    paddingTop: 55,
    backgroundColor: Colors.background,
    paddingHorizontal: 41
  },
  inputContainer: {
    borderWidth: 1,
    borderColor: '#A8A8A8',
    borderRadius: 6,
    paddingVertical: 11,
    paddingHorizontal: 16
  },
  botaoContainer: {
    marginTop: 27,
    alignItems: 'center'
  }
})