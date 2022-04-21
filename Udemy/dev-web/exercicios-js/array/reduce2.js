const alunos = [
    {nome: "João", nota: 7.3, bolsista: false},
    {nome: "Claudio", nota: 9.2, bolsista: true},
    {nome: "Pedro", nota: 9.8, bolsista: true},
    {nome: "Ana", nota: 8.7, bolsita: true}
]


// Desafio 1: Todos os alunos são bolsitas
const todosBolsistas = (resultado, bolsista) => resultado && bolsista
console.log(alunos.map(a => a.bolsista).reduce(todosBolsistas))

// Desafio 2: Algum aluno é bolsista?
const algumBolsista = (resultado, bolsista) => resultado || bolsista
console.log(alunos.map(a => a.bolsista).reduce(algumBolsista))