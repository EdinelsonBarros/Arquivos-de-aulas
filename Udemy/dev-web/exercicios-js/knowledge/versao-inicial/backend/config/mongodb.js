// Meu código
const mongoose = require('mongoose')
// colocado para evitar receber warning, porém oculta também a mensagem de erro do mongo não estar conectado
//mongoose.set('useUnifiedTopology', true)
mongoose.connect('mongodb://localhost/knowledge_stats', { useNewUrlParser: true })
    .catch(e => {
        const msg = 'ERRO! Não foi possível conectar com o MongoDB!'
        console.log('\x1b[41m%s\x1b[37m', msg, '\x1b[0m')
    })