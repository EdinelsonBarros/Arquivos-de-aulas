/*
Esta é forma de 
tratar códigos 
que tenham potencial
para dar erro.
1º coloque o código 
dentro de try para 
que ele lance para dentro
do catch onde você pode personalizar a mensagem de erro ou trata-lo.

*/
function tratarErroELancar(erro) {
    //throw new Error('...')
    // throw 10
    //throw true
    // throw 'mensagem'
    throw {
        nome: erro.name,
        msg: erro.message,
        date: new Date
    }

}
function imprimirNomeGritado(obj) {
    try {
        console.log(obj.name.toUpperCase() + '!!!')
    } catch (e) {
        tratarErroELancar(e)
    } finally {
        console.log('final')
    }
    
}
const obj = {name: 'Roberto'}
imprimirNomeGritado(obj)