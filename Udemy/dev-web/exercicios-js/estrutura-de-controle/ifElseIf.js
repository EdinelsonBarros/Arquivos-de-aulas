Number.prototype.entre = function (inicio, fim) {
    return this >= inicio && this <= fim
}

const imprimirResultadado = function (nota) {
    if (nota.entre(9, 10)) {
        console.log('Quadro de honra')
    } else if (nota.entre(7, 8.99)) {
        console.log('Aprovado')
    } else if (nota.entre(4, 6.99)) {
        console.log('Recuperação')
    } else if (nota.entre(0, 3.99)) {
        console.log('Reprovado')
    } else {
        console.log('Nota inválida')
    }
    console.log('fim')
}
imprimirResultadado(10)
imprimirResultadado(8.9)
imprimirResultadado(6.55)
imprimirResultadado(2.3)
imprimirResultadado(-1)
imprimirResultadado(11)