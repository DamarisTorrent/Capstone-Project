const knex = require('../knex')

exports.createReview = async (review) => {

  console.log('in the api service', review)

  //Get the sku, if exists, from the product table
  const sku = (await knex
    .pluck('sku')
    .distinct()
    .from('product')
    .where ('product.id', review.product_id))
    console.log(sku[0])

    // review.sku = sku[0]
    // console.log('new review', review)
  const reviewId = await knex('review').insert(review)
  return 
}