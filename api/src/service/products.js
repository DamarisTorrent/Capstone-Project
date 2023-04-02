const knex = require('../knex')

exports.showProducts = async (thickness, size, zipType, price, brands) => {
  
  //Turn price into a number
  let newPrice = parseInt(price)
  let brandArray = []

  //Create an array of the brands passed in as search parameters
  if (brands) {
    brandArray = brands.split(',')
  }

  //Get all products unless user has passed in search parameters for thickness/style, brands, zipper type, size, and price.
  //Join product table to retailer table to get retailer name
  //Join product table to style table to get style name
  const result = await knex('product')
    .join('retailer', 'product.retailer_id', '=', 'retailer.id')
    .join('style', 'product.style_id', '=', 'style.id')
    .select('product.id', 'product.price', 'product.brand', 'product.image', 'product.name', 'product.sizes', 'product.url', 'retailer.retailer_name', 'style.style_name')
    .where((builder) => {
      if (thickness)
    
        builder.where('style_name', thickness)

      if (brands)
        builder.whereIn('brand', brandArray)

      if (zipType)
        builder.where('name', 'like', `%${zipType}%`)

      // if (size)
        // builder.where('sizes', 'like', `${size}%`) 
        // builder.whereRaw(`sizes REGEXP ${size}`)

      if (newPrice > 0){
        switch (true) {
          // Price up to $150
          case newPrice <= 150:
            builder.whereBetween('price', [1, 151])
            break
          // Price in between $150 and $250
          case newPrice <= 250:
            builder.whereBetween('price', [151, 251])
            break
          // Price in between $250 and $350
          case newPrice <= 350:
            builder.whereBetween('price', [251, 351])
            break
          // Price over $350
          case newPrice > 350:
            builder.where('price', '>', 350)
            break
          default:
        }    
      }
    })
  
  return result
  }
    