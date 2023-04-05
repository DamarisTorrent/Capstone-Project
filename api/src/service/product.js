const knex = require('../knex')

exports.showProductDetail = async (id) => {
  
  const result = await knex('product')
    .join('retailer', 'product.retailer_id', '=', 'retailer.id')
   
    .select('product.id', 'product.price', 'product.brand', 'product.image', 'product.name', 'product.sizes', 'product.url', 'product.description', 'product.sku', 'product.sizes', 'retailer.retailer_name', 'retailer.location', 'retailer.tagline', 'retailer.shipping_info')
    .where('product.id', id).first()
  
  return result
}
