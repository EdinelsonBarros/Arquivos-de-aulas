 function formatarValorDecimal (valorDecimal) {
         valorEmReais = `R$ ${valorDecimal.toFixed(2).toString().replace(".", ",")}`

         console.log(valorEmReais)
}

valorDecimal(0.1 + 0.2)
//console.log(conversaoMoeda(0.1, 0.2))