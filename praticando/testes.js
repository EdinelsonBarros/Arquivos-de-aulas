
function alterarEstoque(alteracao) {
    historicoEstoque = [2, 5, 30, 35, 23, -50]
    let estoque = 0
    if(alteracao == 0 ) {
        console.log('Adicione um número válido!')
    } else if ( alteracao > 0 ) {
        
        historicoEstoque.push(alteracao)
        for(let i = 0; i < historicoEstoque.length; i++) {
            estoque += historicoEstoque[i] 
            
        }
    }
    return estoque
    
}

console.log(alterarEstoque(6))
console.log(historicoEstoque)