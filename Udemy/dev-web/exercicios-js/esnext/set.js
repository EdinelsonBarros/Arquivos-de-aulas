//é uma estrutura não indexada e não aceita repetição

const times = new Set()
times.add('Vasco').add('São Paulo').add('Palmeiras').add('Santos')
console.log(times)
console.log(times.size)
console.log(times.has('Vasco'))
times.delete('Vasco')
console.log(times)

const tocantins = ['Miracema', 'Palmas', 'Rio Sono', 'Gurupi', 'Araguaina', 'Palmas']

const cidades = new Set(tocantins)
console.log(cidades)