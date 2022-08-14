const _ = require('lodash');

//router.get('/test-me2', function(req, res) {
    //let months = ['january', 'februry', 'march', 'april', 'may', 'june', 'july', 'august', 'september', 'october', 'november', 'december']
    //res.send[_.chunk(months, 4)]
//})
const arr = ['jan', 'feb', 'mar', 'apr', 'may', 'jun', 'jul', 'aug', 'sep', 'oct', 'nov', 'dec']
let ans = _.chunk(arr, 4)
console.log(ans)

module.exports.arr= arr;

const num = [1, 3, 5, 7, 9, 11, 13, 15, 17, 19]
let ans2 = _.tail(num)
console.log(ans2)

module.exports.num = num;

const dup1 = [1, 2, 3, 4]
const dup2 = [2, 4, 5, 6]
const dup3 = [3, 2, 5, 6]
const dup4 = [4, 5, 6, 7]
const dup5 = [6, 7, 8, 9]
let dupm = _.union(dup1,dup2,dup3,dup4,dup5);
console.log(dupm)

module.exports.dupm = dupm

const obj = [
["horror", "The Shining"],
 ["drama", "Titanic"],
 ["thriller", "Shutter Island"],
 ["fantasy", "Pans Labyrinth"]
]

let compose = _.fromPairs(obj);
console.log(compose)

module.exports.compose = compose