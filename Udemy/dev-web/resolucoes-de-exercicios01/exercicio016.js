function calculadora( numero1, numero2, operacão){
    switch(numero1, numero2, operacão) {
        case '+':
            return numero1 + numero2
        case '-': 
            return numero1 - numero2
        case '*': 
            return numero1 * numero2
        case '/':
            return numero1 / numero2
        default:
            return 'Operação inválida'
    }
}
console.log(calculadora(2, 2, '+'))
console.log(calculadora(3, 2, '-'))
console.log(calculadora(2, 3, '*'))
console.log(calculadora(10, 5, '/'))
console.log(calculadora(2, 3, 'soma'))