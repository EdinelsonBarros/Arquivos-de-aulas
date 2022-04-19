const produtos = [
    {nome: 'Notebook', preco: 3499, fragil: true},
    {nome: 'iPad Pro', preco: 4199, fragil: true},
    {nome: 'Copo de Vidro', preco: 12.49, fragil: true},
    {nome: 'Copo de Plástico', preco: 18.99, frasil: false}
]

console.log(produtos.filter(function(p){
    return false
}))

const caro = produtos => produtos.preco >=500
const fragil = produtos => produtos.fragil

console.log(produtos.filter(caro).filter(fragil))

// minha vez
const alunos = [
    {nome: 'Edinelson', nota: 7},
    {nome: 'Lídia', nota: 10},
    {nome: 'Daniel', nota: 8},
    {nome: 'João', nota: 6},
    {nome: 'Mauricio', nota: 4},
    {nome: 'Carlos', nota: 9},
    {nome: 'Maria', nota: 8.5}

]

const aprovados = alunos => alunos.nota >= 7
const reprovados = alunos => alunos.nota < 7
const destaques = alunos => alunos.nota > 8
console.log('DESTAQUES')
console.log(alunos.filter(destaques))
console.log('APROVADOS')
console.log(alunos.filter(aprovados))
console.log('REPROVADOS')
console.log(alunos.filter(reprovados))