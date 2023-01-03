/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = knex => knex.schema.createTable('projects', table => {
    table.increments('id')
    table.text('title')

    //relacionamento
    table.integer('estoque_id')
        .references('estoque.id')
        .notNullable()
        .onDelete('CASCADE')

    table.timestamp(true, true)
  });

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = knex => knex.schema.dropTable('projects')

