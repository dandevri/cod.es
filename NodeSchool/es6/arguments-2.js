module.exports = function makeImportant(string, number = string.length) {
  return `${string}${'!'.repeat(number)}`
}