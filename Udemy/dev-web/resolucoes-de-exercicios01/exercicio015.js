function comprarCarro(carro) {
    switch(carro) {
        case "Sedan":
        case "SUV":
            return 'Tem certeza de que não quer este modelo?'
        case "hacth": 
            return 'Compra efetuada com sucesso!'
        default:
            return 'Não vendemos este carro aqui.'
    }
}

console.log(comprarCarro('suv'))
console.log(comprarCarro('Sedan'))
console.log(comprarCarro('SUV'))
console.log(comprarCarro('hacth'))