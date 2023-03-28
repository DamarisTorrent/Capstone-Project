/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
  return knex.schema.createTable('retailer', function(table) {
  
    table.string('id')
      .primary()
      .unique()
      .notNullable()
    table.string('name').notNullable()
    table.string('domain').notNullable().unique()
    table.string('location').notNullable()
    table.string('tagline').notNullable()
    table.string('shipping_info')
    table.timestamp('dateCreated').notNullable().defaultTo(knex.fn.now())
    
  })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
  return knex.schema.dropTableIfExists('retailer')
};
