/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = function(knex) {
  return knex('projects').del()
    .then(function () {

      return knex('projects').insert([
        {
          estoque_id: 2,
          title: "Meu projeto",
          
        }

      ])
    })

};
