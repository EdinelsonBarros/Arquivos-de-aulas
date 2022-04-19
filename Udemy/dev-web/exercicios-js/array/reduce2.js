const alunos = [
    {nome: 'Edinelson', nota: 7},
    {nome: 'Lídia', nota: 10},
    {nome: 'Daniel', nota: 8},
    {nome: 'João', nota: 6},
    {nome: 'Mauricio', nota: 4},
    {nome: 'Carlos', nota: 9},
    {nome: 'Maria', nota: 8.5}

]

// desafio 1: Todos os alunos são bolsista?
const bolsistastodos = (resultado, bolsista) => resultado && bolsista
console.log(alunos.map(a => a.bolsista).reduce(bolsistastodos))