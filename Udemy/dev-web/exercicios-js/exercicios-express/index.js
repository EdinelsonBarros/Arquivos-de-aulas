const express = require('express')
const app = express()
const bodyParser = require('body-parser')

const saudacao = require('./saudacaoMid')
const usuarioApi = require('./api/usuario')
const produtoApi = require('./api/produto')
produtoApi(app, 'com param!')

app.post('/usuario', usuarioApi.salvar)
app.get('/usuario', usuarioApi.obter)


app.use(bodyParser.text())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))
app.use(saudacao('Edinelson'))

app.use('/opa', (req, resp, next) => {
   console.log('Antes...')
   next()
})

app.get('/clientes/relatorio', (req, res) => {
   res.send(`Cliente relatório: completo = ${req.query.completo} ano = ${req.query.ano}`)
})

app.post('/corpo', (req, res) => {
   // let corpo = ''
   // req.on('data', function(parte) {
   //    corpo += parte
   // })

   // req.on('end', function() {
   //    res.send(corpo)
   // })
   res.send(req.body)
})

app.get('/clientes/:id', (req, res) => {
   res.send(`Cliente ${req.params.id} selecionado!`)
})


app.get('/opa', (req, resp, next) => {
   console.log('Durante...')
   resp.json({
      
      data: [
      {id: 7, nome: 'Edinelson', position: 1},
      {id: 4, name: 'Lidia', position: 2},
      {id: 5, name: 'Julia', position: 3}
   ]
   
   })
   next()
   
   // resp.json({
      //    name: 'iPad 32Gb',
      //    price: 1899.90,
      //    discount: 0.12
      // })
      
      // resp.send('Estou bem!')
   })

   
   app.use('/opa', (req, resp,) => {
      console.log('Depois...')
   
   })


 app.listen(3000, () => {
    console.log('Backend executando!')
 })