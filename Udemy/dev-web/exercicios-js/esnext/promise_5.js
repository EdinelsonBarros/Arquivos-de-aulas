function funcionarOuNao(valor, chanceErro) {
    return new Promise((resolve, reject) => {
        if(Math.random() < chanceErro) {
            reject('Ocorreu um erro')
        } else {
            resolve(valor)
        }
    })
}

funcionarOuNao('Testanto...', 0.7)
    .then(console.log) 
    .catch(console.log)