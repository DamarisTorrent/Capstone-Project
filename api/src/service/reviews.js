const knex = require('../knex')

exports.showReviews = async (id) => {
  
  console.log( id)
  const result = await knex('review')
    .where('product_id', id)
  console.log(result)
  return result
}
