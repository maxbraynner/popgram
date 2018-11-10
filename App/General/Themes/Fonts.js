const type = {
  logo: 'Pacifico-Regular',
  base: 'OpenSans-Regular',
  bold: 'OpenSans-Bold',
  emphasis: 'OpenSans-Italic'
}

const size = {
  h1: 38,
  h2: 34,
  h3: 30,
  h4: 26,
  h5: 20,
  h6: 19,
  large: 16,
  regular: 14,
  medium: 13,
  small: 12,
  tiny: 8.5
}

const style = {
  h1: {
    fontFamily: type.bold,
    fontSize: size.h1
  },
  h2: {
    fontFamily: type.bold,
    fontSize: size.h2
  },
  h3: {
    fontFamily: type.bold,
    fontSize: size.h3
  },
  h4: {
    fontFamily: type.bold,
    fontSize: size.h4
  },
  h5: {
    fontFamily: type.bold,
    fontSize: size.h5
  },
  h6: {
    fontFamily: type.bold,
    fontSize: size.h6
  },
  normal: {
    fontFamily: type.base,
    fontSize: size.regular
  },
  description: {
    fontFamily: type.base,
    fontSize: size.medium
  },
  emphasis: {
    fontFamily: type.emphasis,
    fontSize: size.regular
  },
  logo: {
    fontSize: size.h5,
    fontFamily: type.logo
  }
}

export default {
  type,
  size,
  style
}