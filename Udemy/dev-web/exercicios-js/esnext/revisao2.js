//Arrow Function
const soma = (a, b, c) => a + b * c
console.log(soma(1, 2, 3)) 

const dobro = a => a * 2
console.log(dobro(10))

// Arrow function (this)
const lexico1 = () => console.log(this === exports)
const lexico2 =  lexico1.bind({})
lexico1() // em uma função tradicional o 'this' pode mudar, o mesmo não acontece em um função Arrow
lexico2() // em uma função Arrow o 'this' sempre aponta para 'exports'

// parametro default
function log(texto = 'node') {
    console.log(texto)
}
log()

// operador rest
function total (...numeros) {
    let total = 0
    numeros.forEach(n => total += n)
    return total
}
console.log(total(2, 3, 4, 5))