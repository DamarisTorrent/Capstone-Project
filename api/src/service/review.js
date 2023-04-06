const knex = require('../knex')

exports.createReview = async (review) => {

  //Get the sku, if exists, from the product table
  const sku = (await knex
    .pluck('sku')
    .distinct()
    .from('product')
    .where ('product.id', review.product_id))
  
    // review.sku = sku[0]
    // console.log('new review', review)
  const reviewId = await knex('review').insert(review)
  return 
}

exports.updateReview = async (review) => {

  const result = await knex('review')
    .where('id', review.id)
    .update({
      reviewer_name: review.reviewer_name, 
      summary: review.summary,
      review: review.review,
      rating: review.rating
    })

  return 
}

exports.deleteReview = async (id) => {

  const result = await knex('review')
  .where('id', '=', id)
  .del()

  return 
}