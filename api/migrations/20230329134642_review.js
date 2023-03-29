/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
  return knex.schema.createTable('review', function(table) {
  
    table.string('id')
      .primary()
      .unique()
      .notNullable()
    table.string('product_name').notNullable()
    table.string('reviewer_name').notNullable()
    table.text('review').notNullable()
    table.integer('helpful_count')
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
