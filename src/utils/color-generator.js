export default function generateColor(hexSymbols) {
  let result = '#'

  while (result.length < 7) {
    const randomIndex = Math.floor(Math.random() * hexSymbols.length)
    const randomSymbol = hexSymbols[randomIndex]
    result += randomSymbol
  }

  return result
}
