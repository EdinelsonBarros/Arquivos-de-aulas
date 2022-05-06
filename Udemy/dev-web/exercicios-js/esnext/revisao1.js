// let e const

{
    var a = 2
    let b = 3
    console.log(b)
}

console.log(a)

// Template String
const produto = 'iPad'
console.log(`${produto} é caro!`)

// Destructuring

const [l, e, ...tras] = "Cod3r"

const alunos = ['Edinelson', 'Lidia', 'Carlos', 'Santana', 'Daniel']

const [aluno1, aluno2, aluno3, aluno4, aluno5] = alunos
console.log(aluno1)

const [x, , y] = [1, 2, 4]
console.log(x, y)

const {idade, nome} = {idade:26, nome:'Edinelson'}

const turma = {
    Edinelson:{
        idade: 26,
        nota: 12
    },
    Lidia: {
        idade: 27,
        nota: 10
    }
}

const {Edinelson, Lidia} = turma
console.log(Lidia)
