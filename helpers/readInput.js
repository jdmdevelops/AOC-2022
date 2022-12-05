const fs = require('fs')

module.exports = function (day) {
  let input
  try {
    input = fs.readFileSync(`../input/input.day${day}.txt`, 'utf8')
  } catch (err) {
    console.error(err)
  }
  return input
}
