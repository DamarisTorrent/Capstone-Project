const { getProductDetail } = require('../controller/product')


const product = (app) => {

  app.get('/product/id/:id', getProductDetail)

}

module.exports = product