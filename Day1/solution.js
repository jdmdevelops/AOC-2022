const fs = require('fs')
let input
try {
  input = fs.readFileSync('./input.txt', 'utf8')
} catch (err) {
  console.error(err)
}

let largestValues = []

const reducer = (accumulator, item) => {
  if (item === '') {
    if (largestValues.length < 3) largestValues.push(accumulator)
    if (accumulator > largestValues[0]) largestValues.splice(0, 1, accumulator)
    largestValues.sort((a, b) => a - b)
    accumulator = 0
  }
  return accumulator + Number(item)
}

input.split(/\r?\n/).reduce(reducer, 0)
const total = largestValues.reduce((accumulator, value) => {
  return accumulator + value
}, 0)
console.log(total)
