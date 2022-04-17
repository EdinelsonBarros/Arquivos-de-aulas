// ao usar o '_'(underline) estou comunicando ao outros desenvolvedores de que aquela variável é privada, porém ainda sim será possível usar ela fora do bloco, este pseudo-método é apenas uma convenção
const sequencia = {
    _valor: 1,
    get valor() {return this._valor++},
    set valor(valor) {
        if (valor > this._valor) {
            this._valor = valor
        }
    }
}

console.log(sequencia.valor, sequencia.valor)
sequencia.valor = 1000
console.log(sequencia.valor, sequencia.valor)
sequencia.valor = 900
console.log(sequencia.valor, sequencia.valor)