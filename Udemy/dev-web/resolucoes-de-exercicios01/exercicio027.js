function calcularCrescimento(alturaEdinelson, taxaEdinelson, alturaLidia, taxaLidia){
    if(alturaEdinelson == alturaLidia){
        if(taxaEdinelson < taxaLidia) {
            console.log('A Lidia ultrapassara o Edineson em um ano.')
        } else if(taxaEdinelson > taxaLidia) {
            console.log('O Edinelson ultrapassará a Lídia em um ano.')
        } else{
            console.log('Edinelson e Lidia tem igual altura e crescimento.')
        }
    }else if(alturaEdinelson > alturaLidia){
        

    }
}