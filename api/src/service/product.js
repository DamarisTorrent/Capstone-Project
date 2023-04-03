const knex = require('../knex')

exports.showProductDetail = async (id) => {
  
  console.log('made it to product detail service', id)
  const result = await knex('product')
    .join('retailer', 'product.retailer_id', '=', 'retailer.id')
   
    .select('product.price', 'product.brand', 'product.image', 'product.name', 'product.sizes', 'product.url', 'product.description', 'product.sizes', 'retailer.retailer_name', 'retailer.location', 'retailer.tagline', 'retailer.shipping_info')
    .where('product.id', id).first()
  
  return result
}
