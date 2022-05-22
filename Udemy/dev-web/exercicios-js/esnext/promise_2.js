/*
setTimeout(function(){
    console.log('Você é demais')

    setTimeout(function(){
        console.log('Você é demais')
        setInterval(function(){
            console.log('Você é demais')
        }, 2000)

    }, 2000)
}, 2000)

*/
function esperaPor(tempo = 200){
    return new Promise(function(resolve) {
        setTimeout(function() {
            console.log('Executando promise...')
            resolve('Vishh')
        }, tempo)
    })
}

//let p = esperaPor(3000)
esperaPor(3000)
    .then(() => esperaPor())
    .then(esperaPor)