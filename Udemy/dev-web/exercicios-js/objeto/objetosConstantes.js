// pessoa aponta para um endereço de memória
const pessoa = {
    nome: 'João'
}
console.log(pessoa)
pessoa.nome = 'Pedro'
console.log(pessoa)

// pessoa  -> 456 -> {...}
//pessoa = {nome: 'Ana'}

Object.freeze(pessoa) // usando o 'freeze' você congela o objeto, não sendo possível altera-lo posteriormente

pessoa.nome = 'Maria'
pessoa.end = 'Rua ABC'
delete pessoa.nome

console.log(pessoa.nome)
console.log(pessoa)

// criando um objeto constante desde o inicio
const pessoaConstante = Object.freeze({nome: 'João', sobrenome: 'Lima'})
console.log(pessoaConstante)