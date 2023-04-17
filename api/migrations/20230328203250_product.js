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
    table.string('sku')
    table.text('description')
    table.string('price').notNullable()
    table.text('image')
    table.string('sizes')
    table.string('style_id')
      .references('id')
      .inTable('style')
      .notNullable()
    table.enu('gender', ['Mens', 'Womens', 'Kids']).notNullable()
    // table.timestamp('timestamp').notNullable().defaultTo(knex.fn.now())
    
  })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
  return knex.schema.dropTableIfExists('product')
};

