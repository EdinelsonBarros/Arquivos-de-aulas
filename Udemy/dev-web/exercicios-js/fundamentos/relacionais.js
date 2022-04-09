// operadores relacionais sempre retornaram o valor true (verdadeiro) ou false (falso)
console.log('a)', '1' == 1)
console.log('b)', '1' === 1)
console.log('c)', '3' != 3)
console.log('d)', '3' !== 3)

console.log('e)', 3 < 2)
console.log('f)', 3 > 2)
console.log('g)', 3 <= 2)
console.log('h)', 3 >= 2)

const d1 = new Date(0)
const d2 = new Date(0)
console.log('i)', d1 === d2)
console.log('j)', d1 == d2)
console.log('k)', d1.getTime() === d2.getTime())

console.log('l)', undefined == null)
console.log('m)', undefined === null)