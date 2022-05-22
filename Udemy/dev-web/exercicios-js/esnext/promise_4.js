function gerarNumerosEntre(min, max, tempo) {
    if(min > max) 
        [max, min]  = [min, max]
    
        setTimeout(function(){
            return new Promise(resolve => {
                const fator = max - min + 1 
                const aleatorio = parseInt(Math.random() * fator)
                resolve(aleatorio)
            })
        }, tempo)
    
    
}



function gerarVariosNumeros() {
    return Promise.all([
        gerarNumerosEntre(1, 60, 2000),
        gerarNumerosEntre(1, 60, 1000),
       
    ])
}

gerarVariosNumeros()
    .then(numeros => console.log(numeros))