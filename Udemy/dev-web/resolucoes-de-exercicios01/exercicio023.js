/*
    ler codigo do alunos e suas 3 notas
    calcular a media
    nota1 = 3 nota2 = 3 nota3 = 4

    mostre o código do aluno sua 3 notas, a média calculada e uma mensagem 'Aprovado' se a média for maior que 5 else 'Reprovado'. Repita a operação até que o código lido seja negativo.

*/
function calcularNotaFinal(codigo, nota1, nota2, nota3) {
    let notas = []
    notas.push(nota1)
    notas.push(nota2)
    notas.push(nota3)
    notas.sort((a, b) => a < b ? 1 : -1)
    
    let mediaFinal = (notas[0] * 4 + notas[1] * 3 + notas[2] * 3)/10
    console.log(`Código do Aluno: ${codigo}. Notas: ${nota1}, ${nota2}, ${nota3}. ${mediaFinal < 5 ? 'Reprovado.' : 'Aprovado.'}`)
}

console.log(calcularNotaFinal(123, 3, 4, 2))