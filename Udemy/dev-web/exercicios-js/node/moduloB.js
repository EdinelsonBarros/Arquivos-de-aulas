/*
    Cada arquivo do node é um módulo
    que está visível somente para ele mesmo.
    Para que o arquivo esteja disponível fora
    eu preciso usar 'module.exports' com no 
    exemplo abaixo.
*/
module.exports = {
    bomDia: 'Bom dia!',
    boaNoite() {
        return 'Boa noite'
    }
}