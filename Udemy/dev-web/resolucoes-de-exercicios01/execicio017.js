function aumento(salario, plano) {
    switch(plano) {
        case 'A':
            return salario * 1.1
        case 'B':
            return salario * 1.15
        case 'C':
            return salario * 1.2
        default: 
            return 'Plano inválido!'
    }
}

console.log(aumento(1000, 'A'))
console.log(aumento(1000, 'B'))
console.log(aumento(1000, 'C'))
console.log(aumento(1000, 'a'))