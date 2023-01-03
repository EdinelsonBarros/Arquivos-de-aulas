const express = require('express')
const EstoqueController = require('./controllers/estoqueController')
const ProjectsController = require('./controllers/ProjectsController')

const routes = express.Router()

routes.get('/estoque', EstoqueController.index)

    //estoque
    .post('/estoque', EstoqueController.create)
    .put('/estoque/:id', EstoqueController.update)
    .delete('/estoque/:id', EstoqueController.delete)
    //projects
    .get('/projects', ProjectsController.index)
    .post('/projects', ProjectsController.create)

module.exports = routes