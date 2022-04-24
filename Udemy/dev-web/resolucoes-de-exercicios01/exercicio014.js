function temFruta(fruta) {
    switch (fruta){
        case "maçã": 
            return 'Não vendemos esta fruta aqui.'
        case "Kiwi": 
            return 'Estamos com escassez de Kiwis.'
        case "Melancia": 
            return 'Aqui está'
        default: 
            return 'Pedido inválido.'
    }
}

console.log(temFruta("maçã"))
console.log(temFruta("Melancia"))
console.log(temFruta("Kiwi"))
console.log(temFruta("banana"))