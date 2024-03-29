function calcularCrescimento(alturaEdinelson, taxaEdinelson, alturaLidia, taxaLidia){
    if( alturaEdinelson == alturaLidia){
        if(taxaEdinelson > taxaLidia){
            return `O Edinelson ficará mais alto que a Lidia em um ano.`
        } else if (taxaEdinelson < taxaLidia){
            return `A Lidia ficará mais alta que o Edinelson em um ano.`
        } else {
            return `O Edinelson e a Lidia tem igual altura e crescimento.`
        }
    } else {
        if(alturaEdinelson > alturaLidia){
            if(taxaEdinelson >= taxaLidia) {
                return `A Lidia não ficará mais alta que o Edinelson.`
            } else {
                return `A Lidia passará o Edinelson em ${calcularTempo(alturaEdinelson, taxaEdinelson, alturaLidia, taxaLidia)} anos`
            }
        } else {
            if(taxaEdinelson <= taxaLidia){
                return `O Edinelson continuara menor do que a Lidia.`
            } else {
                return `O Edinelson irá ultrapassar a Lidia em ${calcularTempo(alturaEdinelson, taxaEdinelson, alturaLidia, taxaLidia)} anos.`
            }
        }
    }
}

function calcularTempo( alturaEdinelson, taxaEdinelson, alturaLidia, taxaLidia){
    let anos = 0

    
    while(alturaLidia <= alturaEdinelson){
        alturaLidia += taxaLidia
        alturaEdinelson += taxaEdinelson
        anos++
    }
    return anos
}

//console.log(calcularTempo(168, 2, 160, 3))
console.log(calcularCrescimento(168, 1, 168, 2))