console.log(module.exports === this)
console.log(module.exports === exports)
console.log(typeof module.exports)

this.a = 12
exports.b = 13
module.exports.c = 14

console.log(this)

exports.a = 10

console.log(this)
console.log(module.exports)

exports = null

console.log(this)

module.exports = {
    nome: 'Edinelson'
}
module.exports = {
    nome: 'Lidia'
}
console.log(typeof module)


module.exports = {
    nome: 'Vanusa'
}
console.log(module.exports)