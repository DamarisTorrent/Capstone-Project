const { getProducts } = require('../controller/products')


const products = (app) => {

  app.get('/products/', getProducts)

}

module.exports = products