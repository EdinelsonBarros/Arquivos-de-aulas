const contadorA = require('./instanciaUnica')
const contadorB = require('./instanciaUnica')

const contadorC = require('./instanciaNova')() // é necessario chamar a função
const contadorD = require('./instanciaNova')() // é necessario chamar a função

contadorA.inc()
contadorA.inc()
console.log(contadorB.valor, contadorA.valor)

contadorC.inc()
contadorC.inc()
console.log(contadorC.valor, contadorD.valor)
