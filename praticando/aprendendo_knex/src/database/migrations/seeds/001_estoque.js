/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('estoque').del()
  await knex('estoque').insert([
    {username: 'Edinelson'},
    {username: 'Lidia'}
  ]);
};
