// escopo até onde a variável esta visível. 
// um variável definida com var é visível fora do bloco desde que não seja uma função
{
    {
        {
            {
                 var sera = 'Será???'
                 console.log(sera)
            }
        }
    }
}
console.log(sera)

function teste() {
    var local = 123
    console.log(local)
}
teste()
//console.log(local)