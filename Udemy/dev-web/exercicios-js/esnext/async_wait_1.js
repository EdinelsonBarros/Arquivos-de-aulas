function esperaPor(tempo = 200){
    return new Promise(function(resolve) {
        setTimeout(() => resolve(), tempo ) 
        })
    
}

/* esperaPor(1000)
    .then(() =>  console.log('Executando promise...'))
    .then(esperaPor)
    .then(() =>  console.log('Executando promise...'))
    .then(esperaPor)
    .then(() =>  console.log('Executando promise...')) */

function retornarValor(){
    return new Promise(resolve => {
        setTimeout(() => resolve(10), 2000)
    })
}

    async function executar() {
    let valor = await retornarValor()

    await esperaPor(2000)
    console.log(`Async/Wait1 ${valor}`)
    await esperaPor(2000)
    console.log(`Async/Wait1 ${valor + 1}`)
    await esperaPor(2000)
    console.log(`Async/Wait1 ${valor + 2}`)
    
    return valor + 3
}

executar()
    .then(console.log)