// ES8: Object.values/Object.entries
const obj = {a: 1, b: 2, c:3 }
console.log(Object.values(obj))
console.log(Object.entries(obj))

const turma = {
    Edinelson: {
        nota: 9,
        idade: 26,
        sexo: "M"
    },
    Lidia: {
        nota: 10,
        idade: 27,
        sexo: "F"

    }
}
console.log(Object.entries(turma))

// Melhorias na notação literal de objetos
const nome = 'Carla'
const pessoa = {
    nome,
    ola(){
        return 'Oi galera!'
    }
}
console.log(pessoa.nome, pessoa.ola())

// Class
class Animal {}
class Cachorro extends Animal {
    falar() {
        return 'Au au!'
    }
}

console.log(new Cachorro().falar())