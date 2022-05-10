function falarDepois(segundos, frase) {
    return new Promise((resolve) => {
        setTimeout(()=> {
            resolve(frase)
        }, segundos * 1000)
    })
}
falarDepois(1, 'Que legal!')
.then(frase => frase.concat('?!?'))
    //.then(frase => frase.concat(outraFrase))