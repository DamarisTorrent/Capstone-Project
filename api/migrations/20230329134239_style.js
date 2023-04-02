/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
  return knex.schema.createTable('style', function(table) {
  
    table.string('id')
      .primary()
      .unique()
      .notNullable()
    table.string('style_name').notNullable()
    table.string('notes')
    table.timestamp('dateCreated').notNullable().defaultTo(knex.fn.now())
  })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
  return knex.schema.dropTableIfExists('style')
};
