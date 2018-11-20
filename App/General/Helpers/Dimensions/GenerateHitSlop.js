// @flow

export default (width: number, height: number) => {
  const minimumWidth = 40
  const minimumHeight = 40

  const clamp = (valor: number, min: number, max: number) => {
    return Math.max(Math.min(valor, max), min)
  }

  const widthDifference = clamp(minimumWidth - width, 0, minimumWidth)
  const heightDifference = clamp(minimumHeight - height, 0, minimumHeight)
  const horizontalMargin = widthDifference / 2
  const verticalMargin = heightDifference / 2

  return {
    left: horizontalMargin,
    right: horizontalMargin,
    top: verticalMargin,
    bottom: verticalMargin
  }
}
