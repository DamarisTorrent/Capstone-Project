/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
  return knex.schema.createTable('review', function(table) {
  
    table.increments('id')
      .primary()
      .unsigned()
      .notNullable()
    table.integer('product_id')
      .unsigned()  
      .references('id')
      .inTable('product')
      .notNullable()
    table.string('reviewer_name').notNullable()
    table.string('summary').notNullable()
    table.text('review').notNullable()
    table.integer('rating').notNullable()
    // table.integer('helpful_count')
    table.timestamp('dateCreated').notNullable().defaultTo(knex.fn.now())
    
  })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
  return knex.schema.dropTableIfExists('review')
};
