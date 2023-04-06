const knex = require('../knex')

exports.showReviews = async (id) => {
  
  const result = await knex('review')
    .where('product_id', id)

  return result
}
