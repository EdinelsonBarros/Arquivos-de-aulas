function valorDaVenda(codigo, quantidade) {
    switch(codigo){
        case 100:
            return `O valor a ser pago é R$ ${(3 * quantidade).toFixed(2).toString().replace('.', ',')}`
        case 200:
            return `O valor a ser pago é R$ ${(4 * quantidade).toFixed(2).toString().replace('.', ',')}`
        case 300:
            return `O valor a ser pago é R$ ${(5.5 * quantidade).toFixed(2).toString().replace('.', ',')}`
        case 400:
            return `O valor a ser pago é R$ ${(7.5 * quantidade).toFixed(2).toString().replace('.', ',')}`
        case 500:
            return `O valor a ser pago é R$ ${(3.5 * quantidade).toFixed(2).toString().replace('.', ',')}`
        case 600:
            return `O valor a ser pago é R$ ${(2.8 * quantidade).toFixed(2).toString().replace('.', ',')}`
        default: 
            return 'Código inválido produto não cadastrado!'       
            

    }
}
console.log(valorDaVenda(100, 2))
console.log(valorDaVenda(200, 2))
console.log(valorDaVenda(300, 2))
console.log(valorDaVenda(400, 2))
console.log(valorDaVenda(500, 2))
console.log(valorDaVenda(600, 2))
console.log(valorDaVenda(50, 1))