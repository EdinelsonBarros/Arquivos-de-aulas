/*
    Criar uma função para calcular o valor a ser pago de anuidade de uma associação. A função recebe como
parâmetro um inteiro que representa o mês (1 - janeiro, 2 - fevereiro…) que foi paga e o valor da anuidade. A
anuidade deve ser paga no mês de janeiro. Por mês, é cobrado 5% de juros (sob o regime de juros
compostos). O retorno deve ser o valor a ser pago para o respectivo mês escolhido.

M = C * (1 + i)^n

*/

const { valor } = require("../exercicios-js/node/instanciaUnica")

function valorDevido(mes, mensalidade) {
    if(mes > 0 && mes < 13){
        atraso = mes - 1
        return (mensalidade * (1 + 5/100)** atraso).toFixed(2).toString().replace('.', ',')
    } else {
        return 'Mês inválido'
    }
}
console.log(valorDevido(1, 200))
console.log(valorDevido(2, 200))
console.log(valorDevido(3, 200))
console.log(valorDevido(4, 100))
console.log(valorDevido(5, 200))
console.log(valorDevido(6, 200))
console.log(valorDevido(7, 200))
console.log(valorDevido(8, 200))
console.log(valorDevido(9, 200))
console.log(valorDevido(10, 200))
console.log(valorDevido(11, 200))
console.log(valorDevido(12, 200))
