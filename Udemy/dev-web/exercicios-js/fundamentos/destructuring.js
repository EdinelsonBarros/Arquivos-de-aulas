const pessoa = {
    nome: 'Ana',
    idade: 5,
    sexo: 'F',
    endereco: {
        logradouro: 'Rua ABC',
        numero: 1000
    }
}

const { nome, idade, sexo} = pessoa
console.log(nome, idade, sexo)

const { nome: n, idade: i, sexo: s} = pessoa
console.log(n, i, s)

const { sobrenome, bemHumorada = true} = pessoa
console.log(sobrenome, bemHumorada) 

const {endereco: {logradouro, numero, cep}} = pessoa
console.log(logradouro, numero, cep)

