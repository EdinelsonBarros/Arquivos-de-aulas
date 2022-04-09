// O operador ternário composto por 3 partes, a primeira parte é um função que retornara verdadeiro ou falso, a segunda parte e o resultado de verdadeiro (true) e a terceira parte o resultado se for falso (false)
const resultado = nota => nota >= 7 ?'Aprovado' : 'Reprovado'

console.log(resultado(7.1))
console.log(resultado(6.7))