const aluno = 10
const aluno2 = 5
const aluno3 = 8

const obj1 = {aluno, aluno2, aluno3}
console.log(obj1)

const nomeAttr = 'nota'
const valorAttr = 7.87

const obj3 = {}
obj3[nomeAttr] = valorAttr
console.log(obj3)

const obj4 = {[nomeAttr]: valorAttr}
console.log(obj4)

const obj5 = {
    funcao1: function() {
        //...
    },
    funcao2() {
        //...
    }
}

console.log(obj5)