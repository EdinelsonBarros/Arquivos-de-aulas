
function classificacao(nota) {
    let notaCorrigida = arredondarNota(nota)
    
        if(notaCorrigida > 37) {

        } if (notaCorrigida > 39) {
             console.log(`Parabéns você foi aprovado!`)
        } else{
             console.log(`Infelizmente você foi reprovado.`)
        }
    
    
}
function arredondarNota(nota){
    if(nota % 5 > 2) {
        return nota + (5 - (nota % 5))
    }
    return nota
}

classificacao(38)
classificacao(45)
classificacao(32)
classificacao(33)