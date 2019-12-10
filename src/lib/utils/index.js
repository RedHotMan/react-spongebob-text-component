export const spongeBobText = text => {
  let newText = ''
  text.split('').forEach((str, index) => {
    newText += index % 2 === 0 ? str.toLowerCase() : str.toUpperCase()
  })
  return newText
}
