const readInput = require('../helpers/readInput')
const input = readInput('2')

const win = 6
const draw = 3
//Rock, Paper, Scissors
const arr1 = ['A', 'B', 'C']
const arr2 = ['X', 'Y', 'Z']
//1 , 2, 3
//Lose, draw, win
let total = 0

const part1 = () =>
  input.split('\n').map((game) => {
    const gameArray = game.split(' ')
    const [opponent, me] = gameArray
    total += arr2.indexOf(me) + 1

    if (arr2.indexOf(me) === 0 && arr1.indexOf(opponent) === 2)
      return (total += win)
    if (arr2.indexOf(me) === 2 && arr1.indexOf(opponent) === 0) return
    if (arr2.indexOf(me) === arr1.indexOf(opponent)) total += draw
    if (arr2.indexOf(me) > arr1.indexOf(opponent)) total += win
  })

const part2 = () =>
  input.split('\n').map((game) => {
    const gameArray = game.split(' ')
    const [opponent, me] = gameArray

    if (arr2.indexOf(me) === 0) {
      arr1.indexOf(opponent) > 0
        ? (total += arr1.indexOf(opponent))
        : (total += 3)
    }

    if (arr2.indexOf(me) === 1) total += arr1.indexOf(opponent) + 1

    if (arr2.indexOf(me) === 2) {
      arr1.indexOf(opponent) < 2
        ? (total += arr1.indexOf(opponent) + 2)
        : (total += 1)
    }
    if (arr2.indexOf(me) != 0) total += arr2.indexOf(me) * 3
  })

part2(total)
console.log(total)
