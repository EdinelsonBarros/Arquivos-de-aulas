/*
    Para usar um módulo que está disponível 
    globalmente é preciso usar a propriedade
    'require' para requerer o modulo a ser 
    utilizado.
*/
const moduloA = require('./moduloA')
const moduloB = require('./moduloB')

console.log(moduloA.ola)
console.log(moduloA.bemVindo)
console.log(moduloA.ateLogo)
console.log(moduloA)

console.log(moduloB)
console.log(moduloB.bomDia)
console.log(moduloB.boaNoite())