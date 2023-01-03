const knex = require('../database')

module.exports = {
    async index(req, res, next) {
        try {
            const { estoque_id } = req.query;


            const query = knex('projects')

            if (estoque_id) {
                query
                    .where({ estoque_id })
                    .join('estoque', 'estoque_id', '=', 'projects.estoque_id')
                    .select('projects.*', 'estoque.username')
            }
            const results = await query

            return res.json(results)
            
        } catch (error) {
            next(error)
        }
    },
    async create(req, res, next) {
        try{
            const { title, estoque_id} =  req.body
    
            await knex('projects').insert({
                title,
                estoque_id
            })
            
            return res.status(201).send()
        } catch (error){
            next(error)
        }   
    }
}