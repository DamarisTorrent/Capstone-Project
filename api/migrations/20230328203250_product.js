/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
  return knex.schema.createTable('product', function(table) {
  
    table.increments('id')
      .primary()
      .unsigned()
      .notNullable()
    table.string('retailer_id')
      .references('id')
      .inTable('retailer')
      .notNullable()
    table.text('url').notNullable()
    table.string('name').notNullable()
    table.string('brand').notNullable()
    




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
  return knex.schema.dropTableIfExists('product')
};

