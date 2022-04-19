const alunos = [
    {nome: 'Edinelson', nota: 7},
    {nome: 'Lídia', nota: 10},
    {nome: 'Daniel', nota: 8},
    {nome: 'João', nota: 6},
    {nome: 'Mauricio', nota: 4},
    {nome: 'Carlos', nota: 9},
    {nome: 'Maria', nota: 8.5}

]

console.log(alunos.map(a => a.nota))
const resultados = alunos.map(a => a.nota).reduce(function(acumulador, atual){
    console.log(acumulador, atual)
    return acumulador + atual
}, 0)

console.log(resultados)