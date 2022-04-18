const quaseArray = { 0: 'Rafael', 1: 'Ana', 2: 'Bia'} 
console.log(quaseArray)
Object.defineProperty(quaseArray, 'toString', {
    value: function() { return Object.values(this)},
    enumerable: false
})

console.log(quaseArray)

const meuArray = ['Rafael', 'Ana', 'Bia']
console.log(quaseArray.toString(), meuArray)

// fazendo do meu jeito

const mobilia = {0: 'Fogão', 1: 'Maquina de lavar', 2: 'Geladeira', 3: 'Cama', 4: 'Guarda Roupa'}
console.log(mobilia)
 Object.defineProperty(mobilia, 'toString', {
     value: function() {
         return Object.values(this)
     },
     enumerable: false
 })
 console.log(mobilia)
 console.log(mobilia.toString())
 console.log(mobilia[3])